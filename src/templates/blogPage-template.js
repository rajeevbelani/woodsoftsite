import React from 'react'
// import PropTypes from 'prop-types'
// import { graphql } from 'gatsby'
import Layout from 'components/common/layout';
import PostCard from 'components/common/PostCard';

export const BlogPostTemplate = ({ posts }) => {
  return (
    <Layout>
       <div class="hero is-medium is-theme-primary">
            <div class="hero-body ">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-6 is-offset-3 has-text-centered">
                            <h1 class="clean-title light-text">
                              BLOG
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      {/* <Box> */}
      <div class="columns is-multiline">
          {posts
          .filter(post => post.node.frontmatter.templateKey === 'article-template')
          .map(({node: post}) => (
            <div class="column is-4">
              <PostCard post={post} />
            </div>
          ))};
      </div>
      {/* </Box> */}
    </Layout>
  )
}

const BlogPost = ({ data, pathContext }) => {
  // const { markdownRemark: post } = data
  const { group, index, first, last, pageCount } = pathContext;
  console.log(`Blog Post :: ${JSON.stringify(data)}  ::  ${JSON.stringify(pathContext)}`)
  return (
      <BlogPostTemplate
        posts={group}
      />
  )
}

export default BlogPost
