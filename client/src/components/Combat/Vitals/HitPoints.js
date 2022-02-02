function HitPoints({ type }) {
    const label = type === 'hp' ? "CURRENT HIT POINTS" : "TEMPORARY HIT POINTS"
    return (
        <div className="block vitalsBlock">
            { type === 'hp' && 
                <div className="top">
                    <span>Hit Point Maximum</span>
                    <input type="text" name="hp-max" title="hp-max" />
                </div> }
            <input type="number" className="hp-input" name={type} title={type} />
            <span className="label">{label}</span>
        </div>
    )
}

export default HitPoints
