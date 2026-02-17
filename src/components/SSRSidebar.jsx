import React from 'react';
import { Link } from 'react-router-dom';

function SSRSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>NAAC MENU</h3>
                <ul>
                    <li><Link to="/criteria1">CRITERIA 1</Link></li>
                    <li><Link to="/criteria2">CRITERIA 2</Link></li>
                    <li><Link to="/criteria3">CRITERIA 3</Link></li>
                    <li><Link to="/criteria4">CRITERIA 4</Link></li>
                    <li><Link to="/criteria5">CRITERIA 5</Link></li>
                    <li><Link to="/criteria6">CRITERIA 6</Link></li>
                    <li><Link to="/criteria7">CRITERIA 7</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default SSRSidebar;
