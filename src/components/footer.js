import React from 'react'
import { Link } from 'gatsby'

import logo from '../images/logo-aroha.svg'

const Footer = () => (
  <div className="footer">
    <div className="links-container">
      <div className="page-links">
        <img src={logo} alt=""/>
        <div className="links">
          <Link to="/">Sobre Nosotros</Link>
          <Link to="/">Productos</Link>
          <Link to="/">Contacto</Link>
        </div>
      </div>
      <div className="social-media-links">
        <h4>Síguenos</h4>
        <a href="https://facebook.com">Facebook</a>
        <a href="https://instagram.com">Instagram</a>
      </div>
    </div>
    <div className="copyright">
      <p>Aroha ® 2018</p>
      <div className="legal">
        <Link to="/">Aviso de privacidad</Link>
        <Link to="/">Términos y Condiciones</Link>
      </div>
    </div>
  </div>
)

export default Footer
