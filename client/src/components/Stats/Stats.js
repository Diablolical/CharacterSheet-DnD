//import { useState } from 'react'

import Attributes from './Attributes/Attributes'
import ProficiencyBonus from './ProficiencyBonus'
import Inspiration from './Inspiration'
import PassivePerception from './PassivePerception'
import Languages from './Languages'
import Saves from './Saves/Saves'
import Skills from './Skills/Skills'

function Stats() {
     // todo: boost to top level, add logic, compute modifiers, etc
     const defaultAttr = new Map([
        ['strength', 10],
        ['dexterity', 10],
        ['constitution', 10],
        ['intelligence', 10],
        ['wisdom', 10],
        ['charisma', 10]
    ]);

    return (
        <div class="col-third">
            <div class="container">
                <Attributes 
                    attributes = {defaultAttr}
                />
                <div id="skillsArea">
                    <Inspiration/>
                    <ProficiencyBonus/>
                    <Saves 
                        attributes = {defaultAttr}
                    />
                    <Skills
                        attributes = {defaultAttr}
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
