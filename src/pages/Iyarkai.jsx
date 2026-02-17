import React from 'react';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';

function Iyarkai() {
    return (
        <Layout>
            <PageHeader title="IYARKAI 2023" breadcrumbCurrent="Iyarkai 2023" />

            {/* Photo Gallery Section Start */}
            <div className="our-gallery-page">
                <div className="container">
                    {/* gallery section start */}
                    <div className="row gallery-items">
                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-cursor-text="View">
                                <a href="/images/shanmuga/iyarkai/1.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/iyarkai/1.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="0.2s" data-cursor-text="View">
                                <a href="/images/shanmuga/iyarkai/2.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/iyarkai/2.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="0.6s" data-cursor-text="View">
                                <a href="/images/shanmuga/iyarkai/4.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/iyarkai/4.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="0.8s" data-cursor-text="View">
                                <a href="/images/shanmuga/iyarkai/5.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/iyarkai/5.webp" alt="" />
                                    </figure>
                                </a>
                            </div>
                            {/* image gallery end */}
                        </div>

                        <div className="col-lg-4 col-md-6">
                            {/* image gallery start */}
                            <div className="photo-gallery wow fadeInUp" data-wow-delay="1s" data-cursor-text="View">
                                <a href="/images/shanmuga/iyarkai/3.webp">
                                    <figure className="image-anime">
                                        <img src="/images/shanmuga/iyarkai/3.webp" alt="" />
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

export default Iyarkai;
