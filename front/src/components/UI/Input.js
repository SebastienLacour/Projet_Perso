import React from 'react'

export default function Input(props) {

    const label = props.label
    const id = props.id
    const divClassName = props.divClassName
    const labelClassName = props.labelClassName

    return (
        <div className= {divClassName}>
            <label htmlFor={label} className={labelClassName}>{label}</label>
            <input type={label} name={label} id={id} ref={props.ref} className='input' />
        </div>
    )
}
