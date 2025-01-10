import { useEffect, useState } from "react"
import axiosInstance from "../utils/axiosInstance"

const Contact = () => {
	const [contact, setContact] = useState(null)

	useEffect(() => {
		// Fetch the contact data from API
		axiosInstance
			.get("contact/") //
			.then(response => {
				setContact(response.data[0])
				console.log(response.data[0])
			})
			.catch(error => {
				console.error("Error fetching contact data:", error)
			})
	}, [])

	return (
		<div>
			{contact ? (
				<div>
					<h1>Contact</h1>
					<p>Email: {contact.email}</p>
					<p>Phone: {contact.phone}</p>
					<p>
						LinkedIn:{" "}
						<a
							href={contact.linkedin}
							target="_blank"
							rel="noopener noreferrer"
						>
							{contact.linkedin}
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
