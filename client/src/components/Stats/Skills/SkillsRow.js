function SkillsRow ({ skill }) {
    return (
        <div class="skillRow">
            <input type="checkbox" name="{skill.name}"/>
            <span class="skillMod"></span>
            <label class="skillName">{skill.name.charAt(0).toUpperCase() + skill.name.slice(1)}</label>
        </div>
    )
}

export default SkillsRow