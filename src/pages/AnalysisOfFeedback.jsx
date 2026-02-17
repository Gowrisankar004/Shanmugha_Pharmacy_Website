import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FeedbackSidebar from '../components/FeedbackSidebar';

function AnalysisOfFeedback() {
    return (
        <Layout>
            <PageHeader title="ANALYSIS OF FEEDBACK" breadcrumbCurrent="Analysis of Feedback" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FeedbackSidebar />
                        </div>

                        <div className="col-lg-9">
                            {/* Service Single Content Start */}
                            <div className="service-single-content">
                                {/* Service Entry Content Start */}
                                <div className="service-entry">
                                    <h2 className="text-anime-style-3" style={{ fontSize: '24px' }}>ANALYSIS OF FEEDBACK</h2>
                                    <p>Content to be updated.</p>
                                </div>
                                {/* Service Entry Content End */}
                            </div>
                            {/* Service Single Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Service Page End */}
        </Layout>
    );
}

export default AnalysisOfFeedback;
