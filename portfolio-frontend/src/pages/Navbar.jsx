import { Navbar, Nav, NavDropdown, Container, Button } from "react-bootstrap"
import { Link } from "react-router-dom"

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark" expand="lg" sticky="top">
			<Container>
				<Navbar.Brand as={Link} to="/">
					My Portfolio
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="navbar-nav" />
				<Navbar.Collapse id="navbar-nav">
					<Nav className="ml-auto">
						<Nav.Link as={Link} to="/">
							Home
						</Nav.Link>
						<Nav.Link as={Link} to="/about">
							About
						</Nav.Link>
						<Nav.Link as={Link} to="/projects">
							Projects
						</Nav.Link>
						<Nav.Link as={Link} to="/contact">
							Contact
						</Nav.Link>

						<NavDropdown title="More" id="navbar-dropdown">
							<NavDropdown.Item as={Link} to="/blog">
								Blog
							</NavDropdown.Item>
							<NavDropdown.Item as={Link} to="/resume">
								Resume
							</NavDropdown.Item>
						</NavDropdown>

						<Nav.Link href="https://github.com/PeterOsoo" target="_blank">
							<Button variant="outline-light">GitHub</Button>
						</Nav.Link>
					</Nav>
				</Navbar.Collapse>
			</Container>
		</Navbar>
	)
}

export default NavBar
