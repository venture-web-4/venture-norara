import React, { useState } from 'react';
import axios from 'axios';

const apiKey = process.env.REACT_APP_OPENDICT_API_KEY;

const getUrl = word => {
  // const apiKey = process.env.REACT_APP_OPENDICT_API_KEY;
  // return `/api/search?key=${apiKey}&q=${word}&req_type=json`;

  const display = 2;
  return `/v1/search/encyc.json?query=${word}&display=${display}`;
};

const sendGetRequest = async word => {
  const response = await axios({
    url: getUrl(word),
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  }).then(res => console.log(res));
};

const sendPostApi = async (word) => {
    try {
      const res = await axios.get(
        `/v1/search/encyc.json?query=${word}&display=1`,
        {
          headers: {
            'X-Naver-Client-Id': process.env.REACT_APP_NAVER_CLIENT,
            'X-Naver-Client-Secret': process.env.REACT_APP_NAVER_SECRET,
            'Content-Type': 'application/json',
          },
        }
      );
      return res.data.items
    } catch (err) {
      console.log(err);
    }
  }

export const catAnswer = async ({ word, setWordList, point, setSound, gameOver }) => {
  const rawApiAnswer = await sendPostApi(word.charAt(word.length-1))
  const apiAnswer = rawApiAnswer[0]['description'].split(' ')[1]
  console.log(rawApiAnswer[0])
  if (apiAnswer != '') {
  if (point === 20) {
    alert('왜 이렇게 잘하냐옹! 져라 인간!!');
    gameOver()
  } else {
    setTimeout(() => {
      setWordList(prev =>
        prev.concat({ text: apiAnswer, color: 'red' })
      );
      setSound(true);
    }, 300);
  }} else {
    alert('game over')
    gameOver()
    // props로 Postscore 적용했는데 확인 부탁드립니다 죄송합니다
  }
};

const randomAnswer = () => {
  const koreanComponent =
    '가갸거겨고교구규그기긔개걔게계과괴괘궈귀궤나냐너녀노뇨누뉴느니늬내냬네녜놔뇌놰눠뉘눼다댜더뎌도됴두듀드디듸대댸데뎨돠되돼둬뒤뒈라랴러려로료루류르리릐래럐레례롸뢰뢔뤄뤼뤠마먀머며모묘무뮤므미믜매먜메몌뫄뫼뫠뭐뮈뭬바뱌버벼보뵤부뷰브비븨배뱨베볘봐뵈봬붜뷔붸사샤서셔소쇼수슈스시싀새섀세셰솨쇠쇄숴쉬쉐아야어여오요우유으이의애얘에예와외왜워위웨자쟈저져조죠주쥬즈지즤재쟤제졔좌죄좨줘쥐줴차챠처쳐초쵸추츄츠치츼채챼체쳬톼최쵀춰취췌카캬커켜코쿄쿠큐크키킈캐컈케켸톼쾨쾌쿼퀴퀘타탸터텨토툐투튜트티틔태턔테톄톼퇴퇘퉈튀퉤파퍄퍼펴포표푸퓨프피픠패퍠페폐퐈푀퐤풔퓌풰하햐허혀호효후휴흐히희해햬헤혜화회홰훠휘훼까꺄꺼껴꼬꾜꾸뀨끄끼끠깨꺠께꼐꽈꾀꽤꿔뀌꿰따땨떠뗘또뚀뚜뜌뜨띠띄때떄떼뗴똬뙤뙈뚸뛰뛔싸쌰써쎠쏘쑈쑤쓔쓰씨씌쌔썌쎄쎼쏴쐬쐐쒀쒸쒜짜쨔쩌쪄쪼쬬쭈쮸쯔찌쯰째쨰쩨쪠쫘쬐쫴쭤쮜쮀빠뺘뻐뼈뽀뾰뿌쀼쁘삐쁴빼뺴뻬뼤뽜뾔뽸뿨쀠쀄';
  const randomChar = koreanComponent.charAt(
    Math.floor(Math.random() * koreanComponent.length)
  );
  const answer = `냥나옹${randomChar}`;
};

const noApi = word => {
  return word[word.length - 1] + randomAnswer();
};

export const catAnswerNoApi = ({ word, setWordList, point, setSound }) => {
  if (point === 20) {
    alert('왜 이렇게 잘하냐옹! 이제 더 이상 봐주지 않겠냐옹!');
    setTimeout(() => {
      setWordList(prev =>
        prev.concat({ text: '이건못하겠지냥', color: 'red' })
      );
    }, 300);
  } else {
    setTimeout(() => {
      setWordList(prev => prev.concat({ text: noApi(word), color: 'red' }));
      setSound(true);
    }, 300);
  }
};

//랜덤으로 글자 생성
//점수 로직 추가
