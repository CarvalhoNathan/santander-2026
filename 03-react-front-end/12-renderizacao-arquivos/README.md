# 🔀 Renderização Condicional no React

Estudo teórico e prático sobre técnicas para renderizar elementos na interface de acordo com estados e condições lógicas específicas do aplicativo.

---

## 💡 O que é Renderização Condicional?

No React, renderização condicional significa exibir elementos da interface do usuário (JSX) com base em determinadas condições. É o mesmo conceito de blocos de controle no JavaScript comum (`if`, `&&`, `? :`), mas adaptados para o retorno de elementos de tela.

---

## 🛠️ Técnicas de Renderização Condicional

### 1. Retorno Condicional Antecipado (`if` padrão)
Ideal para quando queremos renderizar estruturas de tela completamente diferentes baseando-se em uma condição de barreira.

```tsx
interface ItemProps {
  name: string;
  check: boolean;
}

function Item({ name, check }: ItemProps) {
  if (check) {
    return <li className="item-completo">✅ {name}</li>;
  }
  return <li className="item-pendente">⬜ {name}</li>;
}
```

---

### 2. Retornando "Nada" com `null`
Se você quer ocultar completamente um componente ou elemento baseado em uma condição, retorne `null`. O React interpreta `null` como um espaço em branco e não renderiza nada na árvore do DOM.

```tsx
function AlertaDeErro({ temErro }: { temErro: boolean }) {
  if (!temErro) {
    return null; // O componente "some" da tela
  }
  return <div className="erro">Ocorreu um erro inesperado!</div>;
}
```

---

### 3. Operador Ternário (`condicao ? true : false`)
Excelente para fazer pequenas alterações no meio de um bloco JSX, como alterar textos, ícones ou classes CSS sem precisar duplicar o restante do HTML.

```tsx
return (
  <div className="item">
    <span>{check ? "✅" : "⬜"}</span>
    <p>{name}</p>
  </div>
);
```

---

### 4. Operador Lógico AND (`&&`)
Usado quando queremos renderizar um pedaço de JSX apenas se a condição for verdadeira, e nada caso contrário.

```tsx
interface ItemProps {
  name: string;
  count?: number;
}

function Item({ name, count }: ItemProps) {
  return (
    <li>
      {name}
      {/* O número/texto só aparece se a quantidade existir */}
      {count && <span> ({count}x)</span>}
    </li>
  );
}
```

> [!CAUTION]
> **Gotcha do React (O perigo do número 0 à esquerda do `&&`):**
> Se a condição for um número (como `0`), o JavaScript avalia a expressão como falsa e retorna o próprio valor à esquerda (`0`). O React renderizará o número `0` na tela em vez de nada!
> *   **Maneira Incorreta:** `{items.length && <Lista />}` (Renderiza `0` se o array estiver vazio).
> *   **Maneiras Corretas:**
>     *   `{items.length > 0 && <Lista />}` (A avaliação é booleana).
>     *   `{!!items.length && <Lista />}` (Conversão explícita para boolean).

---

### 5. Atribuição de JSX a Variáveis
Podemos guardar pedaços de JSX em variáveis usando o let e modificá-los condicionalmente antes do return do componente. Essa técnica mantém o bloco de return principal limpo e legível.

```tsx
function Item({ name, check }: ItemProps) {
  let itemName: React.ReactNode = name;

  if (check) {
    itemName = <del>{name}</del>;
  }

  return (
    <div className="item">
      {check ? "✅" : "⬜"}
      {itemName}
    </div>
  );
}
```
