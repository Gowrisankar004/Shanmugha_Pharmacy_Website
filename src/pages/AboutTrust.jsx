import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function AboutTrust() {
    return (
        <Layout>
            <PageHeader title="ABOUT TRUST" breadcrumbCurrent="ABOUT TRUST" />

            {/* Service Strategy Section start */}
            <div className="service-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="company-quality-img">
                                <figure>
                                    <img src="/images/shanmuga/trust-2.jpg" alt="Trust" />
                                </figure>
                            </div>
                            {/* Service Strategy Image End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Service Strategy Content start */}
                            <div className="service-strategy-content">
                                {/* Service Strategy Title start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">ABOUT TRUST</h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">Sri Shanmugha Educational Charitable Trust</h2>
                                </div>
                                {/* Service Strategy Title start */}

                                {/* Service Strategy Body start */}
                                <div className="service-strategy-body">
                                    <p className="wow fadeInUp" data-wow-delay="0.25s" style={{ marginBottom: '10px', color: '#020101', textAlign: 'justify' }}>
                                        The Sri Shanmugha Educational Charitable Trust is driven by a shared purpose: to make a better world through education. Founded with a vision to accelerate the educational and industrial development of the area, the Trust has become a cornerstone of community growth and innovation.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s" style={{ marginBottom: '10px', color: '#020101', textAlign: 'justify' }}>
                                        Our graduates, equipped with ingenuity and drive, have gone on to excel in various fields and fundamental technologies. Through our commitment to teaching and research, we continue to pursue our mission of service and providing free education to underprivileged and rural areas of Tamil Nadu and beyond.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s" style={{ marginBottom: '10px', color: '#020101', textAlign: 'justify' }}>
                                        At Sri Shanmugha, we pride ourselves on being inclusive and welcoming to individuals regardless of their background. Our dedication to education as a transformative tool ensures that we remain at the forefront of creating opportunities and empowering lives, fostering a brighter future for all.
                                    </p>
                                </div>
                                {/* Service Strategy Body End */}
                            </div>
                            {/* Service Strategy Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Service Strategy Section End */}
        </Layout>
    );
}

export default AboutTrust;
