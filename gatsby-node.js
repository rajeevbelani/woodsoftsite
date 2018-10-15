const _ = require('lodash');
const path = require('path');
const DirectoryNamedWebpackPlugin = require('directory-named-webpack-plugin');
const { createFilePath } = require('gatsby-source-filesystem');
const createPaginatedPages = require("gatsby-paginate");

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            excerpt(pruneLength: 400)
            id
            fields {
              slug
            }
            frontmatter {
              tags
              title
              templateKey
              date(formatString: "MMMM DD, YYYY")
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
    console.log(`FIltered Posts :: ${JSON.stringify(filteredPosts)}`);
      
    createPaginatedPages({
      edges: filteredPosts,
      createPage: createPage,
      pageTemplate: "src/templates/blogPage-template.js",
      pageLength: 5, // This is optional and defaults to 10 if not used
      pathPrefix: "blog", // This is optional and defaults to an empty string if not used
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
      createPaginatedPages({
        edges: filteredTagPosts,
        createPage: createPage,
        pageTemplate: "src/templates/blogPage-template.js",
        pageLength: 5, // This is optional and defaults to 10 if not used
        pathPrefix: tagPath, // This is optional and defaults to an empty string if not used
      });
    })
  })
}

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators

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
