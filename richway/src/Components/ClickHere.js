import React, { Component }  from 'react';
import InputField from './InputField.js'

class ClickHere extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showInput: undefined,
      amount: this.props.amount
    }
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    this.setState({showInput: true});
  }

  onRenderScreen() {
    if(this.state.showInput) {
      return <InputField amount={this.state.amount} />
    }
    return <button className='btn' onClick={this.handleClick}>收款</button>
  }

  render() {
    return (
      <div>
        {
          this.onRenderScreen()
        }
      </div>
    )
  }
}

export default ClickHere;
