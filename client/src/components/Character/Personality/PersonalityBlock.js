function PersonalityBlock ({ name, text, onChange }) {
    return (
        <div class="block">
            <h4>{name}</h4>
            <textarea name={name} value={text} onChange={(e) => onChange(name, e.target.value)}></textarea>
        </div>
    )
}

export default PersonalityBlock
