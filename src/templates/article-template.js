import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout';
import Box from 'components/box';

export const ArticleTemplate = ({ title, content }) => {
  return (
    <Layout>
      <Box>
        <p class="title is-1 is-spaced">
          {title}
        </p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box>
    </Layout>
  )
}

ArticleTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const Article = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
      <ArticleTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
  )
}

Article.propTypes = {
  data: PropTypes.object.isRequired,
}

export default Article

export const ArticleQuery = graphql`
  query Article($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
