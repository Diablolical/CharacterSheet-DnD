function DeathSaves() {
    return (
        <div className="block vitalsBlock">
            <div className="row deathSaves"><label>Successes</label><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /></div>
            <div className="row deathSaves"><label>Failures</label><input type="checkbox" /><input type="checkbox" /><input type="checkbox" /></div>
            <span className="label">Death Saves</span>
        </div>
    )
}

export default DeathSaves
