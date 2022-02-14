import { useState, useEffect } from "react";
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

    },
    attacks: [],
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

function CharacterSheet({ characterId }) {
    //todo: convert to useContext to reduce callbacks (?)
    const [general, updateGeneral] = useState(defaultCharacterData.general)
    const [attributes, updateAttributes] = useState(defaultCharacterData.attributes)
    const [skills, updateSkills] = useState(defaultCharacterData.skills)
    const [attacks, updateAttacks] = useState(defaultCharacterData.attacks)
    const [features, updateFeatures] = useState(defaultCharacterData.features)
    const [loading, setLoading] = useState(false)

    useEffect((characterId) => {
        const updateCharacter = (data) => {
            updateGeneral(data.general)
            updateAttributes(data.attributes)
            updateSkills(data.skills)
            updateFeatures(data.features)
            updateAttacks(data.attacks)
        }
        if (characterId) {
            getCharacterData(characterId, updateCharacter, setLoading)
        }
    }, [])

  useEffect((characterId) => {
    const updateCharacter = (data) => {
      updateGeneral(data.general);
      updateAttributes(data.attributes);
      updateSkills(data.skills);
      updateFeatures(data.features);
    };
    if (characterId) {
      getCharacterData(characterId, updateCharacter, setLoading);
    }
  }, []);

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
    <form name="character-sheet" id="sheet">
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
        <Combat attributes={attributes} proficiencyBonus={proficiencyBonus} attacks={attacks} updateAttacks={updateAttacks} />
        <Character features={features} />
      </div>
    </form>
  );
}

export default CharacterSheet;
