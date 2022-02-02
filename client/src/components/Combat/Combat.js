import CombatStats from './Vitals/Vitals'
import Attacks from './Attacks/Attacks'
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
