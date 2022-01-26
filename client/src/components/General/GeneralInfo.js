import TextInput from "../Shared/TextInput"
import NumericInput from "../Shared/NumericInput"

function GeneralInfo() {
    return (
        <article id="general">
            <section class="general">
                <div class="wrapper wide">
                    <div class="col-third">
                        <div class="row" id="characterName">
                            <TextInput name="characterName" />
                        </div>
                    </div>
                    <div class="col-two-third">
                        <div class="row">
                            <TextInput name="class" />
                            <NumericInput min="1" max="20" name="level" />
                            <TextInput name="background" />
                        </div>
                        <div class="row">
                            <TextInput name="race" />
                            <TextInput name="alignment" />
                            <NumericInput min="0" name="experience" />
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default GeneralInfo
