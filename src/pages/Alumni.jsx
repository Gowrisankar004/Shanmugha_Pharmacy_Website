import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Alumni() {
    return (
        <Layout>
            <PageHeader title="ALUMNI ASSOCIATION" breadcrumbCurrent="Alumni Association" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            {/* Service Sidebar Start */}
                            <div className="service-sidebar">
                                {/* Service Catagery List Start */}
                                <div className="service-catagery-list wow fadeInUp">
                                    <h3>ABOUT</h3>
                                    <ul>
                                        <li><a href="#">OFFICE BEARERS</a></li>
                                        <li><a href="#">CONTRIBUTIONS</a></li>
                                        <li><a href="#">MEMBER REGISTRATION </a></li>
                                        <li><a href="#">GALLERY</a></li>
                                    </ul>
                                </div>
                                {/* Service Catagery List End */}
                            </div>
                            {/* Service Sidebar End */}
                        </div>

                        <div className="col-lg-9">
                            {/* Service Single Content Start */}

                            <div className="about-story-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>ALUMNI ASSOCIATION</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The Sri Shanmugha College of Pharmacy Alumni Association Salem serves as a vital bridge between the institution and its former students, fostering lifelong relationships and professional connections that continue long after graduation. With the motto "Stay Connected, Grow Together," the association is committed to cultivating a vibrant, engaged, and supportive alumni community that contributes meaningfully to the growth of both its members and the college.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Established with the vision of strengthening ties among alumni, faculty, and current students, the association functions as a platform for mutual development, knowledge sharing, and career advancement. It aims to promote a spirit of belonging, pride, and continuous engagement with the alma mater. By organizing reunions, guest lectures, mentorship programs, and professional networking events, the association empowers alumni to give back through their expertise, time, and resources.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The association also plays a pivotal role in guiding students through industry exposure, internships, and job placement opportunities, thanks to its strong network of professionals across the pharmaceutical and healthcare sectors. It actively encourages alumni to participate in institutional development through curriculum input, industrial collaborations, and philanthropic contributions.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Whether it is celebrating achievements, supporting new graduates, or contributing to the social and academic mission of the college, the Sri Shanmugha College of Pharmacy Alumni Association Salem continues to grow as a dynamic force of collaboration and goodwill. With a shared sense of purpose and belonging, our alumni community stands as a proud testament to the values and vision of Sri Shanmugha College of Pharmacy.
                                    </p>
                                </div>
                            </div>

                            <div className="page-single-post" style={{ paddingTop: '30px' }}>
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-6">
                                            <figure>
                                                <img src="/images/shanmuga/trust.jpg" alt="" />
                                            </figure>
                                        </div>
                                        <div className="col-lg-6">
                                            {/* FAQ Accordion Start */}
                                            <div className="faq-accordion" id="accordion">
                                                {/* FAQ Item Start */}
                                                <div className="accordion-item wow fadeInUp">
                                                    <h2 className="accordion-header" id="headingOne">
                                                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                            VISION
                                                        </button>
                                                    </h2>
                                                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            <p style={{ color: '#222' }}>To build a strong and engaged alumni community that actively contributes to the professional, academic, and social growth of its members and supports the continuous development of Sri Shanmugha College of Pharmacy. </p>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* FAQ Item End */}

                                                {/* FAQ Item Start */}
                                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                                    <h2 className="accordion-header" id="headingTwo">
                                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                                            MISSION
                                                        </button>
                                                    </h2>
                                                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                                        <div className="accordion-body">
                                                            <p style={{ color: '#222' }}>&#9679;&nbsp;To foster lifelong relationships between the college and its alumni through communication, collaboration, and active engagement.</p>
                                                            <p style={{ color: '#222' }}>&#9679;&nbsp;To support the personal and professional growth of alumni through networking, mentorship, and knowledge-sharing opportunities. </p>
                                                            <p style={{ color: '#222' }}>&#9679;&nbsp;To promote alumni involvement in the academic and institutional advancement of the college. </p>
                                                            <p style={{ color: '#222' }}>&#9679;&nbsp;To create a platform for alumni to contribute to student development through career guidance, internships, and placement support. </p>
                                                            <p style={{ color: '#222' }}>&#9679;&nbsp;To recognize and celebrate the achievements of alumni and encourage a spirit of pride and belonging. </p>
                                                            <p style={{ color: '#222' }}>&#9679;&nbsp;To facilitate philanthropic initiatives that benefit both alumni and the institution.</p>
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
                </div>
            </div>
            {/* Single Service Page End */}
        </Layout>
    );
}

export default Alumni;
