import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from 'components/common/SectionTitle'

const HowWeWork = ({ data }) => (
    <div class="container">
        {console.log(`How we work :: ${data}`)}
        <SectionTitle heading={data.heading} subHeading={data.description} />
        <div class="columns services-cards is-minimal is-vcentered is-gapless is-multiline">
            {data.blurbs.map(blurb => (
                <div class="column">
                    <div class="feature-card card-md hover-inset has-text-centered">
                        <div class="card-icon">
                            <i class="im im-icon-Two-Windows"></i>
                        </div>
                        <div class="card-title">
                            <h4>{blurb.heading}</h4>
                        </div>
                        <div class="card-feature-description">
                            <span class="">{blurb.text}</span>
                        </div>
                    </div>
                </div>
            ))};
        </div>
    </div>
);

export default HowWeWork;
