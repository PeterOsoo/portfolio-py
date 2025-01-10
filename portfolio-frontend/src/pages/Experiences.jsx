import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"

const Experiences = () => {
	const [experience, setExperience] = useState([])

	useEffect(() => {
		axiosInstance
			.get("experience")
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
