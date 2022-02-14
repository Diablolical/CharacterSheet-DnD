import { calcMod } from "../../Shared/helpers"
import EditButton from "../../Common/EditButton"

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
        <tr>
            <td className="attackCol">{spell.name}</td>
            <td className="attackCol attackMod">{sign}{attackMod}</td>
            <td className="attackCol">
                {spell.damage.map((damageRow, i) => {
                    return _printDamage(damageRow, damageMod)
                })}
            </td>
            <td className="attackCol edit"><EditButton callback={() => editCallback(index, spell)} /></td>
        </tr>
    )
}

export default SpellAttackRow
