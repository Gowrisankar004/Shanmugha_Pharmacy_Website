import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import AboutSidebar from '../components/AboutSidebar';

function GoverningCouncil() {
    return (
        <Layout>
            <PageHeader title="GOVERNING COUNCIL" breadcrumbCurrent="Governing Council" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <AboutSidebar />
                        </div>

                        <div className="col-lg-9">
                            {/* Service Single Content Start */}
                            <div className="service-single-content">
                                {/* Service Entry Content Start */}
                                <div className="service-entry">
                                    <h2 className="text-anime-style-3" style={{ fontSize: '27px', textAlign: 'center' }}>GOVERNING COUNCIL MEMBERS 2024 - 25</h2>
                                    <div className="about-info tab-content" style={{ display: 'inline-block', background: '#dddddd', padding: '15px', border: '1px solid #438b3e', width: '100%' }}>
                                        <div className="info title">
                                            <div className="table-responsive">
                                                <div style={{ overflowX: 'auto' }}>
                                                    <style>
                                                        {`
                              table {
                                border-collapse: collapse;
                                border-spacing: 0;
                                width: 100%;
                                border: 2px solid #105b09;
                              }
                              th, td {
                                text-align: left;
                                padding: 8px;
                                border: 1px solid #438b3e;
                                font-family: "Roboto", Helvetica, Arial, Verdana, sans-serif;
                                letter-spacing: -0.2px;
                                font-size: 16px;
                                font-weight: 500;
                              }
                              tr:nth-child(even) {
                                background-color: #fff;
                                color: #000;
                              }
                              tr {
                                border-color: aliceblue;
                                border-style: solid;
                                border-width: 0;
                                color: #000;
                              }
                            `}
                                                    </style>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>S.NO</th>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>NAME</th>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>DESIGNATION</th>
                                                                <th style={{ fontSize: '16px', fontWeight: 600 }}>POSITION IN GOVERNING COUNCIL</th>
                                                            </tr>
                                                            <tr>
                                                                <td>1</td>
                                                                <td>Thiru.K.Shanmugham</td>
                                                                <td>Chairman</td>
                                                                <td>Chairman</td>
                                                            </tr>
                                                            <tr>
                                                                <td>2</td>
                                                                <td>Er.Thirumoorthy Arumugam</td>
                                                                <td>Executive Director</td>
                                                                <td>Representing Management</td>
                                                            </tr>
                                                            <tr>
                                                                <td>3</td>
                                                                <td>Mr.S.Prabahar</td>
                                                                <td>Vice Chairman</td>
                                                                <td>Representing Management</td>
                                                            </tr>
                                                            <tr>
                                                                <td>4</td>
                                                                <td>Mrs.Gokila Shanmugam</td>
                                                                <td>Joint Secretary</td>
                                                                <td>Representing Management</td>
                                                            </tr>
                                                            <tr>
                                                                <td>5</td>
                                                                <td>Dr. C. Venkatesh</td>
                                                                <td>Chief Strategic Officer, SSEI</td>
                                                                <td>Senior Administrative Officer</td>
                                                            </tr>
                                                            <tr>
                                                                <td>6</td>
                                                                <td>Dr. V. K. Senthil Ragavan</td>
                                                                <td>Chief Executive Officer, SSEI</td>
                                                                <td>Senior Administrative Officer</td>
                                                            </tr>
                                                            <tr>
                                                                <td>7</td>
                                                                <td>Dr.K.Paul Joshua</td>
                                                                <td>IQACDirector, SSEI</td>
                                                                <td>Senior Administrative Officer</td>
                                                            </tr>
                                                            <tr>
                                                                <td>8</td>
                                                                <td>Mr. V. Vadivel</td>
                                                                <td>Administrative Officer, SSEI</td>
                                                                <td>Senior Administrative Officer</td>
                                                            </tr>
                                                            <tr>
                                                                <td>9</td>
                                                                <td>Dr. R. Sambathkumar </td>
                                                                <td>Principal, Erode College of Pharmacy, Erode - 638112</td>
                                                                <td>External Academic Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>10</td>
                                                                <td>Dr. K. L. Senthilkumar</td>
                                                                <td>Principal, Vijay Vidyalaya College of Pharmacy, Dharmapuri – 636807</td>
                                                                <td>External Academic Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>11</td>
                                                                <td>Dr. V. Sankar</td>
                                                                <td>Professor, Department of Pharmacology, PSG College of Pharmacy, Coimbatore – 641004</td>
                                                                <td>External Academic Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>12</td>
                                                                <td>K. K. Senthilkumar</td>
                                                                <td>Professor & Vice Principal</td>
                                                                <td>Senior Faculty Member</td>
                                                            </tr>
                                                            <tr>
                                                                <td>13</td>
                                                                <td>Dr. S. Anandakumar</td>
                                                                <td>Professor & Controller of Examinations</td>
                                                                <td>Senior Faculty Member</td>
                                                            </tr>
                                                            <tr>
                                                                <td>14</td>
                                                                <td>Dr. P. Subash</td>
                                                                <td>Professor</td>
                                                                <td>Senior Faculty Member</td>
                                                            </tr>
                                                            <tr>
                                                                <td>15</td>
                                                                <td>Dr.M. Sudha</td>
                                                                <td>Professor & IQAC Coordinator</td>
                                                                <td></td>
                                                            </tr>
                                                            <tr>
                                                                <td>16</td>
                                                                <td>Dr. K. Balaji</td>
                                                                <td>Managing Director, Head – FR & D, InterMed, 4, G.K. Industrial Estate, Porur, Chennai – 600 116.</td>
                                                                <td>Industrial Expert</td>
                                                            </tr>
                                                            <tr>
                                                                <td>17</td>
                                                                <td>J. M. Chandru</td>
                                                                <td>(B. Pharm 2019 – 23 Batch)</td>
                                                                <td>Alumni Nominee</td>
                                                            </tr>
                                                            <tr>
                                                                <td>18</td>
                                                                <td>Dr. P. Suresh Kumar</td>
                                                                <td>Principal</td>
                                                                <td>Member Secretary</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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

export default GoverningCouncil;
