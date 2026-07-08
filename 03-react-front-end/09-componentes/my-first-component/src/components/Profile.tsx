import React from "react"

interface ProfileProps {
    name: string;
    role: string;
    imageUrl?: string;
    children?: React.ReactNode;
}

function Profile({ name, role, imageUrl = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", children }: ProfileProps) {
    function formatDate(date: Date) {
        return new Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(date)
    }

    return (
        <div style={{ border: "1px solid #ccc", padding: "20px", borderRadius: "8px", maxWidth: "300px" }}>
            <img
                src={imageUrl}
                alt="profile picture"
                style={{
                    width: "100px",
                    height: "100px",
                    borderRadius: "50%",
                    border: "2px solid #ddd"
                }}
            />
            <h3>{name}</h3>
            <p>{role}</p>
            {children}
            <p style={{ fontSize: "0.8em", color: "#666", marginTop: "15px" }}>{formatDate(new Date())}</p>
        </div>
    )
}

export default Profile