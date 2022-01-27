import { useState } from 'react'
import clone from 'clone'
import GeneralInfo from './General/GeneralInfo'
import Stats from './Stats/Stats'
import Combat from './Combat/Combat'
import Character from './Character/Character'
import { calcProficiencyBonus } from './Shared/helpers'

const defaultCharacterData = {
    "general": {
        "characterName": "",
        "class": "",
        "level": 1,
        "background": "",
        "race": "",
        "alignment": "",
        "experience": 0
    },
    "attributes": [
        { name: "strength", score: 10 },
        { name: "dexterity", score: 10 },
        { name: "constitution", score: 10 },
        { name: "intelligence", score: 10 },
        { name: "wisdom", score: 10 },
        { name: "charmisma", score: 10 }
    ]
}

function CharacterSheet() {
    const [character, updateCharacter] = useState(defaultCharacterData)

    const updateAttribute = (name, score) => {
        score = parseInt(score)
        let index = character.attributes.findIndex((attr) => { return attr.name === name})
        if (character.attributes[index].score !== score) {
            const updated = clone(character)
            updated.attributes[index].score = score
            updateCharacter(updated)
        }
    }

    const updateGeneralInfo = (field, newValue) => {
        let current = character.general[field]
        if (current !== newValue) {
            const updated = clone(character)
            updated.general[field] = newValue
            updateCharacter(updated)
        }
    }

    return (
        <form name="character-sheet" id="sheet">
            <GeneralInfo
                data={character.general}
                update={updateGeneralInfo}
            />
            <div class="wrapper wide">
                <Stats
                    attributes={character.attributes}
                    updateAttribute={updateAttribute}
                    proficiencyBonus={calcProficiencyBonus(character.general.level)}
                />
                <Combat />
                <Character />
            </div>
        </form>
    )
}

export default CharacterSheet;
