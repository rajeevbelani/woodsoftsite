import React from 'react'
import Layout from '../components/common/layout';
import PostCard from '../components/common/PostCard';
import Hero from '../components/common/TitleHero'
import Pagination from '../components/common/Pagination'
import { graphql } from 'gatsby'

export const BlogListTemplate = ({ posts }) => {
  // console.log(`POSTS :: ${posts}`);
  return (
      <div class="columns is-multiline">
          {posts
          .filter(post => post.node.frontmatter.templateKey === 'article-template')
          .map(({node: post}) => (
            <div class="column is-4">
              <PostCard post={post} />
            </div>
          ))};
      </div>
    
  )
}

// const PostCardWithQuery = props => (
//     <StaticQuery
//       query={graphql`
//         markdownRemark(id: { eq: $props.post.id }) {
//           site {
//             siteMetadata {
//               siteTitle
//             }
//           }
//         }
//       `}
//       render={data => <PostCard data={data} {...props} />}
//     />
//   );
  
  
//   PostCardWithQuery.propTypes = {
//     children: PropTypes.node.isRequired,
//   };

const BlogPost = ({ data, pathContext }) => {
  // console.log(`PATH Context :: ${JSON.stringify(data)}`);
  const { group, pageNumber, first, last, numberOfPages } = pathContext;
  const posts  = data.allMarkdownRemark.edges;
  console.log(`POSTS :: ${JSON.stringify(data.allMarkdownRemark.edges)}`);
  return (
    <Layout>
      <Hero title="BLOG" />
      <BlogListTemplate
        posts={posts}
      />
      <Pagination currentPage={pageNumber} numberOfPages={numberOfPages} />
    </Layout>
  )
}

export const BlogPageQuery = graphql`
  query BlogPage($skip: Int!, $limit: Int!) {
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
            coverImage {
              childImageSharp {
                fluid(maxHeight: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp_noBase64
                }
              }
            }
          }            
        }
      }
    }
  }
`

export default BlogPost
