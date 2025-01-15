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
		<div className="container my-5">
			<h1 className="text-center mb-4">Experiences</h1>
			<div className="row">
				{experience.map(exp => (
					<div key={exp.id} className="col-md-4 mb-4">
						<div className="card h-100" style={{ width: "100%" }}>
							<div className="card-body">
								<h5 className="card-title">
									{exp.role} at {exp.company}
								</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									{exp.start_date} - {exp.end_date || "Present"}
								</h6>
								<p className="card-text">{exp.description}</p>
								<a href={exp.company_website || "#"} className="card-link">
									Company Website
								</a>
								<a href={exp.project_link || "#"} className="card-link">
									Project Details
								</a>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Experiences
