# Site acadêmico de Theo Ambrósio

Site pessoal em português, baseado no template [academic-homepage](https://github.com/luost26/academic-homepage), de Shitong Luo (licença MIT). A apresentação e o conteúdo foram adaptados para Theo.

## Conteúdo

- `index.html`: apresentação, atividades, projetos e novidades.
- `formacao.html`: graduação, PICME e interesses.
- `projetos.html`: projetos com problema, método, resultados e limites.
- `pactua.html`: projeto da equipe no Hackathon VX e avaliação simulada.
- `axioma.html`: detalhes do projeto de extensão e materiais de probabilidade.
- `contato.html`: e-mails e perfis.
- `curriculo.html`: currículo público em página HTML.
- `_data/projects.yml` e `_data/news.yml`: resumos exibidos na página inicial.
- `axioma/materiais/`: HTMLs compilados a partir do repositório [Axioma](https://github.com/TheoAmbrosio/Axioma).

Os arquivos-fonte Delta e as referências dos materiais permanecem no Axioma. Ao atualizar as aulas, recompile os documentos no Axioma e copie os HTMLs gerados para `axioma/materiais/`.

O repositório geral `Projeto-Axioma/aulas` é privado em novembro de 2026, então o site não oferece um link público para ele. O trabalho com dados da empresa familiar também usa dados privados e não é publicado. O pôster em inglês do estudo de classificação está em `assets/docs/cats-vs-dogs-ii-poster-en.pdf`.

O currículo público está apenas em `curriculo.html`. O PDF privado da Gupy foi usado como referência de fatos profissionais; dados pessoais que não são necessários ao site não foram copiados. A imagem da simulação da Pactua está em `assets/images/pactua-simulacao.png`.

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
