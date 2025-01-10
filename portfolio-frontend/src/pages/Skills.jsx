import React, { useEffect, useState } from "react"
import axios from "axios"

const Skills = () => {
	const [skills, setSkills] = useState([])

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/skills/")
			.then(response => setSkills(response.data))
			.catch(error => console.error("Error fetching Skills data:", error))
	}, [])

	return (
		<div>
			<h1>Skills</h1>
			<ul>
				{skills.map(skill => (
					<li key={skill.id}>
						{skill.name} - {skill.level}
					</li>
				))}
			</ul>
		</div>
	)
}

export default Skills
