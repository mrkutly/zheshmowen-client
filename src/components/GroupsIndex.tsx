import React from 'react';
import { RouteComponentProps } from '@reach/router';
import Layout from './Layout';
import PleaseSignIn from './lib/PleaseSignIn';

const GroupsIndex = (props: RouteComponentProps) => {
	return (
		<Layout>
			<PleaseSignIn>
				index
			</PleaseSignIn>
		</Layout>
	);
};

export default GroupsIndex;