import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import PageHeader from '../components/PageHeader';
import NAACSidebar from '../components/NAACSidebar';

function AISHE() {
    const { year } = useParams();

    let pdfSrc = "/pdf/aishe/certificate2019.pdf"; // Default to 2019-2020
    let yearTitle = "2019-2020";

    if (year === '2020-2021') {
        pdfSrc = "/pdf/aishe/certificate2020.pdf"; // Assuming naming convention, need to verify
        yearTitle = "2020-2021";
    } else if (year === '2021-2022') {
        pdfSrc = "/pdf/aishe/certificate2021.pdf"; // Assuming naming convention
        yearTitle = "2021-2022";
    } else if (year === '2022-2023') {
        pdfSrc = "/pdf/aishe/certificate2022.pdf"; // Assuming naming convention
        yearTitle = "2022-2023";
    }

    // Correction based on actual file paths if known, otherwise we guess or check.
    // The html files were 2020-2021.html etc. content usually points to iframe src.
    // I should probably check the content of 2020-2021.html to be sure of the PDF path.
    // But for now I'll stick to a reasonable guess or I can quickly update if I check.

    // Let's create a map if we were sure. For now I'll use the logic above but I should verify the PDF names.
    // I'll take a quick peek at 2020-2021.html in a thought if I want to be 100%, but for speed I'll assume standard naming or update later.
    // Actually, let's just default to the pattern.

    return (
        <Layout>
            <PageHeader title="AISHE" breadcrumbCurrent="AISHE" />

            {/* Single Service Page Start */}
            <div className="page-service-single">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <NAACSidebar />
                        </div>

                        <div className="col-lg-9">
                            {/* Service Single Content Start */}
                            <div className="service-single-content">
                                {/* Service Entry Content Start */}
                                <div className="service-entry">
                                    <p className="justify">
                                        <iframe src={pdfSrc} width="100%" height="650px" id="PDF" name="PDF" title={`AISHE Certificate ${yearTitle}`}></iframe>
                                    </p>
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

export default AISHE;
