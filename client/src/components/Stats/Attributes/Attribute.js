import { useState } from 'react'
import { calcMod } from '../../Shared/helpers'

function Attribute ({ attribute, defaultScore }) {
    console.log("Attribute " + attribute + " with default score " + defaultScore)
    const [score, setScore] = useState(defaultScore)
    console.log("Using score: " + score);
    let mod = calcMod(score);
    return (
        <div class="attributeContainer">
            <label class="attrLabel">{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</label>
            <span class="attrMod">{(mod > 0) ? "+" + mod : mod}</span>
            <div class="attrScore">
                <input type="text" name="{attribute}" class="attrInput" value={score} onChange={event => setScore(event.target.value)}/>
            </div>
        </div>
    )
}

export default Attribute 
