const TextInput = props => 
    <div class="formInput">
        <input type="text" class="textInput" placeholder=" " {...props} />
        <label>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
    </div>

export default TextInput