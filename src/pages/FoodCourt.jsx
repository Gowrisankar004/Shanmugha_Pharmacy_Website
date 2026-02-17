import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

function FoodCourt() {
    return (
        <Layout>
            <PageHeader title="FOOD COURT" breadcrumbCurrent="Food Court" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <FacilitiesSidebar />
                        </div>

                        <div className="col-lg-8">
                            <div className="about-story-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>FOOD COURT</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Isthara – Being pioneers from the hospitality industry, we are experts in transforming conventional College / Institutional/ Corporate 'canteens' into "Smart Food Courts".
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Gone are the days of running a 'Canteen' by a single person / family. Multiple vendors, choice of multiple cuisines and 'Food Courts' are the need of the hour, and we at Isthara facilitate you with just that!!
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Isthara transforms the traditional Canteen into a 'Smart Food court' – giving you the following:
                                    </p>
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Multi Vendor System – we have a large ecosystem of Vendors of multi various cuisines who have partnered with us.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>We curate food experiences based on the demographics of the college / institute / Corporate.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>The existing 'canteen' space is efficiently remodelled to be a multi vendor food court.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Capitalizing on the spending capacity of the students by providing them more variety / choice of cuisines for them to have.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Generating a revenue for the college / Institute / Corporate by facilitating the food court setup.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>'Smart' Food court – as we are Tech enabled with our own in-house developed app.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Providing highest Sanitization / Hygiene standards with FSSAI standard quality checks.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Service Page End */}
        </Layout>
    );
}

export default FoodCourt;
