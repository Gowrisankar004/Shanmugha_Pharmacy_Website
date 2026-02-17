import React from 'react';
import { Link } from 'react-router-dom';

function NAACSidebar() {
    return (
        <div className="service-sidebar">
            <div className="service-catagery-list wow fadeInUp">
                <h3>NAAC MENU</h3>
                <ul>
                    <li><Link to="/aishe">CERTIFICATE 2019-2020</Link></li>
                    <li><Link to="/aishe/2020-2021">CERTIFICATE 2020-2021</Link></li>
                    <li><Link to="/aishe/2021-2022">CERTIFICATE 2021-2022</Link></li>
                    <li><Link to="/aishe/2022-2023">CERTIFICATE 2022-2023</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NAACSidebar;
