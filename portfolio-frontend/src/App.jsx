import { useEffect } from "react"

import "./App.css"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
import About from "./components/About"
import Skills from "./components/Skills"
import Experience from "./components/Experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Home from "./pages/Home"

const App = () => {
	useEffect(() => {
		window.scrollTo(0, 0) // Scroll to top when route changes
	}, [])

	return (
		<Router>
			<div className="App">
				<header className="App-header">
					<h1>My Portfolio</h1>
					<nav>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About</Link>
							</li>
							<li>
								<Link to="/skills">Skills</Link>
							</li>
							<li>
								<Link to="/experience">Experience</Link>
							</li>
							<li>
								<Link to="/projects">Projects</Link>
							</li>
							<li>
								<Link to="/contact">Contact</Link>
							</li>
						</ul>
					</nav>
				</header>
				<main>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/about" element={<About />} />
						<Route path="/skills" element={<Skills />} />
						<Route path="/experience" element={<Experience />} />
						<Route path="/projects" element={<Projects />} />
						<Route path="/contact" element={<Contact />} />
					</Routes>
				</main>
			</div>
		</Router>
	)
}

export default App
