import React, { Component }  from 'react';
import ClickHere from './ClickHere';

class InputField extends React.Component {
  constructor(props) {
    super(props)
    this.tableInput = this.tableInput.bind(this);
    // this.handleClick = this.handleClick.bind(this);
    this.state ={
      amount: this.props.amount,
      display: 'null',
      showPrice: false
    }
  }

  tableInput(event) {
    // console.log(event.target.value);
    this.setState({amount: event.target.value})
  }

  handleClick(event) {
    event.preventDefault();
    if(this.state.amount) {
      this.setState({display: 'btnHide', showPrice: true});
    } else {
      alert('You did not put an input!');
    }
  }

  renderPrice() {
    if(this.state.showPrice && this.state.amount) {
      return <div>{this.state.amount}</div>
    }
  }

  render(){
    return(
      <div>
        <form className={this.state.display}>
          <input className="form" type="text" name="amount" placeholder="课节" value={this.state.amount} onChange={this.tableInput.bind(this)}></input>
          <button className="confirmBtn" onClick={this.handleClick.bind(this)}>確認</button>
        </form>
        {
          this.renderPrice()
        }
      </div>
    )
  }
}

export default InputField;
