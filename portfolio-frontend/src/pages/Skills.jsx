import { useState, useEffect } from "react"
import axiosInstance from "../utils/axiosInstance"

const Skills = () => {
	const [skills, setSkills] = useState([])

	useEffect(() => {
		axiosInstance
			.get("skills/") // No need to include the full URL
			.then(response => setSkills(response.data))
			.catch(error => console.error("Error fetching skills:", error))
	}, [])

	return (
		<div>
			<h1>Skills</h1>
			<ul>
				{skills.map(skill => (
					<li key={skill.id}>{skill.name}</li>
				))}
			</ul>
		</div>
	)
}

export default Skills
