import { useState } from 'react'
import clone from 'clone'
import WeaponModal from './AddAttacks/WeaponModal'
import WeaponRow from './WeaponRow' 

const defaultWeaponData = {
    name: "",
    attribute: "strength",
    isProficient: false,
    range: "0",
    magicBonus: 0,
    critRange: "20",
    damage: [
        {
            damage: "",
            isPrimary: true,
            damageType: ""
        }
    ]
}

function _renderWeaponRows(weapons, editWeapon, attributes, proficiencyBonus) {
    console.log("rendering weapons: ", weapons)
    return(
        <div className="weaponsTable">
            <div className="row headerRow"><span>Name</span><span className="attackMod">Attack +/-</span><span>Damage</span><span className="edit">Edit</span></div>
            {weapons.map((weapon, i) => {
                console.log(i, weapon)
                return <WeaponRow
                            key={i}
                            index={i}
                            weapon={weapon}
                            editCallback={editWeapon}
                            attributes={attributes}
                            proficiencyBonus={proficiencyBonus}
                        />
            })}
        </div>
    )
}

function Attacks({ attributes, proficiencyBonus }) {
    const [addingWeapon, toggleAddWeapon] = useState(false)
    const [weapons, updateWeapons] = useState([])
    const [currentWeaponIndex, setCurrentWeaponIndex] = useState(0)
    const [currentWeapon, setCurrentWeapon] = useState(defaultWeaponData)

    const addWeapon = () => {
        console.log("cloning default: ", defaultWeaponData)
        const newWeapon = clone(defaultWeaponData)
        setCurrentWeapon(newWeapon)
        setCurrentWeaponIndex(weapons.length)
        toggleAddWeapon(true)
    }

    const closeWeaponModal = () => {
        toggleAddWeapon(false)
    }

    const editWeapon = (index, weapon) => {
        setCurrentWeapon(weapon)
        setCurrentWeaponIndex(index)
        toggleAddWeapon(true)
    }

    const saveWeapon = (weapon) => {
        const updated = [...weapons]
        updated[currentWeaponIndex] = weapon
        updateWeapons(updated)
        closeWeaponModal()
    }

    console.log("Adding weapon", addingWeapon)
    console.log("Current index", currentWeaponIndex)
    console.log("Current weapon", currentWeapon)
    return (
        <div id="attacks">
            <div className="block attacks">
                <span className="sectionLabel"><label>Attacks & Spellcasting</label></span>
                {weapons.length > 0 && _renderWeaponRows(weapons, editWeapon, attributes, proficiencyBonus)}
                <div className="buttonRow"><button title="Add Weapon" className="addButton addWeapon" onClick={(e) => { e.preventDefault(); addWeapon(); }}></button></div>
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
    )
}

export default Attacks
