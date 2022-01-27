import TextInput from "../Shared/TextInput"
import NumericInput from "../Shared/NumericInput"

function GeneralInfo({ data, update }) {
    return (
        <article id="general">
            <section class="general">
                <div class="wrapper wide">
                    <div class="col-third">
                        <div class="row" id="characterName">
                            <TextInput name="characterName" value={data.characterName} onChange={(e) => update('characterName', e.target.value)} />
                        </div>
                    </div>
                    <div class="col-two-third">
                        <div class="row">
                            <TextInput name="class" value={data.class} onChange={(e) => update('class', e.target.value)}/>
                            <NumericInput min="1" max="20" name="level" value={data.level} onChange={(e) => update('level', e.target.value)}/>
                            <TextInput name="background" value={data.background} onChange={(e) => update('background', e.target.value)}/>
                        </div>
                        <div class="row">
                            <TextInput name="race" value={data.race} onChange={(e) => update('race', e.target.value)} />
                            <TextInput name="alignment" value={data.alignment} onChange={(e) => update('alignment', e.target.value)} />
                            <NumericInput min="0" name="experience" value={data.experience} onChange={(e) => update('experience', e.target.value)}/>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default GeneralInfo
