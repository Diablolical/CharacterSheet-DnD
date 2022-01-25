import Personality from "./Personality/Personality"
import Features from './Features'

function Character() {
    return (
        <div class="col-third">
            <div class="container">
                <Personality></Personality>
                <Features></Features>
            </div>
        </div>
    )
}

export default Character
