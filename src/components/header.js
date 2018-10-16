import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo-aroha.svg'
import house from '../images/house.svg'

const Header = () => (
  <div className="header">
    <Link to="/" className="logo">
      <img src={logo} alt="Aroha Logo"/>
    </Link>
    <ul className="menu">
      <li>
        <Link to="/">
          <img className="menu-home" src={house} alt="Ir a Inicio"/>
        </Link>
      </li>
      <li>
        <Link to="/">Nosotros</Link>
      </li>
      <li>
        <Link to="/">Productos</Link>
      </li>
      <li>
        <Link to="/">Contacto</Link>
      </li>
    </ul>
  </div>
)

export default Header
