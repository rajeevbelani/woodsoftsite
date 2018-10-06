import React from 'react';
import PropTypes from 'prop-types';

const TitleHero = ({ title }) => (
    <div class="hero is-medium is-theme-primary">
        <div class="hero-body ">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-6 is-offset-3 has-text-centered">
                        <h1 class="clean-title light-text">
                          {title}
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

TitleHero.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TitleHero;
