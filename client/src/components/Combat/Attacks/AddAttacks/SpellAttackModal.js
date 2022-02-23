import { useState, useEffect, useMemo } from 'react'
import Modal from 'react-modal'
import clone from 'clone'
import { calcMod } from '../../../Shared/helpers'
import AttributeSelector from '../../../Common/AttributeSelector'
import DamageType from './DamageType'

function SpellAttackModal({ isOpen, toggleClose, attributes, proficiencyBonus, spellData, saveAttack }) {
    const [spellAttack, updateSpell] = useState(spellData)
    const [attrSelected, updateAttrSelected] = useState(attributes[0])
    
    const abilityMod = useMemo(() => calcMod(attrSelected.score), [attrSelected])

    useEffect(() => {
        updateSpell(spellData)
        const attr = attributes.find((obj) => { return obj.name === spellData.attribute})
        updateAttrSelected(attr)
    }, [attributes, spellData])

    const handleAttrSelect = (name) => {
        const attr = attributes.find((obj) => { return obj.name === name})
        updateAttrSelected(attr)
        updateProp("attribute", name)
    }

    const updateProp = (prop, value) => {
        const updated = clone(spellAttack)
        updated[prop] = value
        updateSpell(updated)
    }

    const handleCloseWithoutSaving = () => {
        updateSpell(spellData)
        toggleClose()
    }

    const canRemove = () => {
        return spellAttack.damage.length > 1
    }

    const addDamageType = () => {
        const damage = [...spellAttack.damage]
        damage.push({
            value: "",
            addModifier: false,
            damageType: "",
            flatDamage: 0
        })
        updateProp("damage", damage)
    }

    const removeDamageType = (index) => {
        if (canRemove() && index > 0) {
            spellAttack.damage.splice(index,1)
            const damage = spellAttack.damage
            updateProp("damage", damage)
        }
    }

    const updateDamageType = (index, value) => {
        const damage = [...spellAttack.damage]
        damage[index] = value
        updateProp("damage", damage)
    }
    const attackMod = abilityMod + proficiencyBonus;
    const signedMod = (attackMod >= 0) ? "+"+attackMod : "-"+attackMod;
    return(
        <Modal 
            isOpen={isOpen}
            onRequestClose={toggleClose}
            className="AddAttackModal AddSpell"
            appElement={document.getElementById('root')}
            style={{
                overlay: {
                    zIndex: 100
                }
            }}
        >
            <h3>Add Spell Attack</h3>
            <div className="options">
                <div className="row">
                    <label>Spell Name:</label>
                    <input
                        type="text"
                        className="mediumInput"
                        name="attackName"
                        value={spellAttack.name}
                        onChange={(e) => updateProp("name", e.target.value)}
                    />
                </div>
                <div className="row">
                    <label>Casting Ability:</label>
                    <AttributeSelector
                        name="spellcastingAttr"
                        attributes={attributes}
                        selected={attrSelected}
                        selectHandler={handleAttrSelect}
                    />
                    <input
                        type="checkbox"
                        name="addModifier"
                        checked={spellAttack.addModifier}
                        onChange={() => updateProp("addModifier", !spellAttack.addModifier)}
                    />
                     <label>Add Modifier to Damage?</label>
                </div>
                <div className="row">
                    <label>Spell Attack Modifier:</label>
                    <input type="text" className="smallInput" value={signedMod} name="spellAttackMod" readOnly="readonly" />
                </div>
                <div className="row">
                    <label>Range:</label>
                    <input type="text" name="spellRange" placeholder="60 feet" value={spellAttack.range} onChange={(e) => updateProp("range", e.target.value)}/>
                </div>
                <div className="damageType">
                    <div className="row">
                        <label>Damage:</label>
                    </div>
                    {spellAttack.damage.map((damageType, i) => {
                        damageType.addModifier = spellAttack.addModifier
                        return <DamageType
                                    key={i}
                                    index={i}
                                    damage={damageType}
                                    abilityMod={abilityMod}
                                    magicBonus={0}
                                    updateDamage={(value) => updateDamageType(i, value)}
                                    remove={() => removeDamageType(i)}
                                />
                    })
                    }
                </div>
                <div className="row">
                    <button title="Add damage type" className="plusButton flatButton" onClick={(e) => { e.preventDefault(); addDamageType(); }}>+</button>
                </div>
            </div>
            <div className="row saveRow">
                <button id="modalSave" className="flatButton" onClick={(e) => { e.preventDefault(); saveAttack(spellAttack); }}>Save</button>
            </div>
            <div id="modalClose" title="Close without saving" onClick={handleCloseWithoutSaving}>X</div>
        </Modal>
    )
}

export default SpellAttackModal
