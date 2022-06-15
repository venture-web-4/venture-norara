import React, { useEffect, useState } from 'react';
import useInterval from '../../hooks/useInterval';

import axios from 'axios';
import { wordRelay } from '../../api/wordRelay';

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
  const [wordList, setWordList] = useState(['끝말잇기']);
  const [point, setPoint] = useState(1)
  const [time, setTimer] = useState(15)

  const checkWord = (word) => {
    // api를 이용한 로직도 추가해야 함
    // useEffect를 통해 받아 온 제시어를 여기서 가져와서 제시어의 마지막 글자와 같은 지 확인한다.
    if (point === 6) {
      alert("인간, 끝말잇기 너무 잘한다냥! 같이 놀기 싫다냥!")
      setWordList(wordList.concat("냥냥냥냥"))
    } else {
      if(word.length > 1 && wordList[wordList.length - 1].slice(-1)===word[0]) {
        setWordList(wordList.concat(word))
        setPoint(prev => prev+1)
      } else {
        alert("그건 틀렸다냥!")
      }
    }
  }

  // useInterval(()=> {
  //   setTimer(prev=>prev-1)
  // },1000)

  useEffect(()=> {
    if(time===0){
      alert("Game Over")
      setTimer(15)
    }
  },[time])

  return (
    <div>
      <StyledWrapper>
        
        <StyledGameWrapper>
          <div>
            <StyledCat src={Cat} />
            <Component4 />
          </div>
          <div>
            <StyledBarWrapper>
              <StyledStatusBar>점수 : {point}</StyledStatusBar>
              <StyledStatusBar>시간 : {time}</StyledStatusBar>
              <StyledStatusBar>최고기록</StyledStatusBar>
            </StyledBarWrapper>
            <Component3 wordList={wordList} />
            <Component1 checkWord={checkWord} />
          </div>
        </StyledGameWrapper>
      </StyledWrapper>
    </div>
  );
}
