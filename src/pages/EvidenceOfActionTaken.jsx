// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import FeedbackSidebar from '../components/FeedbackSidebar';

// function EvidenceOfActionTaken() {
//     return (
//         <Layout>
//             <PageHeader title="EVIDENCE ACTION TAKEN" />

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
//                                     <h2 style={{ textTransform: 'uppercase', fontSize: '24px' }}>Evidence Action Taken</h2>
//                                     <h2 style={{ textTransform: 'uppercase' }}>Alumini Evidence Of Action</h2>
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
//                                                                 <td>Evidence on action taken report alumini feedback 2022-2023</td>
//                                                                 <td><a href="/pdf/1.4.1/Evidence-action/Alumini/Alumini.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <h2 style={{ textTransform: 'uppercase' }}>Students Evidence Of Action</h2>
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
//                                                                 <td>Evidence on action taken report student feedback 2022-2023</td>
//                                                                 <td><a href="/pdf/1.4.1/Evidence-action/Student/Actionstudents.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />

//                                     <h2 style={{ textTransform: 'uppercase' }}>Teachers Evidence Of Action</h2>
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
//                                                                 <td>Evidence on action taken report teachers feedback 2022-2023</td>
//                                                                 <td><a href="/pdf/1.4.1/Evidence-action/Teacher/Teachers-evidence.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
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

// export default EvidenceOfActionTaken;





import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FeedbackSidebar from '../components/FeedbackSidebar';

function EvidenceOfActionTaken() {
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

    return (
        <Layout>
            <PageHeader title="EVIDENCE ACTION TAKEN" breadcrumbCurrent="Evidence of Action Taken" />

            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <FeedbackSidebar />
                        </div>

                        <div className="col-lg-9">
                            <div className="service-single-content">
                                <div className="service-entry">

                                    {/* Alumni Section */}
                                    <h3 style={{ textTransform: 'uppercase' }}>Alumni Evidence Of Action</h3>
                                    <div className="table-responsive">
                                        <div style={{ overflowX: 'auto' }}>
                                            <table id="customers" align="center" style={tableStyle}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ ...headerStyle, width: '100px' }}>S.No.</th>
                                                        <th style={headerStyle}>Explanation</th>
                                                        <th style={headerStyle}>Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={cellStyle}>1.</td>
                                                        <td style={cellStyle}>Evidence on action taken report alumni feedback 2022-2023</td>
                                                        <td style={cellStyle}>
                                                            <a href="/pdf/1.4.1/Evidence-action/Alumini/Alumini.pdf"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={linkStyle}>
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <br />

                                    {/* Students Section */}
                                    <h3 style={{ textTransform: 'uppercase' }}>Students Evidence Of Action</h3>
                                    <div className="table-responsive">
                                        <div style={{ overflowX: 'auto' }}>
                                            <table id="customers" align="center" style={tableStyle}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ ...headerStyle, width: '100px' }}>S.No.</th>
                                                        <th style={headerStyle}>Explanation</th>
                                                        <th style={headerStyle}>Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={cellStyle}>1.</td>
                                                        <td style={cellStyle}>Evidence on action taken report student feedback 2022-2023</td>
                                                        <td style={cellStyle}>
                                                            <a href="/pdf/1.4.1/Evidence-action/Student/Actionstudents.pdf"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={linkStyle}>
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <br />

                                    {/* Teachers Section */}
                                    <h3 style={{ textTransform: 'uppercase' }}>Teachers Evidence Of Action</h3>
                                    <div className="table-responsive">
                                        <div style={{ overflowX: 'auto' }}>
                                            <table id="customers" align="center" style={tableStyle}>
                                                <thead>
                                                    <tr>
                                                        <th style={{ ...headerStyle, width: '100px' }}>S.No.</th>
                                                        <th style={headerStyle}>Explanation</th>
                                                        <th style={headerStyle}>Link</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td style={cellStyle}>1.</td>
                                                        <td style={cellStyle}>Evidence on action taken report teachers feedback 2022-2023</td>
                                                        <td style={cellStyle}>
                                                            <a href="/pdf/1.4.1/Evidence-action/Teacher/Teachers-evidence.pdf"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                style={linkStyle}>
                                                                View
                                                            </a>
                                                        </td>
                                                    </tr>
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

export default EvidenceOfActionTaken;