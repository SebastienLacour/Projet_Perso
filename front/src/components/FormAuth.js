import React, { useState } from 'react'
import Button from './UI/Button'
import Input from './UI/Input'

export default function FormAuth() {

  //On modifie le component en fonction de si l'utilisateur veut se connecter ou s'inscrire
  //On créer un state qui gérera si l'utilisateur se connecte ou non
  const [isLogging, setIsLogging] = useState(true)

  //On créer une fonction qui modifiera la state isLogging
  const loggingHandler = () => {
    setIsLogging(!isLogging)
  }

  return (
    <div className='auth-form auth-form--size'>
      { isLogging ? <h1>Connectez-vous</h1> : <h1>Inscrivez-vous</h1>}
      <form action="" className='auth-form__form'>
        {!isLogging && <Input label="pseudo" id="input-pseudo" divClassName="auth-form__input" labelClassName="auth-form__label"/>}
          <Input label="email" id="input-email" divClassName="auth-form__input" labelClassName="auth-form__label"/>
          <Input label="password" id="input-password" divClassName="auth-form__input" labelClassName="auth-form__label"/>
          {isLogging ? <Button name="connexion" marginClassName="auth-form__button"/> : <Button name="inscription" marginClassName="auth-form__button"/>}
          {isLogging ? <span onClick={loggingHandler}>inscrivez-vous</span> : <span onClick={loggingHandler}>connectez-vous</span>}
      </form>
    </div>
  )
}
