interface SoftSkillsProps {
    skills?: string[];
}

function SoftSkills({ skills = ["Trabalho em equipe", "Comunicação efetiva", "Resolução de problemas", "Pensamento crítico", "Adaptabilidade"] }: SoftSkillsProps) {
    return (
        <ul>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    )
}

export default SoftSkills

