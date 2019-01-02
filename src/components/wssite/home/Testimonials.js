import React from 'react';
import SectionTitle from 'components/common/SectionTitle'

const Testimonials = ({ data }) =>  { 
    console.log(`TEstimonials .. ${JSON.stringify(data)}`);
    let count = 1;
    let testimonials = "";
    for (let i=0; i<data.blurbs.length; i++) {
        console.log(`blurb::  ${JSON.stringify(data.blurbs[i])}`);

    }
    data.blurbs.map(blurb => {
        console.log(`Blkurb :: ${JSON.stringifyblurb}`);
    //     testimonials.concat(
    //     <div class="column">
    //         <div class="feature-card card-md hover-inset has-text-centered">
    //             <div class="card-icon">
    //                 {/* <i class="im im-icon-Two-Windows"></i> */}
    //                 <i class="material-icons">{blurb.iconName}</i>
    //             </div>
    //             <div class="card-title">
    //                 <h4>{blurb.heading}</h4>
    //             </div>
    //             <div class="card-feature-description">
    //                 <span class="">{blurb.text}</span>
    //             </div>
    //         </div>
    //     </div>
    // )
});
    // console.log(`testimonials :: ${testimonials}`);
    return (
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
                                    {/* <img class="" src="https://via.placeholder.com/250x250" alt="" /> */}
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
                                    {/* <img class="" src="https://via.placeholder.com/250x250" alt="" /> */}
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
                                    {/* <img class="" src="https://via.placeholder.com/250x250" alt="" /> */}
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
                                    {/* <img class="" src="https://via.placeholder.com/250x250" alt="" /> */}
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
        </div>
    </div>
)};

Testimonials.propTypes = {
//   data: PropTypes.Object.isRequired,
};

export default Testimonials;
