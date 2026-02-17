import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacultySidebar from '../components/FacultySidebar';

function DepartmentOfPharmaceutics() {

    const facultyData = [
        { name: "Prof. Dr. P. Suresh Kumar, M.Pharm., Ph.D.", designation: "Professor cum Principal" },
        { name: "Prof. Dr. C. Senthil Kumar, M.Pharm., Ph.D.", designation: "Professor" },
        { name: "Prof. Dr. R. Prema, M.Pharm., Ph.D.", designation: "Professor" },
        { name: "Ms. V. Loganayaki, M.Pharm.", designation: "Associate Professor" },
        { name: "Mr. M. Subramani, M.Pharm.", designation: "Associate Professor" },
        { name: "Mrs. N. Vinodhini, M.Pharm.", designation: "Associate Professor" },
        { name: "Mr. R. Arulkumar, M.Pharm.", designation: "Assistant Professor" },
        { name: "Mr. S. Siva Kumar, M.Pharm.", designation: "Assistant Professor" },
        { name: "Mr. R. Manikandan, M.Pharm.", designation: "Assistant Professor" },
        { name: "Mr. G. Vasudevan, M.Pharm.", designation: "Assistant Professor" },
        { name: "Mrs. P. Sanjana, M.Pharm.", designation: "Assistant Professor" },
        { name: "Mr. V. Suresh Babu, M.Pharm.", designation: "Assistant Professor" }
    ];

    return (
        <Layout>
            <PageHeader title="DEPARTMENT OF PHARMACEUTICS" breadcrumbCurrent="Department of Pharmaceutics" />

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
                                        Department of Pharmaceutics
                                    </h2>

                                    <div style={styles.card}>
                                        <div style={{ overflowX: "auto" }}>
                                            <table style={styles.table}>
                                                <thead>
                                                    <tr style={styles.theadRow}>
                                                        <th style={styles.th}>S.No</th>
                                                        <th style={styles.th}>Name & Qualification</th>
                                                        <th style={styles.th}>Designation</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {facultyData.map((faculty, index) => (
                                                        <tr
                                                            key={index}
                                                            style={{
                                                                backgroundColor:
                                                                    index % 2 === 0 ? "#ffffff" : "#dddddd",
                                                                transition: "0.2s ease"
                                                            }}
                                                        >
                                                            <td style={styles.td}>{index + 1}</td>
                                                            <td style={styles.td}>{faculty.name}</td>
                                                            <td style={styles.td}>{faculty.designation}</td>
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
        border: "1px solid #d0e2cf"  // subtle outer border
    },

    table: {
        width: "100%",
        borderCollapse: "collapse",
        fontFamily: "Roboto, sans-serif",
        border: "1px solid #d0e2cf",   // main table border
    },

    theadRow: {
        backgroundColor: "#dddddd"
    },

    th: {
        padding: "12px",
        textAlign: "left",
        fontWeight: "600",
        border: "1px solid #105b09",  // clean grey grid lines
        color: "#000000"
    },

    td: {
        padding: "12px",
        border: "1px solid #105b09",  // consistent line thickness
        color: "#000000"
    }
};

export default DepartmentOfPharmaceutics;