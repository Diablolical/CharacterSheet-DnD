function ProficiencyBonus({ proficiencyBonus }) {
  return (
    <div id="proficiencyBonus">
      <div className="insp-prof-container">
        <div className="value">
          <span>+{proficiencyBonus}</span>
        </div>
        <div className="label">
          <span>Proficiency Bonus</span>
        </div>
      </div>
    </div>
  );
}

export default ProficiencyBonus;
