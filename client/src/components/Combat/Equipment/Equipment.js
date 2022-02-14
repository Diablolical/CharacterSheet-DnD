import { useState } from "react"
import clone from "clone"
import ItemRow from "./ItemRow"

function _renderItemRows (items, editingIndex, saveItems, editItems) {
    const renderArray = []
    items.forEach((item, index) => {
        let isEditing = index === editingIndex
        console.log(index, isEditing)
        renderArray.push(<ItemRow key={index} item={item} isEditing={isEditing} onChange={saveItems} editCallback={() => editItems(index)}/>)
    })
    return renderArray
}

const defaultEquipment = {
    "count": 0,
    "name": "",
    "description" : ""
}

function Equipment() {
    const [items, updateItems] = useState([])
    const [currentIndex, setcurrentIndex] = useState(-1)

    const addItem = () => {
        const newEquipment = clone(defaultEquipment)
        const updated = [...items]
        updated.push(newEquipment)
        setcurrentIndex(items.length)
        updateItems(updated)
    }

    const saveItem = (item) => {
        const updated = [...items]
        updated[currentIndex] = item
        updateItems(updated)
    }

    const editItem = (index) => {
        setcurrentIndex(index)
    }

    return (
        <div id="equipment">
            <div className="block">
                <span className="sectionLabel"><label>Equipment</label></span>
                <table className="itemTable">
                    <col className="itemCol count"></col>
                    <col className="itemCol name"></col>
                    <col className="itemCol weight"></col>
                    <col className="itemCol edit"></col>
                    <col className="itemCol delete"></col>
                    <thead>
                        <tr className="headerRow">
                            <th className="itemCol count">Count</th>
                            <th className="itemCol name">Name</th>
                            <th className="itemCol weight">Weight</th>
                            <th className="itemCol edit">Edit</th>
                            <th className="itemCol delete"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 && _renderItemRows(items, currentIndex, saveItem, editItem)}
                    </tbody>
                </table>
                <div className="buttonRow">
                    <button title="Add Item" className="plusButton flatButton" onClick={(e) => { e.preventDefault(); addItem(); }}>+</button>
                </div>
            </div>
        </div>
    )
}

export default Equipment
