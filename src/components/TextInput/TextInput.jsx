import React from 'react'

const TextInput = (props) => {
    return (
        <>
        <input type="text"
        onChange={props.handleChange}
        value={props.searchValue}
        />       
        </>
    )
}

export default TextInput;