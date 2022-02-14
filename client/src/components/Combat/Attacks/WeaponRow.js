import { calcMod } from "../../Shared/helpers"
import EditButton from "../../Common/EditButton"


function _printDamage(damage, mod, bonus) {
  const damageMod = damage.isPrimary ? mod + bonus : 0;
  const sign = damageMod >= 0 ? "+" : "-";
  return (
    <span className="damageRow">
      {damage.damage}&nbsp;{sign}&nbsp;{damageMod}&nbsp;{damage.damageType}
    </span>
  );
}

function WeaponRow({
  index,
  weapon,
  editCallback,
  removeAttack,
  attributes,
  proficiencyBonus,
}) {
  const attr = attributes.find((obj) => {
    return obj.name === weapon.attribute;
  });
  const bonus = weapon.isProficient ? proficiencyBonus : 0;
  const abilityMod = calcMod(attr.score);
  const attackMod = abilityMod + bonus + weapon.magicBonus;
  const sign = attackMod > 0 ? "+" : "-";
  return(
    <tr>
      <td className="attackCol name">{weapon.name}</td>
      <td className="attackCol attackMod">{sign}{attackMod}</td>
      <td className="attackCol damage">
        <div className="damageSection">
          {weapon.damage.map((damageRow, i) => {
            return _printDamage(damageRow, abilityMod, weapon.magicBonus)
          })}
        </div>
      </td>
      <td className="attackCol edit">
        <EditButton callback={() => editCallback(index, weapon)} />
      </td>
      <td className="attackCol delete">
        <span title="Remove Weapon" className="deleteButton" onClick={() => removeAttack()}>X</span>
      </td>
    </tr>
  )
}

export default WeaponRow;
