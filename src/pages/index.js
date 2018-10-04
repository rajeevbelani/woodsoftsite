import React from 'react';
import Layout from 'components/common/layout';
import { graphql } from 'gatsby';
import HeroWithImage from 'components/common/hero/heroWithImage'
import Testimonials from 'components/wssite/home/Testimonials'
import HowWeWork from 'components/wssite/home/HowWeWork'
import OurProcess from 'components/wssite/home/OurProcess'
import WhatWeDo from 'components/wssite/home/WhatWeDo'

export const HomePageTemplate = ({ hero, whatWeDo, howWeWork, testimonials, process  }) => {
    return (
      <Layout>
        <HeroWithImage data={hero} />
        <section id="services" class="section is-medium">
            <WhatWeDo data={whatWeDo} />
        </section>

        <section class="section section-feature-grey is-medium">
            <HowWeWork data={howWeWork} />
        </section>

        <section class="section is-medium huge-pb">
            <OurProcess data={process} />
        </section>

        <section id="card-testimonials" class="section section-feature-grey is-medium is-skewed-sm">
            <Testimonials data={testimonials} />
        </section>
      </Layout>
    )
}

const HomePage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const { hero, whatWeDo, howWeDo, testimonials, process } = frontmatter;
    return (
        <HomePageTemplate
            hero={hero}
            whatWeDo={howWeDo}
            howWeWork={whatWeDo}
            testimonials={testimonials}
            process={process}
        />
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
                }
              }
              howWeDo {
                descHeading
                description
                heading
                subHeading
                blurbs {
                  text
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
                }
              }
        }
    }
  }
`;
