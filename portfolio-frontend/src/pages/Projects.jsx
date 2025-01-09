import { useEffect, useState } from "react"
import axios from "../axios"

const Projects = () => {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		axios
			.get("projects/")
			.then(response => {
				setProjects(response.data)
			})
			.catch(error => console.error(error))
	}, [])

	return (
		<section>
			<h2>Projects</h2>
			<ul>
				{projects.map(project => (
					<li key={project.id}>
						<h3>{project.name}</h3>
						<p>{project.description}</p>
						<a href={project.link} target="_blank" rel="noopener noreferrer">
							View Project
						</a>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Projects
