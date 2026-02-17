// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import SSRSidebar from '../components/SSRSidebar';

// function Criteria4() {
//     return (
//         <Layout>
//             <PageHeader title="CRITERIA 4" breadcrumbCurrent="Criteria 4" />

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
//                                     <h3 style={{ textTransform: 'uppercase' }}>Criterion 4 - Infrastructure and Learning Resources (100)</h3>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator – 4.1 Physical Facilities (30)</p>
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
//                                                                 <td>4.1.1</td>
//                                                                 <td>Availability of adequate infrastructure and physical facilities viz., classrooms, laboratories, ICT infrastructure, facilities for cultural and sports activities, gymnasium, yoga centre etc. in the institution<br />
//                                                                     Write description in a maximum of 500 words</td>
//                                                                 <td><a href="/frontpage/criteria4/4.1.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>4.1.2</td>
//                                                                 <td>Percentage of expenditure, excluding salary for infrastructure augmentation during last five years (INR in Lakhs)<br />
//                                                                     4.1.2.1 Expenditure for infrastructure augmentation, excluding salary year wise during last five years (INR in lakhs)</td>
//                                                                 <td><a href="/frontpage/criteria4/4.1.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator – 4.2 Library as a learning Resource (20)</p>
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
//                                                                 <td>4.2.1</td>
//                                                                 <td>Library automation using Integrated Library Management System (ILMS), subscription to e-resources including provision of links to OER repositories, amount spent on purchase of books, journals and usage of library
//                                                                     <br />
//                                                                     Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria4/4.2.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator - 4.3 IT Infrastructure (30)</p>
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
//                                                                 <td>4.3.1</td>
//                                                                 <td>Institution frequently updates its IT facilities and provides sufficient bandwidth for internet connection
//                                                                     <br />
//                                                                     Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria4/4.3.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>4.3.2</td>
//                                                                 <td>Student – Computer ratio (Data for the latest completed academic year)
//                                                                     <br />
//                                                                     4.3.2.1. Number of computers available for students usage during the latest completed academic year:
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria4/4.3.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator – 4.4 Maintenance of Campus Infrastructure (20)</p>
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
//                                                                 <td>4.4.1</td>
//                                                                 <td>Percentage of expenditure incurred on maintenance of infrastructure (physical and academic support facilities) excluding salary component during the last five years (INR in Lakhs)
//                                                                     <br />
//                                                                     Write description in a maximum of 500 words
//                                                                     <br />
//                                                                     4.4.1.1. Expenditure incurred on maintenance of infrastructure (physical facilities and academic support facilities) excluding salary component year wise during the last five years (INR in lakhs)
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria4/4.4.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
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

// export default Criteria4;


import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SSRSidebar from '../components/SSRSidebar';

function Criteria4() {
    return (
        <Layout>
            <PageHeader title="CRITERIA 4" breadcrumbCurrent="Criteria 4" />

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
                                        Criterion 4 – Infrastructure and Learning Resources (100)
                                    </h3>

                                    {/* 4.1 */}
                                    <Section
                                        title="Key Indicator – 4.1 Physical Facilities (30)"
                                        data={[
                                            {
                                                metric: "4.1.1",
                                                explanation:
                                                    "Availability of adequate infrastructure and physical facilities such as classrooms, laboratories, ICT infrastructure, cultural and sports facilities, gymnasium, yoga centre etc.",
                                                link: "/frontpage/criteria4/4.1.1.pdf"
                                            },
                                            {
                                                metric: "4.1.2",
                                                explanation:
                                                    "Percentage of expenditure (excluding salary) for infrastructure augmentation during last five years.",
                                                link: "/frontpage/criteria4/4.1.2.pdf"
                                            }
                                        ]}
                                    />

                                    {/* 4.2 */}
                                    <Section
                                        title="Key Indicator – 4.2 Library as a Learning Resource (20)"
                                        data={[
                                            {
                                                metric: "4.2.1",
                                                explanation:
                                                    "Library automation using ILMS, subscription to e-resources, purchase of books and journals, and library usage.",
                                                link: "/frontpage/criteria4/4.2.1.pdf"
                                            }
                                        ]}
                                    />

                                    {/* 4.3 */}
                                    <Section
                                        title="Key Indicator – 4.3 IT Infrastructure (30)"
                                        data={[
                                            {
                                                metric: "4.3.1",
                                                explanation:
                                                    "Institution frequently updates IT facilities and provides sufficient bandwidth for internet connection.",
                                                link: "/frontpage/criteria4/4.3.1.pdf"
                                            },
                                            {
                                                metric: "4.3.2",
                                                explanation:
                                                    "Student – Computer ratio (Latest completed academic year).",
                                                link: "/frontpage/criteria4/4.3.2.pdf"
                                            }
                                        ]}
                                    />

                                    {/* 4.4 */}
                                    <Section
                                        title="Key Indicator – 4.4 Maintenance of Campus Infrastructure (20)"
                                        data={[
                                            {
                                                metric: "4.4.1",
                                                explanation:
                                                    "Percentage of expenditure incurred on maintenance of infrastructure (excluding salary) during last five years.",
                                                link: "/frontpage/criteria4/4.4.1.pdf"
                                            }
                                        ]}
                                    />

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Layout>
    );
}

/* =================== REUSABLE SECTION =================== */

function Section({ title, data }) {
    return (
        <>
            <br />
            <p style={{ color: '#222', fontWeight: '500' }}>{title}</p>

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
        </>
    );
}

/* =================== TABLE STYLES =================== */

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

export default Criteria4;