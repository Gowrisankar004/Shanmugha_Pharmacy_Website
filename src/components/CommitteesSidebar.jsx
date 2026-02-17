import React from 'react';
import { Link } from 'react-router-dom';

function CommitteesSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>COMMITTEES</h3>
                <ul>
                    <li><Link to="/antidiscrimination">ANTI DISCRIMINATION CELL</Link></li>
                    <li><Link to="/antiragging">ANTI RAGGING COMMITTEE</Link></li>
                    <li><Link to="/gender">GENDER SENSITIZATION CELL</Link></li>
                    <li><Link to="/sc-st">SC / ST COMMITTEE</Link></li>
                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdw5xH5lPLTwwxWSLPqJ1LXpBMYNUZwlw096v-rSNylw4LKjg/viewform" target="_blank" rel="noopener noreferrer">GRIEVANCE FORM</a></li>
                    <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSceY--vbOe-ehAY7YLmv7O1l9-LGE1ayo0MEfKwPAx1dhj5Uw/viewform?usp=sf_link" target="_blank" rel="noopener noreferrer">INTERNAL COMPLAINT FORM</a></li>
                    <li><Link to="/internal_committee">INTERNAL COMPLAINTS COMMITTEE</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default CommitteesSidebar;
