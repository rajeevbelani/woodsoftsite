import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';

export const CompanyPageTemplate = ({ title, content }) => {
  return (
    <Layout>
      <div class="hero is-medium is-theme-primary">
            <div class="hero-body ">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-6 is-offset-3 has-text-centered">
                            <h1 class="clean-title light-text">
                              We Solve Your Challenges
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      <section class="section is-medium">
        <div class="container">
            
            <div class="centered-title">
                <h2>Meet the Team</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    We are part of a global design Community. We are here to make you succeed.
                </div>
            </div>
            

            <div class="content-wrapper">
                <div class="modern-team">
                  <article class="modern-team-item circle-mask zoom-effect">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="https://via.placeholder.com/370x450" class="member-avatar" alt="" />
                        </div>
                        <div class="overlay-wrapper">
                            <div>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-twitter"></i>
                                </a>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-linkedin"></i>
                                </a>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-dribbble"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">Alex <strong>Walsh</strong></h3>
                        <span class="member-position">Lead Designer</span>
                    </div>
                </article>
                
                <article class="modern-team-item circle-mask rotate-zoom-effect">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="https://via.placeholder.com/370x450" class="member-avatar" alt="" />
                        </div>
                        <div class="overlay-wrapper">
                            <div>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-twitter"></i>
                                </a>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-linkedin"></i>
                                </a>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-dribbble"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">Naseem <strong>Al Wahabi</strong></h3>
                        <span class="member-position">Lead Developer</span>
                    </div>
                </article>
                
                <article class="modern-team-item circle-mask zoom-slide-effect">
                    <div class="item-wrapper">
                        <div class="item-img">
                            <img src="https://via.placeholder.com/370x450" class="member-avatar" alt="" />
                        </div>
                        <div class="overlay-wrapper">
                            <div>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-twitter"></i>
                                </a>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-linkedin"></i>
                                </a>
                                <a href="#0" class="social">
                                    <i class="social-icon fa fa-dribbble"></i>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="member-info">
                        <h3 class="member-name">Dominic <strong>Grilio</strong></h3>
                        <span class="member-position">Head of Sales</span>
                    </div>
                </article>
            </div>
        </div>
    </div>
</section>

      {/* <Box>
        <p class="title is-1 is-spaced">
          {title}
        </p>
        <div dangerouslySetInnerHTML={{ __html: content }} />
      </Box> */}
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
