import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';


export const BatuwaPageTemplate = ({ title, content }) => {
  return (
    <Layout>
      {/* <Box> */}
        <p class="title is-1 is-spaced">
          {title}
        </p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      {/* </Box> */}
    </Layout>
  )
}

BatuwaPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const BatuwaPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
      <BatuwaPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
  )
}

BatuwaPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default BatuwaPage

export const BatuwaPageQuery = graphql`
  query BatuwaPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
