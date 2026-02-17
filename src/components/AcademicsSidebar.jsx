import React from 'react';
import { Link } from 'react-router-dom';

function AcademicsSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>ACADEMICS</h3>
                <ul>
                    <li><Link to="/dpharm">PROGRAMMES OFFERED</Link></li>
                    <li><Link to="/dop">FACULTIES</Link></li>
                    <li><Link to="/curriculum-development">CURRICULUM DEVELOPMENT COUNCIL</Link></li>
                    <li><Link to="#">CO-CURRICULAR ACTIVITIES</Link></li>
                    <li><a href="/pdf/Academic-calendar.pdf" target="_blank" rel="noopener noreferrer">ACADEMIC CALENDAR</a></li>
                </ul>
            </div>
        </div>
    );
}

export default AcademicsSidebar;
