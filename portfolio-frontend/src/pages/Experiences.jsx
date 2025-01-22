import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import Loading from "../components/Loading"

const Experiences = () => {
	const [experience, setExperience] = useState([])
	const [experienceError, setExperienceError] = useState(false)

	useEffect(() => {
		axiosInstance
			.get("experience")
			.then(response => setExperience(response.data))
			.catch(error => {
				console.error("Error fetching Experience data:", error)
				setExperienceError(true) // Set error state
			})
	}, [])

	if (experienceError) {
		return <p>Error loading experiences. Please try again later.</p>
	}

	if (!experience.length) {
		return <Loading />
	}

	return (
		<div className="container my-5">
			<h1 className="text-center mb-4">Experiences</h1>
			<div className="row">
				{experience.map(exp => (
					<div key={exp.id} className="col-12 col-md-4 mb-4">
						<div className="card h-100">
							<div className="card-body">
								<h5 className="card-title">
									{exp.role} at {exp.company}
								</h5>
								<h6 className="card-subtitle mb-2 text-muted">
									{exp.start_date} - {exp.end_date || "Present"}
								</h6>
								<p className="card-text">{exp.description}</p>
								<div className="d-flex gap-2">
									{exp.company_website && (
										<a
											href={exp.company_website}
											className="btn btn-secondary btn-sm mr-2"
											target="_blank"
											rel="noopener noreferrer"
										>
											Company Website
										</a>
									)}
									{exp.project_link && (
										<a
											href={exp.project_link}
											className="btn btn-secondary btn-sm"
											target="_blank"
											rel="noopener noreferrer"
										>
											Project Details
										</a>
									)}
								</div>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	)
}

export default Experiences
