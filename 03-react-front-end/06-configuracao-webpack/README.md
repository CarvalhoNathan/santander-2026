# ⚙️ Configuração Manual de Webpack e Babel

Este módulo ensina como configurar manualmente o ambiente de desenvolvimento React a partir do zero, sem o auxílio de ferramentas prontas como o *Create React App* ou o *Vite*. Isso é fundamental para compreender como loaders, transpiladores e empacotadores interagem sob o capô.

---

## 📂 Guia de Configuração Passo a Passo

### Passo 1: Inicialização e Estrutura do Projeto

1. **Iniciar o gerenciador de pacotes:**
   Cria o arquivo `package.json` na raiz:
   ```bash
   npm init -y
   ```
   > [!IMPORTANT]
   > Certifique-se de adicionar a linha `"type": "module"` no seu `package.json` para indicar que o projeto utilizará módulos nativos do ES6 (`import`/`export`) em vez do CommonJS (`require`).

2. **Instalar as dependências base do React:**
   ```bash
   npm install react react-dom
   ```

3. **Criar a estrutura básica de diretórios:**
   *   **`public/`** — Arquivos estáticos que serão servidos diretamente:
       *   **`index.html`** — O HTML de entrada da aplicação, contendo a div contêiner `<div id="root"></div>`.
   *   **`src/`** — O código-fonte JavaScript/React da aplicação:
       *   **`App.jsx`** — O componente principal da interface.
       *   **`index.js`** — O ponto de entrada JavaScript, responsável por importar o `createRoot` (de `react-dom/client`) e montar o componente `<App />` na div `#root`.

---

### Passo 2: Configurando o Babel (Transpilação)

Para que o Webpack consiga ler e empacotar a sintaxe JSX e os recursos mais modernos do JavaScript (ES6+), precisamos instalar e configurar o transpilador **Babel**:

1. **Instalar as dependências do Babel como `devDependencies`:**
   ```bash
   npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader
   ```
   *   **`@babel/core`**: O motor principal do transpilador Babel.
   *   **`@babel/preset-env`**: Converte sintaxe JavaScript moderna (ES6+) em ES5 para retrocompatibilidade.
   *   **`@babel/preset-react`**: Adiciona suporte para transpilar a sintaxe JSX do React.
   *   **`babel-loader`**: Permite ao Webpack carregar e processar arquivos JS/JSX usando o Babel.

2. **Criar o arquivo `.babelrc`:**
   Crie o arquivo `.babelrc` na raiz do projeto para ativar os presets:
   ```json
   {
     "presets": [
       "@babel/preset-env",
       [
         "@babel/preset-react",
         {
           "runtime": "automatic"
         }
       ]
     ]
   }
   ```
> [!TIP]
> O `"runtime": "automatic"` permite que você escreva JSX sem precisar importar explicitamente `React` no topo de todos os componentes.

---

### Passo 3: Configurando o Webpack (Empacotamento)

Com o Babel pronto para converter o código, precisamos configurar o **Webpack** para juntar todos os módulos, otimizar e gerar o pacote final da aplicação:

1. **Instalar o Webpack e seus plugins de desenvolvimento:**
   ```bash
   npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
   ```
   *   **`webpack`**: O empacotador de módulos.
   *   **`webpack-cli`**: Interface de linha de comando para gerenciar tarefas do Webpack.
   *   **`webpack-dev-server`**: Servidor local rápido para desenvolvimento com Hot Module Replacement (HMR).
   *   **`html-webpack-plugin`**: Cria a pasta de saída, copia o `index.html` e injeta a tag `<script>` com o bundle de forma automatizada.

2. **Criar o arquivo `webpack.config.js`:**
   Crie o arquivo de configurações na raiz do projeto:
   ```javascript
   import path from 'path';
   import { fileURLToPath } from 'url';
   import HtmlWebpackPlugin from 'html-webpack-plugin';

   const __filename = fileURLToPath(import.meta.url);
   const __dirname = path.dirname(__filename);

   export default {
     entry: './src/index.js', // Arquivo principal que inicia a aplicação
     output: {
       path: path.resolve(__dirname, 'dist'), // Pasta de saída dos arquivos compilados
       filename: 'bundle.js', // Nome do arquivo final empacotado
       clean: true, // Limpa a pasta 'dist' antes de gerar novos builds
     },
     resolve: {
       extensions: ['.js', '.jsx'], // Extensões que serão resolvidas automaticamente
     },
     module: {
       rules: [
         {
           test: /\.(js|jsx)$/, // Processar arquivos .js e .jsx
           exclude: /node_modules/, // Evitar processamento de pacotes externos
           use: {
             loader: 'babel-loader', // Usar as regras do Babel configuradas no .babelrc
           },
           resolve: {
             fullySpecified: false, // Desativa a obrigatoriedade de extensões (.js/.jsx) nas importações do ESM
           },
         },
       ],
     },
     plugins: [
       new HtmlWebpackPlugin({
         template: './public/index.html', // Arquivo de origem do HTML
       }),
     ],
     devServer: {
       port: 3000, // Porta de execução local
       hot: true, // Ativar atualização rápida em tempo de alteração de arquivo
       historyApiFallback: true, // Garante que rotas SPA funcionem localmente
     },
   };
   ```

---

### Passo 4: Adicionando Scripts e Executando

No seu arquivo `package.json`, configure a chave `"scripts"` para adicionar os atalhos de execução da aplicação:

```json
"scripts": {
  "start": "webpack serve --mode development --open",
  "build": "webpack --mode production"
}
```

*   **Para Executar Localmente (Desenvolvimento):**
    ```bash
    npm start
    ```
    Isso iniciará o servidor local e abrirá a aplicação em `http://localhost:3000`.

*   **Para Gerar o Pacote Otimizado (Produção):**
    ```bash
    npm run build
    ```
    Isso gerará a pasta `dist/` contendo o HTML minificado e o arquivo `bundle.js` pronto para hospedagem.

