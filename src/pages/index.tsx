// Gatsby supports TypeScript natively!
import React from "react";
import { PageProps, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PleaseSignIn from "../components/PleaseSignIn";

const Index = (props: PageProps) => (
	<Layout>
		<SEO title="Page two" />
		<PleaseSignIn>
			<h1>Hi from the second page</h1>
			<p>Welcome to page 2 ({props.path})</p>
			<Link to="/">Go back to the homepage</Link>
		</PleaseSignIn>
	</Layout>
);


export default Index;
