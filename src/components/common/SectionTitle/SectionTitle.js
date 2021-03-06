import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ heading, subHeading }) => (
    <div class="centered-title">
        <h2>{ heading }</h2>
        <div class="title-divider"></div>
        <div class="subheading">
            { subHeading }
        </div>
    </div>
);

export default SectionTitle;
