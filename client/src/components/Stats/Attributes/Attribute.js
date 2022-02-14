import { useState } from "react";
import { calcMod } from "../../Shared/helpers";

function Attribute({ attribute, updateAttributeScore }) {
  const [score, updateScore] = useState(attribute.score);

  const handleEnter = (e) => {
    if (e.keyCode === 13) {
      handleBlur();
    }
  };

  const handleBlur = () => {
    updateAttributeScore(attribute.name, score);
  };

  let mod = calcMod(attribute.score);
  return (
    <div className="attributeContainer">
      <label className="attrLabel">
        {attribute.name.charAt(0).toUpperCase() + attribute.name.slice(1)}
      </label>
      <span className="attrMod">{mod > 0 ? "+" + mod : mod}</span>
      <div className="attrScore">
        <input
          type="number"
          min="1"
          max="30"
          name="{attribute.name}"
          className="attrInput"
          value={score}
          onChange={(e) => updateScore(e.target.value)}
          onBlur={handleBlur}
          onKeyUp={handleEnter}
        />
      </div>
    </div>
  );
}

export default Attribute;
