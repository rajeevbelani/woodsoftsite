import React from 'react';
import { graphql } from 'gatsby';
import HomePageTemplate from '../templates/home-template'
import Layout from 'components/common/layout'

const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const { hero, whatWeDo, howWeWork, clients, process } = frontmatter;
    return (
      <Layout>
        <HomePageTemplate
          hero={hero}
          whatWeDo={whatWeDo}
          howWeWork={howWeWork}
          testimonials={clients}
          process={process}
        />
      </Layout>
    )
  }
  
export default HomePage
  
export const pageQuery = graphql`
  query IndexQuery {
    markdownRemark(frontmatter : {templateKey: {eq:"home-template"}}) {
        id
        frontmatter {
            hero {
                heroDescription
                heroTitle
              }
              whatWeDo {
                heading
                subHeading
                descHeading
                description
                blurbs {
                  heading
                  text
                }
              }
              howWeWork {
                heading
                subHeading
                blurbs {
                  heading
                  text
                } 
              }
              clients {
                heading
                subHeading
                blurbs {
                  heading
                  text
                } 
              }
              process {
                description
                heading
                blurbs {
                  text
                  heading
                }
              }
        }
    }
  }
`;
