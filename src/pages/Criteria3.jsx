// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import SSRSidebar from '../components/SSRSidebar';

// function Criteria3() {
//     return (
//         <Layout>
//             <PageHeader title="CRITERIA 3" breadcrumbCurrent="Criteria 3" />

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
//                                     <h3 style={{ textTransform: 'uppercase' }}>Criteria 3 - Research, Innovations and Extension (110)</h3>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator 3.1 - Resource Mobilization for Research (10)</p>
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
//                                                                 <td>3.1.1</td>
//                                                                 <td>Grants received from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)<br />
//                                                                     3.1.1.1: Total Grants from Government and non-governmental agencies for research projects / endowments in the institution during the last five years (INR in Lakhs)</td>
//                                                                 <td><a href="/frontpage/criteria3/3.1.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator 3.2 - Innovation Ecosystem (15)</p>
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
//                                                                 <td>3.2.1</td>
//                                                                 <td>Institution has created an ecosystem for innovations and has initiatives for creation and transfer of knowledge (patents filed, published, incubation center facilities in the HEI to be considered)Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.2.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3.2.2</td>
//                                                                 <td>Number of workshops/seminars/conferences including on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship conducted during the last five years
//                                                                     <br />
//                                                                     3.2.2.1: Total number of workshops/seminars/conferences including programs conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship year wise during last five years
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.2.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator 3.3 - Research Publication and Awards (25)</p>
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
//                                                                 <td>3.3.1</td>
//                                                                 <td>Number of research papers published per teacher in the Journals notified on UGC care list during the last five years
//                                                                     <br />
//                                                                     3.3.1.1. Number of research papers in the Journals notified on UGC CARE year wise during the last five years
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.3.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3.3.2</td>
//                                                                 <td>Number of books and chapters in edited volumes/books published and papers published in national/ international conference proceedings per teacher during last five years
//                                                                     <br />
//                                                                     3.3.2.1. Total number of books and chapters in edited volumes/books published and papers in national/ international conference proceedings year wise during last five years
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.3.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicator- 3.4 Extension Activities (40)</p>
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
//                                                                 <td>3.4.1</td>
//                                                                 <td>Extension activities are carried out in the neighborhood community, sensitizing students to social issues, for their holistic development, and impact thereof during the last five years.
//                                                                     <br />
//                                                                     Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.4.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3.4.2</td>
//                                                                 <td>Awards and recognitions received for extension activities from government / government recognised bodies <br />
//                                                                     Write description in a maximum of 500 words
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.4.2.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3.4.3</td>
//                                                                 <td>Number of extension and outreach programs conducted by the institution through NSS/NCC etc., (including the programmes such as Swachh Bharat, AIDS awareness, Gender issues etc. and/or those organised in collaboration with industry, community and NGOs) during the last five years<br />
//                                                                     3.4.3.1. Number of extension and outreach Programs conducted in collaboration with industry, community, and Non- Government Organizations through NSS/ NCC etc., year wise during the last five years
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.4.3.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
//                                                             </tr>

//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                     <br />
//                                     <p style={{ color: '#222' }}>Key Indicators 3.5 – Collaboration (20)</p>
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
//                                                                 <td>3.5.1</td>
//                                                                 <td>The number of MoUs, collaborations/linkages for Faculty exchange, Student exchange, Internship, Field project, On-the- job training, research and other academic activities during the last five years
//                                                                     <br />
//                                                                     3.5.1.1 Number of MoUs, collaborations/linkages for Faculty exchange, Student exchange, Internship, Field project, On-the- job training, research and other academic activities during the last five years:
//                                                                 </td>
//                                                                 <td><a href="/frontpage/criteria3/3.5.1.pdf" target="_blank" rel="noopener noreferrer">View</a></td>
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

// export default Criteria3;



import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import SSRSidebar from '../components/SSRSidebar';

function Criteria3() {
    return (
        <Layout>
            <PageHeader title="CRITERIA 3" breadcrumbCurrent="Criteria 3" />

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
                                        Criteria 3 – Research, Innovations and Extension (110)
                                    </h3>

                                    {/* 3.1 */}
                                    <Section
                                        title="Key Indicator 3.1 – Resource Mobilization for Research (10)"
                                        data={[
                                            {
                                                metric: "3.1.1",
                                                explanation:
                                                    "Grants received from Government and non-governmental agencies for research projects / endowments during the last five years.",
                                                link: "/frontpage/criteria3/3.1.1.pdf"
                                            }
                                        ]}
                                    />

                                    {/* 3.2 */}
                                    <Section
                                        title="Key Indicator 3.2 – Innovation Ecosystem (15)"
                                        data={[
                                            {
                                                metric: "3.2.1",
                                                explanation:
                                                    "Institution has created an ecosystem for innovations and initiatives for knowledge transfer (patents, incubation center facilities etc.).",
                                                link: "/frontpage/criteria3/3.2.1.pdf"
                                            },
                                            {
                                                metric: "3.2.2",
                                                explanation:
                                                    "Number of workshops/seminars/conferences on Research Methodology, IPR and entrepreneurship during last five years.",
                                                link: "/frontpage/criteria3/3.2.2.pdf"
                                            }
                                        ]}
                                    />

                                    {/* 3.3 */}
                                    <Section
                                        title="Key Indicator 3.3 – Research Publication and Awards (25)"
                                        data={[
                                            {
                                                metric: "3.3.1",
                                                explanation:
                                                    "Number of research papers published per teacher in UGC CARE journals during last five years.",
                                                link: "/frontpage/criteria3/3.3.1.pdf"
                                            },
                                            {
                                                metric: "3.3.2",
                                                explanation:
                                                    "Number of books, chapters and conference papers published per teacher during last five years.",
                                                link: "/frontpage/criteria3/3.3.2.pdf"
                                            }
                                        ]}
                                    />

                                    {/* 3.4 */}
                                    <Section
                                        title="Key Indicator 3.4 – Extension Activities (40)"
                                        data={[
                                            {
                                                metric: "3.4.1",
                                                explanation:
                                                    "Extension activities carried out for community development and student holistic growth.",
                                                link: "/frontpage/criteria3/3.4.1.pdf"
                                            },
                                            {
                                                metric: "3.4.2",
                                                explanation:
                                                    "Awards and recognitions received for extension activities.",
                                                link: "/frontpage/criteria3/3.4.2.pdf"
                                            },
                                            {
                                                metric: "3.4.3",
                                                explanation:
                                                    "Number of extension and outreach programs conducted through NSS/NCC etc. during last five years.",
                                                link: "/frontpage/criteria3/3.4.3.pdf"
                                            }
                                        ]}
                                    />

                                    {/* 3.5 */}
                                    <Section
                                        title="Key Indicator 3.5 – Collaboration (20)"
                                        data={[
                                            {
                                                metric: "3.5.1",
                                                explanation:
                                                    "Number of MoUs, collaborations/linkages for exchange, internship, research and academic activities during last five years.",
                                                link: "/frontpage/criteria3/3.5.1.pdf"
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

export default Criteria3;