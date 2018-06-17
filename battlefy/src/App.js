import React, { Component } from 'react';
import StudentDetails from './Components/StudentDetails.js'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './App.css';

let students = require('./data.json');

class App extends Component {

	render() {
		return (
			<Tabs>
				<div className="flexRow mobileColumn">
					<div className="flexColumn">
						<TabList className="mobileRow">
							{
								students.map(student =>
									<Tab className="listNoStyle" key={`${student.id}1`}>
										<img className="tabStyle" src={student.photoUrl}></img>
									</Tab>
								)
							}
						</TabList>
					</div>
					<div className="flexColumn flexGrow">
						{
							students.map(student =>
								<TabPanel key={student.id}>
									<StudentDetails {...student} />
								</TabPanel>
							)
						}
					</div>
				</div>
			</Tabs>
		);
	}
}

export default App;
