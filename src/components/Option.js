import React from 'react';
import { connect } from 'react-redux';
import { setDiff } from '../actions';

class Option extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      diff: '1'
    }

    this.onChangeDiff = this.onChangeDiff.bind(this);
  }

  render(){
    return(
      <div>
        <input type="text" value={ this.state.diff } onChange={this.onChangeDiff}></input>
      </div>
    );
  }

  /*
     input 값을 수정 할 때 실행됩니다.
     숫자만 적을 수 있도록 코드를 작성하였습니다.
     값이 수정될 떄 마다 mapDispatchToProps 에서 매핑된
     onUpdateDiff 를 통하여 새로운 값을 dispatch 합니다
  */
  onChangeDiff(e){
    if(isNaN(e.target.value))
      return ;

    this.setState({
      diff: e.target.value
    });

    if(e.target.value === ''){
      this.setState({
        diff:'0'
      });
    }

    this.props.onUpdateDiff(parseInt(e.target.value));
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    onUpdateDiff: (value) => { dispatch(setDiff(value)); }
  };
};

Option = connect(undefined, mapDispatchToProps)(Option);

export default Option;
