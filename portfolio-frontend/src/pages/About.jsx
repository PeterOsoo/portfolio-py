import { useEffect, useState } from "react"
import axios from "../axios"

const About = () => {
	const [aboutData, setAboutData] = useState(null)

	useEffect(() => {
		axios
			.get("about/")
			.then(response => {
				setAboutData(response.data[0]) // assuming there's only one "About" entry
			})
			.catch(error => console.error(error))
	}, [])

	if (!aboutData)
		return (
			<div>
				<h2>About Me</h2>
				<p>Loading...</p>{" "}
			</div>
		)

	return (
		<section>
			<h2>About Me</h2>
			<img src={aboutData.profile_image} alt={aboutData.name} />
			<h3>{aboutData.name}</h3>
			<p>{aboutData.bio}</p>
		</section>
	)
}

export default About
