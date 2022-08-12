import React from 'react'
import { AboutContainer, AboutText, AboutImage } from './style'
import profilePic from '../../assets/profile-pic.jpeg'

function AboutMe(props) {
  return (
    <AboutContainer>
      <AboutText textSwicth={props.switch}>
        <h1>Hi! I'm Thiago!</h1>
        <p>I'm fullstack developer. I'm 26 years old currently in São Luís, Brasil. 
        Some of my passions are: anime, manga, music and all kinds of art. 
        I studied Information Systems at the Federal Institute of Maranhão</p>
      </AboutText>
      <AboutImage src={profilePic}/>
    </AboutContainer>
  )
}

export default AboutMe