import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';

export const ArticleTemplate = ({ title, content }) => {
  return (
    <Layout>
      <section class="section blog-section section-light-grey">
          <div class="container">
              <div class="columns">
                  <div class="column is-10 is-offset-1">
                      <div class="flex-card is-full-post light-bordered">
                          <div class="post-meta content">
                              <img class="author-avatar is-hidden-mobile" src="https://via.placeholder.com/250x250" alt="" />
                              <div class="title-block">
                                  <h2>{title}</h2>
                                  <h4>Pieces of advice that will help your business grow</h4>
                      
                                  <button class="like is-full fab-btn mini" data-toggle="tooltip" data-placement="left" data-title="Liked by 64 persons">
                                      <span class="like-wrapper">
                                          <i class="material-icons unliked">favorite_border</i>
                                          <i class="material-icons liked">favorite</i>
                                          <span class="like-overlay"></span>
                                      </span>
                                  </button>
                              </div>
                          </div>

                      
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
                      

                      
                      {/* <div class="flex-card comment-count light-bordered">
                          <i class="im im-icon-Speach-Bubble11"></i>
                          <div class="text"><span class="count-number">3</span> <span class="is-hidden-mobile">comments</span></div>
                          <button id="show-comments" class="button is-link primary-text">Show all</button>
                      </div>
                      
                      <div class="flex-card comments-list light-bordered animated preFadeInUp fadeInUp is-hidden">
                      
                          <div class="media">
                              <figure class="media-left">
                                  <p class="image is-48x48">
                                      <img src="https://via.placeholder.com/250x250" alt="" />
                                  </p>
                              </figure>
                              <div class="media-content">
                                  <div class="content">
                                      <strong>Barbara Middleton</strong>
                                      <span class="timestamp">2 hours ago</span>
                                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.</p>
                                      <small>
                                          <a><i class="fa fa-heart"></i></a> 
                                          <span class="count">9</span>  
                                          <span class="reply"><a href="#">Reply</a></span> 
                                      </small>
                                  </div>

                      
                                  <div class="media">
                                      <figure class="media-left">
                                          <p class="image is-32x32">
                                              <img src="https://via.placeholder.com/250x250" alt="" />
                                          </p>
                                      </figure>
                                      <div class="media-content">
                                          <div class="content">
                                              <strong>Sean Brown</strong>
                                              <span class="timestamp">30 minutes ago</span>
                                              <p>Donec sollicitudin urna eget eros malesuada sagittis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Aliquam blandit nisl a nulla sagittis, a lobortis leo feugiat.</p>
                                              <small>
                                                  <a><i class="fa fa-heart"></i></a> 
                                                  <span class="count">5</span>  
                                                  <span class="reply"><a href="#">Reply</a></span> 
                                              </small>
                                          </div>
                                      </div>
                                  </div>

                      
                                  <div class="media">
                                      <figure class="media-left">
                                          <p class="image is-32x32">
                                              <img src="https://via.placeholder.com/250x250" alt="" />
                                          </p>
                                      </figure>
                                      <div class="media-content">
                                          <div class="content">
                                              <strong>Kayli Eunice </strong>
                                              <span class="timestamp">15 minutes ago</span>
                                              <p>Sed convallis scelerisque mauris, non pulvinar nunc mattis vel. Maecenas varius felis sit amet magna vestibulum euismod malesuada cursus libero. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus lacinia non nisl id feugiat.</p>
                                              <small>
                                                  <a><i class="fa fa-heart"></i></a> 
                                                  <span class="count">2</span>  
                                                  <span class="reply"><a href="#">Reply</a></span> 
                                              </small>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      
                      </div> */}
                      

                      
                      {/* <div class="flex-card compose-card light-bordered">
                          <figure class="avatar image is-64x64 is-hidden-mobile">
                              <img class="img-circle" src="https://via.placeholder.com/250x250" alt="" />
                          </figure>
                      
                          <div class="control-wrapper">
                              <div class="control">
                                  <textarea class="textarea is-button" placeholder="Write something..."></textarea>
                                  <div class="textarea-button">
                                      <button class="button primary-btn btn-align raised">Publish</button>
                                  </div>
                              </div>
                          </div>
                      </div> */}

                  </div>
              </div>
          </div>
      </section>
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
