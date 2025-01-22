import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"
import Loading from "../components/Loading" // Import the Loading component

const Contact = () => {
	const [contact, setContact] = useState(null)
	const [loading, setLoading] = useState(true) // Add loading state

	useEffect(() => {
		// Fetch the contact data from API
		axiosInstance
			.get("contact/") // Adjust the endpoint as needed
			.then(response => {
				setContact(response.data[0])
				setLoading(false) // Set loading to false after data is fetched
			})
			.catch(error => {
				console.error("Error fetching contact data:", error)
				setLoading(false) // Set loading to false if there's an error
			})
	}, [])

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			{/* Show loading spinner while data is being fetched */}
			{loading ? (
				<Loading /> // Display the Loading component
			) : (
				<div className="jumbotron p-5 my-5 text-center">
					<h1 className="display-4">Contact Me</h1>
					<p className="lead">
						Get in touch with me using the following details.
					</p>
					<hr className="my-4" />
					<p>Email: {contact.email}</p>
					<p>Phone: {contact.phone}</p>
					<p>
						LinkedIn:{" "}
						<a
							href={contact.linkedin}
							target="_blank"
							rel="noopener noreferrer"
							className="btn btn-secondary"
						>
							Visit My LinkedIn
						</a>
					</p>
				</div>
			)}
		</div>
	)
}

export default Contact
