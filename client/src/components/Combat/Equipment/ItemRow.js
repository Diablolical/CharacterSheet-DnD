import { useState, useRef, useEffect } from 'react'
import clone from "clone"
import InlineEditableText from "../../Common/InlineEditableText"
import EditButton from '../../Common/EditButton'

function ItemRow ({ item, isEditing, onChange, editCallback }) {
    const [editing, toggleEdit] = useState(isEditing)
    
    useEffect(() => {
       toggleEdit(isEditing)
    }, [isEditing])

    const toggle = () => {
        toggleEdit(!editing)
    };

    const updateProp = (prop, value) => {
        const updated = clone(item)
        updated[prop] = value
        onChange(updated)
    }

    const updateText = (newText) => {
        updateProp("description", newText)
    }

    const renderInput = () => {
        return (
            <tr><td colSpan="3">
            <div className="block equipmentBlock">
                <label>Count:</label><input type="text" name="count" value={item.count} onChange={(e) => updateProp("count", e.target.value)} />
                <label>Item Name:</label><input type="text" name="name" value={item.name} onChange={(e) => updateProp("name", e.target.value)} />
                <InlineEditableText name="description" value={item.description} onChange={updateText}></InlineEditableText>
                <button onClick={() => toggle()}>Save</button>
            </div>
            </td></tr>
        )
    }

    const renderStatic = () => {
        return (<tr><td className='count'>{item.count}</td><td>{item.name}</td><td></td><td><EditButton callback={() => editCallback()} /></td><td>X</td></tr>)
    } 

    return (
        editing ? renderInput() : renderStatic()
    )
}

export default ItemRow
