# 🎣 Hooks: Estado, Efeitos Colaterais e Strict Mode

Estudo teórico e prático sobre a gestão de ciclo de vida, controle de efeitos colaterais utilizando o hook `useEffect` e o papel do `StrictMode` na identificação de bugs em desenvolvimento.

---

## ⚡ O que são Efeitos Colaterais (Side Effects)?

Em React, a renderização de componentes deve ser uma operação pura (dado um mesmo conjunto de props e estado, o retorno do JSX deve ser sempre o mesmo). 

Qualquer ação que aconteça fora desse fluxo de renderização pura é considerada um **efeito colateral**. Exemplos comuns:
*   Realizar requisições HTTP (buscar dados de uma API).
*   Configurar timers (`setTimeout`, `setInterval`).
*   Manipular manualmente o DOM do navegador.
*   Registrar ouvintes de eventos globais (`window.addEventListener`).
*   Assinar ou se conectar a serviços externos (WebSockets, Firebase).

---

## 🎣 O Hook `useEffect`

O `useEffect` é o hook do React responsável por gerenciar e sincronizar efeitos colaterais de forma controlada dentro de componentes funcionais.

### Sintaxe Básica:
```tsx
import { useEffect } from 'react';

useEffect(() => {
  // Código do efeito colateral (setup)
  
  return () => {
    // Código de limpeza (cleanup) - opcional
  };
}, [dependencias]);
```

---

## 📂 O Array de Dependências e seus Comportamentos

O segundo parâmetro do `useEffect` (o array de dependências) determina o momento exato em que o efeito será reexecutado:

### 1. Sem o Array de Dependências
O efeito é executado na montagem inicial e **em absolutamente toda atualização** (renderização) do componente.
```tsx
useEffect(() => {
  console.log("Executa em qualquer renderização");
});
```
> [!WARNING]
> Use com muita cautela, pois pode causar loops infinitos de renderização se você atualizar o estado do componente dentro dele.

### 2. Array de Dependências Vazio (`[]`)
O efeito é executado **apenas uma vez**, logo após o componente ser montado na tela. É o comportamento ideal para carregar dados iniciais de APIs.
```tsx
useEffect(() => {
  console.log("Executa apenas uma vez (Montagem)");
}, []);
```

### 3. Array com Dependências Específicas (`[prop, estado]`)
O efeito é executado na montagem e **toda vez que o valor de alguma das variáveis do array sofrer alteração**.
```tsx
const [contador, setContador] = useState(0);

useEffect(() => {
  console.log(`Contador atualizado para: ${contador}`);
}, [contador]); // Reexecuta sempre que 'contador' mudar
```

---

## 🧹 A Função de Limpeza (Cleanup Function)

Alguns efeitos colaterais continuam rodando em segundo plano mesmo depois que o componente é removido da tela (*unmounted*). Para evitar vazamentos de memória (*memory leaks*) e travamentos, devemos retornar uma **função de limpeza**:

```tsx
useEffect(() => {
  const handleResize = () => console.log(window.innerWidth);
  window.addEventListener('resize', handleResize);

  // Função de Cleanup:
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []);
```

**O React executa a função de limpeza:**
1.  Antes de executar o efeito novamente (caso as dependências mudem).
2.  Quando o componente deixa de existir na tela (desmontagem).

---

## 🛠️ React Strict Mode e a Duplicação de Efeitos

O `<React.StrictMode>` é um componente utilitário que envolve a aplicação em desenvolvimento para alertar sobre práticas depreciadas, vazamentos de memória ou efeitos mal escritos.

### O comportamento dos Efeitos no Strict Mode (React 18 & 19):
Em ambiente de desenvolvimento, o React monta, desmonta e remonta imediatamente cada componente, fazendo com que **os efeitos colaterais rodem duas vezes na inicialização**.

*   **Por que isso acontece?**
    Isso é feito de forma intencional pelos desenvolvedores do React. Essa duplicidade serve para testar se você declarou corretamente a **função de limpeza (cleanup)** do seu efeito. Se houver vazamento de memória ou timers duplicados rodando, eles aparecerão logo na inicialização, ajudando a capturar bugs de ciclo de vida antes que o código vá para produção.
*   **Em produção:** Esse comportamento de duplicar os efeitos é completamente ignorado e o efeito roda apenas uma vez normal.
