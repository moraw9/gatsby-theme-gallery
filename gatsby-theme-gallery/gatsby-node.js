const fs = require("fs");
const path = require("path");
const mkdirp = require("mkdirp");

// Ensure that content directory exist at the site-level
exports.onPreBootstrap = ({ reporter, store }, themeOptions) => {
  const { program } = store.getState();
  const galleryPath = themeOptions.galleryPath || "content/gallery";
  const dir = path.join(program.directory, galleryPath);
  if (!fs.existsSync(dir)) {
    reporter.info(`Creating the "${dir}" directory`);
    mkdirp.sync(dir);
  }
};

exports.createPages = ({ actions }, themeOptions) => {
  console.log("w create Pages", { themeOptions });
  const { createPage } = actions;
  const { basePath } = themeOptions;
  console.log("themeOptions.galleryPath", themeOptions.galleryPath, basePath);

  createPage({
    path: basePath || "/",
    component: path.resolve(`${__dirname}/src/pages/index.tsx`),
    context: {
      galleryPath: themeOptions.galleryPath,
    },
  });
  // createPage({
  //   path:  "/test",
  //   component: path.resolve(`${__dirname}/src/pages/Test.tsx`),
  //   context: {
  //     product: 'node',
  //   },
  // });

  // exports.onCreatePage = ({ page, actions }) => {
  //   const { createPage, deletePage } = actions

  //   deletePage(page)
  //   // You can access the variable "house" in your page queries now
  //   createPage({
  //     ...page,
  //     context: {
  //       ...page.context,
  //       product: 'node',
  //     },
  //   })
  // }
};
