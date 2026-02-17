import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CommitteesSidebar from '../components/CommitteesSidebar';

function InternalComplaintsCommittee() {
    return (
        <Layout>
            <PageHeader title="Internal Complaints Committee" breadcrumbCurrent="Internal Complaints Committee" />
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <CommitteesSidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="about-story-content">
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>Sexual Harassment - Internal Complaints Committee</h2>
                                </div>
                            </div>

                            <div className="service-single-content">
                                <div className="service-entry">
                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <div className="table-responsive">
                                                <div style={{ overflowX: 'auto' }}>
                                                    <table style={{ borderCollapse: 'collapse', borderSpacing: '0', width: '100%', border: '2px solid #105b09' }}>
                                                        <tbody>
                                                            <tr>
                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>S.No</th>
                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Name of the Faculty</th>
                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Designation</th>
                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Contact No.</th>
                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Email ID</th>
                                                            </tr>
                                                            {[
                                                                { sno: 1, name: "Mrs.V.Loganayaki", desig: "Chairperson", contact: "9344739908", email: "loganayaki.pharmacy@shanmugha.edu.in" },
                                                                { sno: 2, name: "Mrs.N.Vinodhini", desig: "Member", contact: "7397007883", email: "vinodhini.pharmacy @shanmugha.edu.in" },
                                                                { sno: 3, name: "Ms.S.Gomathi", desig: "Member", contact: "9677364098", email: "gomathi.pharmacy@shanmugha.edu.in" },
                                                                { sno: 4, name: "Dr.KK.Senthil Kumar", desig: "Member", contact: "8870993382", email: "kksenthilkumar.pharmacy@shanmugha.edu.in" },
                                                                { sno: 5, name: "Mr.T.Suresh Babu", desig: "Advocate", contact: "8248750036", email: "lawyersureshbabut@gmail.com" }
                                                            ].map((row, index) => (
                                                                <tr key={index} style={{ backgroundColor: index % 2 !== 0 ? '#f2f2f2' : '#fff', color: '#000' }}>
                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.sno}</td>
                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.name}</td>
                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.desig}</td>
                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.contact}</td>
                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.email}</td>
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

                            <br />
                            <p style={{ textAlign: 'center' }}>
                                <a href="https://docs.google.com/forms/d/e/1FAIpQLSceY--vbOe-ehAY7YLmv7O1l9-LGE1ayo0MEfKwPAx1dhj5Uw/viewform?usp=sf_link"
                                    style={{ color: '#438b3e', fontWeight: 'bold', textDecoration: 'underline' }} target="_blank" rel="noopener noreferrer">
                                    Click here to view the form
                                </a>
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default InternalComplaintsCommittee;
