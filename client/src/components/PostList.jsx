import axios from 'axios';
import { useEffect, useState } from 'react';
import CommentCreate from './CommentCreate';
import CommentList from './CommentList';

export default function PostList() {
	const [posts, setPosts] = useState({});

	const fetchPosts = async () => {
		const response = await axios.get('http://localhost:4002/posts');

		setPosts(response.data);
	};

	useEffect(() => {
		fetchPosts();
	}, []);

	const renderedPosts = Object.values(posts).map((post) => {
		return (
			<div
				className='card'
				style={{ width: '30%', marginBottom: '20px' }}
				key={post.id}
			>
				<div className='card-body'>
					<h5>{post.title}</h5>
					<CommentList comments={post.comments} />
					<CommentCreate postId={post.id} />
				</div>
			</div>
		);
	});

	return (
		<div className='d-flex flex-row flex-wrap justify-content-between'>
			<h4>Available Posts</h4>
			{renderedPosts}
		</div>
	);
}
