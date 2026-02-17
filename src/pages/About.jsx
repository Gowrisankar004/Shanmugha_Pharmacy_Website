import { useEffect } from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function About() {
    useEffect(() => {
        // Initialize WOW.js
        if (window.WOW) {
            new window.WOW().init();
        }

        // Initialize counter
        if (window.jQuery) {
            window.jQuery('.counter').counterUp({
                delay: 10,
                time: 1000
            });
        }
    }, []);

    return (
        <Layout>
           <PageHeader title="ABOUT US" breadcrumbCurrent="About Us" />

            {/* Page About Us Start */}
            <div className="page-about-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="about-us-image">
                                <div className="about-img-1">
                                    <figure className="image-anime reveal">
                                        <img src="/images/shanmuga/aboutus1.png" alt="" />
                                    </figure>
                                </div>
                                <div className="about-img-2">
                                    <figure className="image-anime reveal">
                                        <img src="/images/shanmuga/aboutus.png" alt="" />
                                    </figure>
                                </div>

                                <div className="experience-counter-item wow fadeInUp">
                                    <div className="experience-counter-content">
                                        <div className="counter-content">
                                            <h3 style={{ color: '#fff', fontSize: '60px', fontWeight: '700' }}>
                                                7+
                                            </h3>
                                            <p>years of experience</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="about-story-content">
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">ABOUT US</h3>
                                    <h2 className="text-anime-style-3 ela">WELCOME TO SRI SHANMUGHA COLLEGE OF PHARMACY</h2>
                                </div>
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Sri Shanmugha College of Pharmacy is a premier institution in the Salem district, renowned for its exceptional educational services. The college has significantly benefited the city of Salem and its surrounding villages, serving people from various walks of life. Our institution boasts a team of highly skilled and intellectually capable faculty members dedicated to student success. The core motto, "I CAN," is embedded in our ethos, empowering each student to achieve self-reliance and excellence.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Our partnerships with numerous international universities, hospitals, prominent pharmaceutical companies, and clinical research centers provide students with unparalleled opportunities and experiences. We are committed to extending our services through health camps for those in need in both rural and urban areas.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Page About Us End */}

            {/* Company Counter Start */}
            <div className="company-counter">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6">
                            <div className="company-counter-item">
                                <div className="counter-content">
                                    <img src="/images/shanmuga/rating.png" style={{ paddingBottom: '10px' }} alt="" />
                                    <h3><span className="counter">7</span>+</h3>
                                    <p>Years Of Academic Excellence</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="company-counter-item">
                                <div className="counter-content">
                                    <img src="/images/shanmuga/reading.png" style={{ paddingBottom: '10px' }} alt="" />
                                    <h3><span className="counter">500</span>+</h3>
                                    <p>Total Students</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="company-counter-item">
                                <div className="counter-content">
                                    <img src="/images/shanmuga/education.png" style={{ paddingBottom: '10px' }} alt="" />
                                    <h3><span className="counter">35</span>+</h3>
                                    <p>Faculties</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-2 col-md-6">
                            <div className="company-counter-item">
                                <div className="counter-content">
                                    <img src="/images/shanmuga/award.png" style={{ paddingBottom: '10px' }} alt="" />
                                    <h3><span className="counter">4</span>+</h3>
                                    <p>Academic Awards</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="company-counter-item">
                                <div className="counter-content">
                                    <img src="/images/shanmuga/school.png" style={{ paddingBottom: '10px' }} alt="" />
                                    <h3><span className="counter">3</span>+</h3>
                                    <p>Group Of Institutions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Company Counter End */}

            {/* Expertise Section Start */}
            <div className="page-single-post" style={{ background: 'var(--secondary-color) url(/images/icon-blockquote.svg) no-repeat 20px 26px' }}>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section-title" style={{ textAlign: 'center' }}>
                                <h3 className="wow fadeInUp">EXPERTISE</h3>
                                <h2 className="text-anime-style-3 ela" style={{ fontSize: '35px' }}>SCOPES OF SRI SHANMUGHA COLLEGE <br /> OF PHARMACY</h2>
                            </div>
                        </div>
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
                                            <p style={{ color: '#222' }}>We are resolute in our commitment to persistently challenge limits and make a significant influence in the field of pharmacy education.The goal is to establish a prestigious pharmacy institution known for its exceptional academic standards, groundbreaking research, and impactful contributions to healthcare via advanced technology.</p>
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
                                            <div className="company-quality-list wow fadeInUp">
                                                <ul>
                                                    <li style={{ color: '#222' }}>Quality Education: Deliver high-quality education and training in pharmaceutical sciences</li>
                                                    <li style={{ color: '#222' }}>Research Innovation: Encourage innovative technology-based research to address healthcare challenges.</li>
                                                    <li style={{ color: '#222' }}>Ethical Standards: Promote ethical values, professionalism and social responsibility among students.</li>
                                                    <li style={{ color: '#222' }}>Collaborative Learning: Collaborate with healthcare institutions and industry for practical learning and research opportunities.</li>
                                                    <li style={{ color: '#222' }}>Excellence In Teaching: Maintain high educational standards through dedicated professionals, and state-of-the-art-facilities.</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* FAQ Item End */}

                                {/* FAQ Item Start */}
                                <div className="accordion-item wow fadeInUp" data-wow-delay="0.5s">
                                    <h2 className="accordion-header" id="headingThree">
                                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                            PROGRAM OUTCOMES
                                        </button>
                                    </h2>
                                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordion">
                                        <div className="accordion-body">
                                            <div className="company-quality-list wow fadeInUp">
                                                <ul>
                                                    <li style={{ color: '#222' }}>Pharmacy Knowledge: Possess knowledge and comprehension of the core and basic knowledge associated with the profession of pharmacy, including biomedical sciences; pharmaceutical sciences; behavioral, social, and administrative pharmacy sciences; and manufacturing practices.</li>
                                                    <li style={{ color: '#222' }}>Planning Abilities: Demonstrate effective planning abilities including time management, resource management, delegation skills and organizational skills. Develop and implement plans and organize work to meet deadlines.</li>
                                                    <li style={{ color: '#222' }}>Problem analysis: Utilize the principles of scientific enquiry, thinking analytically, clearly and critically, while solving problems and making decisions during daily practice. Find, analyze, evaluate and apply information systematically and shall make defensible decisions.</li>
                                                    <li style={{ color: '#222' }}>Modern tool usage: Learn, select, and apply appropriate methods and procedures, resources, and modern pharmacy-related computing tools with an understanding of the limitations.</li>
                                                </ul>
                                            </div>
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
            {/* Expertise Section End */}

            {/* Photo Gallery Section Start */}
            <div className="our-gallery-page" style={{ backgroundColor: '#fff' }}>
                <div className="container">
                    <div className="section-title">
                        <h2 className="text-anime-style-3" style={{ fontSize: '31px' }}>Group Of Institutions</h2>
                    </div>
                    <div className="row gallery-items">
                        <div className="col-lg-4 col-md-6">
                            <div className="logo-item">
                                <img src="/images/shanmuga/group/1.png" alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="logo-item">
                                <img src="/images/shanmuga/group/2.png" style={{ paddingBottom: '4%' }} alt="" />
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <div className="logo-item">
                                <img src="/images/shanmuga/group/3.webp" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Photo Gallery Section End */}
        </Layout>
    );
}

export default About;
