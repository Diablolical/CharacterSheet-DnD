import SkillsRow from './SkillsRow'

const ABILITY_MAP = {
    "acrobatics": "dexterity",
    "animal handling": "wisdom",
    "arcana": "intelligence",
    "athletics": "strength",
    "deception": "charisma",
    "history": "intelligence",
    "insight": "wisdom",
    "intimidation": "charisma",
    "investigation": "intelligence",
    "medicine": "wisdom",
    "nature": "intelligence",
    "perception": "wisdom",
    "performance": "charisma",
    "persuasion": "charisma",
    "religion": "intelligence",
    "slight of hand": "dexterity",
    "stealth": "dexterity",
    "survival": "wisdom"
}

function _getScoreForSkill (attributes, skill) {
    const index = attributes.findIndex((attr) => { return attr.name === ABILITY_MAP[skill.name]})
    return attributes[index].score
}

function _renderSkills(attributes, skills, update, proficiencyBonus) {
    const renderArray = []
    skills.forEach((skill) => {
        const score = _getScoreForSkill(attributes, skill)
        renderArray.push(<SkillsRow key={skill.name} skill={skill} score={score} update={update} proficiencyBonus={proficiencyBonus} />)
    })
    return renderArray
}

function Skills({ attributes, skills, updateSkillProficiency, proficiencyBonus }) {
    return(
        <article id="skills">
            <div class="block">
                <h4>Skills</h4>
                {_renderSkills(attributes, skills, updateSkillProficiency, proficiencyBonus)}
            </div>
        </article>
    )
}

export default Skills
