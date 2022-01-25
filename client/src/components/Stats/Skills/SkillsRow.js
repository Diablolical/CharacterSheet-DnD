function SkillsRow ({ skill }) {
    return (
        <div class="skillRow">
            <input type="checkbox" name="{skill}"/>
            <span class="skillMod"></span>
            <label class="skillName">{skill.charAt(0).toUpperCase() + skill.slice(1)}</label>
        </div>
    )
}

export default SkillsRow