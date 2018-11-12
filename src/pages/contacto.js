import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

const ContactPage = () => (
  <Layout>
    <div className="contact">
      <Header menuColor="menu-color" />
      <div className="content contact-page">
        <h2>Contáctanos</h2>
        <div className="desc">
          En Aroha estamos siempre atentos a responder todas tus dudas sobre nuestros productos o la entrega. Descuida, cuidaremos tu privacidad así que haznos llegar tus dudas o ordena nuestros productos ahora. ;)
        </div>
        <div className="form">
          <form action="post">
            <div className="form-input">
              <div className="label">Nombre</div>
              <input type="text" placeholder="Escríbenos tu nombre"/>
            </div>
            <div className="form-input">
              <div className="label">Correo Electrónico</div>
              <input type="text" placeholder="correo@gmail.com" />
            </div>
            <div className="form-input">
            <div className="label">Mensaje</div>
              <textarea name="" id="" cols="30" rows="10" placeholder="Escribe aquí tu mensaje..."></textarea>
            </div>
            <div className="to-right">
              <input type="submit" className="button primary-button" value="Enviar"/>
            </div>
          </form>
        </div>
      </div>
    </div>
  </Layout>
)

export default ContactPage
