import React from 'react';
import { Link } from 'react-router-dom';

function FacultySidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>LIST OF TEACHING STAFF</h3>
                <ul>
                    <li><Link to="/dop">Department of Pharmaceutics</Link></li>
                    <li><Link to="/doc">Department of Pharmaceutical Chemistry</Link></li>
                    <li><Link to="/dopharma">Department of Pharmacology</Link></li>
                    <li><Link to="/pharmacognosy">Department of Pharmacognosy</Link></li>
                    <li><Link to="/pharmacy">Department of Pharmacy Practice</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default FacultySidebar;
