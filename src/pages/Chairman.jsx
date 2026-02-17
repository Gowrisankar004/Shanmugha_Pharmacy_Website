import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Chairman() {
    return (
        <Layout>
            <PageHeader title="CHAIRMAN'S MESSAGE" breadcrumbCurrent="Chairman's Message" />

            {/* Page Single Post Start */}
            <div className="page-single-post" style={{ background: 'var(--secondary-color) url(/images/icon-blockquote.svg) no-repeat 20px 26px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="/images/shanmuga/chairman.webp" alt="Chairman" />
                            <div
                                className="cha-box"
                                style={{
                                    backgroundColor: '#438b3e',
                                    padding: '20px 10px 30px',   // 👈 Increased bottom padding
                                    textAlign: 'center'         // 👈 Center content
                                }}
                            >
                                <h4 style={{ color: '#fff', marginBottom: '-10px', }}>THIRU.SHANMUGHAM K</h4>
                                <p style={{ color: '#fff' }}>CHAIRMAN</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            {/* Post Single Content Start */}
                            <div className="post-content">
                                {/* Post Entry Start */}
                                <div className="post-entry">
                                    <h2 className="text-anime-style-3">CHAIRMAN'S MESSAGE</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Welcome to Sri Shanmugha College of Pharmacy, an institution dedicated to fostering excellence in pharmaceutical education and research. Our mission is to empower students with the knowledge, skills, and values necessary to excel in the ever-evolving field of pharmacy.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.4s" style={{ color: '#222', textAlign: 'justify' }}>
                                        At SSCOP, we believe in the holistic development of our students. Our state-of-the-art facilities, experienced faculty, and comprehensive curriculum are designed to provide a robust educational foundation. We emphasize not only academic excellence but also the importance of ethical practices, innovation, and community service.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        We are proud of our collaborations with international universities, hospitals, pharmaceutical companies, and research centers, which provide our students with invaluable exposure and opportunities. These partnerships enable our students to gain practical experience and stay abreast of the latest advancements in pharmaceutical sciences.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.8s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Our commitment extends beyond academics. We strive to nurture well-rounded individuals who are prepared to make significant contributions to society. Through various initiatives, including health camps and community outreach programs, we aim to instill a sense of social responsibility and compassion in our students.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.8s" style={{ color: '#222', textAlign: 'justify' }}>
                                        I invite you to join us at Sri Shanmugha College of Pharmacy and be a part of our journey towards creating a brighter and healthier future. Together, we can achieve great heights and make a meaningful impact on the world.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.8s" style={{ color: '#222', textAlign: 'justify' }}>
                                        <br />
                                        Thank you for choosing SSCOP for your educational aspirations.
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

export default Chairman;
