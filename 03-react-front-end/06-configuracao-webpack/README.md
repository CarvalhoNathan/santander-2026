# ⚙️ Configuração Manual de Webpack e Babel

Este módulo ensina como configurar manualmente o ambiente de desenvolvimento React a partir do zero, sem o auxílio de ferramentas prontas como o Create React App ou o Vite. Isso é fundamental para compreender como loaders, transpiladores e empacotadores interagem sob o capô.

---

## 📂 Passos Iniciais de Configuração

### 1. Inicializando o Projeto e Dependências Base
Começamos criando a estrutura inicial e instalando as bibliotecas essenciais do React:
```bash
# 1. Iniciar o gerenciador de pacotes (gera o package.json)
npm init -y

# 2. Instalar o React e React-DOM
npm install react react-dom
```

### 2. Estrutura de Pastas e Arquivos de Entrada
Crie a estrutura de diretórios padrão:
*   **`public/`** — Arquivos que serão servidos diretamente (sem transpilação).
    *   **`index.html`** — O HTML principal com o elemento container `<div id="root"></div>`.
*   **`src/`** — O código-fonte da nossa aplicação.
    *   **`index.js`** — O ponto de entrada da aplicação, onde montamos o React.
    *   **`App.jsx`** — O componente principal da nossa interface.

---

## ⚙️ Configurando o Babel (Transpilação)

Para que o Webpack consiga interpretar arquivos contendo sintaxe JSX e JavaScript moderno, precisamos do **Babel** e do seu respectivo carregador (*loader*):

### 1. Instalar as Dependências do Babel:
```bash
npm install -D @babel/core @babel/preset-env @babel/preset-react babel-loader
```
*   **`@babel/core`**: O motor principal do Babel.
*   **`@babel/preset-env`**: Permite o uso do JavaScript moderno (ES6+) convertendo-o para ES5.
*   **`@babel/preset-react`**: Adiciona suporte para transpilar sintaxe JSX do React.
*   **`babel-loader`**: A ponte que permite ao Webpack carregar e transpilar arquivos JS/JSX usando o Babel.

### 2. Criar o Arquivo de Configuração `.babelrc`:
Na raiz do projeto, crie o arquivo `.babelrc` para habilitar os presets:
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
*(Nota: O `"runtime": "automatic"` permite escrever JSX sem a necessidade de importar `React` em todos os arquivos).*

---

## 📦 Configurando o Webpack (Empacotamento)

Com o transpilador configurado, agora criamos as regras para o Webpack juntar todos os arquivos da aplicação:

### 1. Instalar as Dependências do Webpack:
```bash
npm install -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```
*   **`webpack`**: O empacotador de módulos.
*   **`webpack-cli`**: Ferramenta de linha de comando para rodar o Webpack.
*   **`webpack-dev-server`**: Servidor local de desenvolvimento rápido com suporte a recarregamento automático (HMR).
*   **`html-webpack-plugin`**: Gera o arquivo `index.html` final na pasta de build e injeta automaticamente a tag `<script>` com o bundle gerado.

### 2. Criar o Arquivo `webpack.config.js`:
Crie o arquivo `webpack.config.js` na raiz do projeto:
```javascript
import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default {
  entry: './src/index.js', // O ponto de partida do empacotamento
  output: {
    path: path.resolve(__dirname, 'dist'), // Onde o bundle final será gerado
    filename: 'bundle.js',
    clean: true, // Limpa a pasta 'dist' a cada novo build
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Extensões que o Webpack irá tentar resolver
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // Processar arquivos .js e .jsx
        exclude: /node_modules/, // Ignorar código de terceiros
        use: {
          loader: 'babel-loader', // Usar o Babel configurado no .babelrc
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html', // Usar nosso HTML como molde
    }),
  ],
  devServer: {
    port: 3000,
    hot: true, // Habilitar Hot Module Replacement (atualização rápida em tela)
    historyApiFallback: true, // Necessário para roteamento SPA
  },
};
```

---

## 🏃 Executando o Projeto

Adicione os seguintes scripts no arquivo `package.json`:
```json
"scripts": {
  "start": "webpack serve --mode development --open",
  "build": "webpack --mode production"
}
```

*   **Para rodar em desenvolvimento (local):**
    ```bash
    npm start
    ```
    Isso abrirá automaticamente a aplicação em seu navegador no endereço `http://localhost:3000`.

*   **Para gerar os arquivos finais de produção:**
    ```bash
    npm run build
    ```
    Isso gerará a pasta `dist/` contendo o HTML minificado e o arquivo `bundle.js` otimizado pronto para deploy.