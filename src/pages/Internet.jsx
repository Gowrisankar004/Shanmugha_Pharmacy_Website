import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

function Internet() {
    return (
        <Layout>
            <PageHeader title="INTERNET & WI-FI" breadcrumbCurrent="Internet & Wi-Fi" />

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
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>INTERNET & WIFI</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Sri Shanmugha College of Pharmacy entered into an e-revolution by making its entire campus with Wi-Fi facility. This provides laptop users with a seamless mobile connection to the corporate network (intranet and Internet) for browsing, presentations and documents around the campus.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        College has 300 Mbps Internet connection, locally networked and connected through Wi-Fi also to the central server which are available for students project work and preparing seminar presentations. It accesses e-books, study materials, previous question papers, daily circulars etc. through the college Local Area Network. Internet facility has been given in the well-equipped internet lab with high speed connectivity and the student can surf the net to get unlimited information.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The internet can be accessed across the entire campus. The campus intranet has important details about Test Schedules, Time Tables, Examination Schedules, Campus News etc., and a wealth of information about the college. This allows learning to move outside the classroom where students can discuss, learn and grow. The institute has a leased line and each student is provided with an IP address of his own. All the websites browsed by him/her are regularly monitored.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The Wi-Fi facility in the campus is a milestone in the history of this institution as it puts the college on the road to paperless administration and functioning. In addition, the college provides internet and intranet facility to all the students and staff for instructional purposes on par with colleges internationally.
                                    </p>
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

export default Internet;
