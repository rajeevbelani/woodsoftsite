import React from 'react';
import { graphql } from 'gatsby';
import HomePageTemplate from '../templates/home-template'
import Layout from 'components/common/layout'
import Gallery from '../components/base/gallery/gallery';
import Hero from '../components/common/TitleHero/TitleHero';
import GoogleMapReact from 'google-map-react';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ContactUs = () => {
    // const { frontmatter } = data.markdownRemark;
    // const { hero, whatWeDo, howWeWork, clients, process, coverImage } = frontmatter;
    // console.log(`Whats we Do :: ${JSON.stringify(coverImage)}  ::  ${JSON.stringify(hero)}`);
    return (
        <Layout>
            <Hero title="CONTACT US" subtitle="Whether you want to start a project with us or just ask us a question, we are here for you." />
            <div class="section is-medium">
                <div class="container">
                    <div class="columns has-text-centered">
                        <div class="column is-hidden-mobile"></div>
                        
                        <div class="column is-3">
                            <div class="shadow-icon-box">
                                <span><i class="fa fa-map fa-lg"></i></span>
                            </div>
                            <div class="shadow-title dark-text">
                                Address
                            </div>
                            <div class="description shadow-description">
                                <b>48, Church Street, First district
                                    <br />59852 New York, USA</b>
                            </div>
                        </div>
                        
                        <div class="column is-3">
                            <div class="shadow-icon-box">
                                <span><i class="fa fa-envelope fa-lg"></i></span>
                            </div>
                            <div class="shadow-title dark-text">
                                Email
                            </div>
                            <div class="description shadow-description">
                                <b>hello@bulkit.io</b>
                                <br />
                            </div>
                        </div>
                        
                        <div class="column is-3">
                            <div class="shadow-icon-box">
                                <span><i class="fa fa-phone-square fa-lg"></i></span>
                            </div>
                            <div class="shadow-title dark-text">
                                Phone
                            </div>
                            <div class="description shadow-description">
                                <b>+1 555 306 87</b>
                                <br />
                            </div>
                        </div>
                        <div class="column is-hidden-mobile"></div>
                    </div>
                </div>
            </div>

            <div class="section no-padding">
                <div class="container is-fluid no-margin">
                    <div class="columns is-gapless is-not-tablet-portrait">
                        
                        <div class="column is-6">
                            <div class="contact-form-wrapper">
                                <div>
                                    <h2 class="form-title has-text-centered">Say Hello !</h2>
                                    <form class="pl-20 pr-20">
                                        <div class="columns">
                                            <div class="column is-8 is-offset-2">
                                                <div class="columns is-vcentered">
                                                    <div class="column is-4">
                                                        
                                                        <div class="control-material is-primary">      
                                                            <input class="material-input" type="text" required="" />
                                                            <span class="material-highlight"></span>
                                                            <span class="bar"></span>
                                                            <label>Name *</label>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="column is-4">
                                                        
                                                        <div class="control-material is-primary">      
                                                            <input class="material-input" type="text" required="" />
                                                            <span class="material-highlight"></span>
                                                            <span class="bar"></span>
                                                            <label>Email *</label>
                                                        </div>
                                                        
                                                    </div>
                                                    <div class="column is-4">
                                                        
                                                        <div class="control-material is-primary">      
                                                            <input class="material-input" type="text" required="" />
                                                            <span class="material-highlight"></span>
                                                            <span class="bar"></span>
                                                            <label>Company</label>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                
                                                <div class="control-material is-primary">  
                                                    <textarea rows="2"></textarea>
                                                    <span class="material-highlight"></span>
                                                    <span class="bar"></span>
                                                    <label>Message *</label>
                                                </div>
                                                
                                                <div class="mb-20">
                                                    
                                                    <button type="submit" class="button button-cta btn-align primary-btn btn-outlined is-bold is-fullwidth rounded no-lh">Send message</button>
                                                    
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        
                        <div class="column">
                            <div id="half-map" class="half-map">
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: 'dhsjdhsjdhsjdshd' }}
                                // defaultCenter={this.props.center}
                                // defaultZoom={this.props.zoom}
                                >
                                <AnyReactComponent
                                    lat={59.955413}
                                    lng={30.337844}
                                    text={'Map '}
                                />
                                </GoogleMapReact>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        
        </Layout>
    )
  }
  
export default ContactUs