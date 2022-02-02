const NumericInput = props => 
    <div className="formInput smallInput">
        <input type="number" className="numericInput" placeholder=" " {...props}/>
        <label>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
    </div>

export default NumericInput
