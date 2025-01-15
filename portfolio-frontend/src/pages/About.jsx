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
		<div
			className="d-flex flex-column align-items-center justify-content-center vh-100 text-center"
			style={{ backgroundColor: "#f8f9fa" }}
		>
			{aboutData.profile_image && (
				<div
					className="d-flex justify-content-center"
					style={{
						width: "150px",
						height: "150px",
						borderRadius: "50%",
						overflow: "hidden",
						marginBottom: "20px",
					}}
				>
					<img
						src={aboutData.profile_image}
						alt={aboutData.name}
						style={{ width: "100%", height: "100%", objectFit: "cover" }}
					/>
				</div>
			)}
			<h1 className="mb-3">{aboutData.name}</h1>
			<h3 className="text-muted mb-3">{aboutData.profession}</h3>
			<p className="lead mb-4">{aboutData.bio}</p>
			<a
				href={aboutData.link}
				className="btn btn-secondary btn-lg"
				target="_blank"
				rel="noopener noreferrer"
			>
				Learn More
			</a>
		</div>
	)
}

export default About
