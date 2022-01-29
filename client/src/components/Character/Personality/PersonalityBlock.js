function PersonalityBlock ({ name, text, onChange }) {
    return (
        <div class="personalityBlock">
            <span class="personalityLabel"><label>{name.charAt(0).toUpperCase() + name.slice(1)}</label></span>
            <textarea name={name} value={text} onChange={(e) => onChange(name, e.target.value)}></textarea>
        </div>
    )
}

export default PersonalityBlock
