import React, { useEffect, useState } from "react"
import axios from "axios"

const Projects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/projects/")
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
