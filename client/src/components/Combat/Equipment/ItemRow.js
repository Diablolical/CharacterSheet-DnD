import { useState, useEffect } from 'react'
import clone from "clone"
import EditButton from '../../Common/EditButton'

function ItemRow ({ itemData, isEditing, saveItem, editItem, removeItem }) {
    const [item, updateItem] = useState(itemData)
    const [editing, toggleEdit] = useState(isEditing)
    
    useEffect(() => {
        updateItem(itemData)
        toggleEdit(isEditing)
    }, [itemData, isEditing])

    const toggle = (value) => {
        toggleEdit(value)
    };

    const updateProp = (prop, value) => {
        const updated = clone(item)
        updated[prop] = value
        updateItem(updated)
    }

    const updateNumberProp = (prop, value) => {
        if (value < 0) {
            return 0
        }
        updateProp(prop, value)
    }

    const handleSave = () => {
        saveItem(item)
        toggle(false)
    }

    const handleCloseWithoutSaving = () => {
        saveItem(itemData)
        toggle(false)
    }

    const renderInput = () => {
        return (
            <tr>
                <td colSpan="5">
                    <div className="block equipmentBlock">
                        <label>Count:</label>
                        <input type="number" name="count" min="1" value={item.count} onChange={(e) => updateNumberProp("count", e.target.value)} />
                        <label>Item Name:</label>
                        <input type="text" name="name" value={item.name} onChange={(e) => updateProp("name", e.target.value)} />
                        <label>Weight:</label>
                        <input type="number" name="weight" min="0" value={item.weight} onChange={(e) => updateNumberProp("weight", e.target.value)} />
                        <label>Description:</label>
                        <textarea name="description" value={item.description} onChange={(e) => updateProp("description", e.target.value)}></textarea>
                        <div className="saveRow">
                            <button className="flatButton" onClick={() => handleSave()}>Save</button>
                            <button className="flatButton" onClick={() => handleCloseWithoutSaving()}>Cancel</button>
                        </div>
                    </div>
                </td>
            </tr>
        )
    }

    const renderStatic = () => {
        return (
            <tr>
                <td className="count">{item.count}</td>
                <td>
                    <span className="itemName">{item.name}</span>
                    <span className="itemDescription">{item.description}</span>
                </td>
                <td className="itemCol weight">{item.weight}</td>
                <td className="itemCol edit">
                    <EditButton callback={() => editItem()} />
                </td>
                <td>
                    <span title="Remove Item" className="deleteButton" onClick={() => removeItem()}>X</span>
                </td>
            </tr>
        )
    } 

    return (
        editing ? renderInput() : renderStatic()
    )
}

export default ItemRow
