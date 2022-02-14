import { useMemo, useState } from "react"
import clone from "clone"
import ItemRow from "./ItemRow"

function _renderItemRows (items, editingIndex, saveItem, editItem, removeItem) {
    const renderArray = []
    items.forEach((item, index) => {
        let isEditing = index === editingIndex
        renderArray.push(
            <ItemRow 
                key={index}
                itemData={item}
                isEditing={isEditing}
                saveItem={saveItem}
                editItem={() => editItem(index)}
                removeItem={() => removeItem(index)}
            />)
    })
    return renderArray
}

function _calcWeight(items) {
    return items.reduce((total, item) => {
        return total + (parseInt(item.weight) * parseInt(item.count))
    }, 0)
}

const defaultItem = {
    "count": 1,
    "name": "",
    "weight": 1,
    "description" : "",
}

function Equipment({ items, updateItems }) {
    const [currentIndex, setcurrentIndex] = useState(-1)

    const totalWeight = useMemo(() => ((items.length > 0) ? _calcWeight(items) : 0), [items])

    console.log(totalWeight)

    const addItem = () => {
        const newEquipment = clone(defaultItem)
        const updated = [...items]
        updated.push(newEquipment)
        setcurrentIndex(items.length)
        updateItems(updated)
    }

    const saveItem = (item) => {
        const updated = [...items]
        updated[currentIndex] = item
        updateItems(updated)
        setcurrentIndex(-1)
    }

    const editItem = (index) => {
        setcurrentIndex(index)
    }

    const removeItem = (index) => {
        const updated = [...items]
        updated.splice(index,1)
        console.log(updated)
        updateItems(updated)
        setcurrentIndex(-1)
    }

    return (
        <div id="equipment">
            <div className="block">
                <span className="sectionLabel"><label>Equipment</label></span>
                <table className="itemTable">
                    <colgroup>
                        <col className="itemCol count"></col>
                        <col className="itemCol name"></col>
                        <col className="itemCol weight"></col>
                        <col className="itemCol edit"></col>
                        <col className="itemCol delete"></col>
                    </colgroup>
                    <thead>
                        <tr className="headerRow">
                            <th className="itemCol count">#</th>
                            <th className="itemCol name">Name</th>
                            <th className="itemCol weight">Weight</th>
                            <th className="itemCol edit">Edit</th>
                            <th className="itemCol delete"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.length > 0 && _renderItemRows(items, currentIndex, saveItem, editItem, removeItem)}
                    </tbody>
                </table>
                <div className="buttonRow">
                    <button title="Add Item" className="plusButton flatButton" onClick={(e) => { e.preventDefault(); addItem(); }}>+</button>
                    <div class="weightTotal"></div>
                </div>
                <div className="bottomSection">
                    <span>Total Weight:</span><span>{totalWeight}&nbsp;lbs</span>
                </div>
            </div>
        </div>
    )
}

export default Equipment
