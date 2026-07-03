# ⚡ Criando Aplicações com Vite

Estudo sobre a ferramenta Vite, compreendendo seus benefícios de performance no desenvolvimento front-end moderno, estrutura de diretórios e gerenciamento de variáveis de ambiente.

- Conhecendo o Vite e por que utilizá-lo.
- Criando e configurando projetos React (JavaScript e TypeScript).
- Estrutura padrão de pastas e arquivos.
- Variáveis de ambiente no ecossistema do Vite.

---

## 💎 Sobre o Vite

O **Vite** é uma ferramenta de construção de projetos front-end de última geração, desenvolvida por **Evan You** (criador do Vue.js). 

A palavra *Vite* vem do francês e significa *"rápido"* (pronuncia-se `/vit/`).

### Por que utilizar o Vite?
Diferente de ferramentas tradicionais (como o Create React App que usa Webpack por baixo), o Vite resolve o problema de lentidão na inicialização do servidor e no recarregamento (HMR) ao:
1.  **Utilizar ES Modules (ESM) Nativos:** O navegador faz a requisição de cada arquivo sob demanda, eliminando a necessidade de construir um bundle gigante em memória para desenvolvimento.
2.  **Compilação via esbuild:** O pré-empacotamento de dependências externas é feito com o **Esbuild** (escrito em Go), sendo até 100x mais veloz que empacotadores baseados em JS.

---

## 🛠️ Comandos Práticos e Configuração

### Criando o projeto React com TypeScript:
```bash
npm create vite@latest my-app-react-ts -- --template react-ts
```
*   Esse comando baixa o scaffold inicial do Vite configurado para React e TypeScript.

---

## 📂 Estrutura de Pastas Padrão

A estrutura inicial gerada pelo Vite é limpa e direta:
```text
my-app-react-ts/
├── node_modules/       # Dependências instaladas (instale rodando `npm install`)
├── public/             # Recursos estáticos servidos na raiz (ex: favicon)
├── src/                # Código-fonte da aplicação
│   ├── assets/         # Imagens, mídias e fontes locais
│   ├── App.tsx         # Componente principal do aplicativo
│   ├── main.tsx        # Ponto de entrada que monta o React na div #root
│   └── index.css       # Estilos globais
├── .gitignore          # Arquivos e diretórios ignorados pelo Git
├── index.html          # HTML principal (ponto de partida servido ao navegador)
├── package.json        # Manifest de dependências e scripts de execução
├── tsconfig.json       # Definições do compilador do TypeScript
└── vite.config.ts      # Arquivo de configuração customizável do Vite
```

---

## 🏃 Scripts de Execução

Configurados na seção `"scripts"` do `package.json`:
*   **Iniciar servidor de desenvolvimento local:**
    ```bash
    npm run dev
    ```
*   **Gerar a build otimizada de produção:**
    ```bash
    npm run build
    ```
*   **Testar localmente o pacote de produção gerado na pasta `dist/`:**
    ```bash
    npm run preview
    ```

---

## 🔑 Variáveis de Ambiente no Vite

O Vite implementa o gerenciamento de variáveis de ambiente de forma segura e moderna através do objeto `import.meta.env`:

*   **Regra de Nomeação:** Todas as variáveis de ambiente personalizadas **devem começar obrigatoriamente com o prefixo `VITE_`** (ex: `VITE_API_URL`). Variáveis que não possuem este prefixo não são expostas ao cliente por questões de segurança.
*   **Arquivo de Configuração:** Crie um arquivo `.env` na raiz do projeto:
    ```env
    VITE_API_URL=https://api.exemplo.com
    VITE_DEBUG_MODE=true
    ```
*   **Como Acessar no Código React:**
    ```typescript
    const apiUrl = import.meta.env.VITE_API_URL;
    ```
*   **Uso no HTML (`index.html`):**
    O Vite permite injetar variáveis diretamente nas tags do HTML usando a sintaxe `%NOME_DA_VARIAVEL%`:
    ```html
    <title>%VITE_API_TITLE%</title>
    ```