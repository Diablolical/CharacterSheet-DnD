import Vitals from './Vitals/Vitals'
import Attacks from './Attacks/Attacks'
import Equipment from './Equipment'

function Combat({ attributes, proficiencyBonus }) {
    return (
        <div className="col-third">
            <div className="container">
                <Vitals></Vitals>
                <Attacks
                    attributes={attributes}
                    proficiencyBonus={proficiencyBonus}
                />
                <Equipment></Equipment>
            </div>
        </div>
    )
}

export default Combat
