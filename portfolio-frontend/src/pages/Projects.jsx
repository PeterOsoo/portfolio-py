import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import Loading from "../components/Loading" // Import the Loading component
import { Modal, Button } from "react-bootstrap" // Import modal from React Bootstrap

const Projects = () => {
	const [projects, setProjects] = useState([])
	const [loading, setLoading] = useState(true)
	const [selectedProject, setSelectedProject] = useState(null)
	const [showModal, setShowModal] = useState(false)

	useEffect(() => {
		axiosInstance
			.get("projects")
			.then(response => {
				setProjects(response.data)
				setLoading(false)
			})
			.catch(error => {
				console.error("Error fetching Projects data:", error)
				setLoading(false)
			})
	}, [])

	const openModal = project => {
		setSelectedProject(project)
		setShowModal(true)
	}

	const closeModal = () => {
		setSelectedProject(null)
		setShowModal(false)
	}

	return (
		<div className="container my-5">
			<h1 className="text-center mb-4">Projects</h1>
			{loading ? (
				<Loading />
			) : (
				<div className="row">
					{projects.map(project => (
						<div key={project.id} className="col-md-4 mb-4">
							<div className="card h-100">
								<div className="card-body">
									<h5 className="card-title">{project.title}</h5>
									<p className="card-text">
										{project.description.length > 100
											? `${project.description.substring(0, 100)}...`
											: project.description}
									</p>
									<button
										className="btn btn-outline-secondary"
										onClick={() => openModal(project)}
									>
										View Details
									</button>
								</div>
							</div>
						</div>
					))}
				</div>
			)}

			{/* Modal for project details */}
			{selectedProject && (
				<Modal show={showModal} onHide={closeModal} centered size="lg">
					<Modal.Header closeButton>
						<Modal.Title>{selectedProject.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>
							<strong>Description:</strong> {selectedProject.description}
						</p>
						<p>
							<strong>Details:</strong>{" "}
							{selectedProject.details || "No additional details provided."}
						</p>
						<div
							className="table-responsive mx-auto"
							style={{ maxWidth: "600px" }}
						>
							<table className="table table-bordered">
								<tbody>
									<tr>
										<th>Start Date</th>
										<td>{selectedProject.start_date || "N/A"}</td>
									</tr>
									<tr>
										<th>End Date</th>
										<td>{selectedProject.end_date || "Ongoing"}</td>
									</tr>
									<tr>
										<th>Technology Stack</th>
										<td>
											{selectedProject.technologies_used || "Not specified"}
										</td>
									</tr>
								</tbody>
							</table>
						</div>

						{selectedProject.link && (
							<a
								href={selectedProject.link}
								className="btn btn-success mt-3"
								target="_blank"
								rel="noopener noreferrer"
							>
								Visit Project
							</a>
						)}
					</Modal.Body>
					<Modal.Footer>
						<Button variant="secondary" onClick={closeModal}>
							Close
						</Button>
					</Modal.Footer>
				</Modal>
			)}
		</div>
	)
}

export default Projects
