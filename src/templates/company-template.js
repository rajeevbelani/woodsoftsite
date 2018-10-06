import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';
import Hero from 'components/common/TitleHero'

export const CompanyPageTemplate = ({ title, content }) => {
  return (
    <div>
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
</div>
  )
}

CompanyPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const CompanyPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    
    <Layout>
      <Hero title="We Solve Your Challenges" />
      <CompanyPageTemplate
        title={post.frontmatter.title}
        content={post.html}
      />
      </Layout>
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
