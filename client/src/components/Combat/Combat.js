import CombatStats from './CombatStats/CombatStats'
import Attacks from './Attacks'
import Equipment from './Equipment'

function Combat() {
    return (
        <div className="col-third">
            <div className="container">
                <CombatStats></CombatStats>
                <Attacks></Attacks>
                <Equipment></Equipment>
            </div>
        </div>
    )
}

export default Combat
