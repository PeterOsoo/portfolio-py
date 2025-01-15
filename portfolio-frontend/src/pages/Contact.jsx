import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"

const Contact = () => {
	const [contact, setContact] = useState(null)

	useEffect(() => {
		// Fetch the contact data from API
		axiosInstance
			.get("contact/") // Adjust the endpoint as needed
			.then(response => {
				setContact(response.data[0])
				console.log(response.data[0])
			})
			.catch(error => {
				console.error("Error fetching contact data:", error)
			})
	}, [])

	return (
		<div className="d-flex justify-content-center align-items-center vh-100">
			{contact ? (
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
			) : (
				<p>Loading contact data...</p>
			)}
		</div>
	)
}

export default Contact
