import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout';
import Box from 'components/box';

export const TechnologiesPageTemplate = ({ title, content }) => {
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

TechnologiesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const TechnologiesPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
      <TechnologiesPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
  )
}

TechnologiesPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default TechnologiesPage

export const TechnologiesPageQuery = graphql`
  query TechnologiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
