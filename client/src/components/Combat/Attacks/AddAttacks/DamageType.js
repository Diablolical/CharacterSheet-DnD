import clone from "clone";

function DamageType({ damage, abilityMod, magicBonus, updateDamage, remove }) {
  const update = (name, value) => {
    const updated = clone(damage);
    updated[name] = value;
    updateDamage(updated);
  };
  const damageMod = damage.isPrimary ? abilityMod + magicBonus : 0;
  return (
    <div className="damageType">
      <div className="row">
        <label>Damage:</label>
        <input
          type="text"
          name="damage"
          className="smallInput"
          placeholder="1d6"
          value={damage.damage}
          onChange={(e) => update("damage", e.target.value)}
        />
        {damage.isPrimary && (
          <>
            <span>+&nbsp;</span>
            <span>{damageMod}</span>
          </>
        )}
        <input
          type="text"
          name="damageType"
          placeholder="Slashing"
          value={damage.damageType}
          onChange={(e) => update("damageType", e.target.value)}
        />
        {!damage.isPrimary && (
          <>
            <div className="removeDamageType" title="Delete" onClick={remove}>
              X
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default DamageType;
