import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

function Library() {
    return (
        <Layout>
            <PageHeader title="LIBRARY" breadcrumbCurrent="Library" />

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
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>LIBRARY</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The SSCOP takes pride in having a Library with build-up area of 454 Sq.m. It has a well-furnished reading hall. SSCET Library uses fully automated ILMS software by AutoLib. The automated package of library services provides circulation, acquisitions, cataloguing, web OPAC, Report Generation, Email & SMS Alert etc. Book database is created along with the user’s database. The students and Faculty members are encouraged to utilize the learning materials available in the library. Patrons can borrow books using the ID card issued by the college. Issue return process is fully automated and manual cards are kept as supporting documents for students and faculty.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        SSCOP library follows bar-code system to track the movement of the books and to check the availability of the books. The Central Library subscribes to national and international journals. e-Journals like Springer, ProQuest, J-Gate are available in the Library. For accessing the E-resources computers with LAN connectivity are made available for students and staff members. The Library is also Wi-Fi enabled. Free internet browsing and photocopying facilities with nominal charges are also available throughout the working hours in the central library to cater to the needs of staff and students.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The NDL [National Digital Library] is a digital repository containing textbooks, articles, videos, audio books, lectures, thesis and all other kinds of learning media. It provides a single-window search facility to access all digital contents and sources under a single umbrella at free of cost.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The NPTEL and DELNET facilities are very useful to the students & staff. Inter library loan[ILL] facility is also available in DELNET, the students and staff can request for books, photocopies and Articles by ILL. To watch NPTEL and Swayam MOOC’s videos a TV and Swayam Prabha DTH Dish connection with 32 channels are available in the library. Apart From that epathashala,e PGpathashala .The Open access system is practiced in the library. Besides the central library, departmental libraries also function in the SSCET campus. CCTV cameras are placed at strategic points in the entire library for surveillance.
                                    </p>
                                    <ul className="wow fadeInUp" data-wow-delay="1s">
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Selecting, acquiring, organizing, maintaining and making accessible a collection of printed and non-printed, primary and secondary materials that will support the educational, research and public service programmers of both students and the faculty.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Providing library users with point-of-use instruction, personal assistance in conducting literature research and other reference services.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Providing an environment conducive to the optimum use of library materials and an appropriate schedule of hours of service and professional assistance.</li>
                                        <li style={{ color: '#222', marginBottom: '10px' }}>Enhancing the library’s resources and services through cooperative relationship with other libraries and agencies.</li>
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

export default Library;
