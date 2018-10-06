import React from 'react';
import { graphql } from 'gatsby';
import HomePageTemplate from '../templates/home-template'
import Layout from 'components/common/layout'

const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const { hero, whatWeDo, howWeWork, testimonials, process } = frontmatter;
    return (
      <Layout>
        <HomePageTemplate
            hero={hero}
            whatWeDo={whatWeDo}
            howWeWork={howWeWork}
            testimonials={testimonials}
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
                description
                heading
                blurbs {
                  text
                  heading
                }
              }
              howWeWork {
                descHeading
                description
                heading
                subHeading
                blurbs {
                  text
                  heading
                }
              }
              testimonials {
                author
                quote
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
