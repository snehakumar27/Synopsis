import React from "react";
import { Container } from "react-bootstrap";
import JsonData from "../mockdata/calendar_events.json";

function AppointmentScreen() {
	const DisplayData=JsonData.events.map((info)=>{
			return(
				<tr>
					<td>{info.date + "-" +info.month + "-" + info.year}</td>
					<td>{info.day}</td>
					<td>{info.hour+":"+info.min+" " +info.period}</td>
					<td>{info.name}</td>
					<td>{info.location}</td>
					<td>{info.doctor}</td>
					<td>{info.time}</td>
				</tr>
			)
		}
	)
	return(
		<Container style={{ padding:20 }}>
			<p className="sectionHeader">Upcoming Appointments</p>
			<div>
				<table class="table table-striped">
					<thead>
						<tr>
						<th>Date</th>
						<th>Day</th>
						<th>Time</th>
						<th>Purpose</th>
						<th>Location</th>
						<th>Consulting Doctor</th>
						<th>Waiting Time</th>
						</tr>
					</thead>
					<tbody>{DisplayData}</tbody>
				</table>
			</div>
		</Container>
	)
}

export default AppointmentScreen;
