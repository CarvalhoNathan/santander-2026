import Skills from "./Skills"

function Profile() {
    return (
        <>
            <img
                src="https://classic.exame.com/wp-content/uploads/2025/05/Googles-old-vs-new-G-logo-2_fcvqcm.jpeg"
                alt="profile picture"
                style={{
                    width: "100px",
                    height: "100px",
                }}
            />
            <h3>Nathan Carvalho</h3>
            <p>Desenvolvedor Web Full Stack</p>
            <Skills />
        </>
    )
}

export default Profile