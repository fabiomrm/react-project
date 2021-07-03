import React from 'react'

const Button = (props) => {
    return (
        <>
            <button
                onClick={props.handleAction}
            >{props.text}
            </button>
        </>
    )
}

export default Button
