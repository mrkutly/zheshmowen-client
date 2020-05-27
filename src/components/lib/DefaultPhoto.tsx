import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';

const DEFAULT_PHOTO_QUERY = graphql`
query DefaultPhoto {
  file(name: {eq: "blank-profile-photo"}) {
    childImageSharp {
      fixed(width: 30, height: 30) {
        ...GatsbyImageSharpFixed
      }
    }
  }
}
`;
const DefaultPhoto = () => {
	const { file } = useStaticQuery(DEFAULT_PHOTO_QUERY);
	return <Image fixed={file.childImageSharp.fixed} style={{ margin: "0 var(--one-space) 0 0" }} />;
};

export default DefaultPhoto;