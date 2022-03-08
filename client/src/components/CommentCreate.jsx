import axios from 'axios';
import { useEffect, useState } from 'react';

export default function CommentCreate({ postId }) {
	const [content, setContent] = useState('');

	const handleSubmit = async (event) => {
		event.preventDefault();
		await axios.post(`http://localhost:4001/posts/${postId}/comments`, {
			content,
		});

		setContent('');
	};
	return (
		<div>
			<h5>Create Comment</h5>

			<form onSubmit={handleSubmit}>
				<div className='form-group'>
					<label htmlFor=''>New comment</label>
					<input
						type='text'
						className='form-control'
						value={content}
						onChange={({ target }) => setContent(target.value)}
					/>
				</div>
				<button className='btn btn-primary'>Submit</button>
			</form>
		</div>
	);
}
