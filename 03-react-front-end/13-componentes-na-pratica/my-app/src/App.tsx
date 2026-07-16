import "./App.css";
import CounterFuncionalComponent from "./components/CounterFuncionalComponent";
import CounterClassComponent from "./components/CounterClassComponent";

function App() {
  return (
    <>
      <CounterFuncionalComponent message="Contador Funcional" />
      <CounterClassComponent message="Contador de Classes" />
    </>
  );
}

export default App;
