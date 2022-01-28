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
        { name: "charisma", score: 10, isProficient: false }
    ],
    "skills": [
        { name: "acrobatics", isProficient: false },
        { name: "animal handling", isProficient: false },
        { name: "arcana", isProficient: false },
        { name: "athletics", isProficient: false },
        { name: "deception", isProficient: false },
        { name: "history", isProficient: false },
        { name: "insight", isProficient: false },
        { name: "intimidation", isProficient: false },
        { name: "investigation", isProficient: false },
        { name: "medicine", isProficient: false },
        { name: "nature", isProficient: false },
        { name: "perception", isProficient: false },
        { name: "performance", isProficient: false },
        { name: "persuasion", isProficient: false },
        { name: "religion", isProficient: false },
        { name: "slight of hand", isProficient: false },
        { name: "stealth", isProficient: false },
        { name: "survival", isProficient: false },
    ]
}

function CharacterSheet({ characterId }) {
    //todo: convert to useContext to reduce callbacks (?)
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
    
    const updateSaveProficiency = (name, newValue) => {
        const index = character.attributes.findIndex((attr) => { return attr.name === name})
        const updated = clone(character)
        updated.attributes[index].isProficient = newValue
        updateCharacter(updated)
    }

    const updateSkillProficiency = (name, newValue) => {
        const index = character.skills.findIndex((skill) => { return skill.name === name})
        const updated = clone(character)
        updated.skills[index].isProficient = newValue
        updateCharacter(updated)
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
                    skills={character.skills}
                    updateAttributeScore={updateAttributeScore}
                    updateSaveProficiency={updateSaveProficiency}
                    updateSkillProficiency={updateSkillProficiency}
                    proficiencyBonus={calcProficiencyBonus(character.general.level)}
                />
                <Combat />
                <Character />
            </div>
        </form>
    )
}

export default CharacterSheet;
