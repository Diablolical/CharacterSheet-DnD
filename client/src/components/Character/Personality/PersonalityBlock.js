import InlineEditableText from "../../Common/InlineEditableText";

function PersonalityBlock({ name, text, onChange }) {
  return (
    <div className="block personalityBlock">
      <InlineEditableText
        name={name}
        value={text}
        onChange={onChange}
      ></InlineEditableText>
      <span className="sectionLabel">
        <label>{name.charAt(0).toUpperCase() + name.slice(1)}</label>
      </span>
    </div>
  );
}

export default PersonalityBlock;
