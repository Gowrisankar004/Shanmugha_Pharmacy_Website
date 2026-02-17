import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

function Hostel() {
    return (
        <Layout>
            <PageHeader title="HOSTELS" breadcrumbCurrent="Hostel" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4">
                            <FacilitiesSidebar />
                        </div>

                        <div className="col-lg-8">
                            <div className="about-story-content">
                                {/* Section Title Start */}
                                <div className="section-title">
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>HOSTEL</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            SSCOP provides accommodation to students wishing to reside in the hostels. Hostel in the institute is an independent unit in respect to its internal administration under the overall supervision is done by the Principal and the Hostel Management. The hostel is administered by a Warden appointed by the Chairman and he/she will be assisted by the assistant warden.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            Hostel has a Hostel Council which is an advisory body comprising the Warden (as its Chairman), the assistant warden and the elected student secretaries as its members. The Hostel Council plans the students activities for a year which includes preparation for the sports budget, recreational and other social activities and is also responsible for the functioning of mess with the help of the mess committee.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            The Hostel Office is located within the hostel premises. The Office maintains all the files, registers, records, ledgers, account books, suppliers bill, payment registers and etc., pertaining to the hostel residents, mess and the employees. The Hostel Office will be in service on all weekdays.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            Every student who has been admitted in the institution is required to pay the prescribed hostel fee and establishment charges along with a refundable hostel mess caution deposit. These fee are subjected to revision. The change in rooms is effected in accordance with the rules followed by hostel and with the warden's approval.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            Each room is provided with a cot, a table, a chair, a bookshelf, and a ceiling fan. Residents cannot move the furniture or fittings from one room to another. Private cooking in the rooms is prohibited. Smoking, consumption of alcoholic drinks and use of narcotic drugs is strictly prohibited.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            Guests of the residents may be permitted to stay in the hostel by the Chairman on necessary payment in the office. During night time guests will be permitted in a student room with the warden's prior permission.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            Boys are not allowed to visit girls hostel and vice-versa.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            A number of recreational, sports, literary and social activities take place in the hostel during the academic year. A few rooms in the hostel are used for common facilities such as the Library, Computer Room, Indoor Sports etc. Laundry facilities is available in the hostel. Students can relax in the evenings or on holidays or spend their leisure time in the Common Room which is equipped with a T.V, a music system, newspapers and magazines. The Hostel Library has a good collection of general books, fiction, comics etc.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            An external security agency is contracted for providing security and it is monitored by the Warden and the Assistant Warden.
                                        </li>
                                        <li style={{ color: '#222', textAlign: 'justify', marginBottom: '15px' }}>
                                            Application for Admission to the Hostel shall be made in the prescribed form.
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Single Service Page End */}
        </Layout>
    );
}

export default Hostel;
