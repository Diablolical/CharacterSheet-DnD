import { useState, useEffect, useMemo } from "react";
import Modal from "react-modal";
import clone from "clone";
import { calcMod } from "../../../Shared/helpers";
import DamageType from "./DamageType";

function _renderAttrOptions(attributes) {
  const renderArray = [];
  attributes.forEach((attr) => {
    renderArray.push(
      <option key={attr.name} value={attr.name}>
        {attr.name.charAt(0).toUpperCase() + attr.name.slice(1)}
      </option>
    );
  });
  return renderArray;
}

function WeaponModal({
  isOpen,
  toggleClose,
  attributes,
  proficiencyBonus,
  weaponData,
  saveWeapon,
}) {
  const [weapon, updateWeapon] = useState(weaponData);
  const [attrSelected, updateAttrSelected] = useState(attributes[0]);
  console.log("attribute selected ", attrSelected);
  console.log("weapon data passed: ", weapon);
  const bonus = useMemo(
    () => (weapon.isProficient ? proficiencyBonus : 0),
    [weapon, proficiencyBonus]
  );
  const abilityMod = useMemo(() => calcMod(attrSelected.score), [attrSelected]);

  useEffect(() => {
    updateWeapon(weaponData);
    const attr = attributes.find((obj) => {
      return obj.name === weaponData.attribute;
    });
    updateAttrSelected(attr);
  }, [attributes, weaponData]);

  const handleAttrSelect = (name) => {
    const attr = attributes.find((obj) => {
      return obj.name === name;
    });
    updateAttrSelected(attr);
    updateWeaponProp("attribute", name);
  };

  const updateWeaponProp = (prop, value) => {
    const updated = clone(weapon);
    updated[prop] = value;
    updateWeapon(updated);
  };

  const handleCloseWithoutSaving = () => {
    console.log("reverting to:", weaponData);
    updateWeapon(weaponData);
    toggleClose();
  };

  const canRemove = () => {
    return weapon.damage.length > 1;
  };

  const addDamageType = () => {
    const damage = [...weapon.damage];
    damage.push({
      value: "",
      isPrimary: false,
      damageType: "",
    });
    updateWeaponProp("damage", damage);
  };

  const removeDamageType = (index) => {
    console.log("remove damage index: ", index);
    if (canRemove() && index > 0) {
      weapon.damage.splice(index, 1);
      const damage = weapon.damage;
      updateWeaponProp("damage", damage);
    }
  };

  const updateDamageType = (index, value) => {
    const damage = [...weapon.damage];
    damage[index] = value;
    updateWeaponProp("damage", damage);
  };
  let attackMod = abilityMod + bonus + weapon.magicBonus;
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={toggleClose}
      className="AddWeaponModal"
      appElement={document.getElementById("root")}
      style={{
        overlay: {
          zIndex: 100,
        },
      }}
    >
      <h3>Add Weapon</h3>
      <div className="options">
        <div className="row">
          <label>Name:</label>
          <input
            type="text"
            className="mediumInput"
            name="attackName"
            value={weapon.name}
            onChange={(e) => updateWeaponProp("name", e.target.value)}
          />
        </div>
        <div className="row">
          <label>Attack:</label>
          <select
            name="attackAttr"
            onChange={(e) => {
              handleAttrSelect(e.target.value);
            }}
            value={attrSelected.name}
          >
            {_renderAttrOptions(attributes, attrSelected)}
          </select>
          <span> + </span>
          <span>{attackMod}</span>
          <input
            type="checkbox"
            name="attackProficient"
            checked={weapon.isProficient}
            onChange={() =>
              updateWeaponProp("isProficient", !weapon.isProficient)
            }
          />
          <label>Proficient</label>
        </div>
        <div className="row">
          <label>Range:</label>
          <input
            type="number"
            name="weaponRange"
            className="smallInput"
            placeholder="80 feet"
            value={weapon.range}
            onChange={(e) => updateWeaponProp("range", e.target.value)}
          />
          <span> / </span>
          <input
            type="number"
            name="weaponLongRange"
            className="smallInput"
            placeholder="360 feet"
            value={weapon.longRange}
            onChange={(e) => updateWeaponProp("longRange", e.target.value)}
          />
        </div>
        <div className="row">
          <label>Magic Bonus:</label>
          <input
            type="number"
            className="smallInput"
            name="magicBonus"
            placeholder="0"
            value={weapon.magicBonus}
            onChange={(e) =>
              updateWeaponProp("magicBonus", parseInt(e.target.value))
            }
          />
        </div>
        <div className="row">
          <label>Crit Range:</label>
          <input
            type="text"
            className="smallInput"
            name="attr_atkcritrange"
            defaultValue="20"
            placeholder="20"
          />
        </div>
        {weapon.damage.map((damageType, i) => {
          return (
            <DamageType
              key={i}
              damage={damageType}
              abilityMod={abilityMod}
              magicBonus={weapon.magicBonus}
              updateDamage={(value) => updateDamageType(i, value)}
              remove={() => removeDamageType(i)}
            />
          );
        })}
        <div className="row">
          <button
            onClick={(e) => {
              e.preventDefault();
              addDamageType();
            }}
          >
            Add Damage Type
          </button>
        </div>
      </div>
      <div className="row">
        <button
          onClick={(e) => {
            e.preventDefault();
            saveWeapon(weapon);
          }}
        >
          Save
        </button>
      </div>
      <div
        id="modalClose"
        title="Close without saving"
        onClick={handleCloseWithoutSaving}
      >
        X
      </div>
    </Modal>
  );
}

export default WeaponModal;
