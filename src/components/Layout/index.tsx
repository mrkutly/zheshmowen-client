import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Header from "./Header";
import "./layout.css";

const Layout: React.FC = ({ children }) => {
	const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

	return (
		<>
			<Header siteTitle={data.site.siteMetadata.title} />
			<main style={{ padding: '0 var(--three-spaces)' }}>{children}</main>
		</>
	);
};

export default Layout;
