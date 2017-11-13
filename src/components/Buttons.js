import React from 'react';
import { connect } from 'react-redux';
import { increment, decrement } from '../actions';

//this.props.onIncrement 원래라면 this.props라는게 부모가 주는
//props값 중에서 onIncrement를 호출한다는건데
//redux에서는 아래에 연결해서 먹힌다고 보면된다
//그렇게 되는 이유는 아래의 connect함수로 store에 Buttons가 연결
//되었기 때문이다.
class Buttons extends React.Component {
  render(){
    return (
      <div>
        <button type="button"
          onClick = { this.props.onIncrement }>
          +
        </button>
        <button type="button"
          onClick={ this.props.onDecrement }>
          -
        </button>
      </div>
    );
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onIncrement: () => { dispatch(increment()); },
    onDecrement: () => { dispatch(decrement()); }
  };
};

Buttons = connect(undefined, mapDispatchToProps)(Buttons);

export default Buttons;
