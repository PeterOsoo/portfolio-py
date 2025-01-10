import { useEffect, useState } from "react"
import axios from "axios"

const Experiences = () => {
	const [experience, setExperience] = useState([])

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/experience/")
			.then(response => setExperience(response.data))
			.catch(error => console.error("Error fetching Experience data:", error))
	}, [])

	return (
		<div>
			<h1>Experience</h1>
			{experience.map(exp => (
				<div key={exp.id}>
					<h2>
						{exp.role} at {exp.company}
					</h2>
					<p>{exp.description}</p>
					<p>
						{exp.start_date} - {exp.end_date || "Present"}
					</p>
				</div>
			))}
		</div>
	)
}

export default Experiences
