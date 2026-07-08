import HardSkills from "./HardSkills"
import SoftSkills from "./SoftSkills"

interface SkillsProps {
    hardSkills?: string[];
    softSkills?: string[];
}

function Skills({ hardSkills, softSkills }: SkillsProps) {
    return (
        <>
            <h3>Hards Skills</h3>
            <HardSkills skills={hardSkills} />
            <h3>Soft Skills</h3>
            <SoftSkills skills={softSkills} />
        </>
    )
}

export default Skills