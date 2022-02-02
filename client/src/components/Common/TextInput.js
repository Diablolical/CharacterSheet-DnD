const TextInput = props => 
    <div className="formInput">
        <input type="text" className="textInput" placeholder=" " {...props} />
        <label>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
    </div>

export default TextInput
