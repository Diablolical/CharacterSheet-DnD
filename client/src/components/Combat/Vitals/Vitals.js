import { useState } from "react";
import HitPoints from "./HitPoints";
import StatBlock from "./StatBlock";
import HitDice from "./HitDice";
import DeathSaves from "./DeathSaves";

function Vitals() {
  const [ac, updateAc] = useState(10);
  const [initiative, updateInitiative] = useState(0);
  const [speed, updateSpeed] = useState(30);

  return (
    <div id="vitals">
      <div id="combatStats">
        <div className="block combatStats">
          <StatBlock name="Armor Class" value={ac} onChange={updateAc} />
          <StatBlock
            name="Initiative"
            value={initiative}
            onChange={updateInitiative}
          />
          <StatBlock name="Speed" value={speed} onChange={updateSpeed} />
        </div>
      </div>
      <HitPoints type="hp"></HitPoints>
      <HitPoints type="hp-temp"></HitPoints>
      <div id="hit-dice-death-saves">
        <HitDice></HitDice>
        <DeathSaves></DeathSaves>
      </div>
    </div>
  );
}

export default Vitals;
