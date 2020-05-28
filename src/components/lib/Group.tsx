import React from 'react';
import styled from 'styled-components';
import Posts from './Posts';
import Members from './Members';
import Center from '../styles/Center';
import { Group as GroupType } from '../../apollo/types';
import RequestToJoin from './RequestToJoin';

interface GroupProps {
	group: GroupType;
};

const GroupStyles = styled.div`
	.sidebar {
		position: fixed;
		padding-right: var(--two-spaces);
		width: 25vw;
	}

	.right {
		left: 75vw;
		top: calc(4 * var(--one-space) + 47.55px);
	}
	
	.content {
		margin: 0 25vw;
	}
`;

const Group = ({ group }: GroupProps) => {
	if (group.currentUserStatus?.isBanned) return <Center>You are not permitted to view this page.</Center>;

	return (
		<GroupStyles>
			<div className="sidebar">
				<h1>{group.name}</h1>
				<RequestToJoin groupId={group.id} userStatus={group.currentUserStatus} />
			</div>
			<div className="content">
				<Posts posts={group.posts} />
			</div>
			<div className="right sidebar" >
				<Members users={group.groupUsers.map(({ user }) => user)} />
			</div>
		</GroupStyles>
	);
};

export default Group;