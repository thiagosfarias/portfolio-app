import React from 'react'
import Content from './content'
import Menu from './menu'
import { ButtonDarkMode, CanvasContainer, CanvasContent } from './style'

function Canvas() {
  return (
    <CanvasContainer>
      <CanvasContent >
        <Content />
        <ButtonDarkMode>Dark Mode</ButtonDarkMode>
      </CanvasContent>
      <Menu />

    </CanvasContainer>
    
  )
}

export default Canvas