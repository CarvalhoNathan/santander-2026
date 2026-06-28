# 🛠️ Preparando o Ambiente React

Nesta seção estão consolidados os passos e ferramentas necessárias para configurar o ambiente de desenvolvimento local para React, incluindo o papel do **Node.js**, do gerenciador **npm** e a estrutura de manifesto de pacotes.

---

## 📋 Objetivos & Conteúdo

*   **Node.js & React:** O motor de execução fora do navegador.
*   **Gerenciador de Pacotes (npm):** Como gerenciar bibliotecas e dependências.
*   **Editor de Código & Extensões:** Dicas de produtividade no editor (como VS Code / Antigravity).
*   **Manifestos do Projeto:** Entendendo os arquivos `package.json` e `package-lock.json`.

---

## 🟢 Node.js: O Motor de Execução

O **Node.js** é um ambiente de execução (runtime) que permite rodar código JavaScript fora do navegador (como no seu sistema operacional ou em servidores). Ele é construído sobre o motor V8 do Google Chrome (o mesmo que interpreta JS de forma extremamente rápida no navegador).

### Como verificar e instalar:

1. Abra o seu terminal e digite:
   ```bash
   node -v
   ```
2. Se o terminal retornar um número de versão (ex: `v20.11.0`), o Node.js já está instalado.
3. **Instalação:** Caso precise instalar ou atualizar, acesse o [site oficial do Node.js](https://nodejs.org/) e baixe a versão **LTS (Long Term Support)**, que é a mais estável e recomendada para produção.

---

## 📦 Gerenciador de Pacotes (npm)

O **npm (Node Package Manager)** é instalado automaticamente junto com o Node.js. Ele funciona de duas formas:
1. **Registro:** Um repositório público online ([npmjs.com](https://www.npmjs.com/)) onde desenvolvedores do mundo todo compartilham pacotes de código aberto.
2. **Ferramenta de CLI:** Um utilitário de linha de comando usado no terminal para instalar, atualizar e remover dependências do seu projeto.

### Comandos Essenciais do npm:

*   **Verificar Versão:**
    ```bash
    npm -v
    ```
*   **Instalar Dependências Existentes:**
    Se você clonou um projeto que já tem o arquivo `package.json`, você baixa todas as dependências rodando apenas:
    ```bash
    npm install
    # ou o atalho
    npm i
    ```
    Isso gerará a pasta **`node_modules`**, que armazena fisicamente o código de todas as bibliotecas instaladas.
    
    > [!WARNING]
    > A pasta `node_modules` costuma ser muito pesada. Ela **nunca** deve ser enviada para o Git. Certifique-se de que ela está incluída no seu arquivo `.gitignore`.

*   **Instalar um Pacote Novo:**
    ```bash
    npm install <nome-do-pacote>
    # Exemplo:
    npm install date-fns
    ```
*   **Instalar uma Versão Específica:**
    ```bash
    npm install react@18.2.0
    ```
*   **Instalar como Dependência de Desenvolvimento (`devDependencies`):**
    Para ferramentas usadas apenas durante a codificação (como linters, testadores ou o próprio Vite):
    ```bash
    npm install -D vite
    ```
*   **Remover um Pacote:**
    ```bash
    npm uninstall <nome-do-pacote>
    ```

---

## ⚙️ Executando Scripts do Projeto

Os scripts definidos no arquivo `package.json` funcionam como atalhos para comandos longos.
1. Para rodar o servidor de desenvolvimento local no Vite:
   ```bash
   npm run dev
   ```
2. O terminal indicará o endereço local (geralmente `http://localhost:5173/`).
3. Para parar o servidor de desenvolvimento, pressione `Ctrl + C` no terminal.

---

## 📄 Package.json vs Package-lock.json

Compreender a diferença entre esses dois manifestos é fundamental para evitar o clássico problema de "funciona na minha máquina, mas não na sua".

| Característica | `package.json` | `package-lock.json` |
| :--- | :--- | :--- |
| **Objetivo** | Descreve as configurações gerais do projeto e as dependências autorizadas. | Garante a reprodutibilidade exata da instalação das dependências. |
| **Versões** | Utiliza operadores (ex: `^18.2.0`) para permitir atualizações automáticas de patches. | Registra a versão **exata** e o checksum de segurança de cada pacote instalado. |
| **Origem** | Criado manualmente ou via `npm init`. Atualizado ao rodar `npm install <pacote>`. | Gerado automaticamente pelo npm sempre que a pasta `node_modules` é modificada. |
| **Controle de Versão** | **Deve** ser enviado ao Git. | **Deve** ser enviado ao Git (fundamental para trabalho em equipe). |

## 🛠️ Ferramentas Modernas & Alternativas de Gerenciamento

Além do `npm` tradicional, existem outras ferramentas e gerenciadores no ecossistema do Node.js que otimizam a criação e o gerenciamento de pacotes:

### ⚡ npx (Node Package eXecutor)
Diferente do `npm` (que gerencia e instala pacotes localmente), o `npx` é um **executor de pacotes**. Ele permite que você baixe e execute temporariamente ferramentas da linha de comando diretamente do repositório do npm, sem precisar instalá-las globalmente no seu computador.
*   **Caso de Uso Comum:** Inicializar geradores de projetos.
    ```bash
    npx create-vite@latest my-react-app --template react
    ```

---

### 🧶 yarn (Yet Another Node Package Manager)
Desenvolvido pelo Facebook, o **yarn** surgiu como uma alternativa ao `npm` para resolver problemas de desempenho, segurança e consistência que as versões antigas do npm possuíam. Ele precisa ser instalado separadamente (geralmente via npm ou Corepack).
*   **Comandos Equivalentes:**
    *   Iniciar um projeto Vite:
        ```bash
        yarn create vite my-react-app --template react
        ```
    *   Instalar dependências listadas no `package.json`:
        ```bash
        yarn install # ou apenas 'yarn'
        ```

---

### 🚀 pnpm (Performant Node Package Manager)
O **pnpm** é um gerenciador moderno focado em alta performance e economia de espaço em disco. Ele precisa ser instalado separadamente.
*   **Como funciona:** Enquanto o npm e o yarn duplicam os arquivos das dependências na pasta `node_modules` de cada projeto no seu computador, o pnpm armazena todos os pacotes em um **único repositório central e global** em disco. Nos seus projetos individuais, ele cria apenas atalhos físicos (hard links) para esse repositório global. Isso economiza gigabytes de espaço e torna as instalações quase instantâneas.
*   **Comandos Equivalentes:**
    *   Iniciar um projeto Vite:
        ```bash
        pnpm create vite my-react-app --template react
        ```
    *   Instalar dependências:
        ```bash
        pnpm install
        ```