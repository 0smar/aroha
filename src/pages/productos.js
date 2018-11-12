import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

import lubmanzana from '../images/lubmanzana.png'
import lubfresa from '../images/lubfresa.png'
import lubuva from '../images/lubuva.png'
import lubsandia from '../images/lubsandia.png'
import lubpack from '../images/lubpacket.png'
import lubman from '../images/lubman.png'
import sexypill from '../images/sexypill.png'
import pinkgel from '../images/pinkgel.png'

const ProductsPage = () => (
  <Layout>
    <div className="contact">
      <Header menuColor="menu-color" />
      <div className="content products-page">
        <h2>Nuestros Productos</h2>
        <p>Conoce los productos que te harán descubrir sensaciones que no conocías.</p>

        <div className="products row-container">
          <div className="product">
            <div className="product-image">
              <img src={lubmanzana} alt="" />
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={lubfresa} alt="" />
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={lubuva} alt="" />
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={lubsandia} alt="" />
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
          <div className="product">
            <div className="product-image">
              <img src={lubpack} alt="" />
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
          <div className="product">
            <div className="product-image">
              <img src={pinkgel} alt="" />
            </div>
            <div className="name">Lub Pokect 4 en 1</div>
          </div>
        </div>

        <div className="contact-button">
          <p>¿Listo para probarlos?</p>
          <Link to="/contacto" className="button primary-button">Contáctanos</Link>
        </div>
      </div>
    </div>
  </Layout>
)

export default ProductsPage
