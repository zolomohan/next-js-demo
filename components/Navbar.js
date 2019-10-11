import Link from 'next/Link';

export default () => {
	const styles = {
		display: 'flex',
		justifyContent: 'space-between',
		backgroundColor: '#222',
		color: 'white',
		padding: '1rem',
		borderRadius: '10px'
	};
	const anchor = {
		color: 'white'
	};
	return (
		<div style={styles}>
			<Link href='/about'>
				<a style={anchor}>About</a>
			</Link>
			<Link href='/'>
				<a style={anchor}>Home</a>
			</Link>
			<Link href='/contact'>
				<a style={anchor}>Contact</a>
			</Link>
		</div>
	);
};
