import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import AcademicsSidebar from '../components/AcademicsSidebar';

function CurriculumDevelopmentCouncil() {
    return (
        <Layout>
            <PageHeader title="CURRICULUM DEVELOPMENT COUNCIL" breadcrumbCurrent="Curriculum Development Council" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <AcademicsSidebar />
                        </div>

                        <div className="col-lg-9">
                            {/* Service Single Content Start */}
                            <div className="about-story-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>CURRICULUM DEVELOPMENT COUNCIL</h2>
                                </div>
                                {/* Section Title End */}

                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The Curriculum Development Council (CDC) of Sri Shanmugha College of Pharmacy plays a significant role in contributing towards the inclusive educational excellence of the college. The contribution of CDC is prominent in preparing students for their future careers. The CDC ensuring that the curriculum given by the affiliating university is delivered to the students in highest standards, thus it ensures a pharmacy education that is effective and relevant to the needs of the students
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Curriculum Development Council is focusing on the implementation of the curriculum, suggesting and approving the add-on & value added courses offered, approving the attainment levels of Programme Outcomes and Course Outcomes, suggesting internships for students and giving guidance to the Governing Council on the academic matters of the college. The CDC role is significant in the feedback mechanism adopted in the college. It is guiding the IQAC in framing the questionnaire for various stakeholders and analysis the collected feedback. The CDC evaluates and approves the proposed action taken on the suggestions received from the stakeholders.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The CDC of SSCOP functioning as a catalyst in the continuous process of design and development of add-on & value added courses that leading to provide an updated and latest technological pharmacy education to the budding future pharmacists.
                                    </p>
                                </div>
                            </div>

                            <div className="service-single-content">
                                {/* Service Entry Content Start */}
                                <div className="service-entry">
                                    <h2 className="text-anime-style-3" style={{ fontSize: '24px' }}>MEMBERS</h2>
                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <div className="table-responsive">
                                                <div style={{ overflowX: 'auto' }}>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>S.NO</th>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>NAME & DESIGNATION</th>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>POSITION IN THE CURRICULUM DEVELOPMENT COUNCIL</th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Dr.P.SURESH KUMAR <br />The Principal & IQAC Chairman</td>
                                                                <td>Chairman</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Dr.C.SENTHIL KUMAR <br />IQAC Coordinator</td>
                                                                <td>Internal Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Dr.S.DHANALAKSHMI <br />Professor and head,<br />Brown’s college of pharmacy</td>
                                                                <td>External Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Dr.G.SARAVANAN <br />Professor,<br />Karpagam University, Coimbatore</td>
                                                                <td>External Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Dr.S.NAVANEETHAKRISHNAN <br />Professor and head,<br />Dr. Kalam college of pharmacy</td>
                                                                <td>External Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>Mrs.S.VANITHA <br />Associate professor,<br />The Erode College Of Pharmacy</td>
                                                                <td>External Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>7</td>
                                                                <td>Dr.S.ANAND KUMAR <br />Professor & Head<br />Department of Pharmacy Practice</td>
                                                                <td>Internal Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>8</td>
                                                                <td>Dr. P.PERUMAL <br />Professor & Head,<br />Department of Pharmaceutical chemistry</td>
                                                                <td>Internal Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>9</td>
                                                                <td>Mrs.N.VINODHINI <br />Associate Professor,<br />Department of pharmaceutics</td>
                                                                <td>Internal Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>10</td>
                                                                <td>Dr. K. GOPALASATHEESKUMAR <br />Associate Professor,<br />Head, Department of pharmacology</td>
                                                                <td>Internal Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>11</td>
                                                                <td>Dr. KK.SENTHILKUMAR <br />Professor<br />Head, Department of pharmaceutical analysis</td>
                                                                <td>Internal Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>12</td>
                                                                <td>Mr. R.ARULSELVAM <br />Placement Officer</td>
                                                                <td>Member</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* Service Entry Content End */}
                            </div>
                            {/* Service Single Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Service Page End */}
        </Layout>
    );
}

export default CurriculumDevelopmentCouncil;
