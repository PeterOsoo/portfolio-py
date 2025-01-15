import { useState, useEffect } from "react"
import axiosInstance from "../utils/axiosInstance"
import Loading from "../components/Loading"

const Skills = () => {
	const [skills, setSkills] = useState([])
	const [loading, setLoading] = useState(true) // State to handle loading

	useEffect(() => {
		axiosInstance
			.get("skills/")
			.then(response => {
				setSkills(response.data)
				setLoading(false) // Set loading to false when data is fetched
			})
			.catch(error => {
				console.error("Error fetching skills:", error)
				setLoading(false) // Set loading to false even if there's an error
			})
	}, [])

	return (
		<div className="container my-5">
			<h1 className="text-center mb-4">Skills</h1>
			<div className="row justify-content-center">
				<div className="col-md-6">
					<div className="card" style={{ width: "100%" }}>
						{/* Show loading indicator when data is being fetched */}
						{loading ? (
							<Loading />
						) : (
							<ul className="list-group list-group-flush">
								{skills.map(skill => (
									<li className="list-group-item" key={skill.id}>
										{skill.name}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>
			</div>
		</div>
	)
}

export default Skills
