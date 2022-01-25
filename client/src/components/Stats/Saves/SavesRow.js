

function SavesRow ({ attribute }) {
    return (
        <div class="skillRow">
            <input type="checkbox" name="{attr}"/>
            <span class="skillMod"></span>
            <label class="skillName">{attribute.charAt(0).toUpperCase() + attribute.slice(1)}</label>
        </div>
    )
}

export default SavesRow