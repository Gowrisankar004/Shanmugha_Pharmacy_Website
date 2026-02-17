import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function ExecutiveDirector() {
    return (
        <Layout>
            <PageHeader title="EXECUTIVE DIRECTOR" breadcrumbCurrent="Executive Director" />

            {/* Page Single Post Start */}
            <div className="page-single-post">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="/images/shanmuga/executive-director.webp" alt="Executive Director" />
                            <div
                                className="cha-box"
                                style={{
                                    backgroundColor: '#438b3e',
                                    padding: '20px 10px 30px',   // 👈 Increased bottom padding
                                    textAlign: 'center' ,        // 👈 Center content
                                    color: '#fff',
                                }}
                            >
                                <h4 style={{ color: '#fff', marginBottom: '-10px !important' }}>Mr.THIRUMOORTHY.A</h4>
                                <p>EXECUTIVE DIRECTOR</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            {/* Post Single Content Start */}
                            <div className="post-content">
                                {/* Post Entry Start */}
                                <div className="post-entry">
                                    <h2 className="text-anime-style-3" style={{ paddingTop: '40px' }}>EXECUTIVE DIRECTOR MESSAGE</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Preparing our students for today’s competitive world is our primary focus. Identifying the right opportunities for students and ensuring that these opportunities are fully visible through excellence in operations is my targeted approach for our young bright minds.Marian Edelman rightly said,
                                    </p>
                                    <blockquote className="wow fadeInUp" data-wow-delay="0.4s">
                                        <p> Education is for improving the lives of others and for leaving your community and world better than you found it.</p>
                                    </blockquote>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        We resonate with this philosophy by ensuring that no student who walks into our campus is left without the opportunity for learning. Our efforts are concentrated on creating an environment that fosters quality education alongside activities that transform our students into responsible citizens of our country.
                                    </p>
                                </div>
                                {/* Post Entry End */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Single Post End */}
        </Layout>
    );
}

export default ExecutiveDirector;
