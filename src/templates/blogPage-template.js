import React from 'react'
import Layout from '../components/common/layout';
import PostCard from '../components/common/PostCard';
import Hero from '../components/common/TitleHero'
import Pagination from '../components/common/Pagination'
import { graphql } from 'gatsby'

export const BlogListTemplate = ({ posts }) => {
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

const BlogPost = ({ data, pathContext }) => {
  console.log(`PATH Context :: ${JSON.stringify(pathContext)}`);
  const { group, index, first, last, pageCount } = pathContext;
  return (
    <Layout>
      <Hero title="BLOG" />
      <BlogListTemplate
        posts={group}
      />
      <Pagination currentPage={index} numberOfPages={pageCount} />
    </Layout>
  )
}

// export const query = graphql`
//   query($slug: String!) {
//     markdownRemark(fields: { slug: { eq: $slug } }) {
//       frontmatter {
//         title
//         coverImage {
//           childImageSharp {
//             fluid {
//               ...GatsbyImageSharpFluid
//             }
//           }
//         }
//       }
//     }
//   }
// `;


export default BlogPost
