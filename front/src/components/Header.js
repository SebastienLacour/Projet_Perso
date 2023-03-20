import React, { useContext, useState } from 'react'
import AuthContext from './context/AuthContext'

export default function Header(props) {

  //On récupère des props si l'utilisateur est connecté ou non
  const isLoggedIn = props.isLoggedIn

  //Si l'utilisateur se connecte ou non
  const loggingIsTrue = props.loggingIsTrue
  const loggingIsFalse = props.loggingIsFalse

  //On récupère le context
  const authCtx = useContext(AuthContext)

  //On récupère la fonction de déconnexion
  const logout = authCtx.logout


  return (
    <header className='header'>
      <strong>logo</strong>
      <nav className='header__nav'>

        {isLoggedIn ?
          <ul className='header__list'>
            <li className="header__link">accueil</li>
            <li className="header__link" onClick={logout}>déconnexion</li>
          </ul>
          :
          <ul className='header__list'>
            <li className="header__link">accueil</li>
            <li className="header__link" onClick={loggingIsTrue}>connexion</li>
            <li className="header__link" onClick={loggingIsFalse}>inscription</li>
          </ul>
        }

      </nav>
    </header>
  )
}
