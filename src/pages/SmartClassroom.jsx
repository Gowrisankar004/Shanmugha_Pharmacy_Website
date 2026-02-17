import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

function SmartClassroom() {
    return (
        <Layout>
            <PageHeader title="SMART CLASSROOM" breadcrumbCurrent="Smart Classroom" />

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
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>SMART CLASSROOM</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        A Smart Classroom is the ultimate self-service, presenter-friendly environment and conducive to the teaching / learning process. The required resources of the faculty are permanent classroom placed in simple, easy-to-use configurations. Collaborative learning environment, simple, friendly and non-intimidating classroom technology inspire the presenters who rely on improvisation, spontaneity and audience participation.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Classroom computer supports interactive learning, facilitating a shift from disclosing information to processing information from 70% presentation and 30% demonstration. These changes in the teaching and learning process enhance the students who are more actively engaged in the classroom environment.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        All the classrooms are 'smart', with high-speed data networks and LCD projectors for audio and video.
                                    </p>
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222' }}>ICT Enabled Smart Class Rooms</li>
                                        <li style={{ color: '#222' }}>ICT Enabled Tools and Resources available in the Institute</li>
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

export default SmartClassroom;
