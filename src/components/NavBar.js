import { Navbar } from 'react-bootstrap';
import logo from '../logo.svg';

const NavBar = () => {
	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="#">
				<img
					alt=""
					src={logo}
					width="30"
					height="30"
					className="d-inline-block align-top"
				/>{' '}
				Lista de Tareas
			</Navbar.Brand>
		</Navbar>
	);
};

export default NavBar;
