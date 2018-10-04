import React from 'react';
import PropTypes from 'prop-types';

const heroWithImage = ({ data }) => (
    <div class="hero is-theme-primary is-slant">
        <div id="main-hero" class="hero-body is-clean">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5 caption-column has-text-left">
                        <h1 class="clean-title light-text">
                            { data.heroTitle }
                        </h1>
                        <div class="subtitle is-5 pt-10 pb-10">
                            { data.heroDescription }
                        </div>
                        <div class="cta-wrapper has-text-left">
                            <a href="#product" class="button button-cta btn-align btn-outlined is-bold light-btn rounded raised">
                                Get Started
                            </a>
                        </div>
                    </div>
                    <div class="column is-9 is-offset-1">
                        <figure class="image is-3by2">
                            <img class="clean-hero-mockup mt-80 z-index-2" src="assets/images/illustrations/mockups/landing1/macbook-app.png" alt="" />
                        </figure>
                    </div>

                </div>
            </div>
        </div>
    </div>
        
);

heroWithImage.propTypes = {
  data: PropTypes.object.isRequired,
};

export default heroWithImage;
