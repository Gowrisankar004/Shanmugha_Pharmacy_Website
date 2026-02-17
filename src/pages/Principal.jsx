import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Principal() {
    return (
        <Layout>
            <PageHeader title="PRINCIPAL MESSAGE" breadcrumbCurrent="Principal's Message" />

            {/* Page Single Post Start */}
            <div className="page-single-post" style={{ background: 'var(--secondary-color) url(/images/icon-blockquote.svg) no-repeat 20px 26px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="/images/shanmuga/principal.jpg" alt="Principal" />
                              <div
                                className="cha-box"
                                style={{
                                    backgroundColor: '#438b3e',
                                    padding: '20px 10px 30px',   // 👈 Increased bottom padding
                                    textAlign: 'center',         // 👈 Center content
                                    color: '#fff',
                                }}
                            >
                                <h4 style={{ color: '#fff', marginBottom: '-10px' }}>Dr.P.SURESH KUMAR</h4>
                                <p style={{ marginBottom: '1px' }}>M.Pharm., Ph.D.,</p>
                                <p>Principal, Sri Shanmugha College of Pharmacy</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            {/* Post Single Content Start */}
                            <div className="post-content">
                                {/* Post Entry Start */}
                                <div className="post-entry">
                                    <h2 className="text-anime-style-3" style={{ paddingTop: '30px' }}>PRINCIPAL MESSAGE</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Welcome to Sri Shanmugha College of Pharmacy, where we are committed to excellence in pharmaceutical education and research. Our institution is dedicated to nurturing future pharmacists and healthcare professionals who are well-equipped to meet the challenges of the evolving pharmaceutical industry.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        At SSCOP, we emphasize a holistic approach to education, combining rigorous academic training with practical experience. Our state-of-the-art facilities, experienced faculty, and strong industry partnerships ensure that our students receive the highest quality education and are well-prepared for their careers.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Our mission is to instill in our students the values of integrity, innovation, and community service. We strive to create an environment that fosters intellectual growth, critical thinking, and ethical practices. Through our comprehensive curriculum and extracurricular activities, we aim to develop well-rounded individuals who can contribute significantly to society and the healthcare sector.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        I invite you to explore the opportunities at SSCOP and join us in our journey towards creating a brighter future for the pharmaceutical field. Together, we can achieve excellence and make a meaningful impact on healthcare and patient well-being.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Thank you for considering Sri Shanmugha College of Pharmacy for your educational journey.
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

export default Principal;
