import React from 'react';
import PropTypes from 'prop-types';
import { StaticQuery, graphql } from 'gatsby';
import Head from 'components/base/head';
import Header from 'components/common/header';
// import 'reset.css.js';
// import 'icons.min.css';

import Footer from 'components/wssite/footer'
import 'scss/styles.sass'

class Layout extends React.Component {

  render () {
    const { data, isNavBarTransparent, children } = this.props;
    // console.log(`isNavBarTransparent :: ${isNavBarTransparent}`);
    return (<div>
      <Head />
      <Header title={data.site.siteMetadata.siteTitle} />
        {children}
      <Footer title={data.site.siteMetadata.siteTitle} />
    </div>);
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
};


class LayoutWithQuery extends React.Component {
    
  constructor(props) {
    super (props);
    this.state = {
      isNavBarTransparent: true,
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.navbarOpaque = this.navbarOpaque.bind(this);
    this.navbarTransparent = this.navbarTransparent.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
    document.addEventListener('DOMContentLoaded', () => {
      console.log('here');
      // Get all "navbar-burger" elements
      const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.custom-burger'), 0);
      // Check if there are any navbar burgers
      if ($navbarBurgers.length > 0) {
        // Add a click event on each of them
        $navbarBurgers.forEach( el => {
          el.addEventListener('click', () => {
            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);
            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');
          });
        });
      }
    
    });
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  navbarTransparent = () => {
    const $navbars = Array.prototype.slice.call(document.querySelectorAll('.navbar'), 0);
    // console.log(`Navbars :: ${$navbars}`);
    if ($navbars.length > 0) {
      $navbars.forEach( el => {
        el.classList.remove('navbar-faded');
        el.classList.add('is-transparent');
        el.classList.add('navbar-light');
      });
    }

    const $signUpButton = Array.prototype.slice.call(document.querySelectorAll('.signup-btn'), 0);
    // console.log(`Navbars :: ${$navbars}`);
    if ($signUpButton.length > 0) {
      $signUpButton.forEach( el => {
        el.classList.remove('primary-btn');
        el.classList.add('light-btn');
      });
    }
  }

  navbarOpaque = () => {
    const $navbars = Array.prototype.slice.call(document.querySelectorAll('.navbar'), 0);
    // console.log(`Navbars :: ${$navbars}`);
    if ($navbars.length > 0) {
      $navbars.forEach( el => {
        el.classList.add('navbar-faded');
        el.classList.remove('is-transparent');
        el.classList.remove('navbar-light');
      });
    }

    const $signUpButton = Array.prototype.slice.call(document.querySelectorAll('.signup-btn'), 0);
    // console.log(`Navbars :: ${$navbars}`);
    if ($signUpButton.length > 0) {
      $signUpButton.forEach( el => {
        el.classList.add('primary-btn');
        el.classList.remove('light-btn');
      });
    }
  }

  handleScroll = () => {
    //navbar navbar-wrapper navbar-fade is-transparent navbar-light
    //navbar navbar-wrapper navbar-fade navbar-faded
    console.log('Inside Handle Scroll');
    if (window.scrollY > 50) {
      if (this.state.isNavBarTransparent) {
        this.navbarOpaque();
        this.setState({
          isNavBarTransparent: false,
        });
      }
    } else {
      if (!this.state.isNavBarTransparent) {
        this.navbarTransparent();
        this.setState({
          isNavBarTransparent: true,
        });
      }
    }
    
  };
  render () {
    return (
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
        render={data => <Layout data={data} isNavBarTransparent={this.state.isNavBarTransparent} {...this.props} />}
      />
    )
  }
}

LayoutWithQuery.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LayoutWithQuery;
