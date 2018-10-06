import React from 'react';
import PropTypes from 'prop-types';
import SectionTitle from 'components/common/SectionTitle'

const OurProcess = ({ data }) => (
    <div class="container">
    <SectionTitle heading={data.heading} subHeading={data.description} />
    <div class="content-wrapper">
        <div class="columns is-vcentered">
                {data.blurbs.map(blurb => (
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
    // <div class="content-wrapper">
    //     <div class="columns is-vcentered">
            
    //         <div class="column is-4">
    //             <div class="process-block has-line">
    //                 <div class="process-icon is-icon-reveal">
    //                     <div class="icon-wrapper">
    //                         <i class="im im-icon-Arrow-Over"></i>
    //                         <div class="process-number">1</div>
    //                     </div>
    //                 </div>
    //                 <div class="process-info">
    //                     <div class="step-number">1</div>
    //                     <div class="details">
    //                         <div class="motto">Think</div>
    //                         <p class="description">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div class="column is-4">
    //             <div class="process-block has-line">
    //                 <div class="process-icon is-icon-reveal">
    //                     <div class="icon-wrapper">
    //                         <i class="im im-icon-Arrow-Around"></i>
    //                         <div class="process-number">2</div>
    //                     </div>
    //                 </div>
    //                 <div class="process-info">
    //                     <div class="step-number">2</div>
    //                     <div class="details">
    //                         <div class="motto">Iterate</div>
    //                         <p class="description">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
            
    //         <div class="column is-4">
    //             <div class="process-block">
    //                 <div class="process-icon is-icon-reveal">
    //                     <div class="icon-wrapper">
    //                         <i class="im im-icon-Arrow-Refresh"></i>
    //                         <div class="process-number">3</div>
    //                     </div>
    //                 </div>
    //                 <div class="process-info">
    //                     <div class="step-number">3</div>
    //                     <div class="details">
    //                         <div class="motto">Create</div>
    //                         <p class="description">Lorem ipsum dolor sit amet, eam ex probo tation tractatos. Ut vel hinc solet tincidunt, nec et iisque placerat pertinax. Ei minim probatus mea.</p>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </div>
    // </div>

    // </div>
);

OurProcess.propTypes = {
//   data: PropTypes.Object.isRequired,
};

export default OurProcess;
