import React from 'react';

class Job extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			jobId: this.props.id,
			jobTitle: this.props.jobTitle,
			jobEmployer: this.props.employerName,
			jobLocation: this.props.jobLocation,
			jobCity: this.props.city,
			jobProvince: this.props.province,
			jobCountry: this.props.country,
			jobDate: this.props.startDate,
			jobDescription: false
		}
		this.handleInput = this.handleInput.bind(this);
	}

	setData(){
		console.log('job setData', this.props.jobs);
		this.setState(
			{
				jobId: this.props.jobs[0].id,
				jobTitle: this.props.jobs[0].jobTitle,
				jobEmployer: this.props.jobs[0].employerName,
				jobCity: this.props.jobs[0].city,
				jobProvince: this.props.jobs[0].province,
				jobCountry: this.props.jobs[0].country,
				jobDate: this.props.jobs[0].startDate,
				jobDescription: false
			})
		}

		handleInput(event) {
			this.setState({
				[event.target.name]: event.target.value
			});
			console.log(`${event.target.name}`, event.target.value);
		}

		isEmpty(event) {
			if (event == null || event.length < 0) {
				return (
					<div>
						N/A
					</div>
				)
			}
		}

		render() {
			return(
				<form>
					<div className="job flexRow mobileColumn">
						<div className="flexColumn itemWidth">
							<label className="jobTitles">
								Job ID:
							</label>
							{this.state.jobId}
							<label className="jobTitles">
								Start Date:
							</label>
							{this.state.jobDate}
						</div>

						<div className="flexColumn itemWidth">
							<label className="jobTitles">
								Employer:
							</label>
							{this.state.jobEmployer}
							<label className="jobTitles">
								Title:
							</label>
							{this.state.jobTitle}
						</div>
						<div className="flexColumn itemWidth">
							<label className="jobTitles">
								Location:
							</label>
							{this.state.jobCity} {this.state.jobProvince}
							{this.isEmpty(this.state.jobProvince)}
							<label className="jobTitles">
								Country:
							</label>
							{this.state.jobCountry}
							{this.isEmpty(this.state.jobCountry)}
						</div>
					</div>
				</form>
			)
		}

	}

	export default Job;
