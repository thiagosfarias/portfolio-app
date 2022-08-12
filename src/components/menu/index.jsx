import React, { useState } from 'react'
import { MenuContainer, MenuNav } from './style'

function Menu() {
  return (
    <MenuContainer>
        <MenuNav>
          <button className="socialBt">Social</button>
          <button className='aboutMeBt'>About Me</button>
          <button className='educationBt' >Education</button>
          <button className='projectsBt'>Projects and Skills</button>
        </MenuNav>
    </MenuContainer>

  )
}

export default Menu