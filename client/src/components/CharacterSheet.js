import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import clone from "clone";
import GeneralInfo from "./General/GeneralInfo";
import Stats from "./Stats/Stats";
import Combat from "./Combat/Combat";
import Character from "./Character/Character";
import Loading from "./Common/Loading";
import { calcProficiencyBonus, getCharacterData } from "./Shared/helpers";

const defaultCharacterData = {
    general: {
        characterName: "",
        class: "",
        level: 1,
        background: "",
        race: "",
        alignment: "",
        experience: 0
    },
    attributes: [
        { name: "strength", score: 10, isProficient: false },
        { name: "dexterity", score: 10, isProficient: false },
        { name: "constitution", score: 10, isProficient: false },
        { name: "intelligence", score: 10, isProficient: false },
        { name: "wisdom", score: 10, isProficient: false },
        { name: "charisma", score: 10, isProficient: false },
    ],
    skills: [
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
    ],
    vitals: {
        "armorClass": 0,
        "initiative": 0,
        "speed": 30,
        "hitPoints": 0,
        "currentHitPoints":0,
        "temporaryHitPoints":0,
        "hitDice":0
    },
    attacks: [],
    items: [],
    features: {
        personality: [
            { "traits" : "" },
            { "ideals" : "" },
            { "bonds" : "" },
            { "flaws" : "" },
        ]
    }
}

function _getIndexByName (arr, propertyName) {
    return arr.findIndex((obj) => { return obj.name === propertyName})
}

function CharacterSheet() {
    //todo: convert to useContext to reduce callbacks (?)
    const [general, updateGeneral] = useState(defaultCharacterData.general)
    const [attributes, updateAttributes] = useState(defaultCharacterData.attributes)
    const [skills, updateSkills] = useState(defaultCharacterData.skills)
    const [attacks, updateAttacks] = useState(defaultCharacterData.attacks)
    const [items, updateItems] = useState(defaultCharacterData.items)
    const [features, updateFeatures] = useState(defaultCharacterData.features)
    const [loading, setLoading] = useState(false)

    const { characterId } = useParams();
    console.log("Client got id: ", characterId);

    useEffect(() => {
        const updateCharacter = (data) => {
            updateGeneral(data.general)
            updateAttributes(data.attributes)
            updateSkills(data.skills)
            updateFeatures(data.features)
            updateAttacks(data.attacks)
            updateItems(data.items)
        }
        if (characterId) {
            console.log("Getting character: " + characterId);
            getCharacterData(characterId, updateCharacter, setLoading);
        }
    }, [characterId])

    const saveCharacter = () => {
        const saveData = {
            general: general,
            attributes: attributes,
            skills: skills,
            attacks: attacks,
            items: items,
            features: features
        };
        console.log(saveData);
    }

    const updatePropArray = (stateToUpdate, callback, index, key, newValue) => {
        const updated = clone(stateToUpdate);
        updated[index][key] = newValue;
        callback(updated);
    };

    const updateAttributeScore = (name, score) => {
        score = parseInt(score);
        const index = _getIndexByName(attributes, name);
        if (attributes[index].score !== score) {
            updatePropArray(attributes, updateAttributes, index, "score", score);
        }
    };

    const updateSaveProficiency = (name, newValue) => {
        const index = _getIndexByName(attributes, name);
        updatePropArray(
        attributes,
        updateAttributes,
        index,
        "isProficient",
        newValue
        );
    };

    const updateSkillProficiency = (name, newValue) => {
        const index = _getIndexByName(skills, name);
        updatePropArray(skills, updateSkills, index, "isProficient", newValue);
    };

    const updateGeneralInfo = (field, newValue) => {
        let current = general[field];
        if (current !== newValue) {
            const updated = clone(general);
            updated[field] = newValue;
            updateGeneral(updated);
        }
    };

    if (loading) {
        return <Loading />;
    }
    const proficiencyBonus = calcProficiencyBonus(general.level);
    return (
        <div name="character-sheet" id="sheet">
            <button onClick={() => saveCharacter()} >Save</button>
            <GeneralInfo data={general} update={updateGeneralInfo} />
            <div className="wrapper wide">
                <Stats
                    attributes={attributes}
                    skills={skills}
                    updateAttributeScore={updateAttributeScore}
                    updateSaveProficiency={updateSaveProficiency}
                    updateSkillProficiency={updateSkillProficiency}
                    proficiencyBonus={proficiencyBonus}
                />
                <Combat
                    attributes={attributes}
                    proficiencyBonus={proficiencyBonus}
                    attacks={attacks}
                    updateAttacks={updateAttacks}
                    items={items}
                    updateItems={updateItems}
                />
                <Character features={features} />
            </div>
        </div>
    );
}

    export default CharacterSheet;
