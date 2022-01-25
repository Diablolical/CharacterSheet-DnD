import SkillsRow from './SkillsRow'

function renderSkills(skills) {
    const renderArray = []
    skills.forEach((score, skill) => {
      renderArray.push(<SkillsRow skill={skill} />)
    })
    return renderArray
  }

function Skills() {
    const skills = new Map();
    return(
        <article id="skills">
            <div class="block">
                <h3>Skills</h3>
                {renderSkills(skills)}
            </div>
        </article>
    )
}

export default Skills
