import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Gallery() {
    return (
        <Layout>
            <PageHeader title="STUDENTS LIFE" breadcrumbCurrent="Students Life" />

            {/* Blog Post Area Start */}
            <div className="blog-post-area rts-section-gap" style={{ marginTop: '50px', marginBottom: '70px' }}>
                <div className="container">
                    <div className="row g-24 mt--20">
                        {/* Blog Single 1 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-single-one text-center">
                                <Link to="/parambariyam" className="thumbnail">
                                    <div className="inner">
                                        <img src="/images/shanmuga/parambariyam/1.webp" alt="Parambariyam 2023" />
                                    </div>
                                </Link>
                                <div className="body text-start">
                                    <Link to="/parambariyam">
                                        <h3 className="title" style={{ textAlign: 'center' }}>PARAMBARIYAM 2023</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Blog Single 2 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-single-one text-center">
                                <Link to="/iyarkai" className="thumbnail">
                                    <div className="inner">
                                        <img src="/images/shanmuga/iyarkai/1.webp" alt="Iyarkai 2023" />
                                    </div>
                                </Link>
                                <div className="body text-start">
                                    <Link to="/iyarkai">
                                        <h3 className="title" style={{ textAlign: 'center' }}>IYARKAI 2023</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Blog Single 3 */}
                        <div className="col-lg-4 col-md-6 col-sm-12 col-12">
                            <div className="blog-single-one text-center">
                                <Link to="/avathara" className="thumbnail">
                                    <div className="inner">
                                        <img src="/images/shanmuga/fes/1.webp" alt="Avathara 2023" />
                                    </div>
                                </Link>
                                <div className="body text-start">
                                    <Link to="/avathara">
                                        <h3 className="title" style={{ textAlign: 'center' }}>AVATHARA 2023</h3>
                                    </Link>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
            {/* Blog Post Area End */}
        </Layout>
    );
}

export default Gallery;
