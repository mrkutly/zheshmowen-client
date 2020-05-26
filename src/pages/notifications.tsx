import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import PleaseSignIn from '../components/lib/PleaseSignIn';

const Notifications = (props: PageProps) => {
	return (
		<Layout>
			<PleaseSignIn>
				Notifications
			</PleaseSignIn>
		</Layout>
	);
};

export default Notifications;