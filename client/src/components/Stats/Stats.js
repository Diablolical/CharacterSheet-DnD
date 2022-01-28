import Attributes from './Attributes/Attributes'
import ProficiencyBonus from './ProficiencyBonus'
import Inspiration from './Inspiration'
import PassivePerception from './PassivePerception'
import Languages from './Languages'
import Saves from './Saves/Saves'
import Skills from './Skills/Skills'

function Stats({ attributes, skills, updateAttributeScore, updateSaveProficiency, updateSkillProficiency, proficiencyBonus }) {
    return (
        <div class="col-third">
            <div class="container">
                <Attributes 
                    attributes = {attributes}
                    updateAttributeScore = {updateAttributeScore}
                />
                <div id="skillsArea">
                    <Inspiration/>
                    <ProficiencyBonus
                        proficiencyBonus={proficiencyBonus}
                    />
                    <Saves 
                        attributes={attributes}
                        proficiencyBonus={proficiencyBonus}
                        updateSaveProficiency={updateSaveProficiency}
                    />
                    <Skills
                        attributes={attributes}
                        skills={skills}
                        updateSkillProficiency={updateSkillProficiency}
                        proficiencyBonus={proficiencyBonus}
                    />
                </div>
            </div>
            <div class="container">
                <PassivePerception
                    skills={skills}
                    proficiencyBonus={proficiencyBonus}
                />
                <Languages/>
            </div>
        </div>
    )
}

export default Stats
