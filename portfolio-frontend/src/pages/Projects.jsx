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
		<div>
			<h1>Projects</h1>
			{projects.map(project => (
				<div key={project.id}>
					<h2>{project.title}</h2>
					<p>{project.description}</p>
					<a href={project.link} target="_blank" rel="noopener noreferrer">
						View Project
					</a>
				</div>
			))}
		</div>
	)
}

export default Projects
