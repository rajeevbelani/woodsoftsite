import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';
import Img from 'gatsby-image';

export const ArticleTemplate = ({ title, content, cover }) => {
  return (
      <section class="section blog-section section-light-grey">
          <div class="container">
              <div class="columns">
                  <div class="column is-10 is-offset-1">
                      <div class="flex-card is-full-post light-bordered">
                          <div class="post-meta content">
                              <img class="author-avatar is-hidden-mobile" src="https://via.placeholder.com/250x250" alt="" />
                              <div class="title-block">
                                  <h2>{title}</h2>
                                  <h4>{JSON.stringify(cover)}</h4>
                                  <button class="like is-full fab-btn mini" data-toggle="tooltip" data-placement="left" data-title="Liked by 64 persons">
                                      <span class="like-wrapper">
                                          <i class="material-icons unliked">favorite_border</i>
                                          <i class="material-icons liked">favorite</i>
                                          <span class="like-overlay"></span>
                                      </span>
                                  </button>
                              </div>
                          </div>
                          
                          <Img fluid={cover.childImageSharp.fluid} />
                          <div class="post-body content">
                              <div class="author-name pb-10">by <b><a href="#">Marjory Cambell</a></b>, <span>Ecommerce consultant</span></div>
                              <div class="timestamp"><i class="sl sl-icon-clock"></i> oct 16 2018, 4:12pm</div>
                              <div dangerouslySetInnerHTML={{ __html: content }} />
                              <hr />
                              <div class="share-post">
                                  <div class="share-text">
                                      Share:
                                  </div>
                      
                                  <div class="sharing-options">
                                      <i class="fa fa-envelope"></i>
                                      <i class="fa fa-facebook"></i>
                                      <i class="fa fa-twitter"></i>
                                      <i class="fa fa-linkedin"></i>
                                      <i class="fa fa-google-plus"></i>
                                      <i class="fa fa-reddit"></i>
                                      <i class="fa fa-tumblr"></i>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
  )
}

ArticleTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  cover: PropTypes.object,
}

const Article = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(`Article :: ${JSON.stringify(post)}`);

  return (
    <Layout>
      <ArticleTemplate
        title={post.frontmatter.title}
        content={post.html}
        cover={post.frontmatter.coverImage}
      />
    </Layout>
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
        templateKey
        date(formatString: "MMMM DD, YYYY")
        coverImage {
            childImageSharp {
                fluid(maxWidth: 200, maxHeight: 200) {
                    src
                    srcSet
                    base64
                    srcWebp
                  }
            }
        }
      }
    }
  }
`
