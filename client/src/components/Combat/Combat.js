import Vitals from './Vitals/Vitals'
import Attacks from './Attacks/Attacks'
import Equipment from './Equipment/Equipment'

function Combat({ attributes, proficiencyBonus, attacks, updateAttacks, items, updateItems }) {
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
                <Equipment
                    items={items}
                    updateItems={updateItems}
                />
            </div>
        </div>
    )
}

export default Combat;
