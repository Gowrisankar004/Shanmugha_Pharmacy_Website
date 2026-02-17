import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CoursesSidebar from '../components/CoursesSidebar';

function MPharm() {
    return (
        <Layout>
            <PageHeader title="M.Pharm" breadcrumbCurrent="M.Pharm" />

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
                                    <img src="/images/shanmuga/course/master.jpg" alt="Master of Pharmacy" />
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>M.Pharm (Master of Pharmacy)</h2>
                                </div>
                                {/* Section Title End */}

                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>Course Details:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Duration: 2 Years
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Eligibility: Candidates must have completed a B.Pharmacy (Bachelor of Pharmacy) degree with a minimum aggregate of 50% marks from a recognized institution.
                                    </p>

                                    {/* FAQ Accordion Start */}
                                    <div className="faq-accordion" id="accordion" style={{ marginLeft: '0px' }}>
                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ textTransform: 'uppercase', color: '#222' }}>
                                                    Pharmaceutics
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    <h3 style={{ textTransform: 'uppercase' }}>About the Department :</h3>
                                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                                        The Pharmaceutics department focuses on the formulation, development, and evaluation of pharmaceutical dosage forms. The program provides advanced knowledge and practical skills in drug delivery systems, pharmacokinetics, and biopharmaceutics. The department is equipped with modern laboratories and research facilities, enabling students to engage in innovative research projects.
                                                    </p>
                                                    <h3 style={{ textTransform: 'uppercase' }}>Career Opportunities :</h3>
                                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                                        <li style={{ color: '#222' }}>Formulation Scientist: Developing and testing new pharmaceutical formulations.</li>
                                                        <li style={{ color: '#222' }}>Research and Development Manager: Leading R&D projects in pharmaceutical companies.</li>
                                                        <li style={{ color: '#222' }}>Quality Control/Quality Assurance Manager: Ensuring the quality and compliance of pharmaceutical products.</li>
                                                        <li style={{ color: '#222' }}>Production Manager: Overseeing the manufacturing processes in pharmaceutical production units.</li>
                                                        <li style={{ color: '#222' }}>Regulatory Affairs Specialist: Managing the regulatory approval process for new drug products.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}

                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ textTransform: 'uppercase', color: '#222' }}>
                                                    Pharmaceutical Chemistry
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    <h3 style={{ textTransform: 'uppercase' }}>About the Department :</h3>
                                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                                        The Pharmaceutical Chemistry department emphasizes the study of chemical aspects of drug design and development. The program covers medicinal chemistry, analytical techniques, and organic synthesis. The department provides access to advanced instrumentation and laboratory facilities for research and practical training.
                                                    </p>

                                                    <h3 style={{ textTransform: 'uppercase' }}>Career Opportunities :</h3>
                                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                                        <li style={{ color: '#222' }}>Medicinal Chemist: Designing and synthesizing new drug molecules.</li>
                                                        <li style={{ color: '#222' }}>Analytical Chemist: Performing qualitative and quantitative analysis of pharmaceuticals.</li>
                                                        <li style={{ color: '#222' }}>Research Scientist: Conducting research in pharmaceutical and biotechnology companies.</li>
                                                        <li style={{ color: '#222' }}>Regulatory Affairs Specialist: Ensuring compliance with regulations for drug approval.</li>
                                                        <li style={{ color: '#222' }}>Quality Control/Quality Assurance Analyst: Testing and validating pharmaceutical products.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}

                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                            <h2 className="accordion-header" id="headingThree">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{ textTransform: 'uppercase', color: '#222' }}>
                                                    Department Facilities
                                                </button>
                                            </h2>
                                            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                                        <li style={{ color: '#222' }}>State-of-the-art laboratories</li>
                                                        <li style={{ color: '#222' }}>Well-stocked libraries</li>
                                                        <li style={{ color: '#222' }}>Access to advanced research equipment</li>
                                                        <li style={{ color: '#222' }}>Collaboration with industry and research institutions</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}

                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.75s">
                                            <h2 className="accordion-header" id="headingfour">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="false" aria-controls="collapsefour" style={{ textTransform: 'uppercase', color: '#222' }}>
                                                    Career Prospects
                                                </button>
                                            </h2>
                                            <div id="collapsefour" className="accordion-collapse collapse" aria-labelledby="headingfour" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                                        Graduates of the M.Pharm program are well-equipped for various roles in the pharmaceutical industry, academia, research institutions, and regulatory agencies. They can pursue careers as research scientists, quality control managers, regulatory affairs specialists, and more. The program prepares students for leadership positions, contributing to advancements in pharmaceutical sciences and healthcare.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}

                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp" data-wow-delay="1s">
                                            <h2 className="accordion-header" id="headingfive">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive" style={{ textTransform: 'uppercase', color: '#222' }}>
                                                    Research Opportunities
                                                </button>
                                            </h2>
                                            <div id="collapsefive" className="accordion-collapse collapse" aria-labelledby="headingfive" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                                        Students are encouraged to participate in cutting-edge research projects, attend conferences, and publish their findings in reputed journals. The college's strong network with industry partners and research institutions provides ample opportunities for collaborative research and internships.
                                                    </p>
                                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                                        The M.Pharm program at Sri Shanmugha College of Pharmacy offers comprehensive education and training in pharmaceutical sciences, preparing graduates for successful careers in various sectors of the pharmaceutical industry and healthcare.
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                    </div>
                                    {/* FAQ Accordion End */}
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

export default MPharm;
