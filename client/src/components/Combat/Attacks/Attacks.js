import { useState } from 'react'
import clone from 'clone'
import WeaponModal from './AddAttacks/WeaponModal'
import WeaponRow from './WeaponRow' 
import SpellAttackModal from './AddAttacks/SpellAttackModal'
import SpellAttackRow from './SpellAttackRow'

const defaultWeaponData = {
    name: "",
    attribute: "strength",
    isProficient: false,
    range: "0",
    longRange: "0",
    magicBonus: 0,
    critRange: "20",
    damage: [
      {
        damage: "",
        isPrimary: true,
        damageType: "",
      },
    ],
};

const defaultSpellAttack = {
    name: "",
    type: "spellAttack",
    attribute: "intelligence",
    range: "",
    isProficient: true,
    addModifier: false,
    areaSize: "",
    areaShape: "",
    damage: [
        {
            damage: "",
            addModifier: false,
            damageType: "",
        },
    ],
};

function _renderAttackRows(attacks, editWeapon, editSpell, attributes, proficiencyBonus) {
    return(
        <table className="weaponsTable">
            <col className='attackCol'></col>
            <col className="attackCol attackMod"></col>
            <col className='attackCol'></col>
            <col className="attackCol edit"></col>
            <thead>
                <tr className="headerRow">
                    <th className="attackCol">Name</th>
                    <th className="attackCol attackMod">Attack +/-</th>
                    <th className="attackCol">Damage</th>
                    <th className="attackCol edit">Edit</th>
                </tr>
            </thead>
                {attacks.map((attack, i) => {
                    switch (attack.type) {
                        case 'weapon':
                            return <WeaponRow
                                key={i}
                                index={i}
                                weapon={attack}
                                editCallback={editWeapon}
                                attributes={attributes}
                                proficiencyBonus={proficiencyBonus}
                            />
                        case 'spellAttack':
                            return <SpellAttackRow
                                key={i}
                                index={i}
                                spell={attack}
                                editCallback={editSpell}
                                attributes={attributes}
                                proficiencyBonus={proficiencyBonus}
                            />
                        default:
                                return ""
                    }
                })}
        </table>
    )
}

function Attacks({ attributes, proficiencyBonus, attacks, updateAttacks }) {
    const [addingWeapon, toggleAddWeapon] = useState(false)
    const [currentWeapon, setCurrentWeapon] = useState(defaultWeaponData)
    const [addingSpell, toggleAddSpell] = useState(false)
    const [currentSpell, setCurrentSpell] = useState(defaultSpellAttack)
    const [currentIndex, setcurrentIndex] = useState(0)

    const addWeapon = () => {
        const newWeapon = clone(defaultWeaponData)
        setCurrentWeapon(newWeapon)
        setcurrentIndex(attacks.length)
        toggleAddWeapon(true)
    }

    const addSpell = () => {
        const newSpell = clone(defaultSpellAttack)
        setCurrentSpell(newSpell)
        setcurrentIndex(attacks.length)
        toggleAddSpell(true)
    }

    const closeModal = () => {
        toggleAddWeapon(false)
        toggleAddSpell(false)
    }

    const editWeapon = (index, weapon) => {
        setCurrentWeapon(weapon)
        setcurrentIndex(index)
        toggleAddWeapon(true)
    }

    const editSpell = (index, spell) => {
        setCurrentSpell(spell)
        setcurrentIndex(index)
        toggleAddSpell(true)
    }

    const saveAttack = (attack) => {
        const updated = [...attacks]
        updated[currentIndex] = attack
        updateAttacks(updated)
        closeModal()
    }
    return (
        <div id="attacks">
            <div className="block attacks">
                <span className="sectionLabel"><label>Attacks & Spellcasting</label></span>
                {attacks.length > 0 && _renderAttackRows(attacks, editWeapon, editSpell, attributes, proficiencyBonus)}
                <div className="buttonRow">
                    <button title="Add Weapon" className="addButton addWeapon" onClick={(e) => { e.preventDefault(); addWeapon(); }}></button>
                    <button title="Add Spell Attack" className="addButton addSpell" onClick={(e) => { e.preventDefault(); addSpell(); }}>+</button>
                </div>
            </div>
            <WeaponModal
                isOpen={addingWeapon}
                toggleClose={closeModal}
                attributes={attributes}
                proficiencyBonus={proficiencyBonus}
                weaponData={currentWeapon}
                saveAttack={saveAttack}
            />
            <SpellAttackModal
                isOpen={addingSpell}
                toggleClose={closeModal}
                attributes={attributes}
                proficiencyBonus={proficiencyBonus}
                spellData={currentSpell}
                saveAttack={saveAttack}
            />
        </div>
      </div>
      <WeaponModal
        isOpen={addingWeapon}
        toggleClose={closeWeaponModal}
        attributes={attributes}
        proficiencyBonus={proficiencyBonus}
        weaponData={currentWeapon}
        saveWeapon={saveWeapon}
      />
    </div>
  );
}

export default Attacks;
