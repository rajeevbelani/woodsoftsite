import React from 'react';
import { graphql } from 'gatsby';
import HomePageTemplate from '../templates/home-template'
import Layout from 'components/common/layout'
import Gallery from '../components/base/gallery/gallery';

const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const { hero, whatWeDo, howWeWork, clients, process, coverImage } = frontmatter;
    console.log(`Whats we Do ::  ${JSON.stringify(hero)}`)
    return (
      <Layout>
        {/* <Gallery /> */}
        <HomePageTemplate
          hero={hero}
          coverImage={coverImage}
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
              coverImage {
                childImageSharp {
                  fluid(maxHeight: 500, quality: 90) {
                    ...GatsbyImageSharpFluid_withWebp_noBase64
                  }
                }
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
