import React, { useState } from 'react';
import axios from 'axios';
import { apiKey } from '../../constants/wordRelayApiKey';

const api = word => {
  return word[word.length - 1] + '기기기기';
};

const getUrl = word => {
  return `/search?key=${apiKey}&q=${word}`;
};

const sendRequest = word => {
  return axios({
    url: getUrl(word),
    method: 'GET',
  }).then(res => console.log(res));
};

export const catAnswer = ({ word, setWordList, point, setSound }) => {
  sendRequest(word);

  if (point === 20) {
    alert('왜 이렇게 잘하냐옹! 이제 더 이상 봐주지 않겠냐옹!');
    setTimeout(() => {
      setWordList(prev =>
        prev.concat({ text: '이건못하겠지냥', color: 'red' })
      );
    }, 300);
  } else {
    setTimeout(() => {
      setWordList(prev => prev.concat({ text: api(word), color: 'red' }));
      setSound(true);
    }, 300);
  }
};
