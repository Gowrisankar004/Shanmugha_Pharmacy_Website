import React from 'react';
import { Link } from 'react-router-dom';

function FacilitiesSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>FACILITIES</h3>
                <ul>
                    <li><Link to="/facilities">SMART CLASSROOM</Link></li>
                    <li><Link to="/internet">INTERNET</Link></li>
                    <li><Link to="/hostel">HOSTELS</Link></li>
                    <li><Link to="/transport">TRANSPORTATION</Link></li>
                    <li><Link to="/waste-management">WASTE MANAGEMENT</Link></li>
                    <li><Link to="/food-court">FOOD COURT</Link></li>
                    <li><Link to="/library">LIBRARY</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default FacilitiesSidebar;
