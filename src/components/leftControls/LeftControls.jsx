import React from 'react'
import { MainControlsContainer, ButtonTop, ButtonMiddle, ButtonBottom } from './LeftControls.style'

export default function leftControls() {
  return (
    <MainControlsContainer>
      <ButtonTop>
        <button>All</button>
        <button>UI</button>
        <button>UX</button>
      </ButtonTop>
      <ButtonMiddle>
        <button>Enhancement</button>
        <button>Bug</button>
      </ButtonMiddle>
      <ButtonBottom>
          <button>Feature</button>
      </ButtonBottom>
        
    </MainControlsContainer>
  )
}
