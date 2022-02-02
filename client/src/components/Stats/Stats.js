import Attributes from './Attributes/Attributes'
import ProficiencyBonus from './ProficiencyBonus'
import Inspiration from './Inspiration'
import PassivePerception from './PassivePerception'
import Languages from './Languages'
import Saves from './Saves/Saves'
import Skills from './Skills/Skills'
import { calcMod } from "../Shared/helpers"

const _calcPassivePerception = (attributes, skills, proficiencyBonus) => {
    const wisdom = attributes.find((attr) => { return attr.name === 'wisdom'})
    const perception = skills.find((skill) => { return skill.name === 'perception'})
    let bonus = perception.isProficient ? proficiencyBonus : 0;
    return 10 + calcMod(wisdom.score) + bonus;
}

function Stats({ attributes, skills, updateAttributeScore, updateSaveProficiency, updateSkillProficiency, proficiencyBonus }) {

    const passivePerception = _calcPassivePerception(attributes, skills, proficiencyBonus)
    
    return (
        <div className="col-third">
            <div className="container">
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
            <div className="container">
                <PassivePerception
                    value={passivePerception}
                />
                <Languages/>
            </div>
        </div>
    )
}

export default Stats
