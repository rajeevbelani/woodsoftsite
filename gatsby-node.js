const _ = require('lodash');
const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createFilePath } = require('gatsby-source-filesystem');
const { paginate } =  require('gatsby-awesome-pagination');
const { fmImagesToRelative } = require('gatsby-remark-relative-images');

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              templateKey
            }
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) {
      result.errors.forEach(e => console.error(e.toString()));
      return Promise.reject(result.errors);
    }

    const posts = result.data.allMarkdownRemark.edges
    let filteredPosts = posts.filter(post => post.node.frontmatter.templateKey === 'article-template');
    // console.log(`FIltered Posts :: ${JSON.stringify(filteredPosts)}`);
      
    paginate({
      createPage, // The Gatsby `createPage` function
      items: filteredPosts, // An array of objects
      itemsPerPage: 10, // How many items you want per page
      pathPrefix: '/blog', // Creates pages like `/blog`, `/blog/2`, etc
      component: path.resolve('src/templates/blogPage-template.js'), // Just like `createPage()`
    });

    posts.forEach(edge => {
      const id = edge.node.id;
      const templateKey = edge.node.frontmatter.templateKey;
      console.log (` edge.node.frontmatter.templateKey ::: ${ JSON.stringify(templateKey)}`);
      if (templateKey !== null && templateKey !=='home-template') {
        createPage({
          path: edge.node.fields.slug,
          tags: edge.node.frontmatter.tags,
          component: path.resolve(
            `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
          ),
          // additional data can be passed via context
          context: {
            id,
          },
        });
      }
    });

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach(edge => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)
    // // Make tag pages
    tags.forEach(tag => {
      const tagPath = `/tags/${_.kebabCase(tag)}`
      let filteredTagPosts = posts.filter(post => (post.node.frontmatter.templateKey === 'article-template' &&  post.node.frontmatter.tags.includes(tag)));
      paginate({
        createPage, // The Gatsby `createPage` function
        items: filteredTagPosts, // An array of objects
        itemsPerPage: 10, // How many items you want per page
        pathPrefix: tagPath, // Creates pages like `/blog`, `/blog/2`, etc
        component: path.resolve('src/templates/blogPage-template.js'), // Just like `createPage()`
      });
    });
  });
};

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  
  // fmImagesToRelative(node);
  // console.log(`ON CREATE NODE :: ${JSON.stringify(node)}`);
  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.onCreateWebpackConfig = ({
  stage,
  getConfig,
  rules,
  loaders,
  actions,
}) => {
  actions.setWebpackConfig({
    resolve: {
      modules: [path.resolve(__dirname, 'src'), 'node_modules'],
      plugins: [new DirectoryNamedWebpackPlugin()],
    },
  });
};
