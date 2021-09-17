import * as React from "react";
import { Layout } from "theme-ui";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import useSiteMetadata from "../hooks/useSiteMetadata";
import { graphql } from "gatsby";

const HomePage = ({ pageContext, data }) => {
  const { galleryPath } = pageContext;
  const siteMetadata = useSiteMetadata();
  // const page = usePageContext()
  console.log("W home page", galleryPath, data);

  return (
    <Layout>
      <Header />
      <Gallery galleryPath={galleryPath} data={data} />
      {siteMetadata.author && <Footer />}
    </Layout>
  );
};

export const data = graphql`
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
