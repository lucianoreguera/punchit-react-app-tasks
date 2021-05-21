import { useState } from 'react';
import { Badge, Col, Container, Row } from 'react-bootstrap';
import uuid from 'short-uuid';
import FormTask from './components/FormTask';
import ListTasks from './components/ListTasks';
import NavBar from './components/NavBar';

import 'bootstrap/dist/css/bootstrap.min.css';

const initialState = [];

function App() {
	const [tasks, setTasks] = useState(initialState);
	const [done, setDone] = useState(0);
	const [pending, setPending] = useState(0);

	const createTask = (task) => {
		task.id = uuid.generate();
		task.done = false;
		setPending(pending + 1);
		setTasks([...tasks, task]);
	};

	const updateTask = (task) => {
		const newData = tasks.map((item) => (task.id === item.id ? task : item));

		if (task.done) {
			setDone(done + 1);
			setPending(pending - 1);
		} else {
			setPending(pending + 1);
			setDone(done - 1);
		}

		setTasks(newData);
	};

	const deleteTask = (task) => {
		const isDelete = window.confirm(
			`Esta seguro de eliminar el elemento con el id "${task.id}"`
		);

		if (!isDelete) return;

		const newData = tasks.filter((item) => item.id !== task.id);

		if (task.done) {
			setDone(done - 1);
		} else {
			setPending(pending - 1);
		}

		setTasks(newData);
	};

	return (
		<Container>
			<NavBar />
			<Row>
				<Col xs={12} md={6} lg={6} className="p-4">
					<h2>Nueva tarea</h2>
					<hr />
					<FormTask createTask={createTask} />
				</Col>
				<Col xs={12} md={6} lg={6} className="p-4">
					<h2>Lista de Tareas</h2>
					<div>
						<Badge variant="success">Realizadas ({done})</Badge>{' '}
						<Badge variant="danger">Pendientes ({pending})</Badge>
					</div>
					<hr />
					<ListTasks
						tasks={tasks}
						updateTask={updateTask}
						deleteTask={deleteTask}
					/>
				</Col>
			</Row>
		</Container>
	);
}

export default App;
