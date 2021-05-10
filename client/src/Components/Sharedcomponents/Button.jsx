import React from 'react'
import './Button.css'
const STYLES = ['btn-1','btn-2']
export default function Button({children,onclick,buttonStyle}) {
    const checkStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0]
    return (
        <button className= {`${checkStyle}`}
        onClick={onclick} >
            {children}
        </button>
    )
}