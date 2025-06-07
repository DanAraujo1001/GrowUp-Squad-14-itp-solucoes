# 🧭 Estrutura do Projeto

## Estrutura de Pastas
````
📁 public
│
├─ 📁 data
│  └─ data.json               → Contém os dados brutos em formato JSON para uso em gráficos/tabelas.
│
├─ 📁 scripts
│  ├─ 📁 charts
│  │  ├─ BarChart.js          → Gera gráfico de barras.
│  │  ├─ DonutChart.js        → Gera gráfico de rosca (doughnut).
│  │  ├─ LineChart.js         → Gera gráfico de linhas.
│  │  ├─ PieChart.js          → Gera gráfico de pizza.
│  │  └─ index.js             → Arquivo principal de gráficos, pode importar os outros tipos.
│  │
│  └─ manipulaDados.js        → Manipula e prepara dados para visualização ou filtragem.
│
├─ 📁 styles
│  └─ ( Arquivos CSS, contém um arquivo styles.css para estilizar.)
│
└─ index.html                 → Página principal da aplicação (frontend), carrega scripts, css e estrutura inicial.


````

## Como criar um Gráfico?
Siga o passo a passo para fazer a criação do seu primeiro gráfico.

### 1. Faça a importação do gráfico que você deseja criar:
    
- Gráfico de Barra: `createBarChart`;
- Gráfico de Rosca: `createDonutChart`;
- Gráfico de Barra (horizontal): `createHorizontalBarChart`;
- Gráfico de Linha: `createLineChart`;
- Gráfico de Pizza: `createPieChart`;

Exemplo:
```js
import { createBarChart } from './charts/BarChart.js';
```

### 2. Escolha os dados que irá inserir no gráfico:  
    
_Nesse projeto, há algumas manipulações dos dados presentes em `public/scripts/manipulaDados.js`. Caso queira aproveitar alguma dessas funções, chame-as para o arquivo JS, que fará a criação dos gráficos, usando o `import`._

### 3. Chame a função do gráfico importado e adicione os parâmetros necessários para criar o gráfico:

_Todos as funções de criação de gráficos possuem os mesmos parâmetros, sendo eles:_

```js
createPieChart("id", "Título", coluna, dados);
```
- "id": Id da `<div>` onde o gráfico será inserido;
- "Título": Títlo do gráfico;
- coluna: Serve para normear/indicar quais são os dados do item a seguir;
- dados: Os valores que serão imprimidos no gráfico.  

### 4. Crie o gráfico:

Após ter feito as etapas anteriores, pode-se então criar o gráfico de fato.

Exemplo:
```js
import { createBarChart } from './charts/BarChart.js';

const datasBarChart = [
  ["Aprovada", 12],
  ["Rejeitada", 5],
  ["Pendente", 3]
];
const columnsBarChart = ["Notas", "Quantidade"];
const barChart = createBarChart("desempenhoAlunos", "Desempenho dos alunos da sala A", columnsBarChart, datasBarChart);
```

_OBS.: É necessário definir um `width`e um `height` para a `<div>` destinada ao gráfico._

## Como criar um Data Table?

O processo para criar um Data Table é um pouco diferente da criação de um gráfico, mas a complexidade é a mesma. Segue o passo a passo:

### 1. Definir as colunas do Data Table no HTML

No `HTML`, defina quais as colunas a sua tabela terá:

Exemplo: 
```html
<table
 id="tabelaAtendimentos"
 class="display"
 style="width: 500px; height: 400px"
>
 <thead>
 <tr>
   <th>Código de atendimento:</th>
   <th>Cliente:</th>
   <th>Serviço:</th>
   <th>Atendente:</th>
   <th>Nota:</th>
   <th>Interações:</th>
 </tr>
 </thead>
 <tbody></tbody>
</table>
```

### 2. Importar a função


Exemplo
```js
import { createOrUpdateDataTable } from './charts/DataTable.js'; 
```

### 3. Chame a função do Data Table e adicione os parâmetros necessários para criá-lo:

A função para criar o Data Table contém dois parâmetros:

```js
createOrUpdateDataTable("id", currentData);
```

- "id": Id da `<table>` onde o Data Table será inserido;
- currentData: Dados totais que está sendo usado no projeto;

_OBS.: Essa função recebe os dados totais através do parâmetro `currentData` e filtra-os para conter apenas os que foram pré-definidos (os quais devem combinar com as colunas definidas no HTML)._

4. Crie o Data Table

Após ter feito as etapas anteriores, pode-se então criar o Data Table de fato.

Exemplo
```js
createOrUpdateDataTable("tabelaAtendimentos", serviceData);
```

## Sobre os filtros

Na estrutura do projeto os filtros encontram-se, em sua grande parte, no arquivo `manipulaDados.js`, nas funções que estão manipulando o JSON (e sendo exportadas posteriormente).  

Dentro do `index.js` ocorrerá a interação com os filtros por meio do `import`, das funções do `manipulaDados.js`, da função global para atualizar todos os gráficos e do evento de "click" presente em todos os gráficos criados.


---

## 🔍 Por onde começar?

* Para adicionar ou editar um gráfico: vá até /public/scripts/charts e crie um novo módulo.
* Para atualizar os dados: modifique ou adicione um novo JSON em /public/data.
* Para ajustar o backend: edite os arquivos em /src/server`.
* Para iniciar o funcionamento use o comando npm run start.
* Para carregar o node modules use o comando npm i.
* Para conferir os filtros na pasta datatables.