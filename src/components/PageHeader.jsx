import { Link } from 'react-router-dom';

function    PageHeader({ title, breadcrumbHome = "home", breadcrumbCurrent }) {
    return (
        <div className="page-header parallaxie">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="page-header-box">
                            <h1 className="text-anime-style-3" data-cursor="-opaque">{title}</h1>
                            <nav className="wow fadeInUp">
                                <ol className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/">{breadcrumbHome} / </Link></li> 
                                    <li className="breadcrumb-item active" aria-current="page">{breadcrumbCurrent}</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageHeader;
