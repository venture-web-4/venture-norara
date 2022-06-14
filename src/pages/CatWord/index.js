import React, {useState} from 'react';

import {
  Component1,
  Component3,
  Component4,
} from '../../components/Component';
import Cat from '../../img/cat.png';
import {
  StyledCat,
  StyledGameWrapper,
  StyledWrapper,
  StyledStatusBar,
  StyledBarWrapper,
} from '../../styles/StyledCatWordComponents';

export default function CatWord() {
  const [wordList, setWordList] = useState(['안녕', '하이', '이거 맞지?']);

  return (
    <div>
      <StyledWrapper>
        <Component4 />
        <StyledGameWrapper>
          <StyledCat src={Cat} />
          <div>
            <StyledBarWrapper>
              <StyledStatusBar>점수</StyledStatusBar>
              <StyledStatusBar>시간</StyledStatusBar>
              <StyledStatusBar>최고기록</StyledStatusBar>
            </StyledBarWrapper>
            <Component3 wordList={wordList} />
            <Component1 setWordList={setWordList} />
          </div>
        </StyledGameWrapper>
      </StyledWrapper>
    </div>
  );
}
