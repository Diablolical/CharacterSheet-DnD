import clone from "clone";

function DamageType ({ index, damage, abilityMod, magicBonus, updateDamage, remove }) {
    const update = (name, value) => {
        const updated = clone(damage)
        updated[name] = value
        updateDamage(updated)
    }
    let damageMod = 0
    if (damage?.isPrimary) {
        damageMod = abilityMod + magicBonus
    }
    if (damage?.addModifier) {
        damageMod = abilityMod
    }
    return (
            <div className="row">
                <input 
                    type="text"
                    name="damage"
                    className="smallInput"
                    placeholder="1d6"
                    value={damage.damage}
                    onChange={(e) => update('damage', e.target.value)} 
                />
                {(damage?.isPrimary || damage?.addModifier) && 
                    <>
                      <span>+&nbsp;</span>
                      <span>{damageMod}</span>
                    </>
                }
                {!damage?.isPrimary &&
                    <><span className="spacer"></span></>}
                <input
                  type="text"
                  name="damageType"
                  placeholder="Slashing"
                  value={damage.damageType}
                  onChange={(e) => update("damageType", e.target.value)}
                />
                {index > 0 && 
                    <>
                      <div className="removeDamageType" title="Delete" onClick={remove}>
                        X
                      </div>
                    </>
                }
            </div>
    )
}

export default DamageType;
