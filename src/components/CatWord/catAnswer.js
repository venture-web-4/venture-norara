import React, { useState } from 'react';
import axios from 'axios';
import { postScore } from '../../api/score';
import { loadItem } from '../../utils/storage';

const getUrl = word => {
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

const sendPostApi = async word => {
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
    return res.data.items;
  } catch (err) {
    console.log(err);
  }
};

export const catAnswer = async (word, setWordList, point, setSound) => {
  // const rawApiAnswer = await sendPostApi(word.charAt(word.length - 1));
  // const apiAnswer = rawApiAnswer[0]['description'].split(' ')[1];
  // console.log(rawApiAnswer[0]);
  const handlePostScore = async point => {
    const userName = loadItem('userName');
    const userEmail = loadItem('userEmail');
    await postScore(2, point, userName, userEmail);
    location.reload();
  };

  const apiAnswer = noApi(word);
  if (apiAnswer != '') {
    if (point === 12) {
      alert(`왜 이렇게 잘하냐옹! 져라 인간!!\n점수: ${point}점`);
      handlePostScore(12);
      location.reload();
    } else {
      setTimeout(() => {
        setWordList(prev => prev.concat({ text: apiAnswer, color: 'red' }));
        setSound(true);
      }, 300);
    }
  } else {
    alert('game over');
    handlePostScore(point);
    location.reload();
  }
};

const randomAnswer = () => {
  const koreanComponent =
    '가갸거겨고교구규그기긔개게나냐너녀노뇨누뉴느니늬내네다댜더뎌도드디듸대댸데돠되돼둬뒤뒈라랴러려로료루류르리릐래레롸뢰뢔뤄뤼뤠마먀머며모묘무뮤므미믜매메뫄뫼뫠뭐뮈뭬바뱌버벼보뵤부뷰브비븨배봐뵈봬사샤서셔소쇼수슈싀새섀세셰솨쇠쇄쉐야어여오요우유으이의애에예와외왜워위웨조주재제좌죄좨줘쥐줴차챠처쳐초쵸추츄츠치츼채챼체쳬톼최춰취췌카캬커켜코쿄쿠큐크키킈캐톼쾨쿼퀴타탸터텨토툐투튜트티틔태턔테톄톼퇴퇘퉈튀퉤파퍄퍼펴포표푸퓨프피픠패퐈푀퐤풔퓌풰하햐허혀호효후휴흐히희해햬헤혜화회홰훠휘훼까꺄꺼껴꼬꾸뀨끄끼끠께꽈꾀꽤꿔뀌꿰따땨떠뗘또뚀뚜뜌뜨띠띄때똬뙤뙈뚸뛰뛔싸쌰써쎠쏘쑈쑤쓔쓰씨씌쌔쎄쏴쐬쐐쒀쒸쒜짜쨔쪼쬬쭈쮸쯔찌쯰째쩨쪠쫘쬐쭤쮜쮀';
  const randomChar = koreanComponent.charAt(
    Math.floor(Math.random() * koreanComponent.length)
  );
  return `야옹${randomChar}`;
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
