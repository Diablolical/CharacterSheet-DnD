import { calcMod } from '../../Shared/helpers'

function Attribute ({ attribute, updateAttributeScore }) {
    let mod = calcMod(attribute.score);
    return (
        <div className="attributeContainer">
            <label className="attrLabel">{attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}</label>
            <span className="attrMod">{(mod > 0) ? "+" + mod : mod}</span>
            <div className="attrScore">
                <input type="number" min="1" max="30" name="{attribute.name}" className="attrInput" value={attribute.score} onChange={(e) => updateAttributeScore(attribute.name, e.target.value)} />
            </div>
        </div>
    )
}

export default Attribute 
