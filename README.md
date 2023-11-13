<!-- Template: https://github.com/othneildrew/Best-README-Template -->
<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/othneildrew/Best-README-Template">
    <img src="https://github.com/Anemaygi/Quiz-ArteOuIA/assets/62656745/9edbd3a5-bcea-429a-a2fb-fba2b859c27f" alt="Landing page screenshot" height="400">
  </a>

  <h3 align="center">Quiz: Arte ou I.A.?</h3>

  <p align="center">
    Como a tecnologia perpetua racismo e outros preconceitos? 
    <br />
    <br />
    <a href="https://arte-ou-ia.vercel.app/">Visualizar demo</a>
  </p>
</div>


<!-- ABOUT THE PROJECT -->
## :computer: Sobre o projeto

Website informativo simples com responsividade com quiz que mistura imagens geradas por inteligência artificial e artes criadas por humanos.

O objetivo é conscientizar o usuário sobre como os resultados de sistemas de inteligência artificial são gerados e incentivá-lo a refletir sobre seu consumo e quais vieses estão presentes. 

Projeto criado para a disciplina de SMC [(ACH0152 - Sociedade, Meio Ambiente e Cidadania)](https://uspdigital.usp.br/jupiterweb/obterDisciplina?sgldis=ACH0152) da Universidade de São Paulo

<div align="center">
<img src="https://github.com/Anemaygi/Quiz-ArteOuIA/assets/62656745/82c7049b-daa2-4dc7-bb4e-08d769297c3e" alt="Landing page screenshot" height="400">
  

</div>

| Feature                                                           |   Demonstração |
|-------------------------------------------------------------------|----------------|
| Quiz com questões do JSON de forma aleatória ou específica e resultado final       | <img src="https://user-images.githubusercontent.com/62656745/278848550-3d412e99-f95a-4c0c-bb7c-1bcaa3d8a290.png" alt="Landing page screenshot" width="500">               |
| Armazenamento de resultados em planilha do Google                 | <img src="https://github.com/Anemaygi/Quiz-ArteOuIA/assets/62656745/5078e27a-02a7-4750-9939-a12c55f35755" alt="Landing page screenshot" width="500">           |



### Criado com

* [![React][React.js]][React-url]
* ![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
* ![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
* ![Vercel](https://img.shields.io/badge/vercel-%23000000.svg?style=for-the-badge&logo=vercel&logoColor=white)
* ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)





<!-- GETTING STARTED -->
## :rocket: Começando

Como rodar o projeto localmente?

### Pré-requisitos

Para rodar o projeto, você vai precisar de:
* [NPM](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)
* [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

### Instalação

1. Clone o repositório
   ```sh
   git clone https://github.com/Anemaygi/Quiz-ArteOuIA.git
   ```
2. Instale os pacotez NPM
   ```sh
   npm install
   ```

3. Rode o projeto
   ```sh
   npm run dev
   ```


**OPCIONAL: Conectar com a planilha Google**
1. Crie uma planilha em https://www.google.com/sheets/about/
2. Compartilhe com as configurações "Qualquer pessoa" e "Editar"
3. Logue em https://sheet.best/admin e crie uma nova conexão (colocando o link da planilha do google em Connection/Origin URL)
4. Vá em "Details" e copie o Connection URL
5. Renomeie o arquivo [.env.example](./.env.example) para .env e adicione a Connection URL em VITE_STORE_DATA

```sh
   VITE_STORE_DATA = {Connection URL sem aspas}
   ```


<!-- USAGE EXAMPLES -->
## :pencil2: Usos e outras especificações

### Adicionar novas perguntas no Quiz

Adicione as perguntas no arquivo [src/data/quiz.json](./src/data/quiz.json) no seguinte formato:
```json
"questions": [

  "[... outras perguntas ...]"

  {
    "obra": "<Nome da obra caso seja humano. Caso seja gerado por IA, vazio ("")>",
    "artista": "<Caso seja humano, nome da artista. Caso seja gerado por IA, IA geradora>",
    "descricao": "<Caso seja humano, descrição da obra. Caso seja gerado por IA, pequeno texto sobre o viés da imagem",
    "prompt": "<Caso seja humano, deixe vazio (""). Caso seja gerado por IA, qual prompt foi utilizado>"
    "img": "<Link externo com imagem>",
    "resposta": "<humano ou ia>"
  }
```

### Apresentação das perguntas

No arquivo [src/pages/quiz.tsx](./src/pages/quiz.tsx), definir:
- A quantidade de perguntas que será apresentada pelo usuário (variável **total**, que aceita qualquer inteiro)
- De que forma as perguntas serão apresentadas pelo usuário (variável **type**), nas seguintes opções:
  - "normal": Apresenta as primeiras imagens na ordem do JSON 
  - "random": Embaralha as imagens que serão apresentadas
  - "specific": Defina uma lista de indexes na variável specificOrder (dentro da função typeQuiz)  







<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
