import Personality from "./Personality/Personality"
import Features from './Features'

function Character({ features }) {
    return (
        <div className="col-third">
            <div className="container">
                <Personality
                    personality={features.personality}
                />
                <Features/>
            </div>
        </div>
    )
}

export default Character
