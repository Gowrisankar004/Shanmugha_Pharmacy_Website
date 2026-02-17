import React from 'react';
import { Link } from 'react-router-dom';

function FeedbackSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>FEEDBACK</h3>
                <ul>
                    <li><Link to="/feedback">ABOUT</Link></li>
                    <li><a href="/pdf/feedback-policy.pdf" target="_blank" rel="noopener noreferrer">FEEDBACK POLICY</a></li>
                    <li><Link to="/stakeholder-feedback-forms">STAKEHOLDER FEEDBACK FORMS</Link></li>
                    <li><Link to="/analysis-of-feedback">ANALYSIS OF FEEDBACK</Link></li>
                    <li><Link to="/action-taken">ACTION TAKEN</Link></li>
                    <li><Link to="/evidence-of-action-taken">EVIDENCE OF ACTION TAKEN</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default FeedbackSidebar;
