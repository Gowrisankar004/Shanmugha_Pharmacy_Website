import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CoursesSidebar from '../components/CoursesSidebar';

function PharmD() {
    return (
        <Layout>
            <PageHeader title="Pharm.D" breadcrumbCurrent="Pharm.D" />

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
                                    <img src="/images/shanmuga/course/doctor1.jpg" alt="Doctor of Pharmacy" />
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>Pharm.D (Doctor of Pharmacy)</h2>
                                </div>
                                {/* Section Title End */}

                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>Course Details:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Duration: 6 Years (including 5 years of academic study and 1 year of internship/residency)
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Eligibility: Candidates must have completed higher secondary education (10+2) with Physics, Chemistry, and Biology/Mathematics as subjects. Alternatively, candidates with a D.Pharmacy (Diploma in Pharmacy) qualification are also eligible.
                                    </p>

                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>ABOUT THE DEPARTMENT</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The Department of Pharmacy at SSCOP offers the Pharm.D program with a focus on clinical and community pharmacy. This program is designed to prepare students for a career in patient care, emphasizing the development of clinical skills and comprehensive pharmaceutical knowledge. The curriculum integrates theoretical instruction with practical training, ensuring students gain a holistic understanding of drug therapy management, patient care, and healthcare systems.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The department is equipped with advanced laboratories, a well-stocked library, and modern clinical facilities to support the academic and professional growth of students. Experienced faculty members guide students through rigorous coursework and hands-on clinical practice, preparing them for diverse roles in the healthcare sector. Regular seminars, workshops, and collaborations with healthcare institutions enrich the learning experience, providing exposure to real-world clinical settings.
                                    </p>

                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>Career Opportunities:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Graduates of the Pharm.D program have a wide range of career opportunities, including:
                                    </p>
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222' }}>Clinical Pharmacist: Working in hospitals and healthcare settings to manage patient medication therapy, conduct clinical rounds, and collaborate with healthcare professionals to optimize patient outcomes.</li>
                                        <li style={{ color: '#222' }}>Community Pharmacist: Providing medication counseling, health screenings, and wellness programs in community pharmacies.</li>
                                        <li style={{ color: '#222' }}>Hospital Pharmacy Director: Overseeing pharmacy operations in hospital settings, ensuring the safe and effective use of medications.</li>
                                        <li style={{ color: '#222' }}>Pharmaceutical Industry Professional: Engaging in drug research and development, regulatory affairs, pharmacovigilance, and quality assurance.</li>
                                        <li style={{ color: '#222' }}>Academician/Professor: Teaching and conducting research in academic institutions, contributing to the advancement of pharmaceutical education.</li>
                                        <li style={{ color: '#222' }}>Drug Safety Officer: Monitoring and evaluating the safety and efficacy of pharmaceutical products, managing adverse event reports.</li>
                                        <li style={{ color: '#222' }}>Healthcare Consultant: Advising healthcare organizations on medication management, healthcare policies, and clinical practices.</li>
                                        <li style={{ color: '#222' }}>Regulatory Affairs Specialist: Ensuring compliance with regulatory requirements for drug approval, marketing, and post-marketing surveillance.</li>
                                    </ul>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The Pharm.D degree equips graduates with the expertise to provide high-quality patient care, contribute to healthcare research, and take on leadership roles in various sectors of the pharmaceutical and healthcare industries.
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

export default PharmD;
