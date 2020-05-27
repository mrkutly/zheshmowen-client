import React from 'react';
import { Comment as CommentType } from '../../apollo/types';
import UserCard from './UserCard';
import { CardStyles } from '../styles/Card';

interface CommentProps {
	comment: CommentType;
};

const Comment = ({ comment }: CommentProps) => (
	<CardStyles className="comment">
		<div>{comment.body}</div>
		<UserCard user={comment.user} />
	</CardStyles>
);

export default Comment;