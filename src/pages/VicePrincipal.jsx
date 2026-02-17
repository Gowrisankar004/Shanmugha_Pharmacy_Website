import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function VicePrincipal() {
    return (
        <Layout>
            <PageHeader title="VICE-PRINCIPAL MESSAGE" breadcrumbCurrent="Vice Principal" />

            {/* Page Single Post Start */}
            <div className="page-single-post" style={{ background: 'var(--secondary-color) url(/images/icon-blockquote.svg) no-repeat 20px 26px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <img src="/images/shanmuga/vp.png" alt="Vice Principal" />
                            <div
                                className="cha-box"
                                style={{
                                    backgroundColor: '#438b3e',
                                    padding: '20px 10px 30px',   // 👈 Increased bottom padding
                                    textAlign: 'center',
                                    color: '#fff'
                                }}
                            >
                                <h4 style={{ color: '#fff', marginBottom: '-10px' }}>Dr. K. K. SenthilKumar, M. Pharm., Ph.D.</h4>
                                <p style={{ marginBottom: '1px' }}>Vice Principal</p>
                                <p> Sri Shanmugha College of Pharmacy</p>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            {/* Post Single Content Start */}
                            <div className="post-content">
                                {/* Post Entry Start */}
                                <div className="post-entry">
                                    <h2 className="text-anime-style-3">VICE-PRINCIPAL MESSAGE</h2>
                                    <p className="wow fadeInUp" data-wow-delay="0.2s" style={{ color: '#222', textAlign: 'justify' }}>
                                        At Sri Shanmugha College of Pharmacy, we are committed to cultivating a learning environment that is both dynamic and nurturing. Our mission is to empower students to realize their full potential, instilling in them the confidence encapsulated in our motto, "I CAN." This spirit drives our commitment to excellence in pharmaceutical education and research.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Our institution is more than just a place of learning; it is a community where students are encouraged to explore, innovate, and contribute to society. We take pride in our partnerships with leading international universities, hospitals, and pharmaceutical companies, which open doors to invaluable experiences and opportunities for our students.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        As Vice Principal, I am honored to work with a team of dedicated faculty members who are not only experts in their fields but also passionate mentors. Together, we strive to equip our students with the knowledge, skills, and ethical grounding necessary to excel in the pharmaceutical industry.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        Our state-of-the-art facilities, including cutting-edge laboratories and research centers, provide an ideal setting for our students to develop into future leaders in science and pharmacy. Through our various initiatives, including health camps and seminars, we extend our services beyond the classroom, benefiting both rural and urban communities.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.6s" style={{ color: '#222', textAlign: 'justify' }}>
                                        At Sri Shanmugha College of Pharmacy, we are not just shaping careers; we are shaping the future of healthcare. I invite you to join us on this journey of excellence and innovation.
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

export default VicePrincipal;
