import axios from 'axios';
import PostCreate from './components/PostCreate';
import PostList from './components/PostList';
import CommentCreate from './components/CommentCreate';
function App() {
	return (
		<div className=''>
			<PostCreate />
			<hr />
			<PostList />
			<hr />
		</div>
	);
}

export default App;
