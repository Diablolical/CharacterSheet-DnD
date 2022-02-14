import { useState, useEffect, useMemo } from 'react'
import Modal from 'react-modal'
import clone from 'clone'
import { calcMod } from '../../../Shared/helpers'
import AttributeSelector from '../../../Common/AttributeSelector'
import DamageType from './DamageType' 

function WeaponModal({ isOpen, toggleClose, attributes, proficiencyBonus, weaponData, saveAttack }) {
    const [weapon, updateWeapon] = useState(weaponData)
    const [attrSelected, updateAttrSelected] = useState(attributes[0])

    const bonus = useMemo(() => weapon.isProficient ? proficiencyBonus : 0, [weapon, proficiencyBonus])
    const abilityMod = useMemo(() => calcMod(attrSelected.score), [attrSelected])

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
      updateWeapon(weaponData)
      toggleClose()
  }

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
    if (canRemove() && index > 0) {
      weapon.damage.splice(index, 1);
      const damage = weapon.damage;
      updateWeaponProp("damage", damage);
    }
  };
  const updateDamageType = (index, value) => {
      const damage = [...weapon.damage]
      damage[index] = value
      updateWeaponProp("damage", damage)
  }
  const attackMod = abilityMod + bonus + weapon.magicBonus
  return(
      <Modal 
          isOpen={isOpen}
          onRequestClose={toggleClose}
          className="AddAttackModal AddWeapon"
          appElement={document.getElementById('root')}
          style={{
              overlay: {
                  zIndex: 100
              }
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
                  <AttributeSelector
                      name="attackAttr"
                      attributes={attributes}
                      selected={attrSelected}
                      selectHandler={handleAttrSelect}
                  />
                  <span> + </span>
                  <span>{attackMod}</span>
                  <input
                      type="checkbox"
                      name="attackProficient"
                      checked={weapon.isProficient}
                      onChange={() => updateWeaponProp("isProficient", !weapon.isProficient)}
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
                      onChange={(e) => updateWeaponProp("magicBonus", parseInt(e.target.value))}
                  />
              </div>
              <div className="row">
                  <label>Crit Range:</label>
                  <input type="text" className="smallInput" name="attr_atkcritrange" defaultValue="20" placeholder="20" />
              </div>
              <div className="damageType">
                  <div className="row">
                      <label>Damage:</label>
                  </div>
                  {weapon.damage.map((damageType, i) => {
                      return <DamageType
                                  key={i}
                                  index={i}
                                  damage={damageType}
                                  abilityMod={abilityMod}
                                  magicBonus={weapon.magicBonus}
                                  updateDamage={(value) => updateDamageType(i, value)}
                                  remove={() => removeDamageType(i)}
                              />
                  })
                  }
              </div>
              <div className="row">
                  <button title="Add damage type" class="flatButton plusButton" onClick={(e) => { e.preventDefault(); addDamageType(); }}>+</button>
              </div>
          </div>
          <div className="row saveRow">
              <button
                onClick={(e) => {
                  e.preventDefault();
                  saveWeapon(weapon);
                }}
              >
          </div>
          <div
            id="modalClose"
            title="Close without saving"
            onClick={handleCloseWithoutSaving}
          >
            X
          </div>
      </Modal>
   )
}

export default WeaponModal;
