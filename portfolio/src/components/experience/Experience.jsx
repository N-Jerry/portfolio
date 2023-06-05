import React from 'react'
import './experience.css'
import { BsPatchCheckFill} from 'react-icons/bs'

const experience = () => {
  return (
    <section id="experience">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className='container experience__container'>
        <div className='experience_frontend'>
          <h3>DATABASE MANAGEMENT</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div><h4>MySQL</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div><h4>MONGODB</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
          </div>
        </div>
        <div className='experience_programming'>
          <h3>Programming</h3>
          <div className='experience__content'>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div><h4>C</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div><h4>C++</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div><h4>Java</h4>
              <small className='text-light'>Intermediate</small></div>
            </article>
            <article className='experience__details'>
              <BsPatchCheckFill className='experience__details__icon' />
              <div><h4>Python</h4>
              <small className='text-light'>Experienced</small></div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}


export default experience