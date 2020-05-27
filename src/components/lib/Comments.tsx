import React from 'react';
import Comment from './Comment';
import { Comment as CommentType } from '../../apollo/types';

interface CommentProps {
	comments: CommentType[];
};

const Comments = ({ comments }: CommentProps) => (
	<>
		{comments.map((comment) => <Comment comment={comment} key={`comment-${comment.id}`} />)}
	</>
);

export default Comments;