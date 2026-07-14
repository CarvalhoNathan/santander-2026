# ⚡ Manipuladores de Eventos no React

Estudo prático sobre como capturar, processar e controlar a propagação de eventos do usuário em aplicações React, integrando lógica de negócios com interações da interface.

---

## 💎 1. Passando vs. Invocando Funções de Evento

No React, os ouvintes de eventos (como `onClick`, `onSubmit`, `onChange`) devem receber a **referência da função**, e não o resultado da sua execução:

### Maneira Correta:
```tsx
function Botao() {
  const handleClick = () => {
    alert("Clicou!");
  };

  // Passando apenas a referência da função (Correto)
  return <button onClick={handleClick}>Clique aqui</button>;
}
```

### Maneira Incorreta:
```tsx
// Errado: a função é chamada imediatamente quando o componente renderiza
return <button onClick={handleClick()}>Clique aqui</button>;
```
> [!CAUTION]
> Chamar `handleClick()` com parênteses executa a função imediatamente durante a renderização. Se ela alterar algum estado (`useState`), causará um loop infinito de renderização e travará o navegador.

### Passando Parâmetros para o Handler:
Para passar um argumento personalizado para a função de tratamento de eventos, envolva-a em uma função anônima (arrow function):
```tsx
return <button onClick={() => handleClick(id)}>Deletar item</button>;
```

---

## ⚙️ 2. Props e Custom Event Handlers

Podemos passar manipuladores de eventos de componentes pai para componentes filhos através das **Props**. Isso permite que o componente filho notifique o pai sobre interações que aconteceram nele.

### Convenção de Nomenclatura Recomendada:
*   **Props de Eventos (Pai -> Filho):** Devem começar com o prefixo `on` (ex: `onActiveTheme`, `onSelectItem`).
*   **Funções de Manipulação (Handlers internos):** Devem começar com o prefixo `handle` (ex: `handleActiveTheme`, `handleSelectItem`).

### Exemplo Prático:
```tsx
// Filho:
interface BotaoPlayProps {
  onPlay: () => void;
  children: React.ReactNode;
}
function BotaoPlay({ onPlay, children }: BotaoPlayProps) {
  // O filho dispara a ação que recebeu do pai
  return <button onClick={onPlay}>{children}</button>;
}

// Pai:
function App() {
  const handlePlayMovie = () => {
    alert("Iniciando reprodução do filme!");
  };

  return <BotaoPlay onPlay={handlePlayMovie}>Dar Play</BotaoPlay>;
}
```

---

## 🌊 3. Propagação de Eventos e Controle de Fluxo

No navegador, os eventos se propagam subindo pela árvore do DOM (fenômeno conhecido como **Bubbling** ou borbulhamento). O React fornece ferramentas no objeto de evento para gerenciar essa propagação e os comportamentos padrão:

### A. Parando a Propagação com `e.stopPropagation()`
Se um botão interno estiver dentro de um elemento maior contêiner (como uma `div`) e ambos tiverem eventos de clique, o clique no botão disparará o evento de clique da `div` (pai). Usamos `e.stopPropagation()` para conter o evento apenas no elemento clicado:

```tsx
function Card() {
  const handleCardClick = () => console.log("Clicou no card");
  const handleButtonClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // Impede o clique de subir para o Card
    console.log("Clicou no botão");
  };

  return (
    <div onClick={handleCardClick} className="card">
      <button onClick={handleButtonClick}>Ação</button>
    </div>
  );
}
```

### B. Prevenindo o Comportamento Padrão com `e.preventDefault()`
Alguns elementos do navegador possuem um comportamento padrão predefinido (como o link `<a>` que navega para outra URL, ou a tag `<form>` que recarrega a página ao submeter). Para reter a aplicação SPA sem recarregar a tela, usamos `e.preventDefault()`:

```tsx
function Formulario() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Impede o recarregamento da página
    console.log("Enviando dados do formulário...");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" />
      <button type="submit">Enviar</button>
    </form>
  );
}
```

---

## 🎨 4. Event Handlers e Efeitos Colaterais

Diferente do corpo principal da função do componente (que deve ser puro e livre de efeitos colaterais para renderização), **os manipuladores de eventos (event handlers) são o local ideal para realizar efeitos colaterais**.

Como os event handlers não são executados durante a renderização (apenas quando o evento físico ocorre), neles você pode livremente:
*   Modificar estados do componente (`setTheme`, `setCount`).
*   Fazer requisições a APIs externas (`fetch`, `axios`).
*   Manipular APIs globais do navegador (como o `document.body.classList` que você usou no botão de alterar tema).
*   Mostrar diálogos (`alert`, `confirm`).
