import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import FacilitiesSidebar from '../components/FacilitiesSidebar';

function WasteManagement() {
    return (
        <Layout>
            <PageHeader title="WASTE MANAGEMENT" breadcrumbCurrent="Waste Management" />

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
                                    <h2 className="text-anime-style-3 ela" style={{ marginTop: '20px' }}>Management of degradable and non – degradable waste</h2>
                                </div>
                                {/* Section Title End */}
                                {/* Our Story Body Start */}
                                <div className="about-story-body wow fadeInUp" data-wow-delay="0.25s">
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Our Institution is highly conscious of the responsibilities to maintain the campus clean and green hence different kinds of waste management practices are adopted to keep the campus clean and hygienic. The different kinds of waste materials available in the premises of the institution are safely disposed by various methods in respect to the intensity of the waste materials. The following are the measures involved in the best waste management criteria.
                                    </p>
                                    <br />
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>SOLID WASTE MANAGEMENT</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Solid waste management refers to the collecting, treating, and disposing of solid material that is discarded or is no longer useful.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        Solid waste materials available in the campus are papers – Used papers in the office, Exam papers and used newspapers – and leaf litters and vegetable wastes.
                                    </p>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The paper scraps amounts to 100 Kilo gram approximately every semester and are disposed to the paper scrap dealer. Solid waste materials like leaf litter effectively converted into compost, a natural manure for supplementing nutritional supply to the garden. Leaf litters collected and dried are used in the biogas plant with supplement of cow dung as inoculums to generate methane gas. Vegetable litters are collected properly and segregated and dried for the production of compost and biogas. The campus is provided with the composting facility and biogas production plant. Organic waste available in the campus is converted in to compost in the pit available in the garden and the organic manure produced in the compost yard is used to maintain the garden.
                                    </p>
                                    <br />
                                    <h3 style={{ fontSize: '21px' }}>LIQUID WASTE MANAGEMENT</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        All the experiments carried out in the chemistry laboratory non- hazardous in nature. Direct usage of strong acidic or basic solutions are not involved in the laboratory experiments. Radioactive and hazardous chemicals are strictly not used in the laboratory. The strength of the solution used during the experiments is less. The laboratory solvents and solutions are diluted when completing the experimental procedure. Further, this solution is getting diluted using water before discharge through the safe disposal of the chemical laboratory spent waste water. Public health and environmental safety are high priority for our Institution. The Institution is maintaining safe and secure living environment in and around the campus.
                                    </p>
                                    <br />
                                    <h3 style={{ fontSize: '21px' }}>Discharge of chemistry laboratory waste water:</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The drained water from bathroom, kitchen, and lavatories are collected and treated in the sewage water plants are called waste water. It contains various organic and inorganic pollutants, microorganisms, bacteria of different diseases etc. This liquid waste/ sewage water and the waste water generated during the RO process is diverted to the garden and the Farm located in the campus thus providing the garden and the farm with water irrigation independent of any bore well and waste water from RO Plant. Hazardous waste and Biomedical waste management:
                                    </p>
                                    <br />
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>BIO-MEDICAL WASTE MANAGEMENT</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        No biomedical waste materials are generated in the campus.
                                    </p>
                                    <br />
                                    <h3 style={{ fontSize: '21px', textTransform: 'uppercase' }}>E WASTE MANAGEMENT</h3>
                                    <p style={{ textAlign: 'justify', color: '#222', fontFamily: 'Roboto, Helvetica, Arial, Verdana, sans-serif' }}>
                                        The E – waste generated from the campus is handed over to the authorized dealers who purchase the E-scraps and turn them into useful products. Apart from this a special training during laboratory session is given to the students to rectify the faults observed in the electrical devices and thereby minimizing the generation of E-waste.
                                    </p>
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

export default WasteManagement;
