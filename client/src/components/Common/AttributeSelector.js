function _renderAttrOptions(attributes) {
    const renderArray = []
    attributes.forEach((attr) => {
        renderArray.push(<option key={attr.name} value={attr.name}>{attr.name.charAt(0).toUpperCase() + attr.name.slice(1)}</option>)
    })
    return renderArray
}

function AttributeSelector({ name, attributes, selected, selectHandler }) {
    return(
        <select name={name} onChange={(e) => {selectHandler(e.target.value)}} value={selected.name}>
            {_renderAttrOptions(attributes)}
        </select>
    )
}

export default AttributeSelector
