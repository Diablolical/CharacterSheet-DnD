import { calcMod } from "../../Shared/helpers"
import EditButton from "../../Common/EditButton"

function _printDamage (index, damage, damageMod) {
    const sign = damageMod >= 0 ? "+" : "-"
    return(
        <span className="damageRow" key={index}>
            {damage.damage}&nbsp;
            {damageMod > 0 && <span>{sign}&nbsp;{damageMod}&nbsp;</span>}
            {damage.damageType}</span>
    )
}

function SpellAttackRow({ 
    index,
    spell,
    editCallback,
    removeAttack,
    attributes,
    proficiencyBonus 
}) {
    const attr = attributes.find((obj) => { return obj.name === spell.attribute})
    const abilityMod = calcMod(attr.score)
    const attackMod = abilityMod + proficiencyBonus
    const sign = attackMod > 0 ? "+" : "-"
    const damageMod = spell.addModifier ? abilityMod : 0
    return(
        <tr>
            <td className="attackCol name">{spell.name}</td>
            <td className="attackCol attackMod">{sign}{attackMod}</td>
            <td className="attackCol damage">
                {spell.damage.map((damageRow, i) => {
                    return _printDamage(i, damageRow, damageMod)
                })}
            </td>
            <td className="attackCol edit"><EditButton callback={() => editCallback(index, spell)} /></td>
            <td className="attackCol delete"><span title="Remove Spell" className="deleteButton" onClick={() => removeAttack()}>X</span></td>
        </tr>
    )
}

export default SpellAttackRow
