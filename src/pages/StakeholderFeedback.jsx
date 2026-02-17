// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import FeedbackSidebar from '../components/FeedbackSidebar';

// function StakeholderFeedback() {
//     return (
//         <Layout>
//             <PageHeader title="STAKEHOLDER FEEDBACK FORMS" />

//             {/* Single Service Page Start */}
//             <div className="page-service-single">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <FeedbackSidebar />
//                         </div>

//                         <div className="col-lg-9">
//                             {/* Service Single Content Start */}
//                             <div className="service-single-content">
//                                 {/* Service Entry Content Start */}
//                                 <div className="service-entry">
//                                     <h2 style={{ textTransform: 'uppercase' }}>STAKE HOLDER FEEDBACK FORMS</h2>

//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table id="customers" align="center">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <th style={{ width: '100px' }}>S.No</th>
//                                                                 <th>Explanation</th>
//                                                                 <th>Link</th>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td>1</td>
//                                                                 <td>Student Feedback 2022-2023</td>
//                                                                 <td><a href="/pdf/1.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2</td>
//                                                                 <td>Alumini Feedback 2022-2023</td>
//                                                                 <td><a href="/pdf/1.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3</td>
//                                                                 <td>Employers Feedback 2022-2023</td>
//                                                                 <td><a href="https://docs.google.com/forms/d/e/1FAIpQLScXUgJjEp27Znw8g4isDPAVaYK_dPmuWrsiSX9ByC2fRXbRHQ/viewform" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>4</td>
//                                                                 <td>Teachers Feedback 2022-2023</td>
//                                                                 <td><a href="#" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>

//                                 </div>
//                                 {/* Service Entry Content End */}
//                             </div>
//                             {/* Service Single Content End */}
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* Single Service Page End */}
//         </Layout>
//     );
// }

// export default StakeholderFeedback;


import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FeedbackSidebar from '../components/FeedbackSidebar';

function StakeholderFeedback() {

    const tableStyle = {
        fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif',
        borderCollapse: 'collapse',
        width: '100%'
    };

    const headerStyle = {
        border: '1px solid #ddd',
        padding: '12px',
        textAlign: 'left',
        backgroundColor: '#04AA6D',
        color: 'white'
    };

    const cellStyle = {
        border: '1px solid #ddd',
        padding: '12px',
        color: '#222'
    };

    const linkStyle = {
        fontWeight: '700',
        color: '#121249'
    };

    const feedbackData = [
        {
            title: "Student Feedback 2022-2023",
            link: "/pdf/1.1.pdf"
        },
        {
            title: "Alumni Feedback 2022-2023",
            link: "/pdf/1.1.pdf"
        },
        {
            title: "Employers Feedback 2022-2023",
            link: "https://docs.google.com/forms/d/e/1FAIpQLScXUgJjEp27Znw8g4isDPAVaYK_dPmuWrsiSX9ByC2fRXbRHQ/viewform"
        },
        {
            title: "Teachers Feedback 2022-2023",
            link: "#"
        }
    ];

    return (
        <Layout>
            <PageHeader title="STAKEHOLDER FEEDBACK FORMS" breadcrumbCurrent="Stakeholder Feedback Forms" />

            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FeedbackSidebar />
                        </div>

                        <div className="col-lg-9">
                            <div className="service-single-content">
                                <div className="service-entry">

                                    <h3 style={{ textTransform: 'uppercase' }}>
                                        Stakeholder Feedback Forms
                                    </h3>

                                    <div className="table-responsive">
                                        <div style={{ overflowX: 'auto' }}>
                                            <table align="center" style={tableStyle}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ ...headerStyle, width: '100px' }}>S.No.</th>
                                                        <th style={headerStyle}>Explanation</th>
                                                        <th style={headerStyle}>Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {feedbackData.map((item, index) => (
                                                        <tr
                                                            key={index}
                                                            style={index % 2 !== 0 ? { backgroundColor: '#f2f2f2' } : {}}
                                                        >
                                                            <td style={cellStyle}>{index + 1}.</td>
                                                            <td style={cellStyle}>{item.title}</td>
                                                            <td style={cellStyle}>
                                                                <a
                                                                    href={item.link}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    style={linkStyle}
                                                                >
                                                                    View
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default StakeholderFeedback;