import "./App.css"
import About from "./components/About"
import Skills from "./components/Skills"

const App = () => {
	return (
		<div className="App">
			<header className="App-header">
				<h1>My Portfolio</h1>
			</header>
			<About />
			<Skills />
		</div>
	)
}

export default App
