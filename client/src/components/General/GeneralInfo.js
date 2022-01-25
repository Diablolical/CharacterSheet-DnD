function GeneralInfo() {
    return (
        <article id="general">
            <section class="general">
                <div class="wrapper wide">
                    <div class="col-third">
                        <div class="row" id="characterName">
                            <div class="formInput">
                                <input type="text" name="characterName" placeholder=" "/><label>Character Name</label>
                            </div>
                        </div>
                    </div>
                    <div class="col-two-third">
                        <div class="row">
                            <div class="formInput">
                                <input type="text" name="class" class="textInput" placeholder=" "/><label>Class</label>
                            </div>
                            <div class="formInput smallInput">
                                <input type="number" class='numericInput' min="1" max="20" name="level" placeholder=" "/><label>Level</label>
                            </div>
                            <div class="formInput">
                                <input  type="text" name="background" class="textInput" placeholder=" "/><label>Background</label>
                            </div>
                            {/*<div class="formInput">
                                <input  type="text" name="playerName" placeholder=" "/><label>Player Name</label>
                            </div> */}
                        </div>
                        <div class="row">
                            <div class="formInput">
                                <input type="text" name="race" class="textInput" placeholder=" "/><label>Race</label>
                            </div>
                            <div class="formInput">
                                <input type="text" name="alignment" class="textInput" placeholder=" "/><label>Alignment</label>
                            </div>
                            <div class="formInput smallInput">
                                <input type="number" min="0" name="xp" class="numericInput" placeholder=" "/><label>XP</label>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </article>
    )
}

export default GeneralInfo
