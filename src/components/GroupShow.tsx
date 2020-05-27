import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from '@apollo/client';
import { GROUP_QUERY, GroupData } from '../apollo/query';
import Layout from './Layout';
import Center from './styles/Center';
import PleaseSignIn from './lib/PleaseSignIn';
import Err from './lib/Err';
import Loading from './lib/Loading';
import Group from './lib/Group';

interface GroupsShowProps extends RouteComponentProps {
	slug?: string;
};

// TODO:
/*
	- create a pending message if pending admin approval
	- create a "join group" button if not joined
	- create a "post" form if joined
	- create post cards to show posts
*/

const GroupsShow = ({ slug }: GroupsShowProps) => {
	const { data, error, loading } = useQuery<GroupData>(GROUP_QUERY, { variables: { slug } });

	if (error) return <Err error={error} />;
	if (loading) return <Loading />;
	if (!data) return <Center>There was a problem loading this page.</Center>;

	return (
		<Layout>
			<PleaseSignIn>
				<Group group={data.groupWhere} />
			</PleaseSignIn>
		</Layout>
	);
};

export default GroupsShow;