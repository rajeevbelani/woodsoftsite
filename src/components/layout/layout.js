import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/head';
import Header from 'components/header';
// import 'reset.css.js';
import '../scss/styles.sass'

const Layout = ({ data, children }) => (
  <div>
    <Head />
    <Header title={data.site.siteMetadata.siteTitle} />
    {children}
    <script
        dangerouslySetInnerHTML={{
          __html: `
                document.addEventListener('DOMContentLoaded', function () {
                  // Get all "navbar-burger" elements
                  console.log('DOM Content Loaded');
                  var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0)
                  console.log('FOund Navbar burger :: '+$navbarBurgers);
                  if ($navbarBurgers.length > 0) {
                    // Add a click event on each of them
                    console.log('here 111:: '+$navbarBurgers.length);
                    $navbarBurgers.forEach(function ($el) {
                      $el.addEventListener('click', function () {
                        // Get the target from the "data-target" attribute
                        var target = $el.dataset.target
                        var $target = document.getElementById(target)
                        // Toggle the className on both the "navbar-burger" and the "navbar-menu"
                        $el.classList.toggle('is-active')
                        $target.classList.toggle('is-active')
                      })
                    })
                  }
                });
              `,
        }}
      />
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
