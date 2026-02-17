import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import CommitteesSidebar from '../components/CommitteesSidebar';

function SCSTCommittee() {
    return (
        <Layout>
            <PageHeader title="SC - ST COMMITTEE" breadcrumbCurrent="SC - ST Committee" />
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <CommitteesSidebar />
                        </div>
                        <div className="col-lg-9">
                            <div className="about-story-content">
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>SC-ST COMMITTEE</h2>
                                </div>
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>OBJECTIVES:</h3>
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222' }}>To implement, monitor and evaluate continuously the Reservation Policy in the Institute (if any applicable).</li>
                                        <li style={{ color: '#222' }}>To take necessary steps of measuring for ensuring effective implementation of the policy & programmes/schemes of the State and Central Govt. for SC-ST, if any.</li>
                                        <li style={{ color: '#222' }}>To ensure the Prevention of Atrocities (as defined within the meaning of this Act) on the SC, ST Staff, Faculty and Students.</li>
                                        <li style={{ color: '#222' }}>To ensure the equal opportunity in matters of employment/promotions subject to fulfilling Qualification, Eligibility criteria and Merits.</li>
                                        <li style={{ color: '#222' }}>To hear and resolve the issues/complaints if any; of such nature of Atrocity reported/complained.</li>
                                        <li style={{ color: '#222' }}>To conduct the inquiries on the reported & complained issues and to aid and advice the Director & the Management of the Institute in this regard for the justice and smooth functioning of the Institute.</li>
                                    </ul>

                                    {/* FAQ Accordion Start */}
                                    <div className="faq-accordion" id="accordion" style={{ marginLeft: '0px' }}>
                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{ textTransform: 'uppercase', color: '#222' }}>
                                                    SC/ST WELF'ARE COMMIITTEE
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                                        As per the guidelines of the All India Council for Technical Education (AICTE), the
                                                        SC/ST Cell has been constituted in the college to resolve all the affairs and problems related to the students, staff and faculty members belonging to SC/ST communities. The SC/ST Cell safeguards the constitutional rights such as Right top Equality, Prohibition of discrimination, Equality of opportunities, etc. the following are the main objectives of the SCIST Cell.
                                                    </p>
                                                    <h3 style={{ textTransform: 'uppercase' }}>The grievances include:</h3>
                                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                                        <li style={{ color: '#222' }}>Ensures the effective implementation of the policies and programmes of the Government in respect of SC/ST students and staff.</li>
                                                        <li style={{ color: '#222' }}>To assist the students from the SC/ST communities in improving their academic performance and in optimizing their development in their personal and social life at the Institute"</li>
                                                        <li style={{ color: '#222' }}>To overcome inferior complex related to interaction with fellow students and personal development activities.</li>
                                                        <li style={{ color: '#222' }}>The students admitted in various programmes are to be provided post-admission orientation. The main focus is on the course curriculum, selection of optional subjects" and the whole new multi-cultural and multi-lingual environment that they are to face on the campus and various facilities available to them.</li>
                                                        <li style={{ color: '#222' }}>To arrange language classes for students to improve communication skills and proficiency of language and personality development.</li>
                                                        <li style={{ color: '#222' }}>To provide career counselling to the students</li>
                                                        <li style={{ color: '#222' }}>Remedial/co-curricular coaching for skill development, writing and assignment making presentation in class, public speaking job selection and job interviews.</li>
                                                        <li style={{ color: '#222' }}>To conduct special coaching classes using SCP funds provided exclusively for the welfare of SC/ST students.</li>
                                                        <li style={{ color: '#222' }}>To offer book bank facility semester wise</li>
                                                    </ul>
                                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>A committee with the following faculty members/officers is constituted to redresseal of grievances</p>

                                                    <div className="about-info tab-content">
                                                        <div className="info title">
                                                            <div className="table-responsive">
                                                                <div style={{ overflowX: 'auto' }}>
                                                                    <table style={{ borderCollapse: 'collapse', borderSpacing: '0', width: '100%', border: '2px solid #105b09' }}>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>S.No</th>
                                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Name of the Members</th>
                                                                                <th style={{ fontSize: '16px', fontWeight: '600', border: '1px solid #438b3e', padding: '8px', textAlign: 'left', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', letterSpacing: '-0.2px' }}>Designation</th>
                                                                            </tr>
                                                                            {[
                                                                                { sno: 1, name: "Dr. P.Suresh Kumar", desig: "Principal" },
                                                                                { sno: 2, name: "Dr.P.Perumal", desig: "Vice Principal" },
                                                                                { sno: 3, name: "Mr.V.Prabhakar", desig: "Associate Professor" },
                                                                                { sno: 4, name: "Mr.M.Subramani", desig: "Associate Professor" },
                                                                                { sno: 5, name: "Mr.Jimmy alex", desig: "Associate Professor" },
                                                                                { sno: 6, name: "Mrs.N.Vinodhini", desig: "Associate Professor" },
                                                                                { sno: 7, name: "Mr.R.Arulselvam", desig: "Assistant Professor" }
                                                                            ].map((row, index) => (
                                                                                <tr key={index} style={{ backgroundColor: index % 2 !== 0 ? '#f2f2f2' : '#fff', color: '#000' }}>
                                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.sno}</td>
                                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.name}</td>
                                                                                    <td style={{ border: '1px solid #438b3e', padding: '8px', fontFamily: '"Roboto", Helvetica, Arial, Verdana, sans-serif', fontSize: '16px', fontWeight: '500', letterSpacing: '-0.2px' }}>{row.desig}</td>
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
                                        {/* FAQ Item End */}

                                        {/* FAQ Item Start */}
                                        <div className="accordion-item wow fadeInUp" data-wow-delay="0.25s">
                                            <h2 className="accordion-header" id="headingTwo">
                                                <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={{ textTransform: 'uppercase', color: '#222' }}>
                                                    SC/ST COMMITTEE - MINUTES OF MEETING
                                                </button>
                                            </h2>
                                            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordion">
                                                <div className="accordion-body">
                                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                                        <li style={{ color: '#222' }}>The session led by Dr. S. Jayaraman commenced with a focus on strategies aimed at effectively addressing grievances, particularly emphasizing the importance of fostering a secure and inclusive environment for all SC/ST students.</li>
                                                        <li style={{ color: '#222' }}>Deliberations within the committee ensued, centering on various concerns surrounding grievances, harassment, and discrimination faced by SC/ST students.</li>
                                                        <li style={{ color: '#222' }}>The committee reviewed reported incidents and actions taken since the previous meeting. Engaging in thorough discussion.</li>
                                                        <li style={{ color: '#222' }}>In a unanimous decision, the committee resolved to strengthen efforts in promptly a investigating and resolving complaints, with a commitment to providing support to affected individuals and implementing proactive measures to prevent recurrence.</li>
                                                        <li style={{ color: '#222' }}>Action points were subsequently distributed among members, encompassing the refinement of complaint management protocols, the organization of awareness programs on harassment prevention, and ensuring the utmost confidentiality and sensitivity in complaint resolution processes.</li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        {/* FAQ Item End */}
                                    </div>
                                    {/* FAQ Accordion End */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default SCSTCommittee;
