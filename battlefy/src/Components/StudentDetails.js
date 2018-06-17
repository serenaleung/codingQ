import React from 'react';
import Job from './Job.js'
import addrs from 'email-addresses';
import DayPickerInput from 'react-day-picker/DayPickerInput';
import SwipeableViews from 'react-swipeable-views';
import 'react-day-picker/lib/style.css';

import { autoPlay } from 'react-swipeable-views-utils';
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

let caAreaCode = [403, 587, 780, 825, 250, 778, 236, 604, 204, 431, 506, 709, 867, 902, 782, 867, 365, 613, 807, 226, 289, 437, 416, 519, 647, 905, 249, 343, 548, 705, 782, 902, 579, 873, 514, 581, 819, 438, 418, 450, 639, 306, 867];

class StudentDetails extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			studentId: props.id,
			studentName: `${props.firstName} ${props.lastName}`,
			phone: props.telephone,
			email: props.email,
			postalCode: props.postalCode,
			birthday: props.dateOfBirth,
			enrollDate: props.enrollmentDate,
			prevOccupation: props.prevOccupation,
			banner: props.bannerUrl,
			image: props.photoUrl
		}
		this.handleClick = this.handleClick.bind(this);
		this.handleInput = this.handleInput.bind(this);
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
		let phoneNumber = this.state.phone.replace(/\D/g,'');

		console.log("phoneNumber", phoneNumber, phoneNumber.length, caAreaCode.indexOf(parseInt(phoneNumber.substring(0, 3))))

		if (this.state.phone.length >= 3 && caAreaCode.indexOf(parseInt(phoneNumber.substring(0, 3))) < 0) {
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
				<label>birthday</label>
				<DayPickerInput format="YYYY-MM-DD" className="datePicker" value={this.state.birthday} onDayChange={day =>
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
		if (event == null || event.length < 0) {
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

	job() {
		return (
			<div><Job jobs={this.state.jobs}/></div>
		)
	}

	// state = {
	//   index: 0,
	// };

	handleChangeIndex = index => {
		this.setState({
			index,
		});
	};

	// handleClick(dotIndex) {
	//  this.setState({
	// 	 index: dotIndex
	//  });
	// }

	render() {
		const { index } = this.state;

		return(
			<div>

				<form>
					<div className="imgContainer flexColumn startOnAxis" style={{backgroundImage: `url(${this.state.banner})`}}>
						<div className="flexRow alignSelfEnd"><button onClick={this.handleClick}>Save</button></div>
						<div className="flexColumn header flexGrow endOnAxis mobileColumn">{this.state.studentName}</div>
						<div className="flexRow centerOnAxis mobileColumn">
							<div className="flexColumn itemWidth">
								<label className="displayStyle">Student ID</label><div>{this.state.studentId}</div>
								<label className="displayStyle">Enrollment Date</label>
								<div>{this.state.enrollDate}</div>

							</div>
							<div className="flexColumn itemWidth">
								<div>
									{this.birthday()}
									{this.isEmpty(this.state.birthday)}
									{this.isBirthday()}
									<label>
										Phone Number:
										<input type="text" name="phone" value={this.state.phone} onChange={this.handleInput}></input>
									</label>
									{this.isCaPhone()}
								</div>
								<div>
									<label>
										Email:
										<input type="text" name="email" value={this.state.email} onChange={this.handleInput}></input>
									</label>
									{this.isEmpty(this.state.email)}
									{this.isEmail()}
								</div>

							</div>
							<div className="flexColumn itemWidth">
								<div>
									<label>
										Previous Occupation:
										<input type="text" name="email" value={this.state.prevOccupation} onChange={this.handleInput}></input>
									</label>
								</div>
								<div>
									<label>
										Postal Code:
										<input type="text" name="postalCode" value={this.state.postalCode} onChange={this.handleInput}></input>
									</label>
									{this.isEmpty(this.state.postalCode)}
									{this.isPostal()}
								</div>
							</div>
						</div>
					</div>
				</form>

				<div className="jobOutcomes flexRow">
					<div className="flexColumn">Job Outcomes<label className="swipeText">&nbsp;&nbsp;(Swipe below)</label></div>
				</div>

				<AutoPlaySwipeableViews autoplay={false} index={index} onChangeIndex={this.handleChangeIndex} enableMouseEvents>
					{
						this.props.outcomes.map(job =>

							<div className="spaceBetweenOnAxis" key={job.id}>
								<div><Job {...job} /></div>
							</div>
						)
					}
				</AutoPlaySwipeableViews>
				{/* <div className="pagination">
					{
					this.props.outcomes.map((job,i) =>
					<button className="dot"></button>
					)

					}
				</div> */}
			</div>
)
}

}

export default StudentDetails;
