import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="main-footer">
            <div className="container">
                <div className="row">
                    <div className="col-lg-4 col-md-12">
                        <div className="footer-quick-links">
                            <h2 style={{ color: '#fff' }}>ABOUT US</h2>
                            <div className="footer-content">
                                <p>The esteemed hope of SSCOP is to mould the students into proud citizens of this great nation, laying reputation on honing their skills and concentrating on their physiological and spiritual needs. The college possesses contemporary laboratories providing the best platform for training the students to become a scientist, industrial or community pharmacist.</p>
                            </div>
                            <div className="footer-social-links">
                                <ul>
                                    <li><a href="https://youtube.com/@shanmughalive3140" target="_blank" rel="noreferrer"  ><i className="fa-brands fa-youtube"></i></a></li>
                                    <li><a href="https://www.linkedin.com/company/sri-shanmugha-educational-institutions/" target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin-in"></i></a></li>
                                    <li><a href="https://www.instagram.com/shanmughainstitutions/" target="_blank" rel="noreferrer"><i className="fa-brands fa-instagram"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3">
                        <div className="footer-quick-links">
                            <h2>QUICK LINKS</h2>
                            <ul>
                                <li><Link to="/about">About SSCOP</Link></li>
                                <li><Link to="/chairman">Chairman</Link></li>
                                <li><Link to="/executive-director">Executive Director</Link></li>
                                <li><Link to="/principal">Principal</Link></li>
                                <li><Link to="/viceprincipal">Vice Principal</Link></li>
                                <li><Link to="/facilities">Facilities</Link></li>
                                <li><Link to="/placement">Placements</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-2 col-md-3">
                        <div className="footer-quick-links">
                            <h2></h2><br /><br />
                            <ul>
                                <li><Link to="/about-trust">About Trust</Link></li>
                                <li><Link to="/dpharm">Programmes Offered</Link></li>
                                <li><Link to="/dop">Faculties</Link></li>
                                <li><Link to="/curriculum-development">Co-Curricular Activities</Link></li>
                                <li><Link to="/alumni">Alumni</Link></li>
                                <li><Link to="/gallery">Students Life</Link></li>
                                <li><Link to="/contact">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-lg-4 col-md-4">
                        <div className="footer-contact-details">
                            <h2>CONTACT US</h2>
                            <div className="footer-contact-box">
                                <div className="footer-info-box">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-location-dot"></i>
                                    </div>
                                    <p>SRI SHANMUGHA COLLEGE OF PHARMACY
                                        Sankari – Tiruchengode Main Road, Pullipalayam, Morur (Po), Sankari (Tk),
                                        Salem (Dt), Tamil Nadu, Pincode - 637 304.</p>
                                </div>
                                <div className="footer-info-box">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-phone"></i>
                                    </div>
                                    <p>+91 73735 95999</p>
                                </div>
                                <div className="footer-info-box">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-envelope-open-text"></i>
                                    </div>
                                    <p>principal.pharmacy@shanmugha.edu.in</p>
                                </div>
                                <div className="footer-info-box">
                                    <div className="icon-box">
                                        <i className="fa-solid fa-globe"></i>
                                    </div>
                                    <p>www.shanmugha.edu.in</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright">
                    <div className="row">
                        <div className="col-lg-12">
                            <div className="footer-copyright-text">
                                <p>Copyright © 2025 Sri Shanmugha College Of Pharmacy All Rights Reserved. Designed by <img src="/images/shanmuga/vjm.webp" alt="" /></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
