import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import Center from "../components/styles/Center";

const NotFoundPage = () => (
	<Layout>
		<SEO title="404: Not found" />
		<Center>
			<h1>Not Found</h1>
			<p>We don't have a page for this route. Try going back to the Home page.</p>
		</Center>
	</Layout>
);

export default NotFoundPage;
