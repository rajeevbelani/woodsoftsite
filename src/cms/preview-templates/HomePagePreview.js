import React from 'react'
import PropTypes from 'prop-types'
import { HomePageTemplate } from '../../templates/home-template'

const HomePagePreview = ({ entry, widgetFor }) => (
  <HomePageTemplate
    hero="{hero}"
    whatWeDo="{howWeDo}"
    howWeWork="{whatWeDo}"
    testimonials="{testimonials}"
    process="{process}"
  />
  
)

HomePagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default HomePagePreview
