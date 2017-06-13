import React, { Component }  from 'react';
import ClickHere from './Components/ClickHere.js'
import InputField from './Components/InputField.js'
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      amount: undefined
    }
  }

  displayData() {
    if(!this.state.amount) {
      return <td><ClickHere amount={this.state.amount} /></td>
    }
    return <td>{this.state.amount}</td>
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
        </div>

        <table>
          <thead>
               <tr>
                   <th>学员</th>
                   <th>年龄</th>
                   <th>班级</th>
                   <th>已上课次数/总</th>
                   <th>已缴学费</th>
                   <th>操作</th>
               </tr>
           </thead>
           <tbody>
             <tr>
                 <td>Kelvin Chung</td>
                 <td>7</td>
                 <td>少儿现代舞中班</td>
                 <td>0/6</td>
                 {
                   this.displayData()
                 }
                 <td></td>
             </tr>
           </tbody>
       </table>
      </div>
    );
  }
}

export default App;
