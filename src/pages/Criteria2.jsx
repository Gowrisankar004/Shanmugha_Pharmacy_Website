// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import SSRSidebar from '../components/SSRSidebar';

// function Criteria2() {
//     return (
//         <Layout>
//             <PageHeader title="CRITERIA 2" breadcrumbCurrent="Criteria 2" />

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
//                                     <h3 style={{ textTransform: 'uppercase' }}>Criteria 2- Teaching- Learning and Evaluation (350)</h3>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 2.1. Student Enrolment and Profile(40)</p>
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
//                                                                 <td>2.1.1</td>
//                                                                 <td>Enrolment percentage<br />
//                                                                     2.1.1.1. Number of students admitted year wise during last five years<br />
//                                                                     2.1.1.2. Number of sanctioned seats year wise during last five years</td>
//                                                                 <td><a href="/frontpage/criteria2/2.1.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2.1.2</td>
//                                                                 <td>Percentage of seats filled against seats reserved for various categories (SC, ST, OBC, etc. as per applicable reservation policy) during the last five years</td>
//                                                                 <td><a href="/frontpage/criteria2/2.1.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 2.2. Student Teacher Ratio (40)</p>
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
//                                                                 <td>2.2.1</td>
//                                                                 <td>Student – Full time Teacher Ratio (Data for the latest completed academic year)</td>
//                                                                 <td><a href="/frontpage/criteria2/2.2.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 2.3. Teaching- Learning Process (40)</p>
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
//                                                                 <td>2.3.1</td>
//                                                                 <td>Student centric methods, such as experiential learning, participative learning and problem solving methodologies are used for enhancing learning experiences using ICT tools
//                                                                     <br />
//                                                                     Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria2/2.3.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 2.4 Teacher Profile and Quality (40)</p>
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
//                                                                 <td>2.4.1</td>
//                                                                 <td>Percentage of full-time teachers against sanctioned posts during the last five years 2.4.1.1 Number of Sanctioned posts / required positions for teaching staff/ full time teachers year wise during the last five years:</td>
//                                                                 <td><a href="/frontpage/criteria2/2.4.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2.4.2</td>
//                                                                 <td>Percentage of full time teachers with NET/SET/SLET/ Ph. D./D.Sc. / D.Litt. during the last five years (consider only highest degree for count) <br />
//                                                                     2.4.2.1. Number of full time teachers with NET/SET/SLET/Ph. D. / D.Sc. / D.Litt. year wise during the last five years
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria2/2.4.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 2.5. Evaluation Process and Reforms (40)</p>
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
//                                                                 <td>2.5.1</td>
//                                                                 <td>Mechanism of internal/ external assessment is transparent and the grievance redressal system is time- bound and efficient
//                                                                     <br />
//                                                                     Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria2/2.5.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 2.6 Student Performance and Learning Outcome (90)</p>
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
//                                                                 <td>2.6.1</td>
//                                                                 <td>Programme Outcomes (POs) and Course Outcomes (COs) for all Programmes offered by the institution are stated and displayed on website and attainment of POs and COs are evaluated
//                                                                     <br />
//                                                                     Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria2/2.6.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2.6.2</td>
//                                                                 <td>Attainment of POs and COs are evaluated.
//                                                                     <br />
//                                                                     Explain with evidence in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria2/2.6.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2.6.3</td>
//                                                                 <td>Pass percentage of Students during last five years
//                                                                     <br />
//                                                                     2.6.3.1. Number of final year students who passed the university examination year wise during the last five years
//                                                                     <br />
//                                                                     2.6.3.2. Number of final year students who appeared for the university examination year wise during the last five years
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria2/2.6.3.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
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

// export default Criteria2;



import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SSRSidebar from '../components/SSRSidebar';

function Criteria2() {
    return (
        <Layout>
            <PageHeader title="CRITERIA 2" breadcrumbCurrent="Criteria 2" />

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
                                        Criteria 2 – Teaching-Learning and Evaluation (350)
                                    </h3>

                                    {/* ================= 2.1 ================= */}
                                    <Section
                                        title="Key Indicator – 2.1 Student Enrolment and Profile (40)"
                                        data={[
                                            {
                                                metric: "2.1.1",
                                                explanation:
                                                    "Enrolment percentage. Number of students admitted year wise during last five years and sanctioned seats year wise.",
                                                link: "/frontpage/criteria2/2.1.1.pdf"
                                            },
                                            {
                                                metric: "2.1.2",
                                                explanation:
                                                    "Percentage of seats filled against seats reserved for various categories during the last five years.",
                                                link: "/frontpage/criteria2/2.1.2.pdf"
                                            }
                                        ]}
                                    />

                                    {/* ================= 2.2 ================= */}
                                    <Section
                                        title="Key Indicator – 2.2 Student Teacher Ratio (40)"
                                        data={[
                                            {
                                                metric: "2.2.1",
                                                explanation:
                                                    "Student – Full time Teacher Ratio (Latest completed academic year).",
                                                link: "/frontpage/criteria2/2.2.1.pdf"
                                            }
                                        ]}
                                    />

                                    {/* ================= 2.3 ================= */}
                                    <Section
                                        title="Key Indicator – 2.3 Teaching-Learning Process (40)"
                                        data={[
                                            {
                                                metric: "2.3.1",
                                                explanation:
                                                    "Student centric methods such as experiential learning, participative learning and problem solving methodologies using ICT tools.",
                                                link: "/frontpage/criteria2/2.3.1.pdf"
                                            }
                                        ]}
                                    />

                                    {/* ================= 2.4 ================= */}
                                    <Section
                                        title="Key Indicator – 2.4 Teacher Profile and Quality (40)"
                                        data={[
                                            {
                                                metric: "2.4.1",
                                                explanation:
                                                    "Percentage of full-time teachers against sanctioned posts during the last five years.",
                                                link: "/frontpage/criteria2/2.4.1.pdf"
                                            },
                                            {
                                                metric: "2.4.2",
                                                explanation:
                                                    "Percentage of full-time teachers with NET/SET/SLET/Ph.D./D.Sc./D.Litt. during last five years.",
                                                link: "/frontpage/criteria2/2.4.2.pdf"
                                            }
                                        ]}
                                    />

                                    {/* ================= 2.5 ================= */}
                                    <Section
                                        title="Key Indicator – 2.5 Evaluation Process and Reforms (40)"
                                        data={[
                                            {
                                                metric: "2.5.1",
                                                explanation:
                                                    "Mechanism of internal/external assessment and grievance redressal system.",
                                                link: "/frontpage/criteria2/2.5.1.pdf"
                                            }
                                        ]}
                                    />

                                    {/* ================= 2.6 ================= */}
                                    <Section
                                        title="Key Indicator – 2.6 Student Performance and Learning Outcome (90)"
                                        data={[
                                            {
                                                metric: "2.6.1",
                                                explanation:
                                                    "Programme Outcomes (POs) and Course Outcomes (COs) displayed and evaluated.",
                                                link: "/frontpage/criteria2/2.6.1.pdf"
                                            },
                                            {
                                                metric: "2.6.2",
                                                explanation:
                                                    "Attainment of POs and COs are evaluated with evidence.",
                                                link: "/frontpage/criteria2/2.6.2.pdf"
                                            },
                                            {
                                                metric: "2.6.3",
                                                explanation:
                                                    "Pass percentage of students during last five years.",
                                                link: "/frontpage/criteria2/2.6.3.pdf"
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

/* =================== SECTION COMPONENT =================== */

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

export default Criteria2;