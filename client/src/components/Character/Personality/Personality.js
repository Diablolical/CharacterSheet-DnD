import { useState } from "react"
import PersonalityBlock from "./PersonalityBlock"

function _renderPersonalityBlocks (blocks, updateCallback) {
    const renderArray = []
    blocks.forEach((block) => {
      renderArray.push(<PersonalityBlock key={block.name} name={block.name} text={block.text} onChange={updateCallback}/>)
    })
    return renderArray
}

function Personality ({ personality }) {

    const [traits, updateTraits] = useState(personality.traits)
    const [ideals, updateIdeals] = useState(personality.ideals)
    const [bonds, updateBonds] = useState(personality.bonds)
    const [flaws, updateFlaws] = useState(personality.flaws)

    const personalityBlocks = [
        { name: "traits", text: traits, callback: updateTraits },
        { name: "ideals", text: ideals, callback: updateIdeals },
        { name: "bonds", text: bonds, callback: updateBonds },
        { name: "flaws", text: flaws, callback: updateFlaws }
    ]

    const updateCallback = (name, value) => {
        personalityBlocks.forEach((block) => {
            if (block.name === name) {
                console.log("updating value for block %s from child component to %s", name, value)
                personality[name] = value
                block.callback(value)
            }
        })
    }
    
    return (
        <div id="Personality">
            {_renderPersonalityBlocks(personalityBlocks, updateCallback)}
        </div>
    )
}

export default Personality
