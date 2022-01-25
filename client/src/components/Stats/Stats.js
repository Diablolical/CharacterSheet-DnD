import Attributes from './Attributes/Attributes'
import ProficiencyBonus from './ProficiencyBonus'
import Inspiration from './Inspiration'
import PassivePerception from './PassivePerception'
import Languages from './Languages'
import Saves from './Saves/Saves'
import Skills from './Skills/Skills'

function Stats() {
     // todo: boost to top level, add logic, compute modifiers, etc
     const attributes = new Map([
        ['strength', 0],
        ['dexterity', 0],
        ['constitution', 0],
        ['intelligence', 0],
        ['wisdom', 0],
        ['charisma', 0]
    ]);

    return (
        <div class="col-third">
            <div class="container">
                <Attributes 
                    attributes = {attributes}
                />
                <div id="skillsArea">
                    <Inspiration/>
                    <ProficiencyBonus/>
                    <Saves 
                        attributes = {attributes}
                    />
                    <Skills
                        attributes = {attributes}
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
