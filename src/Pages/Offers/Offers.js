import React from 'react';
import JobOffer from '../../Components/JobOffer/JobOffer';
import './OffersStyle.css';

const Offers = () => {

    return (
        <div className="OffersMain">
            <div className="container">
                <nav>
                    <div className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Full time</a>
                        <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Part time</a>
                        <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Freelance</a>
                    </div>
                </nav>
                <div className="tab-content" id="nav-tabContent">
                    <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                        <JobOffer />
                        <JobOffer />
                        <JobOffer />
                        <JobOffer />
                    </div>
                    <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                        <JobOffer />
                        <JobOffer />
                        <JobOffer />
                        <JobOffer />
                    </div>
                    <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                        <JobOffer />
                        <JobOffer />
                        <JobOffer />
                        <JobOffer />
                    </div>
                </div>
            </div>
        </div>

    );

}

export default Offers;