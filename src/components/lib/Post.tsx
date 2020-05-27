import React from 'react';
import { Post as PostType } from '../../apollo/types';
import Comments from './Comments';
import UserCard from './UserCard';
import { CardStyles } from '../styles/Card';

interface PostProps {
	post: PostType;
};

const Post = ({ post }: PostProps) => (
	<CardStyles>
		<div>{post.body}</div>
		<UserCard user={post.user} />
		<Comments comments={post.comments} />
	</CardStyles>
);

export default Post;