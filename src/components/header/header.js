import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
// import posed from 'react-pose';

// Example of a component-specific page transition
// const AnimatedContainer = posed.div({
//   enter: {
//     y: 0,
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
//   exit: {
//     y: '-100%',
//     transition: {
//       ease: 'easeInOut',
//     },
//   },
// });

const Header = ({ title }) => (
  
<div class="navbar-placeholder">
    <nav class="navbar navbar-wrapper navbar-default navbar-fade is-transparent">
          <div class="container">
              
              <div class="navbar-brand">
                  {/* <Link class="navbar-item" href="/">
                      <img src="assets/images/logos/bulkit-blue.svg" alt="" />
                  </Link> */}

                  
                  {/* <a id="navigation-trigger" class="navbar-item hamburger-btn" href="javascript:void(0);">
                      <span class="menu-toggle">	
                          <span class="icon-box-toggle"> 	
                              <span class="rotate">
                                  <i class="icon-line-top"></i>
                                  <i class="icon-line-center"></i>
                                  <i class="icon-line-bottom"></i> 
                              </span>
                          </span>
                      </span>
                  </a> */}

                  
                  <div class="custom-burger" data-target="">
                      <Link id="" class="responsive-btn" to="javascript:void(0);">
                          <span class="menu-toggle">	
                              <span class="icon-box-toggle"> 	
                                  <span class="rotate">
                                      <i class="icon-line-top"></i>
                                      <i class="icon-line-center"></i>
                                      <i class="icon-line-bottom"></i> 
                                  </span>
                              </span>
                          </span>
                      </Link>
                  </div>
                  
              </div>

              
              <div class="navbar-menu">
                  
                  <div class="navbar-start">
                      
                    <div class="navbar-item is-slide">
                        <Link to="/">
                            Home
                        </Link>
                      </div>

                      <div class="navbar-item is-slide">
                        <Link to="/blog">
                            Blog
                        </Link>
                      </div>

                      <div class="navbar-item is-slide">
                        <Link to="/technologies">
                            Technologies
                        </Link>
                      </div>

                      {/* <div class="navbar-item is-slide">
                        <Link to="/clientele">
                            Clientele
                        </Link>
                      </div> */}
                      
                      <div class="navbar-item is-slide">
                        <Link to="/company">
                            Company
                        </Link>
                      </div>
                      <div class="navbar-item is-slide">
                        <Link to="/batuwa">
                            Batuwa
                        </Link>
                      </div>
                  </div>

                  
                  <div class="navbar-end">
                  
                      <div class="navbar-item">
                          <a id="#signup-btn" href="landing-v3-signup.html" class="button button-cta btn-outlined is-bold btn-align primary-btn rounded raised">
                              Contact Us
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
      {/* <Container>
      <Link to="/">
        <Title tag="h1">{title}</Title>
      </Link>

      <Nav />
    </Container> */}
      </div>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
