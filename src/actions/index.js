//action -> reducer -> store -> components

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

//카운터의 값을 올린다.
export const increment = () => {
  return {
    type: INCREMENT
  };
};

//카운터의 값을 낮춘다.
export const decrement = () => {
  return {
    type: DECREMENT
  };
};

//버튼이 눌러질 때 더하거나 뺄 값을 정한다.
export const setDiff = (value) => {
  return {
    type: SET_DIFF,
    diff: value
  };
};
