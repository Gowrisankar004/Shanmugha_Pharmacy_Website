import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function StrategicPlan() {
    return (
        <Layout>
            <PageHeader title="STRATEGIC PLAN" breadcrumbCurrent="Strategic Plan" />

            {/* Company Quality Section Start */}
            <div className="company-quality">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <figure style={{ paddingTop: '30px' }}>
                                <img src="/images/shanmuga/strategicplan.jpg" alt="Strategic Plan" />
                            </figure>
                        </div>
                        <div className="col-lg-6">
                            {/* Company Quality Content Start */}
                            <div className="company-quality-content">
                                {/* Company Quality Title Start */}
                                <div className="company-quality-title">
                                    <h2 className="text-anime-style-3" data-cursor="-opaque" style={{ fontSize: '32px', textTransform: 'uppercase' }}>
                                        Strategic Plan for 2024–25 to 2028–29:
                                    </h2>
                                </div>
                                {/* Company Quality Title End */}

                                {/* Company Quality List Start */}
                                <div className="company-quality-list wow fadeInUp" data-wow-delay="0.5s">
                                    <ul>
                                        <li>Achieve NAAC A+ grade during the 1st Cycle of Accreditation by 2025</li>
                                        <li>Ranked among top 100 institutions in NIRF ranking by 2029.</li>
                                        <li>Secure 5 Star ranking in Institution's Innovation Council (IIC).</li>
                                        <li>Rank within top 25 best performing institutions in ARIIA Ranking framework.</li>
                                        <li>Implement New Education Policy 2020.</li>
                                        <li>Introduce two PG programmes from the academic year of 2025 – 26.</li>
                                        <li>Recognized Research Centre status from The Tamil Nadu Dr. M.G.R. Medical University.</li>
                                        <li>Establishing Animal House from the Academic Year of 2025 – 26.</li>
                                        <li>Become member of Confederation of Indian Industry (CII).</li>
                                        <li>Strengthen the Alumni network for the overall development of the institution through their support.</li>
                                        <li>Establish industry institution collaboration with top MNCs for internship, placement, guest lectures, mentoring for project and incubation, consultancy & research and development.</li>
                                        <li>MoU with foreign institutions for student exchange, faculty development, collaborative research and higher studies opportunities for students.</li>
                                    </ul>
                                </div>
                                {/* Company Quality List End */}
                            </div>
                            {/* Company Quality Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Company Quality Section End */}
        </Layout>
    );
}

export default StrategicPlan;
