import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from 'components/common/SectionTitle'

const Team = ({ data }) => (
    <div class="container">
        <SectionTitle heading={data.heading} subHeading={data.description} />

        <div class="content-wrapper">
            <div class="modern-team">
                {data.members.map(member => (
                // console.log(`DATA BLURB :: ${JSON.stringify(blurb)}`)
                    <article class="modern-team-item circle-mask zoom-effect">
                        <div class="item-wrapper">
                            <div class="item-img">
                                <img src="https://via.placeholder.com/370x450" class="member-avatar" alt="" />
                            </div>
                            <div class="overlay-wrapper">
                                <div>
                                    <a href="#0" class="social">
                                        <i class="social-icon fa fa-twitter"></i>
                                    </a>
                                    <a href="#0" class="social">
                                        <i class="social-icon fa fa-linkedin"></i>
                                    </a>
                                    <a href="#0" class="social">
                                        <i class="social-icon fa fa-dribbble"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="member-info">
                            <h3 class="member-name">Alex <strong>Walsh</strong></h3>
                            <span class="member-position">Lead Designer</span>
                        </div>
                    </article>
                ))};
            </div>
        </div>
    </div>                  
);

export default Team;
