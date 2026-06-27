# 🧠 Pensando do Jeito React & Estrutura de Projetos

Nesta seção estão reunidos os aprendizados sobre como abordar o desenvolvimento de interfaces com a mentalidade declarativa e componentizada do React, além de entender a estrutura de arquivos padrão gerada pelo **Vite**.

---

## 💡 Pensando "do Jeito React" (Thinking in React)

Para programar em React de forma eficiente, precisamos mudar nossa forma de projetar interfaces. A documentação oficial do React descreve esse processo em alguns pilares essenciais:

1. **🧩 Quebrar a UI em uma Hierarquia de Componentes:**
   * Olhando para um design no Figma ou uma tela pronta, identificamos partes menores que se repetem ou que possuem uma função lógica única (ex: `Logo`, `Sidebar`, `Button`, `CardUser`).
   * Aplicamos o **Princípio da Responsabilidade Única (SRP)**: idealmente, um componente deve fazer apenas uma coisa. Se ele começar a crescer demais, deve ser decomposto em subcomponentes.

2. **📦 Construir uma Versão Estática Primeiro:**
   * Construímos a interface apenas renderizando os dados (passando `props`) sem adicionar qualquer interatividade (sem usar `state` ainda). Isso ajuda a focar na estrutura visual e na hierarquia dos componentes.

3. **🔄 Identificar o Estado Mínimo e Representativo da UI:**
   * O estado (`state`) deve ser reservado apenas para dados que mudam ao longo do tempo e exigem re-renderização da tela (ex: texto de um campo de busca, itens de um carrinho).
   * **Fluxo de Dados Unidirecional:** Os dados fluem sempre de cima para baixo (do componente pai para o filho) através de propriedades (`props`). Se dois componentes filhos precisam compartilhar do mesmo estado, nós "subimos" esse estado para o pai comum mais próximo (*Lifting State Up*).

---

## ⚙️ Estrutura de Funcionamento (Padrão Vite)

Ao iniciar um projeto React moderno utilizando o **Vite**, a seguinte árvore de diretórios é gerada. Compreender o papel de cada arquivo é crucial para a arquitetura do projeto:

```text
meu-app-react/
├── src/
│   ├── assets/          # Arquivos estáticos consumidos pelo código (imagens, SVGs, fontes)
│   ├── App.css          # Estilização local do componente App
│   ├── App.jsx          # Componente raiz da aplicação (contém a estrutura base da árvore de componentes)
│   ├── index.css        # Estilos globais (redefinição de margens, variáveis de cores globais, fontes)
│   ├── main.jsx         # O ponto de partida do JavaScript. Importa o App e monta a árvore React no HTML real
│   └── ...
├── index.html           # A porta de entrada da aplicação. Contém a div <div id="root"> onde o React é injetado
├── package.json         # Manifesto do projeto. Define dependências (React, ReactDOM, Vite), metadados e scripts
└── vite.config.js       # Configurações do Vite (plugins como o do React, portas de servidor local, etc.)
```

### Detalhamento dos Arquivos Críticos:

*   **`index.html`**
    Diferente de projetos React antigos baseados em *Create React App* (onde o HTML ficava escondido na pasta `public`), no Vite o `index.html` fica na raiz. Ele possui uma tag crucial:
    ```html
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
    ```
*   **`src/main.jsx`**
    Esse arquivo faz a ponte entre o React (Virtual DOM) e a página web real. Ele importa o método `createRoot` do `react-dom/client` para montar o componente principal `<App />` dentro da div `#root`:
    ```javascript
    import { StrictMode } from 'react'
    import { createRoot } from 'react-dom/client'
    import App from './App.jsx'
    import './index.css'

    createRoot(document.getElementById('root')).render(
      <StrictMode>
        <App />
      </StrictMode>,
    )
    ```

> [!NOTE]
> O **`<StrictMode>`** é uma ferramenta de desenvolvimento do React que ajuda a identificar problemas potenciais na aplicação, renderizando os componentes duas vezes em ambiente de desenvolvimento para detectar efeitos colaterais indesejados. Ele não impacta o build final de produção.