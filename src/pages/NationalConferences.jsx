import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function NationalConferences() {
    return (
        <Layout>
            <PageHeader title="National / International Conferences" breadcrumbCurrent="National - International Conferences" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            {/* Service Sidebar Start */}
                            <div className="service-sidebar">
                                {/* Service Catagery List Start */}
                                {/* Empty in source but likely good to keep the column spacing */}
                                {/* Service Catagery List End */}
                            </div>
                            {/* Service Sidebar End */}
                        </div>

                        <div className="col-lg-12">
                            {/* Service Single Content Start */}
                            <div className="service-single-content">
                                {/* Service Entry Content Start */}
                                <div className="service-entry">
                                    <h3 style={{ textTransform: 'uppercase' }}>Published Papers in National / International Conference</h3>
                                    <div className="about-info tab-content">
                                        <div className="info title">
                                            <div className="table-responsive">
                                                <div style={{ overflowX: 'auto' }}>
                                                    <table id="customers" align="center" style={{ fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', borderCollapse: 'collapse', width: '100%' }}>
                                                        <thead>
                                                            <tr>
                                                                <th style={{ width: '100px', border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#04AA6D', color: 'white' }}>S.No.</th>
                                                                <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#04AA6D', color: 'white' }}>Titles</th>
                                                                <th style={{ border: '1px solid #ddd', padding: '12px', textAlign: 'left', backgroundColor: '#04AA6D', color: 'white' }}>Link</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}>1.</td>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}>Recent Advances in Drug Discovery and Development</td>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}><a href="/pdf/Proceedings%201%20final.pdf" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '700', color: '#121249' }}>View</a></td>
                                                            </tr>
                                                            <tr style={{ backgroundColor: '#f2f2f2' }}>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}>2.</td>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}>HPLC Method Development and Validation – A Brief Overview of Method Validation</td>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}><a href="/pdf/Proceeding%202%20final.pdf" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '700', color: '#121249' }}>View</a></td>
                                                            </tr>
                                                            <tr>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}>3.</td>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}>Internal Seminar on Recent Advances in Drug Discovery and Development.</td>
                                                                <td style={{ border: '1px solid #ddd', padding: '12px', color: '#222' }}><a href="/pdf/proceeding%203%20final.pdf" target="_blank" rel="noopener noreferrer" style={{ fontWeight: '700', color: '#121249' }}>View</a></td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <br />
                                </div>
                                {/* Service Entry Content End */}
                            </div>
                            {/* Service Single Content End */}
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Service Page End */}
        </Layout>
    );
}

export default NationalConferences;
