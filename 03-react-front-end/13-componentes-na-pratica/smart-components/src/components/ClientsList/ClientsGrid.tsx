interface Client {
  id: number;
  name: string;
  email: string;
  company: {
    name: string;
  };
}

interface ClientsGridProps {
  clients: Client[];
}

export function ClientsGrid({ clients }: ClientsGridProps) {
  return (
    <ul className="list" style={{ padding: "0", listStyle: "none" }}>
      {clients.map(({ id, name, email, company }) => (
        <li key={id} style={{ padding: "10px", borderBottom: "1px solid #eee" }}>
          <p style={{ margin: "0" }}>
            <strong>{name}</strong> - {email}
          </p>
          <p style={{ margin: "5px 0 0 0", fontSize: "0.85em", color: "#666" }}>
            Empresa: {company.name}
          </p>
        </li>
      ))}
    </ul>
  );
}
