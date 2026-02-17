import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CommitteesSidebar from '../components/CommitteesSidebar';

const Table = ({ data }) => (
    <div className="table-responsive">
        <div style={{ overflowX: 'auto' }}>
            <table style={{ borderCollapse: 'collapse', borderSpacing: '0', width: '100%', border: '2px solid #105b09' }}>
                <tbody>
                    <tr>
                        <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>S.No</th>
                        <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Name</th>
                        <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Designation</th>
                        <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Position in the Committee</th>
                    </tr>
                    {data.map((row, index) => (
                        <tr key={index} style={{ backgroundColor: index % 2 !== 0 ? '#f2f2f2' : '#fff', color: '#000' }}>
                            <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.sno}</td>
                            <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.name}</td>
                            <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.desig}</td>
                            <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.pos}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
);

function AntiRagging() {
    const committeeMembers = [
        { sno: 1, name: "Dr.P.Suresh Kumar", desig: "Principal", pos: "Chairperson" },
        { sno: 2, name: "Dr.P.Perumal", desig: "Vice Principal", pos: "Convener" },
        { sno: 3, name: "Dr.K.Gopalasatheeskumar", desig: "Associate Professor", pos: "Member" },
        { sno: 4, name: "Mr.Jimmy Alex", desig: "Assistant Professor", pos: "Member" },
        { sno: 5, name: "Ms.S.Gomathi", desig: "Assistant Professor", pos: "Member" },
        { sno: 6, name: "Mrs.N.Vinothini", desig: "Assistant Professor", pos: "Member" },
        { sno: 7, name: "Mr.R.Arulkumar", desig: "Assistant Professor", pos: "Member" },
        { sno: 8, name: "Mr.P.Sundarraj", desig: "Assistant Professor", pos: "Member" }
    ];

    const squadMembers = [
        { sno: 1, name: "Dr.K.Gopalasatheeskumar", desig: "Assoc Professor", pos: "Member" },
        { sno: 2, name: "Mr.Jimmy Alex", desig: "Assistant Professor", pos: "Member" },
        { sno: 3, name: "Ms.S.Gomathi", desig: "Assistant Professor", pos: "Member" },
        { sno: 4, name: "Mrs.N.Vinothini", desig: "Assistant Professor", pos: "Member" },
        { sno: 5, name: "Mr.R.Arulkumar", desig: "Assistant Professor", pos: "Member" }
    ];

    return (
        <Layout>
            <PageHeader title="ANTIRAGGING COMMITTEE" breadcrumbCurrent="Antiragging Committee" />

            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <CommitteesSidebar />
                        </div>

                        <div className="col-lg-9">
                            <div className="about-story-content">
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>ANTI RAGGING COMMITTEE MEMBERS</h2>
                                </div>
                            </div>

                            <div className="service-single-content">
                                <div className="service-entry">
                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <Table data={committeeMembers} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="about-story-content">
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>ANTI RAGGING SQUAD MEMBERS</h2>
                                </div>
                            </div>

                            <div className="service-single-content">
                                <div className="service-entry">
                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <Table data={squadMembers} />
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

export default AntiRagging;
