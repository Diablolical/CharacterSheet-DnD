import Attribute from './Attribute'

function renderAttributes(attributes) {
  const renderArray = []
  attributes.forEach((score, attr) => {
    renderArray.push(<Attribute key={attr} attribute={attr} defaultScore={score}/>)
  })
  return renderArray
}

function Attributes({ attributes }) {
  return (
      <article id="attributes">
          {renderAttributes(attributes)}
      </article>   
  )
}

export default Attributes
