import { calcMod } from "../../Shared/helpers"

function SkillsRow ({ skill, score, update, proficiencyBonus}) {
    const handleCheck = () => {
        update(skill.name, !skill.isProficient)
    }
    let bonus = skill.isProficient ? proficiencyBonus : 0;
    let mod = calcMod(score) + bonus;
    return (
        <div className="skillRow">
            <input type="checkbox" name="{skill.name}" checked={skill.isProficient} onChange={handleCheck}/>
            <span className="skillMod">{mod}</span>
            <label className="skillName">{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</label>
        </div>
    )
}

export default SkillsRow
