import React from "react";
import { Helmet } from "react-helmet";
import { useStaticQuery, graphql } from "gatsby";

type Meta = { content: string; name: string; } | { content: string; property: string; };

interface SEOProps {
	description?: string;
	lang?: string;
	meta?: Meta[];
	title?: string;
}

interface SiteQuery {
	site: {
		siteMetadata: {
			title: string;
			description: string;
			author: string;
		};
	};
}

const SEO = ({ description, lang, meta, title }: SEOProps) => {
	const { site } = useStaticQuery<SiteQuery>(
		graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
	);

	const metaDescription = description || site.siteMetadata.description;

	return (
		<Helmet
			htmlAttributes={{
				lang,
			}}
			title={title}
			titleTemplate={`%s | ${site.siteMetadata.title}`}
			meta={[
				{
					name: `description`,
					content: metaDescription,
				},
				{
					property: `og:title`,
					content: title,
				},
				{
					property: `og:description`,
					content: metaDescription,
				},
				{
					property: `og:type`,
					content: `website`,
				},
				{
					name: `twitter:card`,
					content: `summary`,
				},
				{
					name: `twitter:creator`,
					content: site.siteMetadata.author,
				},
				{
					name: `twitter:title`,
					content: title,
				},
				{
					name: `twitter:description`,
					content: metaDescription,
				},
			].concat(meta)}
		/>
	);
};

SEO.defaultProps = {
	lang: `en`,
	meta: [],
	description: ``,
};

export default SEO;
