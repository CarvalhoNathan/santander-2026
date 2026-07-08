interface HardSkillsProps {
    skills?: string[];
}

function HardSkills({ skills = ["Html", "Css", "JavaScript", "React", "Node.js"] }: HardSkillsProps) {
    return (
        <ul style={{ color: 'green', backgroundColor: 'black', padding: '10px 20px', borderRadius: '4px' }}>
            {skills.map((skill, index) => (
                <li key={index}>{skill}</li>
            ))}
        </ul>
    )
}

export default HardSkills