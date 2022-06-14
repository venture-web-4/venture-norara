import React, { useEffect, useState } from 'react';

import axios from 'axios'
import { wordRelay } from '../../api/wordRelay'

import { Component1, Component3, Component4 } from '../../components/Component';
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


  useEffect(() => {
    axios.get(`?key=8E9D659C28621BC5BB6AA77E6009099E&q=안녕`).then(res => console.log(res.data))
  },[])


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
