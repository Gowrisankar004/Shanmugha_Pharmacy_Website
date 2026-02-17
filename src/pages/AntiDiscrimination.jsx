import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CommitteesSidebar from '../components/CommitteesSidebar';

function AntiDiscrimination() {
    return (
        <Layout>
            <PageHeader title="ANTIDISCRIMANTION CELL" breadcrumbCurrent="Anti Discrimination Cell" />

            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <CommitteesSidebar />
                        </div>

                        <div className="col-lg-9">
                            <div className="about-story-content">
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>ANTI DISCRIMINATION CELL</h2>
                                </div>
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif' }}>
                                        SSCOP College Of Pharmacy is a place where the learning is celebrated every day. College provides everybody with equal opportunity into its fold irrespective of caste, religion, language or based on gender. The college ensures that every individual inside the campus exercise equal rights and acquire in the process of offering or receiving education. Justice, Peace and Revolution are the roots based on which the living system exist in the campus. Any act, speech or intentions that pertrub the harmony among the people is seriously regarded and dealt on immediate basis to restore the peace. Any such issues if found shall be brought into the notice by email to Anti-Discrimination Officer.
                                    </p>
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
                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Position in the Committee</th>
                                                            </tr>
                                                            {[
                                                                { sno: 1, name: "Dr.K.K.Senthil Kumar", desig: "Professor", pos: "Converner" },
                                                                { sno: 2, name: "Mrs.N.Vinodhini", desig: "Associate Professor", pos: "Chairperson" },
                                                                { sno: 3, name: "Mr.R.Arul Selvam", desig: "Associate Professor", pos: "Member" },
                                                                { sno: 4, name: "Ms.Aiswarya Nair", desig: "Assitant Professor", pos: "Member" },
                                                                { sno: 5, name: "Dr.Jeffin Joy", desig: "Assitant Professor", pos: "Member" },
                                                                { sno: 6, name: "Mr.P.Kanna", desig: "Assitant Professor", pos: "Member" }
                                                            ].map((row, index) => (
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

export default AntiDiscrimination;
