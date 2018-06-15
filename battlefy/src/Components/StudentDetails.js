import React, { Component } from 'react';
import Job from './Job.js'
import addrs from 'email-addresses';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';
import SwipeableViews from 'react-swipeable-views';

let caAreaCode = [403, 587, 780, 825, 250, 778, 236, 604, 204, 431, 506, 709, 867, 902, 782, 867, 365, 613, 807, 226, 289, 437, 416, 519, 647, 905, 249, 343, 548, 705, 782, 902, 579, 873, 514, 581, 819, 438, 418, 450, 639, 306, 867];

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    color: '#fff',
  },
  slide1: {
    background: '#FEA900',
  },
  slide2: {
    background: '#B3DC4A',
  },
  slide3: {
    background: '#6AC0FF',
  },
};

class StudentDetails extends React.Component {

	constructor(props) {
		super(props);
		console.log('student props', props)
		this.state = {
			studentId: props.id,
			studentName: `${props.firstName} ${props.lastName}`,
			phone: props.telephone,
			email: props.email,
			postalCode: props.postalCode,
			birthday: props.dateOfBirth,
			banner: props.bannerUrl,
			image: props.photoUrl
			}
			this.handleClick = this.handleClick.bind(this);
			this.handleInput = this.handleInput.bind(this);
	}

	componentDidMount() {
		// this.setData();
	}

	isEmail() {
		let obj = addrs(this.state.email);
		if (obj == null) {
			return (
				<div>
					<label className="error">Please enter a valid email address.</label>
				</div>
			)
		} else {
			return true;
		}
	}

	isCaPhone() {
		if (this.state.phone.length >= 3 && caAreaCode.indexOf(parseInt(this.state.phone.substring(0, 3))) < 0) {
			return (
				<div><label className="error">Please enter a Canadian phone number.</label></div>
			)
		}
	}

	isPostal() {
		let postal = new RegExp(/^\s*[a-ceghj-npr-tvxy]\d[a-ceghj-npr-tv-z](\s)?\d[a-ceghj-npr-tv-z]\d\s*$/i);
		if (this.state.postalCode.length > 0 && !postal.test(this.state.postalCode)) {
			return (
				<div>
					<label className="error">Please enter a valid postal code.</label>
				</div>
			)
		}
	}

	birthday() {
		return (
			<div>
				<p>Please type a day:</p>
				<DayPickerInput value={this.state.birthday} onDayChange={day =>
					{
						this.setState({birthday : day});
					}
				}/>
			</div>
		)
	}

	isBirthday() {
		if(this.state.birthday > new Date()){
			return (
				<div>
					<label className="error">Please enter a valid birthday.</label>
				</div>
			)
		}
	}

	isEmpty(event) {
		if (event.length < 1) {
			return (
				<div>
					<label className="error">Input field cannot be empty</label>
				</div>
			)
		}
	}

	handleInput(event) {
		this.setState({
			[event.target.name]: event.target.value
		});
	}

	handleClick(event) {
		event.preventDefault();
	}

	displayResult() {
		if(this.state.showData && this.state.studentName) {
			return (
			<div>
				<div>{this.state.studentName}</div>
				<div>{this.state.email}</div>
			</div>
			)
		}
	}

	job() {
		return (
			<div><Job jobs={this.state.jobs}/></div>
		)
	}

	render() {
		return(
			<div>
				<img src={this.state.banner}/>
				<img src={this.state.image} width="100" height="100"/>
				<form>
					<label>
						Student ID:
						<input type="text" name="studentId" placeholder="Student ID" value={this.state.studentId} onChange={this.handleInput}></input>
					</label>
					<label>
						Name:
						<input type="text" name="studentName" placeholder="Student Name" value={this.state.studentName} onChange={this.handleInput}></input>
					</label>
					{this.isEmpty(this.state.studentName)}
					<label>
						Email:
						<input type="text" name="email" placeholder="Email" value={this.state.email} onChange={this.handleInput}></input>
					</label>
					<label>
						Postal Code:
						<input type="text" name="postalCode" placeholder="Postal Code" value={this.state.postalCode} onChange={this.handleInput}></input>
					</label>
					<label>
						Phone Number:
						<input type="text" name="phone" placeholder="Phone Number" value={this.state.phone} onChange={this.handleInput}></input>
					</label>
					{this.isEmail()}


					{this.isPostal()}

					{this.isCaPhone()}
					{this.birthday()}
					{this.isBirthday()}
						<button onClick={this.handleClick}>Save</button>
					</form>
					{
						this.displayResult()
					}
					<SwipeableViews enableMouseEvents>
							{
								this.props.outcomes.map(jobs =>
									<div style={Object.assign({}, styles.slide, styles.slide1)}>
										<div><Job {...jobs} /></div>
									</div>
								)
							}
  				</SwipeableViews>

				</div>
		)
	}

}

export default StudentDetails;
