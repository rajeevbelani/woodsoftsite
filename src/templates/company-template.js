import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from 'components/common/layout';
import Hero from 'components/common/TitleHero'
import Team from 'components/wssite/company/Team'
import Values from 'components/wssite/company/Values'


export const CompanyPageTemplate = ({ team, values }) => {
  return (
    <div>
        <section class="section is-medium">
            <Team data={team} />
        </section>
        <section class="section is-medium">
            <Values data={values} />
        </section>
    </div>
  )
}

const CompanyPage = ({ data }) => {
    const { frontmatter } = data.markdownRemark;
    const { hero, team, values } = frontmatter;
    console.log(`Companies Data :: ${JSON.stringify(data)}`);

  return (
    
    <Layout>
      <Hero title={hero.heroTitle} subtitle={hero.heroDescription} />
      <CompanyPageTemplate
        hero={hero}
        team={team}
        values={values}
      />
      </Layout>
  )
}

export default CompanyPage

export const CompanyPageQuery = graphql`
  query CompanyPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        hero {
          heroDescription
          heroTitle
        }
        team {
          description
          heading
          members {
            text
          }
        }
        values {
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
