import React from 'react'

export default function Button(props) {

    const name = props.name
    const marginClassName = props.marginClassName

  return (
    <div className={marginClassName}>
        <button className='button' onClick={props.onConfirm}>{name}</button>
    </div>
  )
}
