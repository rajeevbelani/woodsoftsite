import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';


export const ClientelePageTemplate = ({ title, content }) => {
  return (
    <Layout>
      {/* <Box>
        <p class="title is-1 is-spaced">
          {title}
        </p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box> */}
    </Layout>
  )
}

ClientelePageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const ClientelePage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
      <ClientelePageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
  )
}

ClientelePage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default ClientelePage

export const ClientelePageQuery = graphql`
  query ClientelePage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
