import { calcMod } from "../../Shared/helpers"

function _printDamage (damage, damageMod) {
    const sign = damageMod >= 0 ? "+" : "-"
    return(
        <span className="damageRow">
            {damage.damage}&nbsp;
            {damageMod > 0 && <span>{sign}&nbsp;{damageMod}&nbsp;</span>}
            {damage.damageType}</span>
    )
}

function SpellAttackRow({ index, spell, editCallback, attributes, proficiencyBonus }) {
    const attr = attributes.find((obj) => { return obj.name === spell.attribute})
    const abilityMod = calcMod(attr.score)
    const attackMod = abilityMod + proficiencyBonus
    const sign = attackMod > 0 ? "+" : "-"
    const damageMod = spell.addModifier ? abilityMod : 0
    return(
        <div className="row">
            <span>{spell.name}</span>
            <span className="attackMod">{sign}{attackMod}</span>
            <span className="damageSection">
                {spell.damage.map((damageRow, i) => {
                    return _printDamage(damageRow, damageMod)
                })}
            </span>
            <span className="edit"><button onClick={(e) => {e.preventDefault(); editCallback(index, spell);}}>Edit</button></span>
        </div>
    )
}

export default SpellAttackRow
