import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"

const About = () => {
	const [aboutData, setAboutData] = useState(null)

	useEffect(() => {
		axiosInstance
			.get("about")
			.then(response => setAboutData(response.data[0])) // Assuming single entry
			.catch(error => console.error("Error fetching About data:", error))
	}, [])

	if (!aboutData) return <p>Loading...</p>

	return (
		<div>
			<h1>About Me</h1>
			<h2>{aboutData.name}</h2>
			<p>{aboutData.bio}</p>
			<img
				src={aboutData.profile_image}
				alt={aboutData.name}
				style={{ width: "150px", borderRadius: "50%" }}
			/>
		</div>
	)
}

export default About
