# Projeto Solar System - 

## Projeto Final
![Solar System](./assets/solarSystem.png)

## Descrição do Projeto

Projeto desenvolvido durante meu aprendizado no curso de Desenvolvimento Web da [Trybe](https://www.betrybe.com/) (Módulo: Front-end). <br>
`Solar System` é o meu primeiro projeto utilizando `React`, se trata de uma aplicação que lista os planetas do sistema solar e algumas das missões espaciais mais conhecidas.

Nesse projeto coloco em prática o que aprendi sobre utilizar `JSX` no `React`, utilizar corretamente o método 
`render()` para renderizar os componentes, utilizar `import` para trazer componentes em diferentes arquivos, criar componentes de classe em `React`, criar múltiplos componentes a partir de um `array`, fazer uso de `props` corretamente e fazer uso de `PropTypes` para validar as `props` de um componente.

## Funcionalidades

O projeto oferece as seguintes funcionalidades:

- Visualizar todos os planetas do sistema solar renderizados na tela;
- Visualizar todas as cartas com informações sobre missões espaciais.

Funcionalidades adicionais:

- Acessar o conteúdo sobre o assunto na [Wikipédia](https://pt.wikipedia.org/);
- Exibição dos planetas em escala.

## Desenvolvimento

Foi desenvolvido uma aplicação em `React` com criação de componentes de classe e passagem de `props`. Essa aplicação simula uma visualização do Sistema Solar, bem como informações sobre diversas missões espacias que ocorreram ao longo da história.

## Objetivos do projeto

### 1 - Criar um componente chamado `Header`:

- Criação do componente `Header` na pasta `src/components`, responsável por renderizar o título principal da página;
- O componente contem uma tag `header` e, dentro dela, uma tag `h1` com o texto `"Sistema Solar"`;
- O componente criado (`Header`) é renderizado dentro do componente principal `App`.

### 2 - Criar um componente chamado `SolarSystem`:

- Criação do componente `SolarSystem` na pasta `src/components`, responsável por renderizar um subtitulo e as informações sobre os planetas;
- O componente criado (`SolarSystem`) é renderizado dentro do componente principal `App` abaixo do `Header`.

### 3 - Criar um componente chamado `Title`:

- Criação do componente `Title` na pasta `src/components`;
- O componente recebe uma `prop` `headline`;
- O componente contém uma tag `h2`, que ira renderizar o texto recebido pela `prop` `headline`;

### 4 - Renderizar o componente `Title` dentro do componente `SolarSystem`:

- É feita a importação do componente `Title`;
- Colocamos o componente para ser renderizado e ele recebe o valor `"Planetas"` na `prop` `headline`; 

### 5 - Criar um componente chamado `PlanetCard`:

- Criação do componente `PlanetCard` na pasta `src/components`;
- O componente recebe duas `props`: `planetName` e `planetImage`;
- O componente renderiza o texto recebido pela `prop` `planetName` em uma tag `p`;
- O componente renderiza uma imagem que  texto recebido pela `prop` `planetName` em uma tag `p`;
O componente PlanetCard deve renderizar uma imagem que tenha o atributo src com o valor recebido pela prop planetImage;
Além do atributo src, a imagem renderizada deve ter o atributo alt com o texto Planeta {planetName}, onde {planetName} é o valor recebido pela prop planetName.

### 6 - Renderizar uma lista com os planetas do Sistema Solar:

Renderize uma lista com os planetas do Sistema Solar dentro do componente SolarSystem.
Utilize o componente PlanetCard para renderizar cada item da lista de planetas;
Você encontrará a lista com os nomes e as imagens de cada planeta do Sistema Solar no arquivo src/data/planets.js;
Você deve importar a lista no componente SolarSystem usando o código:
import planets from '../data/planets';
A lista de planetas é um array de objetos no seguinte formato:
{
  name: "Nome do planeta",
  image: "caminho-para-imagem-do-planeta"
}
Para cada planeta da lista, você deverá renderizar um componente PlanetCard, passando o atributo name para a prop planetName e o atributo image para a prop planetImage.

### 7 - Criar um componente chamado `Missions`:

Crie um componente chamado Missions dentro da pasta src/components.
Este componente deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="missions";
Renderize o componente Missions abaixo do SolarSystem, dentro do componente principal App.

### 8 - Renderizar o componente `Title` dentro do componente `Missions`:

Renderize o componente Title dentro do componente Missions.
O componente Title deve ser renderizado recebendo a prop headline com o valor "Missões".

### 9 - Criar um componente chamado `MissionCard`:

Crie um componente chamado MissionCard dentro da pasta src/components.
O componente MissionCard deve receber quatro props:

name
year
country
destination
O componente MissionCard deve ter uma div que envolva todo seu conteúdo e que tenha o atributo data-testid="mission-card";
O componente MissionCard deve renderizar o texto recebido pela prop name. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-name";
O componente MissionCard deve renderizar o texto recebido pela prop year. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-year";
O componente MissionCard deve renderizar o texto recebido pela prop country. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-country";
O componente MissionCard deve renderizar o texto recebido pela prop destination. Sugerimos a utilização de tags de Conteúdo de Fluxo, como <p>, que deve conter o atributo data-testid="mission-destination".

### 10 - Renderizar uma lista com as missões espaciais:

Renderize uma lista com as missões espaciais dentro do componente Missions.
Utilize o componente MissionCard para renderizar cada item da lista de missões;
Você encontrará a lista com as informações de cada missão espacial no arquivo src/data/missions.js;
Você deve importar a lista no componente Missions usando o código:
import missions from '../data/missions';
A lista de missões espaciais é um array de objetos no seguinte formato:
{
  name: 'Nome da missão',
  year: 'Ano de lançamento da missão',
  country: 'País que lançou a missão',
  destination: 'Destino da missão',
}
Para cada missão espacial da lista, você deverá renderizar um componente MissionCard, passando cada atributo para sua respectiva prop.

...em construção.

# Obrigado pela visita :blue_heart:
