import Axios from 'axios';
import Link from 'next/Link';

const Index = ({ posts }) => (
	<div>
		<h1>Index</h1>
		{posts.map((post) => (
			<li key={post.id}>
				<Link href={`/post?id=${post.id}`} as={`/post/${post.id}`}>
					<a>{post.title}</a>
				</Link>
			</li>
		))}
	</div>
);

Index.getInitialProps = async () => {
	const response = await Axios('https://jsonplaceholder.typicode.com/posts/');
	const { data } = response;
	return { posts: data };
};

export default Index;
