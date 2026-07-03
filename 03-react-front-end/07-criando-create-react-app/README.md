# 🚀 Criando Aplicações com Create React App (CRA)

Estudo sobre a criação, configuração e funcionamento interno de aplicações React estruturadas com a ferramenta Create React App, compreendendo suas vantagens, limitações e gerenciamento prático.

- Conceitos e vantagens do CRA.
- Instalação e configuração de projetos (JavaScript e TypeScript).
- Limitações e problemas ao utilizar o CRA hoje em dia.
- Uso de variáveis de ambiente no CRA.

---

## 💎 Vantagens do CRA

*   **Menos para aprender:** Configurações complexas de Webpack e Babel já vêm prontas debaixo do capô.
*   **Fast Refresh:** Suporte nativo a recarregamento instantâneo ao salvar alterações de arquivos.
*   **Otimização automática:** Builds de produção otimizados, minificados e divididos em pedaços de código (*code splitting*).
*   **Dependência única:** Toda a configuração de ferramentas e dependências de compilação é concentrada no pacote `react-scripts`.

---

## 🛠️ Comandos Práticos Usados nas Aulas

### 1. Criando um projeto JavaScript padrão:
```bash
npx create-react-app my-app
```
*   Esse comando cria uma pasta `my-app`, inicializa um repositório Git local e instala o React, React-DOM e as dependências de build na pasta `node_modules`.

### 2. Criando um projeto TypeScript:
```bash
npx create-react-app my-app-ts --template typescript
```
*   Além do comportamento padrão, configura arquivos com a extensão `.tsx` para os componentes React e gera o arquivo de configuração do compilador do TypeScript `tsconfig.json`.

---

## ⚠️ Limitações e Problemas de Usar o CRA Hoje em Dia

Apesar de ter sido a ferramenta oficial da comunidade por anos, o **Create React App foi descontinuado** pela equipe oficial do React. Os principais problemas de seu uso hoje são:

1.  **Velocidade de Compilação:** Por usar Webpack sob o capô, a compilação inicial e os recarregamentos (HMR) tornam-se extremamente lentos à medida que o projeto cresce.
2.  **Dificuldade de Customização:** Para alterar qualquer detalhe da configuração do Webpack, é necessário rodar o comando `npm run eject` (que é irreversível e extrai dezenas de arquivos de configuração complexos para a raiz) ou usar pacotes adicionais como `CRACO`.
3.  **Dependências Desatualizadas:** O projeto não recebe mais atualizações frequentes, o que pode acarretar em vulnerabilidades de segurança ou incompatibilidades de pacotes futuros.
4.  **Recomendação Atual:** Para novos projetos React SPA rápidos e modernos, a recomendação atual da comunidade é utilizar o **Vite** ou frameworks modernos como **Next.js** e **Remix**.

---

## 🔑 Variáveis de Ambiente no CRA

O Create React App possui uma forma específica e embutida para lidar com variáveis de ambiente sem a necessidade de configurar bibliotecas externas como `dotenv`:

*   **Regra de Nomeação:** Todas as variáveis de ambiente personalizadas **devem obrigatoriamente começar com o prefixo `REACT_APP_`** (ex: `REACT_APP_API_URL`). Variáveis sem esse prefixo são ignoradas por motivos de segurança.
*   **Arquivo de Configuração:** Crie um arquivo chamado `.env` na raiz do projeto:
    ```env
    REACT_APP_API_URL=https://api.exemplo.com
    REACT_APP_DEBUG_MODE=true
    REACT_APP_TITULO=Nathan 
    ```
*   **Como Acessar no Código React:**
    ```javascript
    const apiUrl = process.env.REACT_APP_API_URL;
    ```
*   **Uso no HTML (`public/index.html`):**
    É possível injetar variáveis de ambiente diretamente nas tags do HTML envolvendo o nome da variável com símbolos de porcentagem `%`:
    ```html
    <title>%REACT_APP_TITULO%</title>
    ```

*   **Definição Temporária via Terminal:**
    Você também pode injetar variáveis temporárias de ambiente diretamente pela linha de comando antes de iniciar o servidor:
    *   **Windows (PowerShell):**
        ```powershell
        $env:REACT_APP_API_URL="https://api.exemplo.com"
        # Para remover:
        Remove-Item Env:\REACT_APP_API_URL
        ```
    *   **Windows (CMD):**
        ```cmd
        set REACT_APP_API_URL=https://api.exemplo.com
        # Para remover:
        set REACT_APP_API_URL=
        ```
    *   **Linux / macOS / Git Bash:**
        ```bash
        export REACT_APP_API_URL="https://api.exemplo.com"
        # Para remover:
        unset REACT_APP_API_URL
        ```

*   **Visualizando as Variáveis de Ambiente no Terminal:**
    *   **Windows (PowerShell):** `Get-ChildItem Env:` (ou apenas `ls env:`)
    *   **Windows (CMD):** `set`
    *   **Linux / macOS:** `printenv`