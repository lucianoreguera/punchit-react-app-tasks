import React, { useState } from 'react';
import { Alert, Button, Form } from 'react-bootstrap';

const initialForm = {
	id: null,
	name: '',
	description: '',
	done: false,
};

const FormTask = ({ createTask }) => {
	const [form, setForm] = useState(initialForm);
	const [error, setError] = useState(false);

	const { name, description } = form;

	const handleChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		if (!name.trim() || !description.trim()) {
			setError(true);
			return;
		}

		setError(false);
		createTask(form);
		setForm(initialForm);
	};

	return (
		<Form onSubmit={handleSubmit}>
			{error && <Alert variant="danger">Los campos son obligatorios</Alert>}
			<Form.Group controlId="formBasicEmail">
				<Form.Label>Nombre Tarea</Form.Label>
				<Form.Control
					type="text"
					placeholder="Ingresar nombre"
					name="name"
					value={name}
					onChange={handleChange}
				/>
			</Form.Group>

			<Form.Group controlId="formBasicPassword">
				<Form.Label>Descripción Tarea</Form.Label>
				<Form.Control
					as="textarea"
					rows={3}
					placeholder="Ingresar Descripción"
					name="description"
					value={description}
					onChange={handleChange}
				/>
			</Form.Group>

			<Button variant="primary" type="submit">
				Agregar
			</Button>
		</Form>
	);
};

export default FormTask;
