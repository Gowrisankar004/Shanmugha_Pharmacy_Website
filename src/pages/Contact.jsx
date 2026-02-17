import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Contact() {
    return (
        <Layout>
            <PageHeader title="CONTACT US" breadcrumbCurrent="Contact Us" />

            {/* Page Contact Us Start */}
            <div className="page-contact-us">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            {/* Contact Side Bar Start */}
                            <div className="contact-sidebar">
                                {/* Contact Info Start */}
                                <div className="contact-info wow fadeInUp" data-wow-delay="0.25s">
                                    <div className="contact-info-title">
                                        <h3>GET IN TOUCH WITH US</h3>
                                    </div>
                                    {/* Contact Info Box Start */}
                                    <div className="contact-info-box">
                                        {/* Contact Info Item Start */}
                                        <div className="contact-info-item">
                                            <div className="icon-box">
                                                <i className="fa-solid fa-location-dot"></i>
                                            </div>
                                            <p>SRI SHANMUGHA COLLEGE OF PHARMACY Sankari – Tiruchengode Main Road, Pullipalayam, Morur (Po), Sankari (Tk), Salem (Dt), Tamil Nadu, Pincode - 637 304.</p>
                                        </div>
                                        {/* Contact Info Item End */}

                                        {/* Contact Info Item Start */}
                                        <div className="contact-info-item">
                                            <div className="icon-box">
                                                <i className="fa-solid fa-envelope"></i>
                                            </div>
                                            <p>principal.pharmacy@shanmugha.edu.in</p>
                                        </div>
                                        {/* Contact Info Item End */}

                                        {/* Contact Info Item Start */}
                                        <div className="contact-info-item">
                                            <div className="icon-box">
                                                <i className="fa-solid fa-phone"></i>
                                            </div>
                                            <p>+91 73735 95999</p>
                                        </div>
                                        {/* Contact Info Item End */}
                                    </div>
                                    {/* Contact Info Box End */}
                                </div>
                                {/* Contact Info End */}
                            </div>
                            {/* Contact Side Bar End */}
                        </div>

                        <div className="col-lg-8">
                            {/* Contact Form start */}
                            <div className="contact-us-form">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h3 className="wow fadeInUp">contact us</h3>
                                    <h2 className="text-anime-style-3" data-cursor="-opaque">How can we help you?</h2>
                                </div>
                                {/* Section Title End */}
                                <form id="contactForm" action="#" method="POST" data-toggle="validator" className="wow fadeInUp" data-wow-delay="0.5s">
                                    <div className="row">
                                        <div className="form-group col-md-6">
                                            <label>your name</label>
                                            <input type="text" name="name" className="form-control" id="fullname" required />
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group col-md-6">
                                            <label>your email</label>
                                            <input type="email" name="email" className="form-control" id="email" required />
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group col-md-12" style={{ marginTop: '20px' }}>
                                            <label>phone</label>
                                            <input type="text" name="phone" className="form-control" id="phone" required />
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="form-group col-md-12 mb-4" style={{ marginTop: '20px' }}>
                                            <label>message</label>
                                            <textarea name="msg" className="form-control" id="msg" rows="4" required></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>

                                        <div className="col-lg-12">
                                            <div className="contact-form-btn">
                                                <button type="submit" className="btn-default">send message</button>
                                                <div id="msgSubmit" className="h3 hidden"></div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            {/* Contact Form end */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Page Contact Us End */}

            {/* Google Map starts */}
            <div className="google-map">
                <div className="container">
                    <div className="row section-row">
                        <div className="col-md-12">
                            {/* Section Title Start */}
                            <div className="section-title">
                                <h3 className="wow fadeInUp">golbal present</h3>
                                <h2 className="text-anime-style-3" data-cursor="-opaque">Explore our locations</h2>
                            </div>
                            {/* Section Title End */}
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-lg-12">
                            {/* Google Map Iframe Start */}
                            <div className="google-map-iframe">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3263.9461445545185!2d77.87502317049345!3d11.43473932188324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba9608a339dd051%3A0xfda7a9c695f79617!2sSri%20Shanmugha%20College%20of%20Pharmacy%2C%20Sankari%2C%20Salem!5e1!3m2!1sen!2sin!4v1724217534836!5m2!1sen!2sin"
                                    width="100%"
                                    height="450"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Google Map"
                                ></iframe>
                            </div>
                            {/* Google Map Iframe End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Google Map Ends */}
        </Layout>
    );
}

export default Contact;
