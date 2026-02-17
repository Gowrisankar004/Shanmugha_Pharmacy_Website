// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';

// function IQACComposition() {
//     return (
//         <Layout>
//             <PageHeader title="IQAC MEMBERS" breadcrumbCurrent="IQAC Members" />

//             <div className="page-service-single">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-1"></div>
//                         <div className="col-lg-10">
//                             <div className="service-single-content">
//                                 <div className="service-entry">
//                                     <h2 className="text-anime-style-3" style={{ fontSize: '27px', textAlign: 'center', textTransform: 'uppercase' }}>Internal Quality Assurance Cell Members 2024 - 25</h2>
//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table style={{ borderCollapse: 'collapse', borderSpacing: '0', width: '100%', border: '2px solid #105b09' }}>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>S.NO</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>NAME</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>DESIGNATION</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>ROLE IN IQAC</th>
//                                                             </tr>
//                                                             {[
//                                                                 { sno: 1, name: "Dr. P. Suresh Kumar", desig: "Professor cum Principal", role: "Chairperson" },
//                                                                 { sno: 2, name: "Er. Thirumoorthy Arumugam", desig: "Executive Director, SSEI", role: "Management Representative" },
//                                                                 { sno: 3, name: "Dr. C. Venkatesh", desig: "Chief Strategic Officer, SSEI", role: "Senior Administrative Officer" },
//                                                                 { sno: 4, name: "Dr. V. K. Senthil Ragavan", desig: "Chief Executive Officer, SSEI", role: "Senior Administrative Officer" },
//                                                                 { sno: 5, name: "Dr. K. Paul Joshua", desig: "IQAC Director, SSEI", role: "Senior Administrative Officer" },
//                                                                 { sno: 6, name: "Mr. V. Vadivel", desig: "Administrative Officer, SSEI", role: "Senior Administrative Officer" },
//                                                                 { sno: 7, name: "Dr. K. K. Senthil Kumar", desig: "Professor cum Vice Principal", role: "Faculty Nominee" },
//                                                                 { sno: 8, name: "Dr. S. Anandkumar", desig: "Professor", role: "Faculty Nominee" },
//                                                                 { sno: 9, name: "Dr. P. Subash", desig: "Professor", role: "Faculty Nominee" },
//                                                                 { sno: 10, name: "Dr. K. Gopalasatheeskumar", desig: "Associate Professor", role: "Faculty Nominee" },
//                                                                 { sno: 11, name: "Mrs. V. Loganayaki", desig: "Associate Professor", role: "Faculty Nominee" },
//                                                                 { sno: 12, name: "Mr. R. Arulselvam", desig: "Associate Professor", role: "Faculty Nominee" },
//                                                                 { sno: 13, name: "Dr. S. Mohammed Akram Ali", desig: "Assistant Professor", role: "Faculty Nominee" },
//                                                                 { sno: 14, name: "Dr. R. Karthick", desig: "Veterinary Surgeon, Government Veterinary Hospital, Solasiramani, Namakkal- 637210", role: "Local Society Nominee" },
//                                                                 { sno: 15, name: "Mr. V. Abiramgowshik", desig: "B. Pharm-IV Year", role: "Student Nominee" },
//                                                                 { sno: 16, name: "Mr. M. Gowtham", desig: "Safety Associate Trainee IQVIARDS (India) Pvt.Limited Kerala- 682030", role: "Alumni Nominee" },
//                                                                 { sno: 17, name: "Dr. K. Balaji", desig: "Head – FR & D, InterMed, 4, G.K. Industrial Estate, Porur, Chennai – 600116.", role: "Industry Nominee" },
//                                                                 { sno: 18, name: "Dr. M. Sudha", desig: "Professor", role: "IQAC Coordinator" }
//                                                             ].map((row, index) => (
//                                                                 <tr key={index} style={{ backgroundColor: index % 2 !== 0 ? '#f2f2f2' : '#fff', color: '#000' }}>
//                                                                     <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.sno}</td>
//                                                                     <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.name}</td>
//                                                                     <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.desig}</td>
//                                                                     <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.role}</td>
//                                                                 </tr>
//                                                             ))}
//                                                         </tbody>
//                                                     </table>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                         <div className="col-lg-1"></div>
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// export default IQACComposition;



import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function IQACComposition() {

    const iqacData = [
        { sno: 1, name: "Dr. P. Suresh Kumar", desig: "Professor cum Principal", role: "Chairperson" },
        { sno: 2, name: "Er. Thirumoorthy Arumugam", desig: "Executive Director, SSEI", role: "Management Representative" },
        { sno: 3, name: "Dr. C. Venkatesh", desig: "Chief Strategic Officer, SSEI", role: "Senior Administrative Officer" },
        { sno: 4, name: "Dr. V. K. Senthil Ragavan", desig: "Chief Executive Officer, SSEI", role: "Senior Administrative Officer" },
        { sno: 5, name: "Dr. K. Paul Joshua", desig: "IQAC Director, SSEI", role: "Senior Administrative Officer" },
        { sno: 6, name: "Mr. V. Vadivel", desig: "Administrative Officer, SSEI", role: "Senior Administrative Officer" },
        { sno: 7, name: "Dr. K. K. Senthil Kumar", desig: "Professor cum Vice Principal", role: "Faculty Nominee" },
        { sno: 8, name: "Dr. S. Anandkumar", desig: "Professor", role: "Faculty Nominee" },
        { sno: 9, name: "Dr. P. Subash", desig: "Professor", role: "Faculty Nominee" },
        { sno: 10, name: "Dr. K. Gopalasatheeskumar", desig: "Associate Professor", role: "Faculty Nominee" },
        { sno: 11, name: "Mrs. V. Loganayaki", desig: "Associate Professor", role: "Faculty Nominee" },
        { sno: 12, name: "Mr. R. Arulselvam", desig: "Associate Professor", role: "Faculty Nominee" },
        { sno: 13, name: "Dr. S. Mohammed Akram Ali", desig: "Assistant Professor", role: "Faculty Nominee" },
        { sno: 14, name: "Dr. R. Karthick", desig: "Veterinary Surgeon, Government Veterinary Hospital, Solasiramani, Namakkal - 637210", role: "Local Society Nominee" },
        { sno: 15, name: "Mr. V. Abiramgowshik", desig: "B. Pharm-IV Year", role: "Student Nominee" },
        { sno: 16, name: "Mr. M. Gowtham", desig: "Safety Associate Trainee IQVIARDS (India) Pvt. Limited Kerala - 682030", role: "Alumni Nominee" },
        { sno: 17, name: "Dr. K. Balaji", desig: "Head – FR & D, InterMed, Porur, Chennai – 600116", role: "Industry Nominee" },
        { sno: 18, name: "Dr. M. Sudha", desig: "Professor", role: "IQAC Coordinator" }
    ];

    return (
        <Layout>
            <PageHeader
                title="IQAC MEMBERS"
                breadcrumbCurrent="IQAC Members"
            />

            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-1"></div>

                        <div className="col-lg-10">
                            <div className="service-single-content">
                                <div className="service-entry">

                                    <h2 style={styles.heading}>
                                        Internal Quality Assurance Cell Members 2024 - 25
                                    </h2>

                                    <div style={styles.card}>
                                        <div style={{ overflowX: "auto" }}>
                                            <table style={styles.table}>
                                                <thead>
                                                    <tr style={styles.theadRow}>
                                                        <th style={styles.th}>S.No</th>
                                                        <th style={styles.th}>Name</th>
                                                        <th style={styles.th}>Designation</th>
                                                        <th style={styles.th}>Role in IQAC</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {iqacData.map((member, index) => (
                                                        <tr
                                                            key={index}
                                                            style={{
                                                                backgroundColor:
                                                                    index % 2 === 0
                                                                        ? "#ffffff"
                                                                        : "#f3f3f3",
                                                                transition: "0.3s ease"
                                                            }}
                                                        >
                                                            <td style={styles.td}>{member.sno}</td>
                                                            <td style={styles.td}>{member.name}</td>
                                                            <td style={styles.td}>{member.desig}</td>
                                                            <td style={styles.td}>{member.role}</td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="col-lg-1"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}


/* ================= INTERNAL CSS ================= */

const styles = {

    heading: {
        textAlign: "center",
        fontSize: "26px",
        fontWeight: "600",
        textTransform: "uppercase",
        marginBottom: "30px",
        letterSpacing: "1px",
    },

    card: {
        backgroundColor: "#dddddd",
        padding: "20px",
        borderRadius: "6px",
        border: "1px solid #d0e2cf"
    },

    table: {
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "Roboto, sans-serif",
        border: "1px solid #d0e2cf"
    },

    theadRow: {
        backgroundColor: "#dddddd"
    },

    th: {
        padding: "12px",
        textAlign: "left",
        fontWeight: "600",
        border: "1px solid #105b09",
        color: "#000000"
    },

    td: {
        padding: "12px",
        border: "1px solid #105b09",
        color: "#000000",
        fontWeight: "500"
    }
};

export default IQACComposition;