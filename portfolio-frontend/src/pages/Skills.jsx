import { useState, useEffect } from "react"
import axiosInstance from "../utils/axiosInstance"

const Skills = () => {
	const [skills, setSkills] = useState([])

	useEffect(() => {
		axiosInstance
			.get("skills/")
			.then(response => setSkills(response.data))
			.catch(error => console.error("Error fetching skills:", error))
	}, [])

	return (
		<div className="container my-5">
			<h1 className="text-center mb-4">Skills</h1>
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card" style={{ width: "100%" }}>
						<ul className="list-group list-group-flush">
							{skills.map(skill => (
								<li className="list-group-item" key={skill.id}>
									{skill.name}
								</li>
							))}
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
