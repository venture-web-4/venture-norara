import React from 'react'

import {Component1, Component2, Component3, Component4, Component5} from '../../components/Component'
import Cat from '../../img/cat.png'
import { StyledCat, StyledGameWrapper, StyledWrapper, StyledStatusBar, StyledBalloon } from '../../styles/StyledCatWordComponents'

export default function CatWord() {
  return (
  <div>
    <StyledWrapper>
      <StyledGameWrapper>
        <StyledCat src={Cat}/>
        <div>
          <Component1 />
          <div>
            <StyledStatusBar>점수</StyledStatusBar>
            <StyledStatusBar>시간</StyledStatusBar>
            <StyledStatusBar>최고기록</StyledStatusBar>
          </div>
          <Component3 />
          <Component4 />
        </div>
      </StyledGameWrapper>
    </StyledWrapper>
  </div>
    )
}
