import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function AboutIQAC() {
    return (
        <Layout>
            <PageHeader title="ABOUT IQAC" breadcrumbCurrent="About IQAC" />

            {/* Service Strategy Section start */}
            <div className="service-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="company-quality-img">
                                <figure>
                                    <img src="/images/shanmuga/trust-2.jpg" alt="About IQAC" />
                                </figure>
                            </div>
                            {/* Service Strategy Image End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Service Strategy Content start */}
                            <div className="service-strategy-content">
                                {/* Service Strategy Title start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">ABOUT IQAC </h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">INTERNAL QUALITY ASSURANCE CELL (IQAC)</h2>
                                </div>
                                {/* Service Strategy Title start */}

                                {/* Service Strategy Body start */}
                                <div className="service-strategy-body">
                                    <p className="wow fadeInUp" data-wow-delay="0.25s" style={{ marginBottom: '10px', color: '#020101', textAlign: 'justify' }}>
                                        Internal Quality Assurance Cell (IQAC), an integral part of Higher Educational Institutions (HEI) going for accreditation to ensure quality enhancement and sustenance in all aspects of functioning of the college. On 3rd March, 2023 the IQAC was established in Sri Shanmugha College Pharmacy to achieve and ensure quality pharmacy education. The IQAC dynamically plan and executive strategies with the aim of developing an internal system for consistent and catalytic progression towards higher standards in the academic and administrative performance of the college. The IQAC prioritize institutional functioning in the areas of academic, research and innovation towards quality education on par with international standards in pharmacy education.
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

export default AboutIQAC;
