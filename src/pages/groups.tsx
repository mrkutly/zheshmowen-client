import React from 'react';
import { PageProps } from 'gatsby';
import { Router } from '@reach/router';
import GroupsIndex from '../components/GroupsIndex';
import GroupShow from '../components/GroupShow';

const GroupsPage = (props: PageProps) => (
	<Router basepath="/groups">
		<GroupsIndex path="/" />
		<GroupShow path="/:id" />
	</Router>
);

export default GroupsPage;