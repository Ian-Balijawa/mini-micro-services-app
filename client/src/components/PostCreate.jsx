import { useState } from 'react';
import axios from 'axios';
import '../App.css';

export default function PostCreate() {
	const [title, setTitle] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();

		await axios.post('http://localhost:4000/posts', {
			title,
		});

		setTitle('');
	};

	return (
		<div>
			<h2>Create Post</h2>
			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor='title'>Title</label>
					<input
						type='text'
						className='form-control'
						id='title'
						value={title}
						onChange={({ target }) => setTitle(target.value)}
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
}
