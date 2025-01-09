import NavBar from "./components/Navbar"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"

const App = () => {
	return (
		<Router>
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>

			{/* <footer>
				<p>&copy; 2025 My Portfolio. All rights reserved.</p>
			</footer> */}
		</Router>
	)
}

export default App
