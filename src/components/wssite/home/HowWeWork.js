import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from 'components/common/SectionTitle'

const HowWeWork = ({ data }) => (
    <div class="container">
        {console.log(`How we work :: ${data}`)}
        <SectionTitle heading={data.heading} subHeading={data.description} />
        {/* {data.blurbs.map(({node: post}) => (
            
        ))}; */}
        <div class="columns services-cards is-minimal is-vcentered is-gapless is-multiline">
            <div class="column">
                <div class="feature-card card-md hover-inset has-text-centered">
                    <div class="card-icon">
                        <i class="im im-icon-Two-Windows"></i>
                    </div>
                    <div class="card-title">
                        <h4>Web development</h4>
                    </div>
                    <div class="card-feature-description">
                        <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <div class="feature-card card-md hover-inset has-text-centered">
                    <div class="card-icon">
                        <i class="im im-icon-Smartphone-4"></i>
                    </div>
                    <div class="card-title">
                        <h4>Mobile development</h4>
                    </div>
                    <div class="card-feature-description">
                        <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <div class="feature-card card-md hover-inset has-text-centered">
                    <div class="card-icon">
                        <i class="im im-icon-T-Shirt"></i>
                    </div>
                    <div class="card-title">
                        <h4>Branding</h4>
                    </div>
                    <div class="card-feature-description">
                        <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <div class="feature-card card-md hover-inset has-text-centered mb-20">
                    <div class="card-icon">
                        <i class="im im-icon-Laptop-Phone"></i>
                    </div>
                    <div class="card-title">
                        <h4>Responsive design</h4>
                    </div>
                    <div class="card-feature-description">
                        <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <div class="feature-card card-md hover-inset has-text-centered mb-20">
                    <div class="card-icon">
                        <i class="im im-icon-Cart-Quantity"></i>
                    </div>
                    <div class="card-title">
                        <h4>E-Commerce</h4>
                    </div>
                    <div class="card-feature-description">
                        <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                    </div>
                </div>
            </div>
            
            <div class="column">
                <div class="feature-card card-md hover-inset has-text-centered mb-20">
                    <div class="card-icon">
                        <i class="im im-icon-Colosseum"></i>
                    </div>
                    <div class="card-title">
                        <h4>Graphic design</h4>
                    </div>
                    <div class="card-feature-description">
                        <span class="">Lorem ipsum dolor sit amet, clita laoreet ne cum. His caelus elet cu harum inermis iudicabit.</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
);

HowWeWork.propTypes = {
//   data: PropTypes.Object.isRequired,
};

export default HowWeWork;
