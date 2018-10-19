import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/base/head';
import Header from 'components/common/header';
// import 'reset.css.js';
import Footer from 'components/wssite/footer'
import 'scss/styles.sass'

const Layout = ({ data, children }) => (
  <div>
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
    <Footer title={data.site.siteMetadata.siteTitle} />
  </div>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};

const LayoutWithQuery = props => (
  <StaticQuery
    query={graphql`
      query LayoutQuery {
        site {
          siteMetadata {
            siteTitle
          }
        }
      }
    `}
    render={data => <Layout data={data} {...props} />}
  />
);

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
