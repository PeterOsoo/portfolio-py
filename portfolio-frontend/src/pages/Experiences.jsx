import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import Loading from "../components/Loading"

const Experiences = () => {
	const [experiences, setExperiences] = useState([])
	const [error, setError] = useState(false)
	const [selectedExperience, setSelectedExperience] = useState(null) // Track selected experience for the modal

	useEffect(() => {
		axiosInstance
			.get("experience")
			.then(response => setExperiences(response.data))
			.catch(error => {
				console.error("Error fetching Experience data:", error)
				setError(true)
			})
	}, [])

	const openModal = experience => {
		setSelectedExperience(experience) // Set the selected experience
	}

	const closeModal = () => {
		setSelectedExperience(null) // Clear the selected experience
	}

	if (error) {
		return (
			<div className="text-center text-danger my-5">
				<p>Error loading experiences. Please try again later.</p>
			</div>
		)
	}

	if (!experiences.length) {
		return <Loading />
	}

	return (
		<div className="container my-5">
			<h1 className="text-center mb-4">Experiences</h1>
			<div className="row">
				{experiences.map(exp => (
					<div key={exp.id} className="col-12 col-md-6 col-lg-4 mb-4">
						<div className="card h-100 shadow-sm">
							<div className="card-body">
								<h5 className="card-title">
									{exp.role} at {exp.company}
								</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									{exp.start_date} - {exp.end_date || "Present"}
								</h6>
								<p className="card-text">
									{exp.description.length > 60
										? `${exp.description.slice(0, 60)}...`
										: exp.description}
								</p>
								<button
									className="btn btn-outline-secondary btn-sm"
									onClick={() => openModal(exp)}
								>
									Read More
								</button>
							</div>
						</div>
					</div>
				))}
			</div>

			{/* Modal */}
			{selectedExperience && (
				<div
					className="modal show d-block"
					tabIndex="-1"
					role="dialog"
					style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}
				>
					<div className="modal-dialog modal-lg" role="document">
						<div className="modal-content">
							<div className="modal-header">
								<h5 className="modal-title">
									{selectedExperience.role} at {selectedExperience.company}
								</h5>
								<button
									type="button"
									className="btn-close btn-sm"
									onClick={closeModal}
									aria-label="Close"
									style={{
										backgroundColor: "transparent",
										border: "none",
										cursor: "pointer",
									}}
								>
									<i className="fas fa-times"></i>
								</button>
							</div>
							<div className="modal-body">
								<p>
									<strong>Dates:</strong> {selectedExperience.start_date} -{" "}
									{selectedExperience.end_date || "Present"}
								</p>
								<p>{selectedExperience.description}</p>
								<div className="d-flex gap-2 mt-3">
									{selectedExperience.company_website && (
										<a
											href={selectedExperience.company_website}
											className="btn btn-outline-primary btn-sm"
											target="_blank"
											rel="noopener noreferrer"
										>
											Company Website
										</a>
									)}
									{selectedExperience.project_link && (
										<a
											href={selectedExperience.project_link}
											className="btn btn-outline-secondary btn-sm"
											target="_blank"
											rel="noopener noreferrer"
										>
											Project Details
										</a>
									)}
								</div>
							</div>
							<div className="modal-footer">
								<button
									type="button"
									className="btn btn-secondary"
									onClick={closeModal}
								>
									Close
								</button>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	)
}

export default Experiences
