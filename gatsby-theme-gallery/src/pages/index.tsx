import * as React from "react";
import { Layout } from "theme-ui";
import { graphql } from "gatsby";

import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import useSiteMetadata from "../hooks/useSiteMetadata";
import * as types from "../common/types";

const HomePage = ({ data }: { data: types.Query }) => {
  const siteMetadata = useSiteMetadata();

  return (
    <Layout>
      <Header />
      <Gallery imagesData={data} />
      {siteMetadata.author && <Footer />}
    </Layout>
  );
};

export const images = graphql`
  query($galleryPath: String) {
    allFile(
      filter: { sourceInstanceName: { eq: $galleryPath } }
      sort: { order: ASC, fields: name }
    ) {
      nodes {
        id
        name
        publicURL
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`;

export default HomePage;
