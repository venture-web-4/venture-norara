import React, { useEffect, useState } from 'react';
import useInterval from '../../hooks/useInterval';
import ReactHowler from 'react-howler';
import axios from 'axios';

//Components
import { Component1, Component3, Component4 } from '../../components/Component';
import { catAnswer } from '../../components/catAnswer';

//Static Source
import Cat from '../../img/cat.png';
import catMeow from '../../sound/catMeow.ogg';

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
  const [status, setStatus] = useState({ time: 15, color: 'black' });
  const [sound, setSound] = useState(false);

  const checkWord = word => {
    // api를 이용한 로직도 추가해야 함
    // useEffect를 통해 받아 온 제시어를 여기서 가져와서 제시어의 마지막 글자와 같은 지 확인한다.

    if (wordList.find(item => item['text'] === word)) {
      alert('그건 이미 말한 단어이다냥! 인간의 꼼수!');
      return;
    }

    console.log(wordList[wordList.length - 1]['text'].slice(-1));

    if (point === 20) {
      alert('인간, 끝말잇기 너무 잘한다냥! 같이 놀기 싫다냥!');
      catAnswer({ word, setWordList, point, setSound });
    } else {
      if (
        word.length > 1 &&
        wordList[wordList.length - 1]['text'].slice(-1) === word[0]
        //api를 통해 체크하는 조건 추가
      ) {
        setWordList(wordList.concat({ text: word, color: 'green' }));
        setPoint(prev => prev + 1);
        catAnswer({ word, setWordList, point, setSound });
        setStatus({ time: 15, color: 'black' });
      } else {
        alert('그건 틀렸다냥!');
      }
    }
  };

  useInterval(() => {
    const value = status['time'];
    setStatus({ ...status, time: value - 1 });
    setSound(false);
  }, 1200);

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/v1/search/encyc.json?query=안녕`, {
        headers: {
          'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT,
          'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET,
          'Content-Type': 'application/json',
        },
      });
      console.log('네이버 응답', response.data.items);
    })();

    if (status['time'] === 0) {
      alert(`Game Over 고양이의 승리다냥!
      `);
      location.reload();
    }

    if (status['time'] === 5) {
      const value = status['time'];
      setStatus({ ...status, color: 'red' });
    }
  }, [status['time']]);

  return (
    <div>
      <ReactHowler src={catMeow} playing={sound} />
      <StyledWrapper>
        <StyledGameWrapper>
          <StyledGameWrapperPart>
            <StyledCat src={Cat} />
            <Component4 />
          </StyledGameWrapperPart>
          <StyledGameWrapperPart>
            <StyledBarWrapper>
              <StyledStatusBar>점수 : {point}</StyledStatusBar>
              <StyledStatusBar color={status['color']}>
                제한시간 : {status['time']}
              </StyledStatusBar>
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

// api 통신을 통해서 고양이가
// 1. 정답을 확인하고(if내 조건문)
// 2. 그에 맞는 다른 값을 주는 (catAnswer) 로직을 구현해야 함.

// 고양이가 지는 Case 어떻게 처리할지 ?

// useRef를 통해서 스크롤이 자동으로 내려오는 것 처리하기

// GameStart 옵션 넣기

// 최초 제시어 관련

// 시간이 더 촉박할 경우 더 킹받도록 더 떨게 하고 제한시간도 흔들리게 하기
