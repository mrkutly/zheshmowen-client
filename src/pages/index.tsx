import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Center from "../components/styles/Center";

const Index = (props: PageProps) => (
	<Layout>
		<SEO title="Welcome" />
		<Center>
			<h1>"Zheshmowen"</h1>
			<p>(Bodéwadmimwen for "Language")</p>
		</Center>
	</Layout>
);


export default Index;
