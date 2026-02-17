// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import SSRSidebar from '../components/SSRSidebar';

// function Criteria1() {
//     return (
//         <Layout>
//             <PageHeader title="CRITERIA 1" breadcrumbCurrent="Criteria 1" />

//             {/* Single Service Page Start */}
//             <div className="page-service-single">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-3">
//                             <SSRSidebar />
//                         </div>

//                         <div className="col-lg-9">
//                             {/* Service Single Content Start */}
//                             <div className="service-single-content">
//                                 {/* Service Entry Content Start */}
//                                 <div className="service-entry">
//                                     <h3 style={{ textTransform: 'uppercase' }}>Criteria 1 – Curricular Aspects</h3>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator – 1.1 Curricular Planning and Implementation (20)</p>
//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table id="customers" align="center">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <th style={{ width: '100px' }}>Metric No</th>
//                                                                 <th>Explanation</th>
//                                                                 <th>Link</th>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td>1.1</td>
//                                                                 <td>The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment</td>
//                                                                 <td><a href="/frontpage/criteria1/1.1.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 1.2 Academic Flexibility (30)</p>
//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table id="customers" align="center">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <th style={{ width: '100px' }}>Metric No</th>
//                                                                 <th>Explanation</th>
//                                                                 <th>Link</th>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td>1.2.1</td>
//                                                                 <td>Number of Add on /Certificate/Value added programs offered and online MOOC programs like SWAYAM, NPTEL etc. where the students of the institution have benefitted during the last five years</td>
//                                                                 <td><a href="/frontpage/criteria1/1.2.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td rowSpan="2">1.2.2</td>
//                                                                 <td>Percentage of students enrolled in Certificate/ Add-on/Value added programs and also completed online MOOC programs like SWAYAM, NPTEL etc.as against the total number of students during the last five year
//                                                                     <br /><br />
//                                                                     Number of students enrolled in subject related Certificate/ Add-on/Value added programs and also completed online MOOC programs like SWAYAM, NPTEL etc. year wise during last five years
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria1/1.2.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 1.3 Curriculum Enrichment (30)</p>
//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table id="customers" align="center">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <th style={{ width: '100px' }}>Metric No</th>
//                                                                 <th>Explanation</th>
//                                                                 <th>Link</th>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td>1.3.1</td>
//                                                                 <td>Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability in transacting the Curriculum. Write description in a maximum of 500 words</td>
//                                                                 <td><a href="/frontpage/criteria1/1.3.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td rowSpan="2">1.3.2</td>
//                                                                 <td>Percentage of students undertaking project work/field work/ internships (Data for the latest completed academic year)
//                                                                     <br /><br />
//                                                                     1.3.2.1. Number of students undertaking project work/field work / internships:
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria1/1.3.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 1.4 Feedback System (20)</p>
//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table id="customers" align="center">
//                                                         <tbody>
//                                                             <tr>
//                                                                 <th style={{ width: '100px' }}>Metric No</th>
//                                                                 <th>Explanation</th>
//                                                                 <th>Link</th>
//                                                             </tr>

//                                                             <tr>
//                                                                 <td>1.4.1</td>
//                                                                 <td>Institution obtains feedback on the academic performance and ambience of the institution from various stakeholders, such as Students, Teachers, Employers, Alumni etc. and action taken report on the feedback is made available on institutional website</td>
//                                                                 <td><a href="/frontpage/criteria1/1.4.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
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

// export default Criteria1;


import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SSRSidebar from '../components/SSRSidebar';

function Criteria1() {
    return (
        <Layout>
            <PageHeader title="CRITERIA 1" breadcrumbCurrent="Criteria 1" />

            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <SSRSidebar />
                        </div>

                        <div className="col-lg-9">
                            <div className="service-single-content">
                                <div className="service-entry">

                                    <h3 style={{ textTransform: 'uppercase' }}>
                                        Criteria 1 – Curricular Aspects
                                    </h3>

                                    {/* ================= 1.1 ================= */}
                                    <br />
                                    <p style={{ color: '#222' }}>
                                        Key Indicator – 1.1 Curricular Planning and Implementation (20)
                                    </p>

                                    {renderTable([
                                        {
                                            metric: "1.1",
                                            explanation:
                                                "The Institution ensures effective curriculum planning and delivery through a well-planned and documented process including Academic calendar and conduct of continuous internal Assessment",
                                            link: "/frontpage/criteria1/1.1.1.pdf"
                                        }
                                    ])}

                                    {/* ================= 1.2 ================= */}
                                    <br />
                                    <p style={{ color: '#222' }}>
                                        Key Indicator – 1.2 Academic Flexibility (30)
                                    </p>

                                    {renderTable([
                                        {
                                            metric: "1.2.1",
                                            explanation:
                                                "Number of Add on /Certificate/Value added programs offered and online MOOC programs like SWAYAM, NPTEL etc. where the students have benefitted during the last five years",
                                            link: "/frontpage/criteria1/1.2.1.pdf"
                                        },
                                        {
                                            metric: "1.2.2",
                                            explanation:
                                                "Percentage of students enrolled in Certificate/Add-on/Value added programs and completed MOOC programs like SWAYAM, NPTEL etc. during last five years.",
                                            link: "/frontpage/criteria1/1.2.2.pdf"
                                        }
                                    ])}

                                    {/* ================= 1.3 ================= */}
                                    <br />
                                    <p style={{ color: '#222' }}>
                                        Key Indicator – 1.3 Curriculum Enrichment (30)
                                    </p>

                                    {renderTable([
                                        {
                                            metric: "1.3.1",
                                            explanation:
                                                "Institution integrates crosscutting issues relevant to Professional Ethics, Gender, Human Values, Environment and Sustainability.",
                                            link: "/frontpage/criteria1/1.3.1.pdf"
                                        },
                                        {
                                            metric: "1.3.2",
                                            explanation:
                                                "Percentage of students undertaking project work/field work/internships.",
                                            link: "/frontpage/criteria1/1.3.2.pdf"
                                        }
                                    ])}

                                    {/* ================= 1.4 ================= */}
                                    <br />
                                    <p style={{ color: '#222' }}>
                                        Key Indicator – 1.4 Feedback System (20)
                                    </p>

                                    {renderTable([
                                        {
                                            metric: "1.4.1",
                                            explanation:
                                                "Institution obtains feedback from stakeholders and action taken report is made available on website.",
                                            link: "/frontpage/criteria1/1.4.1.pdf"
                                        }
                                    ])}

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

/* =================== REUSABLE TABLE FUNCTION =================== */

function renderTable(data) {
    return (
        <div style={{ overflowX: 'auto', marginBottom: '20px' }}>
            <table
                style={{
                    fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif',
                    borderCollapse: 'collapse',
                    width: '100%'
                }}
            >
                <thead>
                    <tr>
                        <th style={thStyle}>Metric No</th>
                        <th style={thStyle}>Explanation</th>
                        <th style={thStyle}>Link</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr
                            key={index}
                            style={{
                                backgroundColor:
                                    index % 2 === 0 ? '#ffffff' : '#f2f2f2'
                            }}
                        >
                            <td style={tdStyle}>{item.metric}</td>
                            <td style={tdStyle}>{item.explanation}</td>
                            <td style={tdStyle}>
                                <a
                                    href={item.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    style={{
                                        fontWeight: '700',
                                        color: '#121249'
                                    }}
                                >
                                    View
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

/* =================== STYLES =================== */

const thStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    textAlign: 'left',
    backgroundColor: '#04AA6D',
    color: 'white'
};

const tdStyle = {
    border: '1px solid #ddd',
    padding: '12px',
    color: '#222'
};

export default Criteria1;