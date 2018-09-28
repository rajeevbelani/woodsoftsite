import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/layout';
import Box from 'components/box';

export const TechnologiesPageTemplate = ({ title, content }) => {
  return (
    <Layout>
      <div class="hero is-relative is-theme-info is-bold">
          <div id="main-hero" class="hero-body">
              <div class="container has-text-centered">
                  <div class="columns is-vcentered">
                      <div class="column is-4 is-offset-1 has-text-left">
                          <h1 class="title components-title is-1">
                              Features
                          </h1>
                          <h2 class="subtitle is-4 components-subtitle">
                              Feature sections examples.
                          </h2>
                          <p class="components-cta">
                              <a href="#features" class="button button-cta btn-align light-btn btn-outlined is-bold rounded">
                                  Get Started
                              </a>
                          </p>
                      </div>
                      <div class="column is-offset-1 has-text-centered is-hidden-mobile">
                          <div id="features-ill" class="vivus-svg"></div>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
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
