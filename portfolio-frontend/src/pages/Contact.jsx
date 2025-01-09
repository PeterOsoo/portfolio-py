import { useState } from "react"
import axios from "../axios"

const Contact = () => {
	const [formData, setFormData] = useState({ name: "", email: "", message: "" })
	const [responseMessage, setResponseMessage] = useState("")

	const handleChange = e => {
		const { name, value } = e.target
		setFormData(prevData => ({
			...prevData,
			[name]: value,
		}))
	}

	const handleSubmit = e => {
		e.preventDefault()

		axios
			.post("contact/", formData)
			.then(response => {
				setResponseMessage("Your message has been sent successfully!")
			})
			.catch(error => {
				setResponseMessage("There was an error sending your message.")
			})
	}

	return (
		<section>
			<h2>Contact</h2>
			<form onSubmit={handleSubmit}>
				<div>
					<label>Name:</label>
					<input
						type="text"
						name="name"
						value={formData.name}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label>Email:</label>
					<input
						type="email"
						name="email"
						value={formData.email}
						onChange={handleChange}
						required
					/>
				</div>
				<div>
					<label>Message:</label>
					<textarea
						name="message"
						value={formData.message}
						onChange={handleChange}
						required
					></textarea>
				</div>
				<button type="submit">Send Message</button>
			</form>
			{responseMessage && <p>{responseMessage}</p>}
		</section>
	)
}

export default Contact
