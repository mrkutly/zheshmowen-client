import React from 'react';
import { RouteComponentProps } from '@reach/router';
import { useQuery } from '@apollo/client';
import { GROUP_QUERY, GroupData } from '../apollo/query';
import Layout from './Layout';
import PleaseSignIn from './lib/PleaseSignIn';
import Err from './lib/Err';
import Loading from './lib/Loading';

interface GroupsShowProps extends RouteComponentProps {
	slug?: string;
};

const GroupsShow = ({ slug }: GroupsShowProps) => {
	const { data, error, loading } = useQuery<GroupData>(GROUP_QUERY, { variables: { slug } });

	if (error) return <Err error={error} />;
	if (loading) return <Loading />;

	return (
		<Layout>
			<PleaseSignIn>
				<h1>{data.groupWhere.name}</h1>
			</PleaseSignIn>
		</Layout>
	);
};

export default GroupsShow;