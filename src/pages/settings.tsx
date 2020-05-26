import React from 'react';
import { PageProps } from 'gatsby';
import Layout from '../components/Layout';
import PleaseSignIn from '../components/lib/PleaseSignIn';

const Settings = (props: PageProps) => {
	return (
		<Layout>
			<PleaseSignIn>
				Settings
			</PleaseSignIn>
		</Layout>
	);
};

export default Settings;