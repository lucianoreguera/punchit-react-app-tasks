import React from 'react';
import { Button, Col, Container, ListGroup, Row } from 'react-bootstrap';
import { Trash } from 'react-bootstrap-icons';

const Task = ({ task, updateTask, deleteTask }) => {
	const handleUpdateClick = () => {
		task.done = !task.done;

		updateTask(task);
	};

	const handleDeleteClick = (e) => {
		e.stopPropagation();

		deleteTask(task);
	};

	return (
		<ListGroup.Item
			style={{ cursor: 'pointer' }}
			variant={task.done ? 'success' : 'danger'}
			onClick={handleUpdateClick}
		>
			<Container>
				<Row>
					<Col xs={11} className="p-0">
						<b>{task.name}</b>: {task.description}
					</Col>
					<Col xs={1}>
						<Button
							type="button"
							size="sm"
							variant="danger"
							onClick={handleDeleteClick}
						>
							<Trash />
						</Button>
					</Col>
				</Row>
			</Container>
		</ListGroup.Item>
	);
};

export default Task;
