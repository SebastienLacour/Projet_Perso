import React from 'react'

export default function Header() {
  return (
    <header className='header'>
        <strong>logo</strong>
        <nav className='header__nav'>
            <ul className='header__list'>
                <li className="header__link">connexion</li>
                <li className="header__link">inscription</li>
            </ul>
        </nav>
    </header>
  )
}
