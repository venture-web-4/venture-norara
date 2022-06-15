export const pickRandom = arr => {
  return arr[Math.floor(Math.random() * arr.length)].split('');
};

export const setLenArr = arr => {
  return '_'.repeat(arr.length).split('');
};

export const allIndexOf = (target, arr) => {
  const result = {
    indexArr: [],
    isIncludes: false,
  };
  arr.forEach((elem, i) => {
    if (elem === target) result.indexArr.push(i);
  });

  if (result.indexArr.length !== 0) result.isIncludes = true;
  return { result };
};
