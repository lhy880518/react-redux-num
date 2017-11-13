import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider }  from 'react-redux';
import App from './components/App';
import counterApp from './reducers';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(counterApp);
const rootElement = document.getElementById('root');

/*
  렌더링 될 때 Redux 컴포넌트인 <Provider> 에 store 를
  설정해주면 그 하위 컴포넌트들에 따로 parent-child 구조로
  전달해주지 않아도 connect 될 때 store에 접근 할 수 있게 해줍니다.
*/
ReactDOM.render(
  <Provider store = {store}>
    <App></App>
  </Provider>,
  rootElement
);

registerServiceWorker();
