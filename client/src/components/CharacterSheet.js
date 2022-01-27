import { useState, useEffect } from 'react'
import clone from 'clone'
import GeneralInfo from './General/GeneralInfo'
import Stats from './Stats/Stats'
import Combat from './Combat/Combat'
import Character from './Character/Character'
import Loading from './Common/Loading'
import { calcProficiencyBonus, getCharacterData } from './Shared/helpers'

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
        { name: "strength", score: 10, isProficient: false },
        { name: "dexterity", score: 10, isProficient: false },
        { name: "constitution", score: 10, isProficient: false },
        { name: "intelligence", score: 10, isProficient: false },
        { name: "wisdom", score: 10, isProficient: false },
        { name: "charmisma", score: 10, isProficient: false }
    ],
    "skills": [
        { name: "strength", isProficient: false },
    ]
}

function CharacterSheet({ characterId }) {
    const [character, updateCharacter] = useState(defaultCharacterData)
    const [loading, setLoading] = useState(false)
    
    useEffect((characterId) => {
        if (characterId) {
            getCharacterData(characterId, updateCharacter, setLoading)
        }
    }, [])

    const updateAttributeScore = (name, score) => {
        score = parseInt(score)
        const index = character.attributes.findIndex((attr) => { return attr.name === name})
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

    if (loading) {
        return (<Loading />)
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
                    updateAttributeScore={updateAttributeScore}
                    proficiencyBonus={calcProficiencyBonus(character.general.level)}
                />
                <Combat />
                <Character />
            </div>
        </form>
    )
}

export default CharacterSheet;
