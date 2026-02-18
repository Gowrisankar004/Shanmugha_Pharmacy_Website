import { useEffect } from "react";
import { Link } from "react-router-dom";

function Home() {
  useEffect(() => {
    // Function to initialize plugins
    const initPlugins = () => {
      const $ = window.jQuery;
      const gsap = window.gsap;
      const SplitText = window.SplitText;
      const ScrollTrigger = window.ScrollTrigger;

      if (!$) return;

      // Preloader Effect
      $(".preloader").fadeOut(600);

      // Sticky Header
      const $window = $(window);
      const handleScroll = () => {
        const fromTop = $window.scrollTop();
        const $headerSticky = $("header .header-sticky");
        const headerHeight = $headerSticky.outerHeight();
        $("header.main-header").css("height", headerHeight);

        $headerSticky.toggleClass("hide", fromTop > headerHeight + 100);
        $headerSticky.toggleClass("active", fromTop > 600);
      };

      $window.on("scroll", handleScroll);
      handleScroll(); // Initial check

      // Slick Menu JS
      if ($.fn.slicknav) {
        $("#menu").slicknav({
          label: "",
          prependTo: ".responsive-menu",
        });
      }

      // Scroll to Top
      if ($("a[href='#top']").length) {
        $("a[href='#top']").on("click", function () {
          $("html, body").animate({ scrollTop: 0 }, "slow");
          return false;
        });
      }

      // WOW.js
      if (window.WOW) {
        new window.WOW().init();
      }

      // Swiper for hero slider
      if (window.Swiper) {
        new window.Swiper(".hero-slider-layout .swiper", {
          slidesPerView: 1,
          loop: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          autoplay: {
            delay: 5000,
          },
        });
      }

      // Counter
      if ($.fn.counterUp) {
        $(".counter").counterUp({
          delay: 10,
          time: 1000,
        });
      }

      // Magnific Popup
      if ($.fn.magnificPopup) {
        $(".photo-gallery a").magnificPopup({
          type: "image",
          gallery: {
            enabled: true,
          },
        });

        if ($(".gallery-items").length) {
          $(".gallery-items").magnificPopup({
            delegate: "a",
            type: "image",
            closeOnContentClick: false,
            closeBtnInside: false,
            mainClass: "mfp-with-zoom",
            image: {
              verticalFit: true,
            },
            gallery: {
              enabled: true,
            },
            zoom: {
              enabled: true,
              duration: 300,
              opener: function (element) {
                return element.find("img");
              },
            },
          });
        }

        if ($(".popup-video").length) {
          $(".popup-video").magnificPopup({
            type: "iframe",
            mainClass: "mfp-fade",
            removalDelay: 160,
            preloader: false,
            fixedContentPos: true,
          });
        }
      }

      // GSAP Animations
      if (gsap && ScrollTrigger && SplitText) {
        gsap.registerPlugin(ScrollTrigger);

        // Image Reveal
        if ($(".reveal").length) {
          let revealContainers = document.querySelectorAll(".reveal");
          revealContainers.forEach((container) => {
            let image = container.querySelector("img");
            let tl = gsap.timeline({
              scrollTrigger: {
                trigger: container,
                toggleActions: "play none none none",
              },
            });
            tl.set(container, { autoAlpha: 1 });
            tl.from(container, 1, { xPercent: -100, ease: "power2.out" });
            tl.from(image, 1, {
              xPercent: 100,
              scale: 1,
              delay: -1,
              ease: "power2.out",
            });
          });
        }

        // Text Animations
        const animateText = (selector, fromVars) => {
          const elements = document.querySelectorAll(selector);
          elements.forEach((element) => {
            if (element.anim) element.anim.progress(1).kill();
            if (element.split) element.split.revert();

            element.split = new SplitText(element, {
              type: "lines,words,chars",
              linesClass: "split-line",
            });
            gsap.set(element, { perspective: 400 });
            gsap.set(element.split.chars, { opacity: 0, x: "50" });

            element.anim = gsap.to(element.split.chars, {
              scrollTrigger: { trigger: element, start: "top 90%" },
              x: "0",
              y: "0",
              rotateX: "0",
              opacity: 1,
              duration: 1,
              ease: "back.out",
              stagger: 0.02,
              ...fromVars,
            });
          });
        };

        if ($(".text-anime-style-3").length) {
          animateText(".text-anime-style-3", {});
        }
      }
    };

    // Use timeout to ensure DOM is ready and scripts are loaded
    const timer = setTimeout(initPlugins, 100);

    return () => {
      clearTimeout(timer);
      const $ = window.jQuery;
      if ($) {
        $(window).off("scroll");
      }
      // Cleanup Swiper instances if possible
    };
  }, []);

  return (
    <>
      <style>{`
                @media only screen and (max-width: 600px) {
                    .web {
                        width: 250px;
                    }
                }
                @media only screen and (max-width: 600px) {
                    .ela {
                        font-size: 23px !important;
                    }
                }
                .logo-item {
                    background: #fff;
                    -ms-border-radius: 6px;
                    border-radius: 5px;
                    border: 1px solid rgb(16 91 9);
                    text-align: center;
                    padding-top: 5px;
                    padding-bottom: 5px;
                }
                .blinking {
                    animation: blinkingText 1.2s infinite;
                }
                @keyframes blinkingText {
                    0% { color: yellow; }
                    49% { color: yellow; }
                    60% { color: transparent; }
                    99% { color: transparent; }
                    100% { color: yellow; }
                }
                .banner-button {
                    position: fixed;
                    top: 38%;
                    right: 45px;
                    z-index: 999;
                    transform: translate(0, 50%);
                    -webkit-transform: translate(0, 50%);
                }
                .banner-button a {
                    font-family: 'Century Gothic';
                    width: 195px;
                    font-size: 16px;
                    height: 45px;
                    display: block;
                    background: #438b3e;
                    text-align: center;
                    color: #fff;
                    line-height: 45px;
                    text-transform: uppercase;
                    font-weight: 600;
                    letter-spacing: 1px;
                    transform: rotate(-90deg);
                    left: -73px;
                    position: absolute;
                    -webkit-transform: rotate(-90deg);
                    z-index: 99;
                    transition: all 0.3s ease-in;
                    top: 92px;
                }
                @-webkit-keyframes blinker {
                    from { opacity: 1.0; }
                    to { opacity: 0.0; }
                }
                .blink {
                    text-decoration: blink;
                    -webkit-animation-name: blinker;
                    -webkit-animation-duration: 0.4s;
                    -webkit-animation-iteration-count: infinite;
                    -webkit-animation-timing-function: ease-in-out;
                    -webkit-animation-direction: alternate;
                }
            `}</style>

      {/* Preloader Start */}
      <div className="preloader">
        <div className="loading-container">
          <div className="loading"></div>
          <div id="loading-icon">
            <img src="/images/shanmuga/preloader.png" alt="" />
          </div>
        </div>
      </div>
      {/* Preloader End */}

      {/* Topbar Section Start */}
      <div className="topbar">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-5">
              {/* Topbar Contact Information Start */}
              <div className="topbar-contact-info">
                <ul>
                  <li>
                    <a href="#">
                      <i className="fa-solid fa-phone"></i> +91 73735 95999
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <i className="fa-regular fa-envelope"></i>{" "}
                      principal.pharmacy@shanmugha.edu.in
                    </a>
                  </li>
                </ul>
              </div>
              {/* Topbar Contact Information End */}
            </div>
            <div className="col-lg-5 col-md-5">
              {/* Topbar Contact Information Start */}
              <div className="topbar-contact-info">
                <ul>
                  <li style={{ marginRight: "1px" }}>
                    <a
                      className="blinking"
                      href="https://newadmissions.shanmugha.edu.in/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      ADMISSION
                    </a>
                    <span style={{ color: "#fff" }}>| </span>
                  </li>
                  <li style={{ marginRight: "1px" }}>
                    <a href="/pdf/nirf.pdf" target="_blank" rel="noreferrer">
                      NIRF
                    </a>
                    <span style={{ color: "#fff" }}>| </span>
                  </li>
                  <li style={{ marginRight: "1px" }}>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScg9l4CgSqGB0PFZWVbxn9Tu8MDyIedrjYp2aWttj9wWHwMXg/viewform"
                      target="_blank"
                      rel="noreferrer"
                    >
                      CAREER
                    </a>
                    <span style={{ color: "#fff" }}>| </span>
                  </li>
                  <li style={{ marginRight: "1px" }}>
                    <Link to="/iic">IIC</Link>
                    <span style={{ color: "#fff" }}>| </span>
                  </li>
                  <li style={{ marginRight: "1px" }}>
                    <Link to="/placement">PLACEMENT</Link>
                    <span style={{ color: "#fff" }}>| </span>
                  </li>
                  <li style={{ marginRight: "1px" }}>
                    <Link to="/facilities">FACILITIES</Link>
                    <span style={{ color: "#fff" }}>| </span>
                  </li>
                  <li style={{ marginRight: "1px" }}>
                    <Link to="/contact">CONTACT</Link>
                  </li>
                </ul>
              </div>
              {/* Topbar Contact Information End */}
            </div>
            <div className="col-lg-2 col-md-4">
              {/* Topbar Social Links Start */}
              <div className="topbar-social-links">
                <ul>
                  <li>
                    <a href="https://youtube.com/@shanmughalive3140">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/company/sri-shanmugha-educational-institutions/">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/shanmughainstitutions/">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>
              {/* Topbar Social Links End */}
            </div>
          </div>
        </div>
      </div>
      {/* Topbar Section End */}

      {/* Header Start */}
      <header className="main-header">
        <div className="header-sticky">
          <nav className="navbar navbar-expand-lg">
            <div className="container">
              {/* Logo Start */}
              <Link className="navbar-brand" to="/">
                <img
                  className="web"
                  src="/images/shanmuga/logo.png"
                  alt="Logo"
                />
              </Link>
              {/* Logo End */}

              {/* Main Menu Start */}
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
                          <a className="nav-link" href="/pdf/Accreditation.pdf">
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
              {/* Main Menu End */}
              <div className="navbar-toggle"></div>
            </div>
          </nav>
          <div className="responsive-menu"></div>
        </div>
      </header>

      <div className="banner-button">
        <a href="https://newadmissions.shanmugha.edu.in/" target="_blank">
          Admission Enquiry{" "}
        </a>
      </div>

      {/* Hero Section Start */}
      <div className="hero hero-slider">
        <div className="hero-slider-layout">
          <div className="swiper">
            <div className="swiper-wrapper">
              {/* Hero Slide Start */}
              <div className="swiper-slide">
                <div className="hero-slide">
                  {/* Slider Image Start */}
                  <div className="hero-slider-image">
                    <img src="/images/shanmuga/banner1.jpg" alt="" />
                  </div>
                  {/* Slider Image End */}

                  {/* Slider Content Start */}
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Hero Content Start */}
                        <div className="hero-content">
                          <div className="hero-content-title">
                            <h3 className="wow fadeInUp">
                              WELCOME TO SHANMUGHA PHARMACY{" "}
                            </h3>
                            <h1
                              className="text-anime-style-3"
                              data-cursor="-opaque"
                            >
                              Shape Your Future, Impact Lives with Pharmacy
                              Education
                            </h1>
                          </div>

                          <div
                            className="hero-content-footer wow fadeInUp"
                            data-wow-delay="0.5s"
                          >
                            <Link to="/about" className="btn-default">
                              ABOUT US
                            </Link>
                            <Link
                              to="/dpharm"
                              className="btn-default btn-highlighted"
                            >
                              VIEW COURSES
                            </Link>
                          </div>
                        </div>
                        {/* Hero Content End */}
                      </div>
                    </div>
                  </div>
                  {/* Slider Content End */}
                </div>
              </div>
              {/* Hero Slide End */}

              {/* Hero Slide Start */}
              <div className="swiper-slide">
                <div className="hero-slide">
                  {/* Slider Image Start */}
                  <div className="hero-slider-image">
                    <img src="/images/shanmuga/banner2.jpg" alt="" />
                  </div>
                  {/* Slider Image End */}

                  {/* Slider Content Start */}
                  <div className="container">
                    <div className="row">
                      <div className="col-lg-12">
                        {/* Hero Content Start */}
                        <div className="hero-content">
                          <div className="hero-content-title">
                            <h3 className="wow fadeInUp">
                              WELCOME TO SHANMUGHA PHARMACY{" "}
                            </h3>
                            <h1
                              className="text-anime-style-3"
                              data-cursor="-opaque"
                            >
                              Where Science Meets Compassion
                            </h1>
                          </div>

                          <div
                            className="hero-content-footer wow fadeInUp"
                            data-wow-delay="0.5s"
                          >
                            <Link to="/about" className="btn-default">
                              ABOUT US
                            </Link>
                            <Link
                              to="/dpharm"
                              className="btn-default btn-highlighted"
                            >
                              VIEW COURSES
                            </Link>
                          </div>
                        </div>
                        {/* Hero Content End */}
                      </div>
                    </div>
                  </div>
                  {/* Slider Content End */}
                </div>
              </div>
              {/* Hero Slide End */}
            </div>
            <div className="swiper-pagination"></div>
          </div>
        </div>
        <marquee
          behavior=""
          direction=""
          onMouseOver={(e) => e.target.stop()}
          onMouseOut={(e) => e.target.start()}
          style={{
            backgroundColor: "#438b3e",
            color: "white",
            padding: "10px",
          }}
        >
          <a
            href="/images/NAAC_selfstudy.pdf"
            target="_blank"
            rel="noreferrer"
            style={{ color: "white", fontWeight: "bold" }}
          >
            <img
              src="/images/new.png"
              width="40"
              height="40"
              className="blink"
              alt=""
            />
            &nbsp; NAAC Self Study Report (SSR)
          </a>
        </marquee>
      </div>
      {/* Hero Section End */}

      {/* Page About Us Start */}
      <div className="page-about-us">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              {/* About Us Image Start */}
              <div className="about-us-image">
                <div className="about-img-1">
                  <figure className="image-anime reveal">
                    <img src="/images/shanmuga/aboutus1.png" alt="" />
                  </figure>
                </div>
                <div className="about-img-2">
                  <figure className="image-anime reveal">
                    <img src="/images/shanmuga/aboutus.png" alt="" />
                  </figure>
                </div>

                {/* Counter Item Start */}
                <div className="experience-counter-item wow fadeInUp">
                  {/* Counter Content Start */}
                  <div className="experience-counter-content">
                    <h3>
                      <span className="counter">7</span>+
                    </h3>
                    <p>years of experience</p>
                  </div>
                  {/* Counter Content End */}
                </div>
                {/* Counter Item End */}
              </div>
              {/* About Us Image End */}
            </div>
            <div className="col-lg-5">
              {/* About Story Content Start */}
              <div className="about-story-content">
                {/* Section Title Start */}
                <div className="section-title">
                  <h3 className="wow fadeInUp">ABOUT US</h3>
                  <h2 className="text-anime-style-3 ela">
                    WELCOME TO SRI SHANMUGHA COLLEGE OF PHARMACY
                  </h2>
                </div>
                {/* Section Title End */}

                {/* Our Story Body Start */}
                <div
                  className="about-story-body wow fadeInUp"
                  data-wow-delay="0.25s"
                >
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#222",
                      fontFamily:
                        "Roboto, Helvetica, Arial, Verdana, sans-serif",
                    }}
                  >
                    Sri Shanmugha College of Pharmacy is a premier institution
                    in the Salem district, renowned for its exceptional
                    educational services. The college has significantly
                    benefited the city of Salem and its surrounding villages,
                    serving people from various walks of life. Our institution
                    boasts a team of highly skilled and intellectually capable
                    faculty members dedicated to student success. The core
                    motto, "I CAN," is embedded in our ethos, empowering each
                    student to achieve self-reliance and excellence.
                  </p>
                  <p
                    style={{
                      textAlign: "justify",
                      color: "#222",
                      fontFamily:
                        "Roboto, Helvetica, Arial, Verdana, sans-serif",
                    }}
                  >
                    Our partnerships with numerous international universities,
                    hospitals, prominent pharmaceutical companies, and clinical
                    research centers provide students with unparalleled
                    opportunities and experiences. We are committed to extending
                    our services through health camps for those in need in both
                    rural and urban areas.
                  </p>
                </div>
                {/* Our Story Body End */}

                {/* Our Story Footer Start */}
                <div className="about-story-footer">
                  {/* About Story Button Start */}
                  <div
                    className="about-story-btn wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    <a href="#" className="btn-default">
                      Read More
                    </a>
                  </div>
                  {/* About Story Button End */}
                </div>
                {/* Our Story Footer End */}
              </div>
              {/* About Story Content End */}
            </div>
          </div>
        </div>
      </div>
      {/* Page About Us End */}

      {/* Company Counter Start */}
      <div className="company-counter">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              {/* Company Counter Item Start */}
              <div className="company-counter-item">
                <div className="counter-content">
                  <img
                    src="/images/shanmuga/rating.png"
                    style={{ paddingBottom: "10px" }}
                    alt=""
                  />
                  <h3>
                    <span className="counter">7</span>+
                  </h3>
                  <p>Years Of Academic Excellence</p>
                </div>
              </div>
              {/* Company Counter Item End */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Company Counter Item Start */}
              <div className="company-counter-item">
                <div className="counter-content">
                  <img
                    src="/images/shanmuga/reading.png"
                    style={{ paddingBottom: "10px" }}
                    alt=""
                  />
                  <h3>
                    <span className="counter">500</span>+
                  </h3>
                  <p>Total Students</p>
                </div>
              </div>
              {/* Company Counter Item End */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Company Counter Item Start */}
              <div className="company-counter-item">
                <div className="counter-content">
                  <img
                    src="/images/shanmuga/education.png"
                    style={{ paddingBottom: "10px" }}
                    alt=""
                  />
                  <h3>
                    <span className="counter">35</span>+
                  </h3>
                  <p>Faculties</p>
                </div>
              </div>
              {/* Company Counter Item End */}
            </div>
            <div className="col-lg-2 col-md-6">
              {/* Company Counter Item Start */}
              <div className="company-counter-item">
                <div className="counter-content">
                  <img
                    src="/images/shanmuga/award.png"
                    style={{ paddingBottom: "10px" }}
                    alt=""
                  />
                  <h3>
                    <span className="counter">4</span>+
                  </h3>
                  <p>Academic Awards</p>
                </div>
              </div>
              {/* Company Counter Item End */}
            </div>
            <div className="col-lg-3 col-md-6">
              {/* Company Counter Item Start */}
              <div className="company-counter-item">
                <div className="counter-content">
                  <img
                    src="/images/shanmuga/school.png"
                    style={{ paddingBottom: "10px" }}
                    alt=""
                  />
                  <h3>
                    <span className="counter">3</span>+
                  </h3>
                  <p>Group Of Institutions</p>
                </div>
              </div>
              {/* Company Counter Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Company Counter End */}

      {/* Our Projects Section Start */}
      <div className="our-project">
        <div className="container">
          <div className="row">
            <div className="col-md-3"></div>
            <div className="col-md-6">
              <div className="section-title">
                <h2
                  className="text-anime-style-3"
                  data-cursor="-opaque"
                  style={{ textAlign: "center" }}
                >
                  Our Facilities
                </h2>
              </div>
            </div>
            <div className="col-md-3"></div>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6" style={{ padding: "0px" }}>
              {/* Project Item Start */}
              <div className="project-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="project-image" data-cursor-text="View">
                  <a href="#">
                    <figure>
                      <img src="/images/shanmuga/facilities/4.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <h3>CENTER OF EXCELLENCE</h3>
                </div>
              </div>
              {/* Project Item End */}
            </div>
            <div className="col-lg-3 col-md-6" style={{ padding: "0px" }}>
              {/* Project Item Start */}
              <div className="project-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="project-image" data-cursor-text="View">
                  <a href="#">
                    <figure>
                      <img src="/images/shanmuga/facilities/2.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <h3>CLASSROOM</h3>
                </div>
              </div>
              {/* Project Item End */}
            </div>
            <div className="col-lg-3 col-md-6" style={{ padding: "0px" }}>
              {/* Project Item Start */}
              <div className="project-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="project-image" data-cursor-text="View">
                  <a href="#">
                    <figure>
                      <img src="/images/shanmuga/facilities/1.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <h3>LABORATORY</h3>
                </div>
              </div>
              {/* Project Item End */}
            </div>
            <div className="col-lg-3 col-md-6" style={{ padding: "0px" }}>
              {/* Project Item Start */}
              <div className="project-item wow fadeInUp" data-wow-delay="0.25s">
                <div className="project-image" data-cursor-text="View">
                  <a href="#">
                    <figure>
                      <img src="/images/shanmuga/facilities/3.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                <div className="project-content">
                  <h3>LIBRARY</h3>
                </div>
              </div>
              {/* Project Item End */}
            </div>
          </div>
        </div>
      </div>
      {/* Our Projects Section End */}

      {/* Our Services Section Start */}
      <div className="our-services">
        <div className="container">
          <div className="row section-row align-items-center">
            <div className="col-lg-5">
              {/* Section Title Start */}
              <div className="section-title">
                <h3 className="wow fadeInUp">Courses</h3>
                <h2 className="text-anime-style-3" data-cursor="-opaque">
                  Our Courses Offered
                </h2>
              </div>
              {/* Section Title End */}
            </div>

            <div className="col-lg-7">
              {/* Section Title Content Start */}
              <div
                className="section-title-content wow fadeInUp"
                data-wow-delay="0.25s"
              >
                <p>
                  We are dedicated to updating and enhancing technical knowledge
                  and fostering innovative ideas in the ever-evolving field of
                  pharmaceutical education and research.
                </p>
              </div>
              {/* Section Title Content End */}
            </div>
          </div>

          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              {/* Services Item Start */}
              <div className="service-item wow fadeInUp" data-cursor="-opaque">
                <div className="icon-box">
                  <img src="/images/shanmuga/dpharm.png" alt="" />
                </div>
                <div className="service-body">
                  <h3>D.Pharmacy </h3>
                  <p>
                    The D.Pharmacy qualification opens doors to various roles in
                    the healthcare sector, ensuring a fulfilling career path in
                    pharmacy.
                  </p>
                </div>
                <div className="service-footer">
                  <Link to="/dpharm">learn more</Link>
                </div>
              </div>
              {/* Services Item End */}
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              {/* Services Item Start */}
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.25s"
                data-cursor="-opaque"
              >
                <div className="icon-box">
                  <img src="/images/shanmuga/medical.png" alt="" />
                </div>
                <div className="service-body">
                  <h3>B.Pharmacy</h3>
                  <p>
                    The B.Pharmacy degree provides a solid foundation for
                    further studies and specialization, leading to advanced
                    roles in pharmacy.
                  </p>
                </div>
                <div className="service-footer">
                  <Link to="/bpharm">learn more</Link>
                </div>
              </div>
              {/* Services Item End */}
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              {/* Services Item Start */}
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.5s"
                data-cursor="-opaque"
              >
                <div className="icon-box">
                  <img src="/images/shanmuga/bpharm.png" alt="" />
                </div>
                <div className="service-body">
                  <h3>Pharm.D</h3>
                  <p>
                    The Pharm.D degree equips graduates with the expertise to
                    provide high-quality patient care, contribute to healthcare
                    research.
                  </p>
                  <br />
                </div>
                <div className="service-footer">
                  <Link to="/doctorpharm">learn more</Link>
                </div>
              </div>
              {/* Services Item End */}
            </div>

            <div className="col-lg-3 col-md-6 col-12">
              {/* Services Item Start */}
              <div
                className="service-item wow fadeInUp"
                data-wow-delay="0.75s"
                data-cursor="-opaque"
              >
                <div className="icon-box">
                  <img src="/images/shanmuga/mpharm.png" alt="" />
                </div>
                <div className="service-body">
                  <h3>M.Pharm</h3>
                  <p>
                    The M.Pharm program offers comprehensive education and
                    training in pharmaceutical sciences preparing graduates for
                    successful careers.
                  </p>
                </div>
                <div className="service-footer">
                  <Link to="/mpharm">learn more</Link>
                </div>
              </div>
              {/* Services Item End */}
            </div>

            {/* Services Footer Btn Start */}
            <div
              className="service-footer-btn wow fadeInUp"
              data-wow-delay="0.25s"
            >
              <Link to="/dpharm" className="btn-default">
                view all courses
              </Link>
            </div>
            {/* Services Footer Btn End */}
          </div>
        </div>
      </div>
      {/* Our Services Section End */}

      {/* Intro Video Section Start */}
      <div className="intro-video">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12">
              {/* Intro Video Box Start */}
              <div className="intro-video-box" data-cursor-text="Play">
                {/* Video Image Start */}
                <div className="video-image">
                  <a
                    href="https://www.youtube.com/watch?v=-3E3VE9beS8"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <figure className="image-anime">
                      <img src="/images/shanmuga/wide.jpg" alt="" />
                    </figure>
                  </a>
                </div>
                {/* Video Image End */}

                {/* Video Play Button Start */}
                <div className="video-play-button">
                  <a
                    href="https://www.youtube.com/@shanmughalive3140"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fa-solid fa-play"></i>
                  </a>
                </div>
                {/* Video Play Button End */}
              </div>
              {/* Intro Video Box End */}
            </div>
          </div>
        </div>
      </div>
      {/* Intro Video Section End */}

      {/* Photo Gallery Section Start */}
      <div
        className="our-gallery-page"
        style={{
          background:
            "var(--secondary-color) url(/images/white-squre-bg-img.svg) no-repeat",
        }}
      >
        <div className="container">
          <div className="section-title">
            <h2 className="text-anime-style-3" style={{ fontSize: "31px" }}>
              GALLERY
            </h2>
          </div>
          {/* gallery section start */}
          <div className="row gallery-items">
            <div className="col-lg-4 col-md-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-cursor-text="View"
              >
                <a href="/images/shanmuga/gallery/1.jpg">
                  <figure className="image-anime">
                    <img src="/images/shanmuga/gallery/1.jpg" alt="" />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.2s"
                data-cursor-text="View"
              >
                <a href="/images/shanmuga/gallery/2.jpg">
                  <figure className="image-anime">
                    <img src="/images/shanmuga/gallery/2.jpg" alt="" />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.4s"
                data-cursor-text="View"
              >
                <a href="/images/shanmuga/gallery/3.jpg">
                  <figure className="image-anime">
                    <img src="/images/shanmuga/gallery/3.jpg" alt="" />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.6s"
                data-cursor-text="View"
              >
                <a href="/images/shanmuga/gallery/4.jpg">
                  <figure className="image-anime">
                    <img src="/images/shanmuga/gallery/4.jpg" alt="" />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="0.8s"
                data-cursor-text="View"
              >
                <a href="/images/shanmuga/gallery/5.jpg">
                  <figure className="image-anime">
                    <img src="/images/shanmuga/gallery/5.jpg" alt="" />
                  </figure>
                </a>
              </div>
              {/* image gallery end */}
            </div>

            <div className="col-lg-4 col-md-6">
              {/* image gallery start */}
              <div
                className="photo-gallery wow fadeInUp"
                data-wow-delay="1s"
                data-cursor-text="View"
              >
                <a href="/images/shanmuga/gallery/6.jpg">
                  <figure className="image-anime">
                    <img src="/images/shanmuga/gallery/6.jpg" alt="" />
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

      {/* Photo Gallery Section Start */}
      <div className="our-gallery-page" style={{ padding: "40px 0 30px" }}>
        <div className="container">
          <div className="section-title">
            <h2 className="text-anime-style-3" style={{ fontSize: "31px" }}>
              Group Of Institutions
            </h2>
          </div>
          {/* gallery section start */}
          <div className="row gallery-items">
            <div className="col-lg-4 col-md-6">
              <div className="logo-item">
                <img src="/images/shanmuga/group/1.png" alt="" />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="logo-item">
                <img
                  src="/images/shanmuga/group/2.png"
                  style={{ paddingBottom: "4%" }}
                  alt=""
                />
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="logo-item">
                <img src="/images/shanmuga/group/3.webp" alt="" />
              </div>
            </div>
          </div>
          {/* gallery section end */}
        </div>
      </div>
      {/* Photo Gallery Section End */}

      {/* Footer Start */}
      <footer className="main-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-12">
              {/* About Footer Start */}
              <div className="footer-quick-links">
                {/* Footer Logo Start */}
                <h2 style={{ color: "#fff" }}>ABOUT US</h2>
                {/* Footer Logo End */}

                {/* Footer Content Start */}
                <div className="footer-content">
                  <p>
                    The esteemed hope of SSCOP is to mould the students into
                    proud citizens of this great nation, laying reputation on
                    honing their skills and concentrating on their physiological
                    and spiritual needs. The college possesses contemporary
                    laboratories providing the best platform for training the
                    students to become a scientist, industrial or community
                    pharmacist.
                  </p>
                </div>
                {/* Footer Content End */}

                {/* Footer Social Links Start */}
                <div className="footer-social-links">
                  <ul>
                    <li>
                      <a href="https://youtube.com/@shanmughalive3140">
                        <i className="fa-brands fa-youtube"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.linkedin.com/company/sri-shanmugha-educational-institutions/">
                        <i className="fa-brands fa-linkedin-in"></i>
                      </a>
                    </li>
                    <li>
                      <a href="https://www.instagram.com/shanmughainstitutions/">
                        <i className="fa-brands fa-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                {/* Footer Social Links End */}
              </div>
              {/* About Footer End */}
            </div>

            <div className="col-lg-2 col-md-3">
              {/* Footer Quick Links Start */}
              <div className="footer-quick-links">
                <h2>QUICK LINKS</h2>
                <ul>
                  <li>
                    <Link to="/about">About SSCOP</Link>
                  </li>
                  <li>
                    <Link to="/chairman">Chairman</Link>
                  </li>
                  <li>
                    <Link to="/executive-director">Executive Director</Link>
                  </li>
                  <li>
                    <Link to="/principal">Principal</Link>
                  </li>
                  <li>
                    <Link to="/viceprincipal">Vice Principal</Link>
                  </li>
                  <li>
                    <Link to="/facilities">Facilities</Link>
                  </li>
                  <li>
                    <Link to="/placement">Placements</Link>
                  </li>
                </ul>
              </div>
              {/* Footer Quick Links End */}
            </div>
            <div className="col-lg-2 col-md-3">
              {/* Footer Quick Links Start */}
              <div className="footer-quick-links">
                <h2></h2>
                <br />
                <br />
                <ul>
                  <li>
                    <Link to="/about-trust">About Trust</Link>
                  </li>
                  <li>
                    <Link to="/dpharm">Programmes Offered</Link>
                  </li>
                  <li>
                    <Link to="/dop">Faculties</Link>
                  </li>
                  <li>
                    <Link to="/curriculum-development">
                      Co-Curricular Activities
                    </Link>
                  </li>
                  <li>
                    <Link to="/alumni">Alumni</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Students Life</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact Us</Link>
                  </li>
                </ul>
              </div>
              {/* Footer Quick Links End */}
            </div>

            <div className="col-lg-4 col-md-4">
              {/* Footer Contact Details Start */}
              <div className="footer-contact-details">
                <h2>CONTACT US</h2>
                {/* Footer Contact Info Box Start */}
                <div className="footer-contact-box">
                  {/* Info Box Start */}
                  <div className="footer-info-box">
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <i className="fa-solid fa-location-dot"></i>
                    </div>
                    {/* Icon Box End */}
                    <p>
                      SRI SHANMUGHA COLLEGE OF PHARMACY Sankari – Tiruchengode
                      Main Road, Pullipalayam, Morur (Po), Sankari (Tk), Salem
                      (Dt), Tamil Nadu, Pincode - 637 304.
                    </p>
                  </div>
                  {/* Info Box End */}
                  {/* Info Box Start */}
                  <div className="footer-info-box">
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <i className="fa-solid fa-phone"></i>
                    </div>
                    {/* Icon Box End */}
                    <p>+91 73735 95999</p>
                  </div>
                  {/* Info Box End */}

                  {/* Info Box Start */}
                  <div className="footer-info-box">
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <i className="fa-solid fa-envelope-open-text"></i>
                    </div>
                    {/* Icon Box End */}
                    <p>principal.pharmacy@shanmugha.edu.in</p>
                  </div>
                  {/* Info Box End */}
                  {/* Info Box Start */}
                  <div className="footer-info-box">
                    {/* Icon Box Start */}
                    <div className="icon-box">
                      <i className="fa-solid fa-globe"></i>
                    </div>
                    {/* Icon Box End */}
                    <p>www.shanmugha.edu.in</p>
                  </div>
                  {/* Info Box End */}
                </div>
                {/* Footer Contact Info Box End */}
              </div>
              {/* Footer Contact Details End */}
            </div>
          </div>

          {/* Footer Copyright Section Start */}
          <div className="footer-copyright">
            <div className="row">
              <div className="col-lg-12">
                {/* Footer Copyright Start */}
                <div className="footer-copyright-text">
                  <p>
                    Copyright © 2026 Sri Shanmugha College Of Pharmacy All
                    Rights Reserved.
                  </p>
                </div>
                {/* Footer Copyright End */}
              </div>
            </div>
          </div>
          {/* Footer Copyright Section End */}
        </div>
      </footer>
      {/* Footer End */}
    </>
  );
}

export default Home;
