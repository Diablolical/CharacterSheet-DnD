import Vitals from './Vitals/Vitals'
import Attacks from './Attacks/Attacks'
import Equipment from './Equipment/Equipment'

function Combat({ attributes, proficiencyBonus, attacks, updateAttacks }) {
    return (
        <div className="col-third">
            <div className="container">
                <Vitals></Vitals>
                <Attacks
                    attributes={attributes}
                    proficiencyBonus={proficiencyBonus}
                    attacks={attacks}
                    updateAttacks={updateAttacks}
                />
                <Equipment></Equipment>
            </div>
        </div>
    )
}

export default Combat
