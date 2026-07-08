import Skills from "./Skills"

function Profile() {
    const user = {
        name: "Nathan Carvalho",
        role: "Desenvolvedor Web Full Stack",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    }

    function formatDate(date: Date) {
        return new Intl.DateTimeFormat("pt-BR", {
            year: "numeric",
            month: "long",
            day: "numeric"
        }).format(date)
    }

    return (
        <>
            <img
                src={user.imageUrl}
                alt="profile picture"
                style={{
                    width: "100px",
                    height: "100px",
                }}
            />
            <h3>{user.name}</h3>
            <p>{user.role}</p>
            <Skills />
            <p>{formatDate(new Date())}</p>
        </>
    )
}

export default Profile