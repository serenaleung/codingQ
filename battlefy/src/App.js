import React, { Component } from 'react';
import StudentDetails from './Components/StudentDetails.js'
import SwipeableViews from 'react-swipeable-views';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import './App.css';

let students = require('./data.json');

class App extends Component {

	render() {

    return (
			<div>
				<Tabs>
			    <TabList>
			      <Tab>Title 1</Tab>
			      <Tab>Title 2</Tab>
			    </TabList>
						{
							students.map(student =>
								<TabPanel>
										<StudentDetails {...student} />
								</TabPanel>
							)
						}
	  		</Tabs>
			</div>
    );
  }
}

export default App;
