import { useState } from "react"
import StatBlock from "./StatBlock"

function CombatStats() {
    const [ac, updateAc] = useState(10)
    const [initiative, updateInitiative] = useState(0)
    const [speed, updateSpeed] = useState(30)

    return (
        <div id="combatStats">
            <div class="block combatStats">
                <StatBlock name="Armor Class" value={ac} onChange={updateAc}/>
                <StatBlock name="Initiative" value={initiative} onChange={updateInitiative} />
                <StatBlock name="Speed" value={speed} onChange={updateSpeed} />
            </div>
        </div>
    )
}

export default CombatStats
