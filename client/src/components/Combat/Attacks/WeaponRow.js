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
  return (
    <div className="row">
      <span>{weapon.name}</span>
      <span className="attackMod">
        {sign}
        {attackMod}
      </span>
      <span className="damageSection">
        {weapon.damage.map((damageRow, i) => {
          return _printDamage(damageRow, abilityMod, weapon.magicBonus);
        })}
      </span>
      <span className="edit">
        <button
          onClick={(e) => {
            e.preventDefault();
            editCallback(index, weapon);
          }}
        >
          Edit
        </button>
      </span>
    </div>
  );
}

export default WeaponRow;
