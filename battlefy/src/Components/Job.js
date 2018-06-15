import React, { Component } from 'react';

let students = require('../data.json');

class Job extends React.Component {
	constructor(props) {
		super(props);
			console.log('job constructor', this.props);
			this.state = {
				jobs: '',
				jobId: '',
				jobTitle: '',
				jobEmployer: '',
				jobLocation: '',
				jobDate: '',
				jobDescription: false
			}
			this.handleInput = this.handleInput.bind(this);
	}

	componentDidMount() {
		this.setData();
	}

	setData(){
		console.log('setData', this.props);
		let student = students.filter( item => item.id === this.state.studentId );
			for (let job in student.outcomes) {
				console.log("job", job);

				this.setState(
					{
						jobId: job.id,
						jobTitle: job.jobTitle,
						jobEmployer: job.employerName,
						jobLocation: job.jobLocation,
						jobDate: job.startDate,
						jobDescription: false
					}
				)
				// console.log("student.outcomes[0].jobTitle", student.outcomes);
				console.log("job", job.jobTitle);
			}
		}

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
		console.log(`${event.target.name}`, event.target.value);
	}

	// displayResult() {
	// 	if(this.state.showData && this.state.studentName) {
	// 		return (
	// 		<div>
	// 			<div>{this.state.studentName}</div>
	// 			<div>{this.state.email}</div>
	// 		</div>
	// 		)
	// 	}
	// }

	render() {
		return(
			<div>
				<form>
					<label>
						Job ID:
						<input type="text" placeholder="Job ID" name="jobId" value={this.state.jobId} onChange={this.handleInput}></input>
					</label>
					<label>
						Title:
						<input type="text" placeholder="Job Title" name="jobTitle" value={this.state.jobTitle} onChange={this.handleInput}></input>
					</label>
					<label>
						Start Date:
						<input type="text" placeholder="Start Date" name="jobDate" value={this.state.jobDate} onChange={this.handleInput}></input>
					</label>
					<label>
						Location:
						<input type="text" placeholder="Job Location" name="jobLocation" value={this.state.jobLocation} onChange={this.handleInput}></input>
					</label>
					<label>
						Employer:
						<input type="text" placeholder="Job Employer" name="jobEmployer" value={this.state.jobEmployer} onChange={this.handleInput}></input>
					</label>
				</form>
				{/* {
					this.displayResult()
				} */}
			</div>
		)
	}

}

export default Job;
