import React from 'react'
import './services.css'
import {BiCheck} from 'react-icons/bi'

const services = () => {
  return (
    <section id="services">
      <h5>What I offer</h5>
      <h2>Services</h2>
      <div className='container services__container'>
        <div>
          <article className='services'><div className='service__head'>
            <h3>DATA ANALYSIS</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>DATA VISUALIZATION</p>
            </li>
          </ul>
          </article>
        </div>


        <div>
          <article className='services'><div className='service__head'>
            <h3>Programming</h3>
          </div>
          <ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>JAVA</p>
            </li>
          </ul><ul className='services__list'>
            <li>
              <BiCheck className='services__list-icon'/>
              <p>SQL</p>
            </li>
          </ul>

          </article>
        </div>


      </div>
    </section>
  )
}


export default services