import { useState } from "react";

interface Props {
  message: string;
}

const CounterFuncionalComponent = ({ message }: Props) => {
  const [count, setCount] = useState(0);

  const increase = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>{message}</h1>
      <h2>Contador: {count}</h2>
      <button className="button" onClick={increase}>Adicionar</button>
    </div>
  );
};

export default CounterFuncionalComponent;
