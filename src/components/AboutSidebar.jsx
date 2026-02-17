import React from 'react';
import { Link } from 'react-router-dom';

function AboutSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>ABOUT US</h3>
                <ul>
                    <li><Link to="/about">ABOUT SSCOP</Link></li>
                    <li><Link to="/about-trust">ABOUT TRUST</Link></li>
                    <li><a href="/pdf/Accreditation.pdf" target="_blank" rel="noopener noreferrer">ACCREDITATION & RECOGNITION</a></li>
                    <li><Link to="/governing-council">GOVERNING COUNCIL</Link></li>
                    <li><Link to="/strategicplan">STRATEGIC PLAN</Link></li>
                    <li><a href="/pdf/Organogram.pdf" target="_blank" rel="noopener noreferrer">ORGANOGRAM</a></li>
                    <li><a href="/pdf/Code-Of-conduct.pdf" target="_blank" rel="noopener noreferrer">CODE OF CONDUCT</a></li>
                </ul>
            </div>
        </div>
    );
}

export default AboutSidebar;
