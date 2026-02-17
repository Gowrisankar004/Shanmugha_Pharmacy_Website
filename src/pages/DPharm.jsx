import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CoursesSidebar from '../components/CoursesSidebar';

function DPharm() {
    return (
        <Layout>
            <PageHeader title="D.PHARMACY" breadcrumbCurrent="D.Pharm" />

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
                                    <img src="/images/shanmuga/course/diploma.jpg" alt="Diploma in Pharmacy" />
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>D.Pharmacy (Diploma in Pharmacy)</h2>
                                </div>
                                {/* Section Title End */}

                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>Course Details:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Duration: 2 Years
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Eligibility: Candidates must have completed higher secondary education (10+2) with Physics, Chemistry, and Biology/Mathematics as subjects.
                                    </p>

                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>ABOUT THE DEPARTMENT</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The Department of Pharmacy at SSCOP is dedicated to providing high-quality education and training in the field of pharmacy. Our curriculum is designed to equip students with comprehensive knowledge and practical skills required in the pharmaceutical industry. The department is staffed by experienced faculty members who are experts in their respective fields, ensuring that students receive top-notch education and guidance.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The department features modern laboratories, well-stocked libraries, and advanced learning resources to support the academic and professional growth of students. Regular seminars, workshops, and guest lectures are organized to keep students updated with the latest advancements in pharmaceutical sciences.
                                    </p>

                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>Career Opportunities:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Graduates of the D.Pharmacy program have a wide range of career opportunities available to them, including:
                                    </p>
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222' }}>Community Pharmacist: Providing medication and health advice to the public in retail pharmacies.</li>
                                        <li style={{ color: '#222' }}>Hospital Pharmacist: Managing medication distribution and advising healthcare professionals within hospitals.</li>
                                        <li style={{ color: '#222' }}>Pharmaceutical Sales Representative: Marketing and promoting pharmaceutical products to healthcare providers.</li>
                                        <li style={{ color: '#222' }}>Pharmacy Technician: Assisting pharmacists in dispensing medications and managing pharmacy operations.</li>
                                        <li style={{ color: '#222' }}>Quality Control Analyst: Ensuring the quality and safety of pharmaceutical products in manufacturing units.</li>
                                        <li style={{ color: '#222' }}>Regulatory Affairs Associate: Handling the regulatory requirements for drug approval and compliance.</li>
                                        <li style={{ color: '#222' }}>Research Assistant: Supporting research projects in pharmaceutical companies and academic institutions.</li>
                                    </ul>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The D.Pharmacy qualification opens doors to various roles in the healthcare sector, ensuring a fulfilling career path in pharmacy.
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

export default DPharm;
