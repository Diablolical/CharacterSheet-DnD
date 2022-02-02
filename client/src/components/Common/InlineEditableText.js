import { useState, useRef, useEffect } from 'react'

function InlineEditableText({ name, text, onChange }) {

    const [editing, toggleEdit] = useState(false)
    const [content, updateContent] = useState(text)
    const inputRef = useRef();

    useEffect(() => {
        if (inputRef && inputRef.current && editing) {
            inputRef.current.focus()
        }
    }, [editing, inputRef])

    const toggle = () => {
        toggleEdit(!editing)
    };

    const handleEnter = (e) => {
        if (e.keyCode === 13) {
            handleBlur()
        }
    };
    
    const handleBlur = () => {
        toggle()
        onChange(content)
    };

    const renderInput = () => {
        return (
            <textarea
                ref={inputRef}
                name={name}
                value={content} 
                onBlur={handleBlur}
                onKeyUp={handleEnter}
                onChange={(e) => updateContent(e.target.value)}
            />
        )
    }

    const renderStatic = () => {
        return (<div className="placeholder" onClick={() => toggle()}>{content}</div>)
    }
    
    return(
        editing ? renderInput() : renderStatic()
    )
}

export default InlineEditableText
