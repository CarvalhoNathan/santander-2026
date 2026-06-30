const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    // Ponto de entrada para seu aplicativo
    entry: "./src/index.js",
    // Configuração de saída
    output: {
        // Caminho absoluto do diretório de saída
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    // Configuração do módulo
    module: {
        rules: [
            {
                // Regra para arquivos JavaScript e JSX
                test: /\.(js|jsx)$/,
                // Excluir o diretório node_modules
                exclude: /node_modules/,
                use: {
                    // Loader para transpilar JavaScript e JSX
                    loader: "babel-loader",
                    // Opções do Babel
                    options: {
                        // Presets para transpilação
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    // Lista de plugins
    plugins: [
        // Plugin para gerar o HTML de saída
        new HtmlWebpackPlugin({
            // Template HTML de entrada
            template: "./public/index.html",
            // Nome do arquivo de saída
            filename: "index.html"
        })
    ],
    // Configurações da resolução de módulos
    resolve: {
        // Extensões de arquivos a serem resolvidos automaticamente
        extensions: [".js", ".jsx"]
    },
    // Configurações do servidor de desenvolvimento
    devServer: {
        // Configuração de arquivos estáticos a serem servidos
        static: {
            // Diretório a ser servido
            directory: path.join(__dirname, "dist")
        },
        // Porta do servidor
        port: 3000,
    }
};