import React from 'react';
import UserCard from './UserCard';
import { User } from '../../apollo/types';

interface MembersProps {
	users: User[];
};

const Members = ({ users }) => (
	<>
		<h2>Members</h2>
		{users.map(user => <UserCard style={{ margin: "var(--one-space) 0" }} user={user} key={`user-${user.id}`} />)}
	</>
);

export default Members;