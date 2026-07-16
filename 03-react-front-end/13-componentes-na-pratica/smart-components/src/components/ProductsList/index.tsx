import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../settings";
import { withLoading } from "../hocs/withLoading";
import { ProductsGrid } from "./ProductsGrid";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

// Criando o componente enriquecido pelo HOC withLoading
const ProductsGridWithLoading = withLoading(ProductsGrid);

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`${API_BASE_URL}`)
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("An error occurred when fetching products list");
        }

        const data = await response.json();
        setProducts(data);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  }, []);

  return (
    <div>
      <h2>Products</h2>
      {/* Utilizando o componente enriquecido pelo HOC */}
      <ProductsGridWithLoading isLoading={isLoading} products={products} />
    </div>
  );
}

