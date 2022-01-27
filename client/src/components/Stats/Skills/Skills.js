import SkillsRow from './SkillsRow'

function _renderSkills(skills) {
    const renderArray = []
    skills.forEach((index, skill) => {
      renderArray.push(<SkillsRow key={index} skill={skill} />)
    })
    return renderArray
}

function Skills({ attributes, proficiencyBonus }) {
    const skills = new Map();
    return(
        <article id="skills">
            <div class="block">
                <h3>Skills</h3>
                {_renderSkills(skills)}
            </div>
        </article>
    )
}

export default Skills
