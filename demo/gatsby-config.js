module.exports = {
  siteMetadata: {
    title: "Gatsby Theme Gallery",
    description: "",
    author: "epilande",
    social: [
      {
        name: "Source",
        url: "https://github.com/epilande/gatsby-theme-gallery",
      },
      {
        name: "Twitter",
        url: "https://twitter.com/_epilande",
      },
      {
        name: "GitHub",
        url: "https://github.com/epilande",
      },
    ],
  },
  plugins: [
    // "gatsby-theme-gallery",
    {
      resolve: "gatsby-theme-gallery",
      options: {
        basePath: "/gallery",
        galleryPath: "hello123",
      },
    },
    "gatsby-plugin-typescript",
    "gatsby-plugin-emotion",
  ],
};
