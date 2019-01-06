import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { FaFacebook, FaTwitter } from 'react-icons/fa';
// import posed from 'react-pose';

const Footer = () => (
    <footer class="footer colored-footer">
        {/* <div class="container">
            
            <div class="footer-body">
                <div class="footer-form">
            
                    <img src="assets/images/logos/bulkit-white.svg" alt="" />
            
                    <div class="control">
                        <input type="text" class="input is-rounded" placeholder="Enter your email" />
                        <button type="button" class="button input-button">Sign up</button>
                    </div>
                </div>
            </div>
        </div> */}
        
        <div class="footer-footer">
            <div class="container">
                <div class="footer-inner">
                    <div class="footer-block designed-by">
                        © 2018 Woodsoft Technologies
                    </div>
                    <div class="footer-block links has-text-centered">
                        <a href="#">Terms &amp; Conditions</a>
                        <a href="#">Privacy policy</a>
                        <a href="#">Help</a>
                    </div>
                    <div class="footer-block social has-text-right">
                        {/* <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-dribbble"></i></a> */}
                    </div>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
