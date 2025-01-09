import { useEffect, useState } from "react"
import axios from "../axios"

const Experience = () => {
	const [experiences, setExperiences] = useState([])

	useEffect(() => {
		axios
			.get("experience/")
			.then(response => {
				setExperiences(response.data)
			})
			.catch(error => console.error(error))
	}, [])

	return (
		<section>
			<h2>Experience</h2>
			<ul>
				{experiences.map(experience => (
					<li key={experience.id}>
						<h3>
							{experience.job_title} at {experience.company}
						</h3>
						<p>{experience.date_range}</p>
						<p>{experience.description}</p>
					</li>
				))}
			</ul>
		</section>
	)
}

export default Experience
