import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'
import Header from '../components/header'

import mouth from '../images/kiss.png'
import bed from '../images/bed.jpeg'

const AboutPage = () => (
  <Layout>
    <div className="contact">
      <Header menuColor="menu-color" />
      <div className="content about-page">

        <div className="row-container about-us-info">
          <p>
            <h2>Acerca de Aroha</h2>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto magnam dolores officiis. Sapiente, consequatur, excepturi accusamus animi, fuga soluta maiores reiciendis repudiandae dolor optio illo. Sed officia cumque omnis deleniti voluptatem voluptatibus saepe aliquid aut, corporis in, ipsam iusto asperiores?
            <br/><br/>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro sit reiciendis aliquid asperiores corrupti nostrum. Minima inventore sit architecto officia! Modi tempora obcaecati quasi magnam.
            <br/><br/>
            <Link to="/contacto">Habla con nosotros ;)</Link>
            <br/>
            <Link to="/productos">Conoce nuestros productos</Link>
          </p>
          
          <div className="image-grid w50">
            <img src={mouth} className="mouth-img" alt=""/>
            <img src={bed} className="bed-img" alt=""/>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default AboutPage
