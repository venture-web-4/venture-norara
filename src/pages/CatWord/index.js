import React, { useEffect, useState } from 'react';
import useInterval from '../../hooks/useInterval';

//Components
import { Component1, Component3, Component4 } from '../../components/Component';
import { catAnswer } from '../../components/catAnswer';

//Image Source
import Cat from '../../img/cat.png';

//Styled Components
import {
  StyledCat,
  StyledGameWrapper,
  StyledWrapper,
  StyledStatusBar,
  StyledBarWrapper,
  StyledGameWrapperPart,
} from '../../styles/StyledCatWordComponents';

export default function CatWord() {
  const [wordList, setWordList] = useState([{ text: '제시어', color: 'red' }]);
  const [point, setPoint] = useState(0);
  const [time, setTimer] = useState(15);
  const [timeStatus, setTimeStatus] = useState('black')

  const checkWord = word => {
    // api를 이용한 로직도 추가해야 함
    // useEffect를 통해 받아 온 제시어를 여기서 가져와서 제시어의 마지막 글자와 같은 지 확인한다.

    // if (wordList.includes(word)){
    //   alert("그건 이미 있는 단어다냥!")
    //   return;
    // }

    console.log(wordList[wordList.length - 1]['text'].slice(-1))

    if (point === 6) {
      alert('인간, 끝말잇기 너무 잘한다냥! 같이 놀기 싫다냥!');
      catAnswer({ word, setWordList, point });
    } else {
      if (
        word.length > 1 &&
        wordList[wordList.length - 1]['text'].slice(-1) === word[0]
        //api를 통해 체크하는 조건 추가
      ) {
        setWordList(wordList.concat({ text: word, color: 'green' }));
        setPoint(prev => prev + 1);
        catAnswer({ word, setWordList, point });
      } else {
        alert('그건 틀렸다냥!');
      }
    }
  };

  useInterval(()=> {
    setTimer(prev=>prev-1)
  },1000)

  useEffect(() => {
    if (time === 0) {
      alert('Game Over');
      location.reload();
    }

    if (time === 10) {
      setTimeStatus('red')
    }
  }, [time]);

  return (
    <div>
      <StyledWrapper>
        <StyledGameWrapper>
          <StyledGameWrapperPart>
            <StyledCat src={Cat} />
            <Component4 />
          </StyledGameWrapperPart>
          <StyledGameWrapperPart>
            <StyledBarWrapper>
              <StyledStatusBar>점수 : {point}</StyledStatusBar>
              <StyledStatusBar color={timeStatus}>제한시간 : {time}</StyledStatusBar>
            </StyledBarWrapper>
            <div>
              <Component3 wordList={wordList} />
              <Component1 checkWord={checkWord} />
            </div>
          </StyledGameWrapperPart>
        </StyledGameWrapper>
      </StyledWrapper>
    </div>
  );
}

// 고양이가 지는 Case 어떻게 처리할지 ?
// 시간이 더 촉박할 경우 더 킹받도록 더 떨게 하고 제한시간도 흔들리게 하기
