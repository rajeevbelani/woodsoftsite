import React from 'react';
import SectionTitle from 'components/common/SectionTitle'

const Testimonials = ({ data }) => (
    <div class="container is-reverse-skewed-sm">
        <div class="section-title-wrapper has-text-centered">
            <div class="clean-bg-symbol"><i class="fa fa-gg"></i></div>
            <SectionTitle heading="We are Trusted." subHeading="Access integrations and new features in a matter of seconds" />    
        </div>
        <div class="content-wrapper">
            
            <div class="columns">
                <div class="column is-hidden-mobile"></div>
                <div class="column is-10">
                    <div class="columns is-vcentered">
                        <div class="column is-6">
                            
                            <div class="flex-card testimonial-card light-raised padding-20">
                                <div class="testimonial-title">
                                    Amazed by the product
                                </div>
                                <div class="testimonial-text">
                                    Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                </div>
                                <div class="user-id">
                                    <img class="" src="https://via.placeholder.com/250x250" alt="" />
                                    <div class="info">
                                        <div class="name clean-text">Dan Shwartz</div>
                                        <div class="position">Software engineer</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex-card testimonial-card light-raised padding-20">
                                <div class="testimonial-title">
                                    My tasks are now painless
                                </div>
                                <div class="testimonial-text">
                                    Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                </div>
                                <div class="user-id">
                                    <img class="" src="https://via.placeholder.com/250x250" alt="" />
                                    <div class="info">
                                        <div class="name clean-text">Jane Guzmann</div>
                                        <div class="position">CFO</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="column is-6">
                            
                            <div class="flex-card testimonial-card light-raised padding-20">
                                <div class="testimonial-title">
                                    Very nice support
                                </div>
                                <div class="testimonial-text">
                                    Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                </div>
                                <div class="user-id">
                                    <img class="" src="https://via.placeholder.com/250x250" alt="" />
                                    <div class="info">
                                        <div class="name clean-text">Hellen Miller</div>
                                        <div class="position">Accountant</div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="flex-card testimonial-card light-raised padding-20">
                                <div class="testimonial-title">
                                    My income has doubled
                                </div>
                                <div class="testimonial-text">
                                    Lorem ipsum dolor sit amet, vim quidam blandit voluptaria no, has eu lorem convenire incorrupte. Vis mutat altera percipit ad.
                                </div>
                                <div class="user-id">
                                    <img class="" src="https://via.placeholder.com/250x250" alt="" />
                                    <div class="info">
                                        <div class="name clean-text">Anthony Leblanc</div>
                                        <div class="position">Founder at Hereby</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-hidden-mobile"></div>
            </div>
            
            <div class="grid-clients three-grid pt-80 pb-80">
                <div class="columns is-vcentered">
                    <div class="column"></div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/systek.svg" alt="" /></a>
                    </div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/phasekit.svg" alt="" /></a>
                    </div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/grubspot.svg" alt="" /></a>
                    </div>
                    <div class="column"></div>
                </div>
                <div class="columns is-vcentered is-separator">
                    <div class="column"></div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/tribe.svg" alt="" /></a>
                    </div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/kromo.svg" alt="" /></a>
                    </div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/covenant.svg" alt="" /></a>
                    </div>
                    <div class="column"></div>
                </div>
                <div class="columns is-vcentered is-separator">
                    <div class="column"></div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/infinite.svg" alt="" /></a>
                    </div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom//gutwork.svg" alt="" /></a>
                    </div>
                    <div class="column">
                        <a><img class="client" src="assets/images/logos/custom/proactive.svg" alt="" /></a>
                    </div>
                    <div class="column"></div>
                </div>
            </div>
        </div>
    </div>
);

Testimonials.propTypes = {
//   data: PropTypes.Object.isRequired,
};

export default Testimonials;
