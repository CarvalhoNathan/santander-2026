import { useEffect, useState } from "react";
import { API_BASE_URL } from "../../settings";

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

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

  if (isLoading) {
    return (
      <div>
        <h2>Products</h2>
        <p>🔄️ Loading data...</p>
      </div>
    );
  }

  return (
    <div>
      <h2>Products</h2>
      <ul className="list">
        {products.map(({ id, title, price, description }) => (
          <li key={id}>
            <p>
              #{id} {title}
            </p>
            <p className="price">${price}</p>
            <p>{description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}
