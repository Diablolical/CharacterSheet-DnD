import editIcon from "../../images/edit.svg"

function EditButton({ callback }) {
    console.log(callback)
    return(
        <button className="editButton flatButton" onClick={(e) => {e.preventDefault(); callback();}}><img src={editIcon} alt='editIcon'/></button>
    )
}

export default EditButton