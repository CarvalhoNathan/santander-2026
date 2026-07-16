interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
}

interface ProductsGridProps {
  products: Product[];
}

export function ProductsGrid({ products }: ProductsGridProps) {
  return (
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
  );
}
