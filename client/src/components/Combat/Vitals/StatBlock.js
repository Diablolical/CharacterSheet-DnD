function StatBlock ({ name, value, onChange }) {
    return (
        <div className="attributeContainer">
            <label className="attrLabel">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <span className="attrMod"><input className="attrInput" type="number" name={name} value={value} onChange={(e) => {onChange(e.target.value)}}></input></span>
        </div>
    )
}

export default StatBlock 
