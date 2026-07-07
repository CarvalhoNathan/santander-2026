# Componentes

Os componentes em React são blocos de conteúdo da interface do usuário (UI) que têm uma única responsabilidade e tem como objetivo a reutilização e organização dos códigos do projeto (resumindo são como peças de lego).

Componentes são basicamente compostos por javascript, jsx(html) e css (opcional).

## Tipos de Componentes

- Componentes de Classe (Class Components)
- Componentes Funcionais (Functional Components)

## Estrutura de um componente

1. Criar a função e o conteúdo
2. Exportar e importar
3. Finalizar a estrutura
4. Adicionar interatividade

## Exportação e importação

### Duas maneiras de fazer exportação:

1. **Exportação Padrão (`export default`):**
   ```tsx
   function ComponentName() {
       return (
           <>
               <h1>ComponentName</h1>
           </>
       )
   }

   export default ComponentName;
   ```

2. **Exportação Nomeada (`export`):**
   ```tsx
   export function ComponentName() {
       return (
           <>
               <h1>ComponentName</h1>
           </>
       )
   }
   ```

### Maneira de importar:

#### Importação do `export default`:
```typescript
import ComponentName from './ComponentName';
// Nessa importação você pode usar qualquer nome personalizado ao importar, ex:
// import MyComponent from './ComponentName';
```

#### Importação do `export nomeado`:
```typescript
import { ComponentName } from './ComponentName';
// Nessa importação você deve obrigatoriamente usar o mesmo nome exportado entre as chaves:
// import { ComponentName } from './ComponentName';
```

