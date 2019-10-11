import Axios from 'axios';

const Post = ({ comments }) => comments.map((comment) => <li>{comment.body}</li>);
export default Post;

Post.getInitialProps = async ({ query }) => {
	const response = await Axios(`https://jsonplaceholder.typicode.com/comments?postId=${query.id}`);
	return { id: query.id, comments: response.data };
};
