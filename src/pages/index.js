import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

import IconWhite from '../images/icon-aroha-white.svg'
import Icon from '../images/icon-aroha.svg'
import lubmanzana from '../images/lubmanzana.png'
import lubfresa from '../images/lubfresa.png'
import lubuva from '../images/lubuva.png'
import lubsandia from '../images/lubsandia.png'
import lubpack from '../images/lubpacket.png'
import lubman from '../images/lubman.png'
import sexypill from '../images/sexypill.png'
import kiss from '../images/kiss.png'

const IndexPage = () => (
  <Layout>
    <div className="intro">
      <Header />
      <div className="social-media">
        <a href="#">Instagram</a>
        <a href="#">Facebook</a>
      </div>
      <div className="images-container">
        <img src={lubsandia} alt="" className="lub lub1" />
        <img src={lubmanzana} alt="" className="lub lub2" />
        <img src={lubuva} alt="" className="lub lub3"/>
      </div>
      <div className="description-container">
        <div className="description">
          <h1>Amor que se siente</h1>
          <p>
            Somos una tienda de productos afrodisiacos de alta calidad. Atrévete a sentir diferente.
          </p>
          <div className="button intro-button">Ir a Productos</div>
          <img src={IconWhite} className="white-icon" alt=""/>
        </div>
      </div>
    </div>

    <div className="highlights">
      <div className="content">
        <h2>Productos Destacados</h2>
        <p>Nuestros clientes los adoran. ¿Qué esperas para probarlos?</p>
        <div className="products row-container">
          <div className="product">
            <div className="product-image">
              <img src={lubpack} alt=""/>
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={lubman} alt="" />
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={sexypill} alt="" />
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
        </div>
        <div className="to-center">
          <a href="#" className="button primary-button">
            Todos los productos
          </a>
        </div>
      </div>
    </div>

    <div className="about">
      <div className="content">
        <h2>Acerca de</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt corrupti vel ab doloribus cumque, saepe dicta voluptatem. Reiciendis, ipsa! Magni quas quisquam repudiandae aperiam veritatis asperiores at animi provident saepe tempora architecto cum reprehenderit illum repellat rerum eius, iure sed ipsum natus? Voluptate dicta nihil, quibusdam neque sequi temporibus at.
        </p>
        <br/><br/>
        <p>x - o - x - o</p>
      </div>
    </div>

    <div className="index-contact">
      <div className="content row-content">
        <img className="contact-img" src={kiss} alt=""/>
        <div className="contact-info">
          <h2>¿Dudas?</h2>
          <p>
            Ponte en contacto con nosotros y con gusto resolveremos todas tus inquietudes. ;)
          </p>
          <div className="button primary-button">
            Contacto
          </div>
        </div>
      </div>
    </div>

    <div className="aroha-icon">
      <img src={Icon} alt=""/>
    </div>

  </Layout>
)

export default IndexPage
