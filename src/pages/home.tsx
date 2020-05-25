import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/lib/SEO";
import PleaseSignIn from "../components/lib/PleaseSignIn";

const Home = (props: PageProps) => (
	<Layout>
		<SEO title="Home" />
		<PleaseSignIn>
			<h1>hello</h1>
		</PleaseSignIn>
	</Layout>
);


export default Home;
