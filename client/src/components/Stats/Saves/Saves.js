import SavesRow from "./SavesRow"

function renderSaves(attributes) {
    const renderArray = []
    attributes.forEach((score, attr) => {
      renderArray.push(<SavesRow key={attr} attribute={attr} />)
    })
    return renderArray
  }

function Saves({ attributes }) {
    return (
        <article id="saves">
            <div class="block">
                <h3>Saving Throws</h3>
                {renderSaves(attributes)}
            </div>
        </article>
    )
}

export default Saves
