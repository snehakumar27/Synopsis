import { useState } from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { HomeMonitoringModal } from "../components/home_monitoring/HomeMonitoringModal";
import monitoring from "../mockdata/monitoring.json";

export default function HomeMonitoringScreen() {
	const [openModal, setOpenModal] = useState(false);
	const [selectedMonitoring, setSelectedMonitoring] = useState(null);

	const array = [];
	monitoring.monitoring.forEach((item) => {
		array.push(
			<Monitoring
				item={item}
				setOpenModal={setOpenModal}
				setSelectedMonitoring={setSelectedMonitoring}
			/>
		);
	});
	console.log(selectedMonitoring);
	return (
		<Container style={{ padding: 20 }}>
			<p className="sectionHeader">Home Monitoring</p>
			<Row className="bootstrapRow">{array}</Row>
			<HomeMonitoringModal
				openModal={openModal}
				setOpenModal={setOpenModal}
				monitor={selectedMonitoring}
			/>
		</Container>
	);
}

function Monitoring({ item, setOpenModal, setSelectedMonitoring }) {
	return (
		<Col sm={6} lg={4} className="bootstrapColumn">
			<div style={{ padding: 10 }}>
				<div
					className="itemCard toggle"
					onClick={() => {
						setSelectedMonitoring(item);
						setOpenModal(true);
					}}
				>
					<Image
						src={item.image}
						style={{ aspectRatio: 1.25, objectFit: "contain" }}
					/>
					<div style={{ padding: 10 }}>
						<p style={{ fontSize: 17, fontWeight: 500 }}>
							{item.purpose}
						</p>
						<p style={{ fontSize: 13 }}>{item.name}</p>
					</div>
				</div>
			</div>
		</Col>
	);
}
