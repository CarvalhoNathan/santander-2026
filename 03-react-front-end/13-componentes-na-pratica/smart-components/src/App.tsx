import "./App.css";
import ProductsList from "./components/ProductsList";
import ClientsList from "./components/ClientsList";
import { withLogger } from "./components/hocs/withLogger";

// Enriquecendo componentes funcionais com HOC de Classe
const ProductsListWithLogger = withLogger(ProductsList);
const ClientsListWithLogger = withLogger(ClientsList);

function App() {
  return (
    <div style={{ display: "flex", gap: "40px", padding: "20px" }}>
      <div style={{ flex: 1 }}>
        <ProductsListWithLogger />
      </div>
      <div style={{ flex: 1 }}>
        <ClientsListWithLogger />
      </div>
    </div>
  );
}

export default App;

