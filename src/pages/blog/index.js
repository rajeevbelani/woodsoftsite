/**
 * Created by vaibhav on 31/3/18
 */
import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Layout from '../../components/layout'
import Helmet from 'react-helmet'
import PostCard from '../../components/PostCard'

export default class BlogPage extends Component {
  render () {
    const {data} = this.props
    const {edges: posts} = data.allMarkdownRemark

    return (
      <Layout>
        <section className='section'>
            {posts
            .filter(post => post.node.frontmatter.templateKey === 'article-template')
            .map(({node: post}) => (

                <PostCard post={post} />
                
            ))};
        </section>
      </Layout>
    )
  }
}

BlogPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const blogPageQuery = graphql`
  query BlogPage {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
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
          }
        }
      }
    }
  }
`
