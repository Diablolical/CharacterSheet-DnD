import { useState } from "react";
import PersonalityBlock from "./PersonalityBlock";

function _renderPersonalityBlocks(blocks, updateCallback) {
  const renderArray = [];
  blocks.forEach((block) => {
    renderArray.push(
      <PersonalityBlock
        key={block.name}
        name={block.name}
        text={block.text}
        onChange={updateCallback}
      />
    );
  });
  return renderArray;
}

function Personality({ personality, updateData }) {
  const [traits, updateTraits] = useState(personality.traits);
  const [ideals, updateIdeals] = useState(personality.ideals);
  const [bonds, updateBonds] = useState(personality.bonds);
  const [flaws, updateFlaws] = useState(personality.flaws);

  const personalityBlocks = [
    { name: "traits", text: traits, callback: updateTraits },
    { name: "ideals", text: ideals, callback: updateIdeals },
    { name: "bonds", text: bonds, callback: updateBonds },
    { name: "flaws", text: flaws, callback: updateFlaws },
  ];

  const updateCallback = (name, value) => {
    personalityBlocks.forEach((block) => {
      if (block.name === name) {
        block.callback(value);
      }
    });
  };

  return (
    <div id="personality">
      {_renderPersonalityBlocks(personalityBlocks, updateCallback)}
    </div>
  );
}

export default Personality;
