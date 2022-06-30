import React from 'react'
import SocialContact from '../../common/social-contact'
import './about.css'

function About() {
  return (
    <div className='about'>
        <div className='about-top'>
            <div className='about-info'>
                Hello this is <br /> <span className='info-name'> Ajmal ameen  </span>
                <br />
                i'm a full stuck developer

            </div>
            <div className='about-photo'>
               <img 
               src={require("../../../assets/coding.png")}
               className="picture"
               />

            </div>

        </div>
       <SocialContact />
    </div>
  )
}

export default About
