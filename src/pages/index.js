import React from 'react';
import Layout from 'components/layout';
import Box from 'components/box';
import Title from 'components/title';
import Gallery from 'components/gallery';
import IOExample from 'components/io-example';
import Modal from 'containers/modal';
import { graphql } from 'gatsby';

export default ({ data }) => (
  <Layout>
    {/* <Box>
      <Title tag="span" size="large">
        {data.homeJson.content.childMarkdownRemark.rawMarkdownBody}
      </Title>
      <Modal>
        <video
          src="https://i.imgur.com/gzFqNSW.mp4"
          playsInline
          loop
          autoPlay
          muted
        />
      </Modal>
    </Box>
    <Gallery items={data.homeJson.gallery} />
    <div style={{ height: '50vh' }} />
    <IOExample /> */}

    <div class="hero is-theme-primary is-slant">
        <div id="main-hero" class="hero-body is-clean">
            <div class="container has-text-centered">
                <div class="columns is-vcentered">
                    <div class="column is-5 caption-column has-text-left">
                        <h1 class="clean-title light-text">
                            Apps for all Screens
                        </h1>
                        <div class="subtitle is-5 pt-10 pb-10">
                            Some long subtile Some long subtile Some long subtile Some long subtile Some long subtile
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

    <section id="services" class="section is-medium">
        <div class="container">
            <div class="centered-title">
                <h2>What we do</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    We create new quality valued digital products everyday. Check it out !
                </div>
            </div>

            <div class="content-wrapper">
                <div class="columns">
                    <div class="column is-4">
                        <div class="service-box">
                            <h2 class="service-title">Get to know us</h2>
                            <div class="title-divider"></div>
                            <p>Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea. Vide movet ad vis, eum at percipitur temporibus signiferumque.</p>
                            <p>Timeam adipisci mei ei, vis ut nulla urbanitas, mel ex tota laudem. Quo ne regione tritani placerat, labitur neglegentur ex vis, sale verterem perfecto an eum. </p>
                            <div class="action">
                                <a class="button btn-align button-cta btn-outlined raised rounded primary-btn is-bold">Learn more</a>
                            </div>
                        </div>
                    </div>
                    
                    <div class="column is-7 is-offset-1">
                        <div class="columns is-vcentered is-multiline">
                            
                            <div class="column is-6">
                                <div class="agency-icon-box">
                                    <div class="is-icon-reveal">
                                        <i class="im im-icon-Mail-Search"></i>
                                    </div>
                                    <div class="box-title">Digital marketing</div>
                                    <p class="box-content">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>
                                </div>
                            </div>
                            
                            <div class="column is-6">
                                <div class="agency-icon-box">
                                    <div class="is-icon-reveal">
                                        <i class="im im-icon-Sidebar-Window"></i>
                                    </div>
                                    <div class="box-title">UI Design</div>
                                    <p class="box-content">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>
                                </div>
                            </div>
                            
                            <div class="column is-6">
                                <div class="agency-icon-box">
                                    <div class="is-icon-reveal">
                                        <i class="im im-icon-Idea-5"></i>
                                    </div>
                                    <div class="box-title">UX Design</div>
                                    <p class="box-content">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>
                                </div>
                            </div>
                            
                            <div class="column is-6">
                                <div class="agency-icon-box">
                                    <div class="is-icon-reveal">
                                        <i class="im im-icon-Shop-4"></i>
                                    </div>
                                    <div class="box-title">Print & Branding</div>
                                    <p class="box-content">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>
                                </div>
                            </div>

                            <div class="column is-6">
                                <div class="agency-icon-box">
                                    <div class="is-icon-reveal">
                                        <i class="im im-icon-Shop-4"></i>
                                    </div>
                                    <div class="box-title">Print & Branding</div>
                                    <p class="box-content">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>
                                </div>
                            </div>

                            <div class="column is-6">
                                <div class="agency-icon-box">
                                    <div class="is-icon-reveal">
                                        <i class="im im-icon-Shop-4"></i>
                                    </div>
                                    <div class="box-title">Print & Branding</div>
                                    <p class="box-content">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    </section>
  
    <section class="section section-feature-grey is-medium">
        <div class="container">
            <div class="centered-title">
                <h2>How we work</h2>
                <div class="title-divider"></div>
                <div class="subheading">
                    (Some subtitle here also)
                </div>
            </div>
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
            {/* <div class="has-text-centered mt-40 mb-40 is-title-reveal">
                <a class="button button-cta is-bold btn-align primary-btn btn-outlined rounded">Learn more</a>
            </div> */}
        </div>
    </section>
  
    <section class="section is-medium huge-pb">
      <div class="container">
          
          <div class="centered-title">
              <h2>Our Process</h2>
              <div class="title-divider"></div>
              <div class="subheading">
                  Before creation, there's thinking. Our process is sharp and let us craft the best quality.
              </div>
          </div>
          

          
          <div class="content-wrapper">
              <div class="columns is-vcentered">
                  
                  <div class="column is-4">
                      <div class="process-block has-line">
                          <div class="process-icon is-icon-reveal">
                              <div class="icon-wrapper">
                                  <i class="im im-icon-Arrow-Over"></i>
                                  <div class="process-number">1</div>
                              </div>
                          </div>
                          <div class="process-info">
                              <div class="step-number">1</div>
                              <div class="details">
                                  <div class="motto">Think</div>
                                  <p class="description">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="column is-4">
                      <div class="process-block has-line">
                          <div class="process-icon is-icon-reveal">
                              <div class="icon-wrapper">
                                  <i class="im im-icon-Arrow-Around"></i>
                                  <div class="process-number">2</div>
                              </div>
                          </div>
                          <div class="process-info">
                              <div class="step-number">2</div>
                              <div class="details">
                                  <div class="motto">Iterate</div>
                                  <p class="description">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea.</p>
                              </div>
                          </div>
                      </div>
                  </div>
                  
                  <div class="column is-4">
                      <div class="process-block">
                          <div class="process-icon is-icon-reveal">
                              <div class="icon-wrapper">
                                  <i class="im im-icon-Arrow-Refresh"></i>
                                  <div class="process-number">3</div>
                              </div>
                          </div>
                          <div class="process-info">
                              <div class="step-number">3</div>
                              <div class="details">
                                  <div class="motto">Create</div>
                                  <p class="description">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea.</p>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          
      </div>
  </section>
  
  <section id="card-testimonials" class="section section-feature-grey is-medium is-skewed-sm">
    <div class="container is-reverse-skewed-sm">
        
        <div class="section-title-wrapper has-text-centered">
            <div class="clean-bg-symbol"><i class="fa fa-gg"></i></div>
            <div class="centered-title">
              <h2>We are Trusted.</h2>
              <div class="title-divider"></div>
              <div class="subheading">
              Access integrations and new features in a matter of seconds
              </div>
          </div>
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
</section>
  </Layout>
);

export const query = graphql`
  query HomepageQuery {
    homeJson {
      title
      content {
        childMarkdownRemark {
          html
          rawMarkdownBody
        }
      }
      gallery {
        title
        copy
        image {
          childImageSharp {
            fluid(maxHeight: 500, quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`;
