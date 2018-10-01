import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout';
import Box from 'components/box';

export const TechnologiesPageTemplate = ({ title, content }) => {
  return (
    <Layout>
      <div class="hero is-large is-theme-primary">
            <div class="hero-body ">
                <div class="container has-text-centered">
                    <div class="columns is-vcentered">
                        <div class="column is-6 is-offset-3 has-text-centered">
                            <h1 class="clean-title light-text">
                              Web, Mobile, IoT, VR, AR
                            </h1>
                            <br />
                            <div class="title-divider"></div>
                            <p class="has-text-centered light-text subtitle">
                              We develop software for a variety of platforms. Our solutions are perfectly tailored to your business needs.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>

        <section class="section section-feature-grey is-medium">
        <div class="container">
            <div class="centered-title">
                <h2>We develop for these platforms</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    (Some subtitle here also)
                </div>
            </div>
            <div class="columns services-cards is-minimal is-vcentered is-gapless is-multiline">
                
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-Two-Windows"></i>
                        </div>
                        <div class="card-title">
                            <h4>Android</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                        </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-Smartphone-4"></i>
                        </div>
                        <div class="card-title">
                            <h4>Mobile development</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                        </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-T-Shirt"></i>
                        </div>
                        <div class="card-title">
                            <h4>Branding</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                        </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered mb-20">
                        <div class="card-icon">
                            <i class="im im-icon-Laptop-Phone"></i>
                        </div>
                        <div class="card-title">
                            <h4>Responsive design</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                        </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered mb-20">
                        <div class="card-icon">
                            <i class="im im-icon-Cart-Quantity"></i>
                        </div>
                        <div class="card-title">
                            <h4>E-Commerce</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                        </div>
                    </div>
                </div>
                
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered mb-20">
                        <div class="card-icon">
                            <i class="im im-icon-Colosseum"></i>
                        </div>
                        <div class="card-title">
                            <h4>Graphic design</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                        </div>
                    </div>
                </div>

                
            </div>
            {/* <div class="has-text-centered mt-40 mb-40 is-title-reveal">
                <a class="button button-cta is-bold btn-align primary-btn btn-outlined rounded">Learn more</a>
            </div> */}
        </div>
    </section>
    </Layout>
  )
}

TechnologiesPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
}

const TechnologiesPage = ({ data }) => {
  const { markdownRemark: post } = data
  console.log(`Technologies Page data :: ${JSON.stringify(post)}`);
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
