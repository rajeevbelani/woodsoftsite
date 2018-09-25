import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout';
import Box from 'components/box';

export const CompanyPageTemplate = ({ title, content }) => {
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

CompanyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const CompanyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
      <CompanyPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
  )
}

CompanyPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default CompanyPage

export const CompanyPageQuery = graphql`
  query CompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
