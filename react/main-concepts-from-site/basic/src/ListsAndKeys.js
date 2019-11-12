import React from 'react';

class ListAndKeys extends React.Component {
	constructor(props) {
		super(props);
		this.numbers = [1, 2, 3, 4, 5];
		this.listItems = this.numbers.map((number) =>
			<li key={number.toString()}>
				{number}
			</li>
		);
	}
	render() {
		return <ul>{this.listItems}</ul>
	}
}
// element inside map call needs key!!!

function Blog(props) {
	const sidebar = (
		<ul>
			{props.posts.map((post) =>
				<li key={post.id}>
					{post.title}
				</li>
			)}
		</ul>
	)
	const content = props.posts.map((post) =>
		<div key={post.id}>
			<h3>{post.title}</h3>
			<p>{post.content}</p>
		</div>
	);
	return (
		<div>
			{sidebar}
			<hr />
			{content}
		</div>
	);
}
export default ListAndKeys;
export { Blog };