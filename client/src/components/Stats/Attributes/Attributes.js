import Attribute from './Attribute'

function _renderAttributes(attributes, updateAttribute) {
  const renderArray = []
  attributes.forEach((attr) => {
    renderArray.push(<Attribute key={attr.name} attribute={attr} updateAttribute={updateAttribute} />)
  })
  return renderArray
}

function Attributes({ attributes, updateAttribute }) {
  return (
      <article id="attributes">
          {_renderAttributes(attributes, updateAttribute)}
      </article>   
  )
}

export default Attributes
