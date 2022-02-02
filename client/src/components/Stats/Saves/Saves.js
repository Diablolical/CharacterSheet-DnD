import SavesRow from "./SavesRow"

function _renderSaves(attributes, proficiencyBonus, canAdd, updateProficiency) {
    const renderArray = []
    attributes.forEach((attr) => {
      renderArray.push(<SavesRow 
        key={attr.name}
        attribute={attr}
        proficiencyBonus={proficiencyBonus}
        canAdd={canAdd}
        updateProficiency={updateProficiency} 
    />)
    })
    return renderArray
  }

function Saves({ attributes, proficiencyBonus, updateSaveProficiency }) {
    const maxProficient = 2

    let currentProficiencies = attributes.filter((attr => { return attr.isProficient })).length
    
    const canAdd = () => {
        return currentProficiencies < maxProficient
    }

    const updateProficiency = (name, value) => {
        if ((value && canAdd()) || !value) {
            updateSaveProficiency(name, value)
        }
    }
    
    return (
        <div id="saves">
            <div className="block">
                <div className="sectionLabel"><label>Saving Throws</label></div>
                {_renderSaves(attributes, proficiencyBonus, canAdd, updateProficiency)}
            </div>
        </div>
    )
}

export default Saves
