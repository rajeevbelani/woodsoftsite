import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';
import Platforms from 'components/wssite/technologies/Platforms'
import Practices from 'components/wssite/technologies/Practices'
import Technologies from 'components/wssite/technologies/Technologies'
import Hero from 'components/common/TitleHero'

export const TechnologiesPageTemplate = ({ hero, platforms, practices, technologies }) => {
  return (
    <div>
        {/* <div class="hero is-large is-theme-primary">
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
        </div> */}

        <Hero title={hero.heroTitle} subtitle={hero.heroDescription} />
        <section class="section section-feature-grey is-medium">
           <Platforms data={platforms} />
        </section>
        <section class="section is-medium">
            <Practices data={practices} />
        </section>
        <section class="section section-feature-grey is-medium">
            <Technologies data={technologies} />
        </section>
    </div>
  )
}

const TechnologiesPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const { hero, platforms, practices, technologies } = frontmatter;
    return (
        <Layout>
            <TechnologiesPageTemplate
                hero={hero}
                platforms={platforms}
                practices={practices}
                technologies={technologies}
            />
        </Layout>
    )
}

export default TechnologiesPage

export const TechnologiesPageQuery = graphql`
  query TechnologiesPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
        id
        frontmatter {
            hero {
                heroDescription  
                heroTitle
            }
            platforms {
                description
                heading
                blurbs {
                heading
                text
                }
            }
            practices {
                description
                heading
                blurbs {
                heading
                text
                }
            }
            technologies {
                description
                heading
                blurbs {
                heading
                text
                }
            }
        }
    }
  }
`
