import React, { useEffect, useState } from "react"
import axios from "axios"

const About = () => {
	const [aboutData, setAboutData] = useState(null)

	useEffect(() => {
		axios
			.get("http://127.0.0.1:8000/api/about/")
			.then(response => setAboutData(response.data[0])) // Assuming single entry
			.catch(error => console.error("Error fetching About data:", error))
	}, [])

	if (!aboutData) return <p>Loading...</p>

	return (
		<div>
			<h1>{aboutData.name}</h1>
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
