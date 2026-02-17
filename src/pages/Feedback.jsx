import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FeedbackSidebar from '../components/FeedbackSidebar';

function Feedback() {
    return (
        <Layout>
            <PageHeader title="FEEDBACK" breadcrumbCurrent="Feedback" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FeedbackSidebar />
                        </div>

                        <div className="col-lg-9">
                            <div className="about-story-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>ABOUT FEEDBACK</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Feedback system in colleges serve as a vital information resource on the effective functioning of the college and provide a linkage between students, faculty, employers, alumni and other stakeholders. The feedback system facilitating a more effective and efficient student-centered learning environment in the campus. The feedback mechanism provides a platform for students, faculties, employers, alumni and other stakeholders to express their opinions and concerns. The analysis on the collected feedback can drive improvements in teaching methods, course delivery, overall academic experiences and infrastructure also.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The IQAC of SSCOP preparing and collecting responses on structured feedback questionnaire for various stakeholders viz. students, faculty, employers, alumni and parents. The questionnaire is related to relevance of objectives and outcomes, flexibility of the content, relevance of the content to changing technological and societal needs, teaching-learning procedure, and the use of infrastructural facilities for developing requisite skills, knowledge and attitudes are incorporated in the feedback forms. Duly filled feedback forms are to be forwarded to IQAC for analysis.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The IQAC analyses the feedback forms and make suggestions to the appropriate bodies. The performance of the college fundamentally depends on effective analysis of the received feedback. Feedback is being used to develop and provide infrastructure facilities to the students, smooth conduction of the institution, improve the teaching skills of the faculty, improvement in placements, encouraging students to improve their subject knowledge, etc. The feedback analysis and action taken report placed in Curriculum Development Committee and Governing Council for its formal approval.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Service Page End */}
        </Layout>
    );
}

export default Feedback;
