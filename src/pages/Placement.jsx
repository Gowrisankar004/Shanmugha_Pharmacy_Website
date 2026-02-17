import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Placement() {
    return (
        <Layout>
            <PageHeader title="PLACEMENTS" breadcrumbCurrent="Placements" />

            {/* Service Strategy Section start */}
            <div className="service-strategy">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6">
                            <div className="company-quality-img">
                                <figure>
                                    <img src="/images/shanmuga/trust-2.jpg" alt="" />
                                </figure>
                            </div>
                            {/* Service Strategy Image End */}
                        </div>

                        <div className="col-lg-6">
                            {/* Service Strategy Content start */}
                            <div className="service-strategy-content">
                                {/* Service Strategy Title start */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">PLACEMENT CELL</h2>
                                </div>
                                {/* Service Strategy Title start */}

                                {/* Service Strategy Body start */}
                                <div className="service-strategy-body">
                                    <p className="wow fadeInUp" data-wow-delay="0.25s" style={{ marginBottom: '10px', color: '#020101', textAlign: 'justify' }}>
                                        The Institute has a Placement Cell headed by a staff member holding the rank of a
                                        Professor. The Cell is involved in securing placements for students passing out
                                        from the institute. The office keeps close association with various industrial
                                        establishments, which conduct pre-placement presentation, campus interviews and
                                        select student representatives from each department to co-ordinate the placement
                                        activities. The Placement Cell provides state of the art infra-structural facilities to
                                        conduct group discussions, tests and interviews. The Placement Cell has a library
                                        and a communication lab to enhance the students’ general aptitude and
                                        communication skills. A large number of companies visit the Institute every year
                                        for Campus recruitment.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s" style={{ marginBottom: '10px', color: '#020101', textAlign: 'justify' }}>
                                        Information regarding the campus recruitment process are displayed to the
                                        students. It helps students to plan their careers by providing information about the
                                        industries which approach the institute. At the beginning of the academic year, a
                                        general-body meeting of final-year students interested in placement activities is
                                        called.
                                    </p>
                                    <p className="wow fadeInUp" data-wow-delay="0.5s" style={{ marginBottom: '10px', color: '#020101', textAlign: 'justify' }}>
                                        The cell also co-ordinates the pre-placement activities of sophomore and junior
                                        students, and motivates aspiring students to pursue Higher studies with facilities
                                        for preparing competitive exams like GPAT, TOEFL, GRE, Exit Exam for D.
                                        Pharm etc.
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

export default Placement;
