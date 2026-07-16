import { useEffect, useState } from "react";
import { withLoading } from "../hocs/withLoading";
import { ClientsGrid } from "./ClientsGrid";

interface Client {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

const ClientsGridWithLoading = withLoading(ClientsGrid);

export default function ClientsList() {
  const [clients, setClients] = useState<Client[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(async (response) => {
        if (!response.ok) {
          throw new Error("Error fetching clients list");
        }
        const data = await response.json();
        setClients(data.slice(0, 5)); // Apenas os 5 primeiros para ficar elegante
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error.message);
      });
  }, []);

  return (
    <div style={{ marginTop: "30px" }}>
      <h2>Clients</h2>
      <ClientsGridWithLoading isLoading={isLoading} clients={clients} />
    </div>
  );
}
