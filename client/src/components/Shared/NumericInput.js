const NumericInput = props => 
<div class="formInput smallInput">
    <input type="number" class="numericInput" placeholder=" " {...props}/>
    <label>{props.name.charAt(0).toUpperCase() + props.name.slice(1)}</label>
</div>

export default NumericInput