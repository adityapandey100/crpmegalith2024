/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Contact.css'
import { motion } from 'framer-motion'
import { fadeIn } from '../variants'

const Contact= ()=> {
  return (
    <div id='contactus'>
      <h1 class='section-header'>Contact Us</h1>
      <div className='form-footer'>
        <div class='contact-wrapper'>
          {/* <motion.form
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            id='contact-form'
            class='form-horizontal'
            role='form'
          >
            <div class='form-group'>
              <div>
                <input
                  type='text'
                  class='form-control'
                  id='name'
                  placeholder='NAME'
                  name='name'
                  value=''
                />
              </div>
            </div>
            <div class='form-group'>
              <div>
                <input
                  type='email'
                  class='form-control'
                  id='email'
                  placeholder='EMAIL'
                  name='email'
                  value=''
                />
              </div>
            </div>
            <div class='form-group'>
              <div>
                <input
                  type='subject'
                  class='form-control'
                  id='subject'
                  placeholder='SUBJECT'
                  name='subject'
                  value=''
                />
              </div>
            </div>
            <div class='form-group'>
              <div>
                <textarea
                  type='message'
                  class='form-control'
                  id='message'
                  placeholder='MESSAGE'
                  name='message'
                  value=''
                />
              </div>
            </div>
            <button class='send-button' id='submit' type='submit' value='SEND'>
              <span class='send-text'>SEND</span>
            </button>
          </motion.form> */}
          <motion.div 
            variants={fadeIn('left', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.3 }}
          class='direct-contact-container'>
            <ul class='footer-us'>
              <h2 className='text-white'> <span className='text-red-800'>Mega</span>lith <span className='list-title'>2024</span></h2>
              <ul class='megalith-list'>
                <li className='link list-item'>
                  <a href='#'>Home</a>
                </li>
                <li className='link list-item'>
                  <a href='#'>Internship Brochure</a>
                </li>
                <li className='link list-item'>
                  <a href='/'>Megalith 2024</a>
                </li>
              </ul>
              <hr />
              <h2 className='list-title'>Follow Us</h2>
              <ul class='social-media-list'>
                <li>
                  <a href='#' target='_blank' class='contact-icon'>
                    <i class='fa fa-facebook' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank' class='contact-icon'>
                    <i class='fa fa-linkedin' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank' class='contact-icon'>
                    <i class='fa fa-twitter' aria-hidden='true'></i>
                  </a>
                </li>
                <li>
                  <a href='#' target='_blank' class='contact-icon'>
                    <i class='fa fa-instagram' aria-hidden='true'></i>
                  </a>
                </li>
              </ul>
              <hr />
              <h2 className='list-title'>Connect With Us</h2>
              <ul className='contact-list'>
                <li className='list-item'>Aditya Pandey - +91 6394433068</li>
                <li className='list-item'>Aditya Sharma - +91 7014493349</li>
                <li className='list-item'>Challa Naga Sujan - +91 8143637374</li>
              </ul>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  )
}

export default Contact

// motion.div
//               variants={fadeIn('left', 0.3)}
//               initial='hidden'
//               whileInView={'show'}
//               viewport={{ once: false, amount: 0.3 }}
