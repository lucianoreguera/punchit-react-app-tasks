import React from 'react';
import { ListGroup } from 'react-bootstrap';
import Task from './Task';

const ListTasks = ({ tasks, updateTask, deleteTask }) => {
	console.log(tasks);

	return (
		<ListGroup>
			{/* <ListGroup.Item>No style</ListGroup.Item>
			<ListGroup.Item variant="primary">Primary</ListGroup.Item>
			<ListGroup.Item action variant="secondary">
				Secondary
			</ListGroup.Item>
			<ListGroup.Item action variant="success">
				Success
			</ListGroup.Item>
			<ListGroup.Item action variant="danger">
				Danger
			</ListGroup.Item>
			<ListGroup.Item action variant="warning">
				Warning
			</ListGroup.Item>
			<ListGroup.Item action variant="info">
				Info
			</ListGroup.Item>
			<ListGroup.Item action variant="light">
				Light
			</ListGroup.Item>
			<ListGroup.Item action variant="dark">
				Dark
			</ListGroup.Item> */}
			{tasks?.map((task) => (
				<Task
					key={task.id}
					task={task}
					updateTask={updateTask}
					deleteTask={deleteTask}
				/>
			))}
		</ListGroup>
	);
};

export default ListTasks;
