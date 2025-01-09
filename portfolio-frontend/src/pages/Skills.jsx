import { useEffect, useState } from "react"
import axios from "../axios"

const Skills = () => {
	const [skills, setSkills] = useState([])

	useEffect(() => {
		axios
			.get("skills/")
			.then(response => {
				setSkills(response.data)
			})
			.catch(error => console.error(error))
	}, [])

	return (
		<section>
			<h2>Skills</h2>
			<ul>
				{skills.map(skill => (
					<li key={skill.id}>
						<strong>{skill.name}</strong> - {skill.level}
					</li>
				))}
			</ul>
		</section>
	)
}

export default Skills
