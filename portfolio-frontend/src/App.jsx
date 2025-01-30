import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from "./components/NavBar.jsx"

import Home from "./pages/Home"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Contact from "./pages/Contact"
import Skills from "./pages/Skills"
import Experiences from "./pages/Experiences"

const App = () => {
	return (
		<Router>
			{/* Update Navbar  */}
			<NavBar />

			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/skills" element={<Skills />} />
				<Route path="/experiences" element={<Experiences />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	)
}

export default App
