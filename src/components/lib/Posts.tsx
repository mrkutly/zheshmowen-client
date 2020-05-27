import React from 'react';
import Post from './Post';
import { Post as PostType } from '../../apollo/types';

interface PostProps {
	posts: PostType[];
};

const Posts = ({ posts }: PostProps) => (
	<section id="posts">
		{posts.map((post) => <Post post={post} key={`post-${post.id}`} />)}
	</section>
);

export default Posts;