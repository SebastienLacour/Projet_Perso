import React from 'react'

export default function Header(props) {

  const isLoggedIn = props.isLoggedIn

  return (
    <header className='header'>
      <strong>logo</strong>
      <nav className='header__nav'>

        {isLoggedIn ?
          <ul className='header__list'>
            <li className="header__link">déconnexion</li>
          </ul>
          :
          <ul className='header__list'>
            <li className="header__link">connexion</li>
            <li className="header__link">inscription</li>
          </ul>

        }

      </nav>
    </header>
  )
}
