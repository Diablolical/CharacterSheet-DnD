import CombatStats from './CombatStats/CombatStats'
import Attacks from './Attacks'
import Equipment from './Equipment'

function Combat() {
    return (
        <div class="col-third">
            <div class="container">
                <CombatStats></CombatStats>
                <Attacks></Attacks>
                <Equipment></Equipment>
            </div>
        </div>
    )
}

export default Combat
