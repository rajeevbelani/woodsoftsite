import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from 'components/common/SectionTitle'
import randomId from 'random-id';
 

const OurProcess = ({ data }) => {
    return (
        <div class="container">
            <SectionTitle heading={data.heading} subHeading={data.description} />
            <div class="content-wrapper">
                <div class="columns is-vcentered">
                    {data.blurbs.map((blurb, index) => (
                        <div key={randomId(10, 'aA0')} class="column is-4">
                            <div class="process-block has-line">
                                <div class="process-icon is-icon-reveal">
                                    <div class="icon-wrapper">
                                        <i style={{'fontSize': '5rem' }} class="material-icons">refresh</i>
                                        <div class="process-number">{ index + 1 }</div>
                                    </div>
                                </div>
                                <div class="process-info">
                                    <div class="step-number">{ index + 1 }</div>
                                    <div class="details">
                                        <div class="motto">{blurb.heading}</div>
                                        <p class="description">{blurb.description}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))};
                </div>
            </div>
        </div>
        )
    }

OurProcess.propTypes = {
//   data: PropTypes.Object.isRequired,
};

export default OurProcess;
