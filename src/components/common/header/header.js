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
  
<div class="hero navbar-placeholder">
    <nav class="navbar navbar-wrapper navbar-fade is-transparent navbar-light">
          <div class="container">
                {/* <Link class="navbar-item" href="/">
                      <img src="assets/images/lrlogo.png" alt="" />
                  </Link> */}
              <div class="navbar-brand">
                  <Link  href="/">
                      <img src="assets/images/lrlogo.png" alt="" />
                  </Link>

                  
                  <a id="navigation-trigger" class="navbar-item hamburger-btn" href="javascript:void(0);">
                      <span class="menu-toggle">	
                          <span class="icon-box-toggle"> 	
                              <span class="rotate">
                                  {/* <i class="icon-line-top"></i>
                                  <i class="icon-line-center"></i>
                                  <i class="icon-line-bottom"></i>  */}
                              </span>
                          </span>
                      </span>
                  </a>

                  
                  <div class="custom-burger" data-target="burger-menu">
                      {/* <Link id="" class="responsive-btn" to=""> */}
                          <span class="menu-toggle">	
                              <span class="icon-box-toggle"> 	
                                  <span class="rotate">
                                      <i class="icon-line-top"></i>
                                      <i class="icon-line-center"></i>
                                      <i class="icon-line-bottom"></i> 
                                  </span>
                              </span>
                          </span>
                      {/* </Link> */}
                  </div>
                  
              </div>

              
              <div id="burger-menu" class="navbar-menu">
                  
                  <div class="navbar-start">
                    <div class="navbar-item is-slide">
                        <Link to="/">
                            <div class="navbar-item">
                                Home
                            </div>
                        </Link>
                    </div>

                    <div class="navbar-item is-slide">
                        <Link to="/blog">
                            <div class="navbar-item">
                                Blog
                            </div>
                        </Link>
                    </div>

                    <div class="navbar-item is-slide">
                        <Link to="/technologies">
                            <div class="navbar-item">                        
                                Technologies
                            </div>
                        </Link>
                    </div>  

                    {/* <div class="navbar-item is-slide">
                        <Link to="/company">
                            <div class="navbar-item">
                                Company
                            </div>
                        </Link>
                    </div>   */}

                    {/* <div class="navbar-item is-slide">
                        <Link to="/batuwa">
                            <div class="navbar-item">
                                Batuwa
                            </div>
                        </Link>
                    </div> */}
                  </div> 

                  <div class="navbar-end">
                      <div class="navbar-item">
                        <Link to="/contactus">
                            <div id="#signup-btn" to="/contactus" class="signup-btn button button-cta btn-outlined is-bold btn-align light-btn rounded raised">
                                Contact Us
                            </div>
                        </Link>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
      {/*
      button button-cta btn-align btn-outlined is-bold light-btn rounded raised
      button button-cta btn-outlined is-bold btn-align primary-btn rounded raised
      <Container>
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
