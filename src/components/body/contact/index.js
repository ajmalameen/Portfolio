import React from 'react'
import Separator from '../../common/separator'
import SocialContact from '../../common/social-contact'
import './contact.css'

function Contact() {
  return (
    <div className='contact'>
      <Separator />
      <label className='section-title'>Contact</label>
      <div className='contact-container'>
        <div className='contact-left'>
          <p> Want to get in touch? contact me on any of the platform</p>
          <SocialContact /> 
        </div>
        <div className='download'>
          <a download href={require('../../../assets/resume.pdf')}>
            <i class='fi-rr-cloud-download download-icon' />
            Download Resume
          </a>
        </div>
      </div>
      
    </div>
  )
}

export default Contact
