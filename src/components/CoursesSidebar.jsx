import React from 'react';
import { Link } from 'react-router-dom';

function CoursesSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>COURSES OFFERED</h3>
                <ul>
                    <li><Link to="/dpharm">DIPLOMA IN PHARMACY</Link></li>
                    <li><Link to="/bpharm">BACHELOR OF PHARMACY</Link></li>
                    <li><Link to="/doctorpharm">DOCTOR OF PHARMACY</Link></li>
                    <li><Link to="/mpharm">MASTER OF PHARMACY</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default CoursesSidebar;
