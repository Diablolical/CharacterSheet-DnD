import { useState } from "react"
import { calcMod } from "../../Shared/helpers"

function SavesRow ({ attribute, proficiencyBonus }) {
    const [isProficient, updateProficiency] = useState(false)

    const handleCheck = () => {
        updateProficiency(!isProficient)
    }
    let bonus = isProficient ? proficiencyBonus : 0;
    let mod = calcMod(attribute.score) + bonus;
    return (
        <div class="skillRow">
            <input type="checkbox" name="{attribute.name}" checked={!!isProficient} onChange={handleCheck}/>
            <span class="skillMod">{(mod > 0) ? "+" + mod : mod}</span>
            <label class="skillName">{attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}</label>
        </div>
    )
}

export default SavesRow