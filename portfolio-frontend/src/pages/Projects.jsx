import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"

const Projects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		axiosInstance
			.get("projects")
			.then(response => setProjects(response.data))
			.catch(error => console.error("Error fetching Projects data:", error))
	}, [])

	return (
		<div className="container my-5">
			<h1 className="text-center mb-4">Projects</h1>
			<div className="row">
				{projects.map(project => (
					<div key={project.id} className="col-md-4 mb-4">
						<div className="card h-100">
							<div className="card-body">
								<h5 className="card-title">{project.title}</h5>
								<p className="card-text">
									{project.description ||
										"No description available for this project."}
								</p>
								{project.link && (
									<a
										href={project.link}
										className="btn btn-primary"
										target="_blank"
										rel="noopener noreferrer"
									>
										View Project
									</a>
								)}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Projects
