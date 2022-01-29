import Personality from "./Personality/Personality"
import Features from './Features'

function Character({ features }) {
    return (
        <div class="col-third">
            <div class="container">
                <Personality
                    personality={features.personality}
                />
                <Features/>
            </div>
        </div>
    )
}

export default Character
