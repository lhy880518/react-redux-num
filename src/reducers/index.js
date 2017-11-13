import { INCREMENT, DECREMENT, SET_DIFF} from '../actions';
import { combineReducers } from 'redux';

//store에서 사용할 값들
const counterInitialState = {
  value:0,
  diff:1
};

const counter = (state = counterInitialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.diff
      });
    default:
      return state;
  }
};

const extra = (state = { value : 'this_is_extra_reducer'}, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

//리듀서가 여러개일 때 아래와 같이 합친다.
const counterApp = combineReducers({
  counter,
  extra
});
//위의 reducer 를 사용하여 store를 만들게 되면,
//store 의 state 구조는 다음과 같이 생성됩니다:
/*
  {
    counter: { value: 0, diff: 1 }
    extra: { value: 'this_is_extra_reducer' }
  }
*/

/*
  reducer를 여러개로 분리하여 작성 할 땐, 서로 직접적인 관계가 없어야 합니다.

  예를 들어,INCREMENT 와 DECREMENT 부분에서, diff 값을 사용해야 하므로,
  SET_DIFF를 다른 reducer에 작성하지 않았죠.

  combineReducers 를 사용 할 때, 각 reducer에 다른 key를 주고싶다면
  다음과 같이 작성하면 됩니다.

  const counterApp = combineReducers({
    a: counter,
    b: extra
});
*/
export default counterApp;
