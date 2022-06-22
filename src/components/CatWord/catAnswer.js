import React, { useState } from 'react';
import axios from 'axios';

const api = word => {
  return word[word.length - 1] + '기기기기';
};

const getUrl = word => {
  // const apiKey = process.env.REACT_APP_OPENDICT_API_KEY;
  // return `/api/search?key=${apiKey}&q=${word}&req_type=json`;

  const display = 2;
  return `/v1/search/encyc.json?query=${word}&display=${display}`;
};

const sendRequest = word => {
  return axios({
    url: getUrl(word),
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
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
