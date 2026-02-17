// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import FacultySidebar from '../components/FacultySidebar';

// function DepartmentOfPharmacyPractice() {
//     return (
//         <Layout>
//             <PageHeader title="DEPARTMENT OF PHARMACY PRACTICE" />

//             {/* Single Service Page Start */}
//             <div className="page-service-single">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <FacultySidebar />
//                         </div>

//                         <div className="col-lg-8">
//                             {/* Service Single Content Start */}
//                             <div className="service-single-content">
//                                 {/* Service Entry Content Start */}
//                                 <div className="service-entry">
//                                     <h2 className="text-anime-style-3" style={{ fontSize: '27px', textAlign: 'center', textTransform: 'uppercase' }}>Department of Pharmacy Practice</h2>
//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table>
//                                                         <tbody>
//                                                             <tr>
//                                                                 <th style={{ fontSize: '16px', fontWeight: 600 }}>S.NO</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: 600 }}>NAME & FACULTY & QUALIFICATION</th>
//                                                                 <th style={{ fontSize: '16px', fontWeight: 600 }}>DESIGNATION</th>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>1</td>
//                                                                 <td>Dr.S.Anand Kumar M.Pharm.,Ph.D.</td>
//                                                                 <td>Professor</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>2</td>
//                                                                 <td>Ms.S.Gomathi, M.Pharm</td>
//                                                                 <td>Assistant Professor</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>3</td>
//                                                                 <td>Mr.T.Rabiniraj,M.Pharm</td>
//                                                                 <td>Assistant Professor</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>4</td>
//                                                                 <td>Dr.P.Thilagesh,Pharm.D </td>
//                                                                 <td>Assistant professor</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>5</td>
//                                                                 <td>Dr.P.Shobana,Pharm.D </td>
//                                                                 <td>Assistant professor</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>6</td>
//                                                                 <td>Dr.U.Aiswarya Nair,Pharm.D </td>
//                                                                 <td>Assistant professor</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>7</td>
//                                                                 <td>Dr.S.Mohammed Akram Ali ,Pharm.D </td>
//                                                                 <td>Assistant professor</td>
//                                                             </tr>
//                                                             <tr>
//                                                                 <td>8</td>
//                                                                 <td>Ms.A.Janani,M.Pharm</td>
//                                                                 <td>Assistant professor</td>
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

// export default DepartmentOfPharmacyPractice;


// import React from 'react';
// import Layout from '../components/Layout';
// import PageHeader from '../components/PageHeader';
// import FacultySidebar from '../components/FacultySidebar';

// function DepartmentOfPharmacyPractice() {
//     return (
//         <Layout>
//             <PageHeader title="DEPARTMENT OF PHARMACY PRACTICE" />

//             <div className="page-service-single">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-lg-4">
//                             <FacultySidebar />
//                         </div>

//                         <div className="col-lg-8">
//                             <div className="service-single-content">
//                                 <div className="service-entry">

//                                     <h2
//                                         className="text-anime-style-3"
//                                         style={{
//                                             fontSize: '27px',
//                                             textAlign: 'center',
//                                             textTransform: 'uppercase'
//                                         }}
//                                     >
//                                         Department of Pharmacy Practice
//                                     </h2>

//                                     <div className="about-info tab-content">
//                                         <div className="info title">
//                                             <div className="table-responsive">
//                                                 <div style={{ overflowX: 'auto' }}>
//                                                     <table
//                                                         id="customers"
//                                                         align="center"
//                                                         style={{
//                                                             fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif',
//                                                             borderCollapse: 'collapse',
//                                                             width: '100%'
//                                                         }}
//                                                     >
//                                                         <thead>
//                                                             <tr>
//                                                                 <th style={headerStyle}>S.No.</th>
//                                                                 <th style={headerStyle}>Name & Qualification</th>
//                                                                 <th style={headerStyle}>Designation</th>
//                                                             </tr>
//                                                         </thead>

//                                                         <tbody>
//                                                             {[
//                                                                 ["Dr.S.Anand Kumar, M.Pharm., Ph.D.", "Professor"],
//                                                                 ["Ms.S.Gomathi, M.Pharm.", "Assistant Professor"],
//                                                                 ["Mr.T.Rabiniraj, M.Pharm.", "Assistant Professor"],
//                                                                 ["Dr.P.Thilagesh, Pharm.D.", "Assistant Professor"],
//                                                                 ["Dr.P.Shobana, Pharm.D.", "Assistant Professor"],
//                                                                 ["Dr.U.Aiswarya Nair, Pharm.D.", "Assistant Professor"],
//                                                                 ["Dr.S.Mohammed Akram Ali, Pharm.D.", "Assistant Professor"],
//                                                                 ["Ms.A.Janani, M.Pharm.", "Assistant Professor"]
//                                                             ].map((faculty, index) => (
//                                                                 <tr
//                                                                     key={index}
//                                                                     style={index % 2 !== 0 ? { backgroundColor: '#f2f2f2' } : {}}
//                                                                 >
//                                                                     <td style={cellStyle}>{index + 1}</td>
//                                                                     <td style={cellStyle}>{faculty[0]}</td>
//                                                                     <td style={cellStyle}>{faculty[1]}</td>
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
//                     </div>
//                 </div>
//             </div>
//         </Layout>
//     );
// }

// const headerStyle = {
//     border: '1px solid #ddd',
//     padding: '12px',
//     textAlign: 'left',
//     backgroundColor: '#04AA6D',
//     color: 'white'
// };

// const cellStyle = {
//     border: '1px solid #ddd',
//     padding: '12px',
//     color: '#222'
// };

// export default DepartmentOfPharmacyPractice;




import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacultySidebar from '../components/FacultySidebar';

function DepartmentOfPharmacyPractice() {
    return (
        <Layout>
            <PageHeader title="DEPARTMENT OF PHARMACY PRACTICE" breadcrumbCurrent="Department of Pharmacy Practice" />

            <div className="page-service-single">
                <div className="container">
                    <div className="row">

                        <div className="col-lg-4">
                            <FacultySidebar />
                        </div>

                        <div className="col-lg-8">
                            <div className="service-single-content">
                                <div className="service-entry">

                                    <h2 style={styles.heading}>
                                        Department of Pharmacy Practice
                                    </h2>

                                    <div style={styles.card}>
                                        <div style={{ overflowX: "auto" }}>
                                            <table style={styles.table}>
                                                <thead>
                                                    <tr style={styles.theadRow}>
                                                        <th style={styles.th}>S.No.</th>
                                                        <th style={styles.th}>Name & Qualification</th>
                                                        <th style={styles.th}>Designation</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {[
                                                        ["Dr.S.Anand Kumar, M.Pharm., Ph.D.", "Professor"],
                                                        ["Ms.S.Gomathi, M.Pharm.", "Assistant Professor"],
                                                        ["Mr.T.Rabiniraj, M.Pharm.", "Assistant Professor"],
                                                        ["Dr.P.Thilagesh, Pharm.D.", "Assistant Professor"],
                                                        ["Dr.P.Shobana, Pharm.D.", "Assistant Professor"],
                                                        ["Dr.U.Aiswarya Nair, Pharm.D.", "Assistant Professor"],
                                                        ["Dr.S.Mohammed Akram Ali, Pharm.D.", "Assistant Professor"],
                                                        ["Ms.A.Janani, M.Pharm.", "Assistant Professor"]
                                                    ].map((faculty, index) => (
                                                        <tr
                                                            key={index}
                                                            style={{
                                                                backgroundColor:
                                                                    index % 2 === 0 ? "#ffffff" : "#f2f2f2"
                                                            }}
                                                        >
                                                            <td style={styles.td}>{index + 1}</td>
                                                            <td style={styles.td}>{faculty[0]}</td>
                                                            <td style={styles.td}>{faculty[1]}</td>
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
        color: "#000000"
    }
};

export default DepartmentOfPharmacyPractice;