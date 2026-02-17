import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Avathara() {
    return (
        <Layout>
            <PageHeader title="AVATHARA 2023" breadcrumbCurrent="Avathara 2023" />

            {/* Photo Gallery Section Start */}
            <div className="our-gallery-page">
                <div className="container">
                    {/* gallery section start */}
                    <div className="row gallery-items">
                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/1.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/1.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="0.2s" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/2.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/2.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="0.6s" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/4.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/4.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="0.8s" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/5.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/5.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="1s" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/6.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/6.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="1.2s" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/7.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/7.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="1.4s" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/8.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/8.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="1.6s" data-cursor-text="View">
                                <a href="/images/shanmuga/fes/9.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/fes/9.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>
                    </div>
                    {/* gallery section end */}
                </div>
            </div>
            {/* Photo Gallery Section End */}
        </Layout>
    );
}

export default Avathara;
