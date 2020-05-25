import React from "react";
import { PageProps } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PleaseSignIn from "../components/PleaseSignIn";

const Home = (props: PageProps) => (
	<Layout>
		<SEO title="Home" />
		<PleaseSignIn>
			<h1>hello</h1>
		</PleaseSignIn>
	</Layout>
);


export default Home;
