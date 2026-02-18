import { Link } from "react-router-dom";

function Header() {
  return (
    <>
     

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              <Link className="navbar-brand" to="/">
                <img
                  className="web"
                  src="/images/shanmuga/logo.png"
                  alt="Logo"
                />
              </Link>

              <div className="collapse navbar-collapse main-menu">
                <div className="nav-menu-wrapper">
                  <ul className="navbar-nav mr-auto" id="menu">
                    <li className="nav-item">
                      <Link className="nav-link" to="/">
                        HOME
                      </Link>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        ABOUT{" "}
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to="/about">
                            About SSCOP
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/about-trust">
                            About Trust
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/chairman">
                            Chairman
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/executive-director">
                            Executive Director
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/principal">
                            Principal
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/viceprincipal">
                            Vice Principal
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/Accreditation.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Accreditation & Recognition
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/governing-council">
                            Governing Council
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/strategicplan">
                            Strategic Plan
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/Organogram.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Organogram
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/Code-Of-conduct.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Code of Conduct
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        ACADEMICS{" "}
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to="/dpharm">
                            Programmes Offered
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/dop">
                            Faculties
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            className="nav-link"
                            to="/curriculum-development"
                          >
                            Curriculum Development Council
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a className="nav-link" href="#">
                            Co-curricular activities
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/Academic-calendar.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Academic Calendar
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/program.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Programme Outcomes
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/course.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Course Outcomes
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        RESEARCH
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/Research-Policies.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Research Policies
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/national">
                            National/International Conferences
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        IQAC
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to="/about-iqac">
                            About IQAC
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/iqac-members">
                            IQAC Composition
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/iqac.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Minutes Of Meeting{" "}
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="#"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Annual Report
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/aishe">
                            AISHE
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/feedback">
                            Feedback
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        NAAC
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/iiqa.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            IIQA
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/criteria1">
                            SSR
                          </Link>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/Bestpractice.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Best Practices
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/pdf/Distinctiveness-area.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Institute Distinctiveness
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        SIF REPORT{" "}
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/sif/2019-2020.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            SIF Report 2019-2020
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/sif/2020-2021.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            SIF Report 2020-2021
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/sif/2021-2022.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            SIF Report 2021-2022
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/sif/2022-2023.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            SIF Report 2022-2023
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/sif/2023-2024.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            SIF Report 2023-2024
                          </a>
                        </li>
                        <li className="nav-item">
                          <a
                            className="nav-link"
                            href="/sif/2024-2025.pdf"
                            target="_blank"
                            rel="noreferrer"
                          >
                            SIF Report 2024-2025
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item submenu">
                      <a className="nav-link" href="#">
                        COMMITTEES{" "}
                      </a>
                      <ul className="sub-menu">
                        <li className="nav-item">
                          <Link className="nav-link" to="/antidiscrimination">
                            Anti Discrimination Cell
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/antiragging">
                            Anti Ragging Committee
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/gender">
                            Gender Sensitization Cell
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/sc-st">
                            SC / ST Committee
                          </Link>
                        </li>
                        <li>
                          <a
                            href="https://docs.google.com/forms/d/e/1FAIpQLSdw5xH5lPLTwwxWSLPqJ1LXpBMYNUZwlw096v-rSNylw4LKjg/viewform"
                            target="_blank"
                            rel="noreferrer"
                          >
                            Grievance Form
                          </a>
                        </li>
                        <li className="nav-item">
                          <Link className="nav-link" to="/internal_committee">
                            Internal Complaints Committee
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/gallery">
                        STUDENT LIFE
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>
    </>
  );
}

export default Header;
