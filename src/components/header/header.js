import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import posed from 'react-pose';

// Example of a component-specific page transition
const AnimatedContainer = posed.div({
  enter: {
    y: 0,
    transition: {
      ease: 'easeInOut',
    },
  },
  exit: {
    y: '-100%',
    transition: {
      ease: 'easeInOut',
    },
  },
});

const Header = ({ title }) => (
  <AnimatedContainer>
    <nav class="navbar navbar-wrapper navbar-default navbar-fade is-transparent">
          <div class="container">
              
              <div class="navbar-brand">
                  <a class="navbar-item" href="/">
                      <img src="assets/images/logos/bulkit-blue.svg" alt="" />
                  </a>

                  
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
                      <a id="" class="responsive-btn" href="javascript:void(0);">
                          <span class="menu-toggle">	
                              <span class="icon-box-toggle"> 	
                                  <span class="rotate">
                                      <i class="icon-line-top"></i>
                                      <i class="icon-line-center"></i>
                                      <i class="icon-line-bottom"></i> 
                                  </span>
                              </span>
                          </span>
                      </a>
                  </div>
                  
              </div>

              
              <div class="navbar-menu">
                  
                  <div class="navbar-start">
                      
                      <Link class="navbar-item is-slide" to="/technologies">
                          Technologies
                      </Link>
                      
                      <Link class="navbar-item is-slide" to="/clientele">
                          Clientele
                      </Link>
                      
                      <Link class="navbar-item is-slide" to="/company">
                          Company
                      </Link>

                      <Link class="navbar-item is-slide" to="/batuwa">
                          Batuwa
                      </Link>
                  </div>

                  
                  <div class="navbar-end">
                  
                      <div class="navbar-item">
                          <a id="#signup-btn" href="landing-v3-signup.html" class="button button-cta btn-outlined is-bold btn-align primary-btn rounded raised">
                              Sign Up
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
  </AnimatedContainer>
);

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
