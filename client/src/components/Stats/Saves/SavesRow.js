import { calcMod } from "../../Shared/helpers"

function SavesRow ({ attribute, proficiencyBonus, canAdd, updateProficiency }) {

    const handleCheck = () => {
        updateProficiency(attribute.name, !attribute.isProficient)
    }
    let bonus = attribute.isProficient ? proficiencyBonus : 0;
    let mod = calcMod(attribute.score) + bonus;
    return (
        <div class="skillRow">
            <input type="checkbox" name="{attribute.name}" checked={attribute.isProficient} onChange={handleCheck} disabled={!canAdd} />
            <span class="skillMod">{(mod > 0) ? "+" + mod : mod}</span>
            <label class="skillName">{attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}</label>
        </div>
    )
}

export default SavesRow
