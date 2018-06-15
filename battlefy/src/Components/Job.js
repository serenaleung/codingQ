import React, { Component } from 'react';

let students = require('../data.json');

class Job extends React.Component {
	constructor(props) {
		super(props);
			console.log('Job constructor', this.props);
			this.state = {
				jobId: this.props.id,
				jobTitle: this.props.jobTitle,
				jobEmployer: this.props.employerName,
				jobLocation: this.props.jobLocation,
				jobDate: this.props.startDate,
				jobDescription: false
			}
			this.handleInput = this.handleInput.bind(this);
	}

	componentDidUpdate() {
		//this.setData();
		console.log('job componentDidUpdate', this.props.jobs);
	}

	setData(){
		console.log('job setData', this.props.jobs);
			// for (const job of this.props.jobs) {
				this.setState(
					{
						jobId: this.props.jobs[0].id,
						jobTitle: this.props.jobs[0].jobTitle,
						jobEmployer: this.props.jobs[0].employerName,
						jobLocation: this.props.jobs[0].jobLocation,
						jobDate: this.props.jobs[0].startDate,
						jobDescription: false
					})
				// }
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
