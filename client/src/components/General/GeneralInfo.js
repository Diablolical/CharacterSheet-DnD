import TextInput from "../Common/TextInput";
import NumericInput from "../Common/NumericInput";

function GeneralInfo({ data, update }) {
  return (
    <article id="general">
      <section className="general">
        <div className="wrapper wide">
          <div className="col-third">
            <div className="row" id="characterName">
              <TextInput
                name="characterName"
                value={data.characterName}
                onChange={(e) => update("characterName", e.target.value)}
              />
            </div>
          </div>
          <div className="col-two-third">
            <div className="row">
              <TextInput
                name="class"
                value={data.class}
                onChange={(e) => update("class", e.target.value)}
              />
              <NumericInput
                min="1"
                max="20"
                name="level"
                value={data.level}
                onChange={(e) => update("level", e.target.value)}
              />
              <TextInput
                name="background"
                value={data.background}
                onChange={(e) => update("background", e.target.value)}
              />
            </div>
            <div className="row">
              <TextInput
                name="race"
                value={data.race}
                onChange={(e) => update("race", e.target.value)}
              />
              <TextInput
                name="alignment"
                value={data.alignment}
                onChange={(e) => update("alignment", e.target.value)}
              />
              <NumericInput
                min="0"
                name="experience"
                value={data.experience}
                onChange={(e) => update("experience", e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>
    </article>
  );
}

export default GeneralInfo;
