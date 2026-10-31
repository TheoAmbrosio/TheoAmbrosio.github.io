# Site acadêmico de Theo Ambrósio

Site pessoal em português, baseado no template [academic-homepage](https://github.com/luost26/academic-homepage), de Shitong Luo (licença MIT). A apresentação e o conteúdo foram adaptados para Theo.

## Conteúdo

- `index.html`: apresentação e notícias do IMPA Tech sobre o Axioma.
- `formacao.html`: graduação, PICME e interesses.
- `axioma.html`: projeto de extensão e materiais de probabilidade.
- `contato.html`: e-mails e perfis.
- `axioma/materiais/`: HTMLs compilados a partir do repositório [Axioma](https://github.com/TheoAmbrosio/Axioma).

Os arquivos-fonte Delta e as referências dos materiais permanecem no Axioma. Ao atualizar as aulas, recompile os documentos no Axioma e copie os HTMLs gerados para `axioma/materiais/`.

## Prévia local

Requer Node.js. Na pasta do site:

```sh
npm ci
npm run build
npm run preview
```

Abra http://127.0.0.1:4173/ no navegador. A prévia estática é gerada em `dist/`, que não deve ser versionada.

## Publicação

O workflow `.github/workflows/deploy.yml` gera `dist/` e publica no GitHub Pages após um push para `main`. No GitHub, configure **Settings → Pages → Build and deployment → Source: GitHub Actions**. O endereço planejado é `https://TheoAmbrosio.github.io/`.

A foto do perfil está em `assets/images/theo-ambrosio-quadrado.png` e seu caminho é definido em `_data/profile.yml`.
