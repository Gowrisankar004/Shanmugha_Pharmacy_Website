import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CoursesSidebar from '../components/CoursesSidebar';

function BPharm() {
    return (
        <Layout>
            <PageHeader title="B.PHARMACY" breadcrumbCurrent="B.Pharm" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <CoursesSidebar />
                        </div>

                        <div className="col-lg-8">
                            <div className="about-story-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <img src="/images/shanmuga/course/bacherlor.jpg" alt="Bachelor of Pharmacy" />
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>B.Pharmacy (Bachelor in Pharmacy)</h2>
                                </div>
                                {/* Section Title End */}

                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>Course Details:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Duration: 4 Years
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Eligibility: Candidates must have completed higher secondary education (10+2) with Physics, Chemistry, and Biology/Mathematics as subjects. Additionally, candidates should have secured a minimum of 50% aggregate marks in the qualifying examination.
                                    </p>

                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>ABOUT THE DEPARTMENT</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The Department of Pharmacy at SSCOP is committed to delivering a comprehensive and advanced education in pharmacy. The B.Pharmacy program is designed to provide students with a strong foundation in pharmaceutical sciences, including pharmacology, medicinal chemistry, pharmaceutics, and pharmacognosy.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The department boasts state-of-the-art laboratories equipped with modern instruments and technology to facilitate hands-on learning and research. Our experienced faculty members, who are experts in their fields, guide students through both theoretical and practical aspects of pharmacy. The department also organizes various seminars, workshops, industry visits, and guest lectures to enhance students' learning experiences and keep them abreast of the latest industry trends.
                                    </p>

                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>Career Opportunities:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Graduates of the B.Pharmacy program have diverse career opportunities in various sectors, including:
                                    </p>
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222' }}>Clinical Pharmacist: Working in hospitals and healthcare settings to manage patient medication therapy and provide clinical services.</li>
                                        <li style={{ color: '#222' }}>Pharmaceutical Research Scientist: Conducting research to develop new drugs and improve existing formulations.</li>
                                        <li style={{ color: '#222' }}>Regulatory Affairs Specialist: Ensuring compliance with regulatory requirements for drug approval and marketing.</li>
                                        <li style={{ color: '#222' }}>Quality Assurance Manager: Overseeing the quality control processes in pharmaceutical manufacturing to ensure product safety and efficacy.</li>
                                        <li style={{ color: '#222' }}>Pharmaceutical Marketing Manager: Promoting pharmaceutical products and managing marketing strategies within the industry.</li>
                                        <li style={{ color: '#222' }}>Academician/Professor: Teaching and conducting research in academic institutions.</li>
                                        <li style={{ color: '#222' }}>Industrial Pharmacist: Working in pharmaceutical manufacturing units in roles such as production, quality control, and product development.</li>
                                        <li style={{ color: '#222' }}>Drug Inspector: Monitoring and regulating the safety and quality of drugs in the market.</li>
                                    </ul>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The B.Pharmacy degree provides a solid foundation for further studies and specialization, leading to advanced roles in pharmacy practice, research, and industry. It prepares graduates for a rewarding career dedicated to improving healthcare and patient outcomes.
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

export default BPharm;
