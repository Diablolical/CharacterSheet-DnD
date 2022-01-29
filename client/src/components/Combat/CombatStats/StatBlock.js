function StatBlock ({ name, value, onChange }) {
    return (
        <div class="attributeContainer">
            <label class="attrLabel">{name.charAt(0).toUpperCase() + name.slice(1)}</label>
            <span class="attrMod"><input class="attrInput" type="number" name={name} value={value} onChange={(e) => {onChange(e.target.value)}}></input></span>
        </div>
    )
}

export default StatBlock 
