// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import FeedbackSidebar from '../components/FeedbackSidebar';

// function ActionTaken() {
//     return (
//         <Layout>
//             <PageHeader title="ACTION TAKEN" />

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
//                                     <h2 style={{ textTransform: 'uppercase' }}>Alumini Action Taken</h2>

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
//                                                                 <td>Alumini 2022-2023</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Alumini/2022-2023.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <h2 style={{ textTransform: 'uppercase' }}>Student Action Taken</h2>

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
//                                                                 <td>Student 2018-2019</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Student/2018-2019.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2</td>
//                                                                 <td>Student 2019-2020</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Student/2019-2020.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3</td>
//                                                                 <td>Student 2020-2021</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Student/2020-2021.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>4</td>
//                                                                 <td>Student 2021-2022</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Student/2021-2022.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>5</td>
//                                                                 <td>Student 2022-2023</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Student/2022-2023.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <h2 style={{ textTransform: 'uppercase' }}>Teachers Action Taken</h2>

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
//                                                                 <td>Teacher 2018-2019</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Teacher/2018-2019.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2</td>
//                                                                 <td>Teacher 2019-2020</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Teacher/2019-2020.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3</td>
//                                                                 <td>Teacher 2020-2021</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Teacher/2020-2021.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>4</td>
//                                                                 <td>Teacher 2021-2022</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Teacher/2021-2022.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>5</td>
//                                                                 <td>Teacher 2022-2023</td>
//                                                                 <td><a href="/pdf/1.4.1/Action-Taken/Teacher/2022-2023.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
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

// export default ActionTaken;



import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FeedbackSidebar from '../components/FeedbackSidebar';

function ActionTaken() {

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
            <PageHeader title="ACTION TAKEN" breadcrumbCurrent="Action Taken" />

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
                                    <h3 style={{ textTransform: 'uppercase' }}>Alumni Action Taken</h3>
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
                                                    <tr>
                                                        <td style={cellStyle}>1.</td>
                                                        <td style={cellStyle}>Alumni 2022-2023</td>
                                                        <td style={cellStyle}>
                                                            <a href="/pdf/1.4.1/Action-Taken/Alumini/2022-2023.pdf"
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

                                    {/* Student Section */}
                                    <h3 style={{ textTransform: 'uppercase' }}>Student Action Taken</h3>
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
                                                    {[
                                                        "2018-2019",
                                                        "2019-2020",
                                                        "2020-2021",
                                                        "2021-2022",
                                                        "2022-2023"
                                                    ].map((year, index) => (
                                                        <tr key={year} style={index % 2 !== 0 ? { backgroundColor: '#f2f2f2' } : {}}>
                                                            <td style={cellStyle}>{index + 1}.</td>
                                                            <td style={cellStyle}>Student {year}</td>
                                                            <td style={cellStyle}>
                                                                <a href={`/pdf/1.4.1/Action-Taken/Student/${year}.pdf`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    style={linkStyle}>
                                                                    View
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                    <br />

                                    {/* Teachers Section */}
                                    <h3 style={{ textTransform: 'uppercase' }}>Teachers Action Taken</h3>
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
                                                    {[
                                                        "2018-2019",
                                                        "2019-2020",
                                                        "2020-2021",
                                                        "2021-2022",
                                                        "2022-2023"
                                                    ].map((year, index) => (
                                                        <tr key={year} style={index % 2 !== 0 ? { backgroundColor: '#f2f2f2' } : {}}>
                                                            <td style={cellStyle}>{index + 1}.</td>
                                                            <td style={cellStyle}>Teacher {year}</td>
                                                            <td style={cellStyle}>
                                                                <a href={`/pdf/1.4.1/Action-Taken/Teacher/${year}.pdf`}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer"
                                                                    style={linkStyle}>
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

export default ActionTaken;