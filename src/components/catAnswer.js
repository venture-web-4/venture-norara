import React, { useState } from 'react';

const api = word => {
  return word[word.length - 1] + '기기기기';
};

export const catAnswer = ({ word, setWordList, point, setSound }) => {
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
