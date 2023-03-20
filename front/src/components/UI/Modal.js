import React from 'react'
import Button from './Button'

export default function Modal(props) {

    const head = props.head
    const body = props.body

  return (
    <div className='modal'>
        <div className="modal__head">
            <h2>{head}</h2>
        </div>
        <div className="modal__body">
            <h2>{body}</h2>
        </div>

        <Button name="ok" onConfirm={props.onConfirm} marginClassName="modal__button"/>
    </div>
  )
}
