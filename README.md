<h1 align="center">Bem-Vindo(a) ao projeto DevInHouse Solar Energy 👋</h1>

<p align="center">
    <img src='https://i.ibb.co/zRfSpcN/solar-energy.gif'>
</p>

## Descrição do Projeto
<p align="left">Você está prestes a entrar para o time de desenvolvedores da DevInHouse Solar Energy. Para concretizar a sua contratação, você deverá resolver um desafio utilizando React. O time de recrutamento necessita que você crie uma aplicação protótipo para o gerenciamento de energia, chamada Solar Energy.
</p>

## Requisitos da Aplicação
<p align="left">A aplicação deve contemplar os seguintes requisitos:</p>
<ul>
    <li>Uma Tela de Login contendo um formulário com campos de email e senha. Os campos de email e senha são obrigatórios ( Validar ao disparar o evento de onSubmit). Ao clicar no botão de Entrar e passar pela validação, redirecionar para tela de Dashboard. Seguir layout conforme o mockup disponibilizado.</li>
    <li>Um menu lateral, contendo as opções Dashboard, Unidade Consumidora e Cadastro de energia gerada. O menu deve ser configurado usando a lib react-router-dom. Seguir layout conforme o mockup disponibilizado.</li>
    <li>Uma tela de Dashboard contendo 4 cards: Total de unidades (Exibir o total de unidades cadastradas no json-server), unidades ativas (Exibir total de unidades com status ativo(true) , unidades inativas (Exibir total de unidades com status inativo(false) e média de energia (Soma do total de geração / total de unidades).</li>
    <li>A tela de Dashboard deve conter um gráfico de linha exibindo os meses do ano. O gráfico deverá exibir o total de energia gerado por mês, sendo assim deve-se realizar a soma por mês do total gerado de todas as unidades e exibir no gráfico o total de cada mês, o eixo x deve-se exibir os últimos 12 meses e no eixo y o total por mês Usar a lib https://github.com/reactchartjs/react-chartjs-2. Seguir layout conforme o mockup disponibilizado.</li>
    <li>Uma tela de Listagem de unidades (consumir rota /unidades do json-server) contendo uma tabela com as colunas ID, apelido, Local, Marca e modelo, além dos botões Editar e Remover. Além disso, a tela deve conter um botão Nova unidade (Ao clicar, enviar usuário para tela de cadastro de unidade). Seguir layout conforme o mockup disponibilizado.</li>
    <li>Uma tela de cadastro de unidade, contendo um formulário com os campos apelido, Local, Marca, modelo e status (Checkbox). Ao clicar no botão salvar, chamar evento de onSubmit e cadastrar unidade via POST na rota /unidades do json-server. Todos os campos do formulário são obrigatórios. Seguir layout conforme o mockup disponibilizado.</li>
    <li>Implementar botão de remover unidade na tela de Listagem de unidades. Ao clicar no botão remover, chamar evento de onClick e remover unidade clicada via DELETE na rota /unidades/:id do json-server.</li>
    <li>Implementar botão de editar unidade, ao clicar no botão de editar, enviar usuário para tela de edição de unidade. Ao renderizar a tela, trazer os campos preenchidos com as informações da unidade clicada, ao clicar em salvar, salvar os valores via PUT na rota /unidades/:id do json-server. Seguir layout conforme o mockup disponibilizado.</li>
    <li>Implementar tela de Lançamento de geração mensal contendo um formulário com um "Select" (listando como opção as unidades já cadastradas), um campo de data e um campo de total kw gerado (aceita somente números). Ao clicar em salvar, chamar evento de onSubmit e cadastrar valores via POST na rota /geracoes do json-server.</li>
</ul>

## Instalação

```sh
npm install
```
## Inicialização

```sh
npm start
```
## Uso

```sh
Abra http://localhost:3000 para visualizar no seu browser
```

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- [React](https://pt-br.reactjs.org/)
- [React-Router-Dom](https://v5.reactrouter.com/web/guides/quick-start)
- [React-Icons](https://react-icons.github.io/react-icons)
- [React-Datepicker](https://reactdatepicker.com/)
- [Styled-Components](https://styled-components.com/)
- [JSON-Server](https://www.npmjs.com/package/json-server)
- [Axios](https://axios-http.com/docs/intro)
- [Chart.js](https://www.chartjs.org/)
- [React-Hot-Toast](https://react-hot-toast.com/)
## Autor

<a href="https://github.com/dalcastagned">
 <img src="https://avatars.githubusercontent.com/u/65626347?v=4" width="100px;"/>
 <br />
 <sub><b>Daniel Dalcastagne</b></sub></a> <a href="https://github.com/dalcastagned">🚀</a>


Feito com ❤️ por Daniel Dalcastagne 👋🏽 Entre em contato!

[![Linkedin Badge](https://img.shields.io/badge/-LINKEDIN-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/daniel-dalcastagne-4baa00179/)](https://www.linkedin.com/in/daniel-dalcastagne-4baa00179/) 
[![Gmail Badge](https://img.shields.io/badge/-EMAIL-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:contato@danieldalcastagne.com)](mailto:contato@danieldalcastagne.com)