import React from 'react';
import SectionTitle from 'components/common/SectionTitle';

const WhatWeDo = ({ data }) => (
    
    <div class="container">
        <SectionTitle heading={data.heading} subHeading={data.subHeading} />
        

        <div class="content-wrapper">
            <div class="columns">
                <div class="column is-4">
                    <div class="service-box">
                    {/* <SectionTitle heading={data.descHeading} subHeading={data.description} /> */}
                        <h2 class="service-title">{data.descHeading}</h2>
                        <div class="title-divider"></div>
                        {data.description}
                        {/* <div class="action">
                            <a class="button btn-align button-cta btn-outlined raised rounded primary-btn is-bold">Learn more</a>
                        </div> */}
                    </div>
                </div>
                
                <div class="column is-7 is-offset-1">
                    <div class="columns is-vcentered is-multiline">
                    {data.blurbs.map(blurb => (
                            <div class="column is-6">
                               <div class="agency-icon-box">
                                   <div class="is-icon-reveal">
                                       {/* <i class="im im-icon-Mail-Search"></i> */}
                                       <i class="material-icons">keyboard_arrow_right</i>
                                       {/* <span className="material-icons">check_circle</span> */}
                                   </div>
                                   <div class="box-title">{blurb.heading}</div>
                                   <p class="box-content">{blurb.text}</p>
                               </div>
                           </div>
                            
                        ))};
                        {/* <div class="column is-6">
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
                        </div> */}
                    </div>
                </div>
            </div>
        </div>
    </div>
);

export default WhatWeDo;
