import Attribute from './Attribute'

function _renderAttributes(attributes, updateAttributeScore) {
  const renderArray = []
  attributes.forEach((attr) => {
    renderArray.push(<Attribute key={attr.name} attribute={attr} updateAttributeScore={updateAttributeScore} />)
  })
  return renderArray
}

function Attributes({ attributes, updateAttributeScore }) {
  return (
      <article id="attributes">
          {_renderAttributes(attributes, updateAttributeScore)}
      </article>   
  )
}

export default Attributes
