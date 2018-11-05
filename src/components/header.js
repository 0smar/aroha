import React, { Component } from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo-aroha.png'
import house from '../images/house.svg'

class Header extends Component {
  toggleMenu(){
    const hamburger = document.querySelector('.hamburger');
    hamburger.classList.toggle('change');

    const menu = document.querySelector('.mobile-buttons');
    menu.classList.toggle('open-menu');
  }
  render() {
    return(
      <div className="header">
        <Link to="/" className="logo">
          <img src={logo} alt="Aroha Logo"/>
        </Link>
        <ul className={`menu ${this.props.menuColor}`}>
          <li>
            <Link to="/">Inicio</Link>
          </li>
          <li>
            <Link to="/nosotros">Nosotros</Link>
          </li>
          <li>
            <Link to="/productos">Productos</Link>
          </li>
          <li>
            <Link to="/contacto">Contacto</Link>
          </li>
        </ul>
        <div className="mobile-menu">
          <div className="hamburger" onClick={this.toggleMenu}>
            <div className="bar bar1"></div>
            <div className="bar bar2"></div>
            <div className="bar bar3"></div>
          </div>
        </div>

        <div className="mobile-buttons">
          <ul className="">
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/nosotros">Nosotros</Link>
            </li>
            <li>
              <Link to="/productos">Productos</Link>
            </li>
            <li>
              <Link to="/contacto">Contacto</Link>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Header
