import { cp, mkdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import YAML from "yaml";
import { Liquid } from "liquidjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const dist = path.join(root, "dist");
if (path.dirname(dist) !== root || path.basename(dist) !== "dist") throw new Error("Saída inesperada");
const read = (name) => readFile(path.join(root, name), "utf8");
const readYaml = async (name) => YAML.parse(await read(name));
const config = await readYaml("_config.yml");
const data = {
  profile: await readYaml("_data/profile.yml"),
  navigation: await readYaml("_data/navigation.yml"),
  display: await readYaml("_data/display.yml"),
};
const engine = new Liquid();
engine.registerFilter("relative_url", (value) => (config.baseurl || "") + value);
let layout = await read("_layouts/default.html");
layout = layout
  .replace(/{%\s*include navbar\.html\s*%}/g, await read("_includes/navbar.html"))
  .replace(/{%\s*include footer\.html\s*%}/g, await read("_includes/footer.html"));
await rm(dist, { recursive: true, force: true });
await mkdir(dist, { recursive: true });
await cp(path.join(root, "assets"), path.join(dist, "assets"), { recursive: true });
await cp(path.join(root, "axioma"), path.join(dist, "axioma"), { recursive: true });
for (const filename of ["index.html", "formacao.html", "axioma.html", "contato.html", "404.html"]) {
  const source = await read(filename);
  const match = source.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n/);
  if (!match) throw new Error("Front matter ausente em " + filename);
  const page = YAML.parse(match[1]);
  const context = { site: { ...config, data, time: new Date() }, page };
  const content = await engine.parseAndRender(source.slice(match[0].length), context);
  const html = await engine.parseAndRender(layout, { ...context, content });
  if (/{%|{{/.test(html)) throw new Error("Liquid não resolvido em " + filename);
  await writeFile(path.join(dist, filename), html, "utf8");
  console.log("Gerado: dist/" + filename);
}
