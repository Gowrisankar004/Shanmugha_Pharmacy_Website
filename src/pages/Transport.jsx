import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

function Transport() {
    return (
        <Layout>
            <PageHeader title="TRANSPORTATION" breadcrumbCurrent="Transport" />

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
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>TRANSPORTATION</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        A full fledged Transport department functions in the college to provide transport facility to students and staff from various places. This service is offered ensuring a hassle-free and safe transportation.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The College runs 13 buses for providing transport facility to students from various places in the city. The number of buses will be increased corresponding to the increase in the intake of students.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The transport facility provided by the College will cover most parts of the town and nearby areas with the brand new fleet.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        College modern buses provide convenient and comfortable travel. Our drivers are well-educated with experience. They provide a safe journey to our students.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Student's own transport arrangements (two-wheelers and cars) are not permitted, in order to prevent accidents and late-comers to college. All the buses reach the campus before 08.30 a.m. so that students and faculty can have their breakfast and get ready to attend the classes at 08.50 a.m. The buses leave the campus at 5.00 pm, which helps students to reach home early and safe.
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

export default Transport;
