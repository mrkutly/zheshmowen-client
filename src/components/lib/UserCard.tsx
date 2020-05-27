import React from 'react';
import styled from 'styled-components';
import UserPhoto from './UserPhoto';
import { User } from '../../apollo/types';

interface UserCardProps {
	user: User;
	style: object;
}

const UserCardStyles = styled.span`
	display: flex;
	align-items: center;
	color: var(--secondary);

	img {
		margin: 0 var(--one-space) 0 0;
		border-radius: 50%;
	}
`;

const UserCard = ({ user, style }: UserCardProps) => (
	<UserCardStyles className="user" style={style}>
		<UserPhoto photoUrl={user.photoUrl} />
		{user.name}
	</UserCardStyles>
);

export default UserCard;