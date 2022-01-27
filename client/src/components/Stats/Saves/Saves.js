import SavesRow from "./SavesRow"

function _renderSaves(attributes, proficiencyBonus) {
    const renderArray = []
    attributes.forEach((attr) => {
      renderArray.push(<SavesRow key={attr.name} attribute={attr} proficiencyBonus={proficiencyBonus} />)
    })
    return renderArray
  }

function Saves({ attributes, proficiencyBonus }) {
    return (
        <article id="saves">
            <div class="block">
                <h3>Saving Throws</h3>
                {_renderSaves(attributes, proficiencyBonus)}
            </div>
        </article>
    )
}

export default Saves
