import React from 'react'
import Layout from '../components/common/layout';
import PostCard from '../components/common/PostCard';
import Hero from '../components/common/TitleHero'
import Pagination from '../components/common/Pagination'

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
  // const { markdownRemark: post } = data
  const { group, index, first, last, pageCount } = pathContext;
  // const { group } = pathContext;

  console.log(`Blog Post context   ::  ${JSON.stringify(pathContext)}`)
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

export default BlogPost
