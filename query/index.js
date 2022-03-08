const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const posts = {};

app.get('/posts', (req, res) => {
	res.send(posts);
});

app.post('/events', (req, res) => {
	const { data, type } = req.body;

	if (type === 'PostCreated') {
		const { id, title } = data;

		posts[id] = { id, title, comments: [] };
	}

	if (type === 'CommentCreated') {
		const { id, content, postId } = data;

		const post = posts[postId];
		post.comments.push({ id, content });
	}

	res.send({ status: 'OK' });
});

app.listen(4002, () => {
	console.log('Query service listening on port: 4002');
});
