import Attributes from './Attributes/Attributes'
import ProficiencyBonus from './ProficiencyBonus'
import Inspiration from './Inspiration'
import PassivePerception from './PassivePerception'
import Languages from './Languages'
import Saves from './Saves/Saves'
import Skills from './Skills/Skills'

function Stats({ attributes, updateAttribute, proficiencyBonus }) {
    return (
        <div class="col-third">
            <div class="container">
                <Attributes 
                    attributes = {attributes}
                    updateAttribute = {updateAttribute}
                />
                <div id="skillsArea">
                    <Inspiration/>
                    <ProficiencyBonus
                        proficiencyBonus={proficiencyBonus}
                    />
                    <Saves 
                        attributes={attributes}
                        proficiencyBonus={proficiencyBonus}
                    />
                    <Skills
                        attributes={attributes}
                        proficiencyBonus={proficiencyBonus}
                    />
                </div>
            </div>
            <div class="container">
                <PassivePerception/>
                <Languages/>
            </div>
        </div>
    )
}

export default Stats
