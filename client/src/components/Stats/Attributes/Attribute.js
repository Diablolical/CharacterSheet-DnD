function Attribute ({ attribute }) {
    return (
        <div class="attributeContainer">
            <label class="attrLabel">{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</label>
            <span class="attrMod"></span>
            <div class="attrScore">
                <input type="text" name="{attribute}" class="attrInput"/>
            </div>
        </div>
    )
}

export default Attribute 
