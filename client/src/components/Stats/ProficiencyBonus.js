function ProficiencyBonus ({ proficiencyBonus }) {
    return (
        <div id="proficiencyBonus">
            <div class="insp-prof-container">
                <div class="value"><span>+{proficiencyBonus}</span></div><div class="label"><span>Proficiency Bonus</span></div>
            </div>
        </div>
    )
}

export default ProficiencyBonus
