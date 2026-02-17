import { useEffect } from 'react';
import Preloader from './Preloader';
import Header from './Header';
import Footer from './Footer';
import AdmissionButton from './AdmissionButton';

function Layout({ children }) {
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

                $headerSticky.toggleClass("hide", (fromTop > headerHeight + 100));
                $headerSticky.toggleClass("active", (fromTop > 600));
            };

            $window.on("scroll", handleScroll);
            handleScroll(); // Initial check

            // Slick Menu JS
            if ($.fn.slicknav) {
                $('#menu').slicknav({
                    label: '',
                    prependTo: '.responsive-menu'
                });
            }

            // Scroll to Top
            if ($("a[href='#top']").length) {
                $("a[href='#top']").on('click', function () {
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
                new window.Swiper('.hero-slider-layout .swiper', {
                    slidesPerView: 1,
                    loop: true,
                    pagination: {
                        el: '.swiper-pagination',
                        clickable: true,
                    },
                    autoplay: {
                        delay: 5000,
                    },
                });
            }

            // Counter
            if ($.fn.counterUp) {
                $('.counter').counterUp({
                    delay: 10,
                    time: 1000
                });
            }

            // Magnific Popup
            if ($.fn.magnificPopup) {
                $('.photo-gallery a').magnificPopup({
                    type: 'image',
                    gallery: {
                        enabled: true
                    }
                });

                if ($('.gallery-items').length) {
                    $('.gallery-items').magnificPopup({
                        delegate: 'a',
                        type: 'image',
                        closeOnContentClick: false,
                        closeBtnInside: false,
                        mainClass: 'mfp-with-zoom',
                        image: {
                            verticalFit: true,
                        },
                        gallery: {
                            enabled: true
                        },
                        zoom: {
                            enabled: true,
                            duration: 300,
                            opener: function (element) {
                                return element.find('img');
                            }
                        }
                    });
                }

                if ($('.popup-video').length) {
                    $('.popup-video').magnificPopup({
                        type: 'iframe',
                        mainClass: 'mfp-fade',
                        removalDelay: 160,
                        preloader: false,
                        fixedContentPos: true
                    });
                }
            }

            // Parallaxie
            const $parallaxie = $('.parallaxie');
            if ($parallaxie.length && ($window.width() > 991)) {
                if ($window.width() > 768 && $.fn.parallaxie) {
                    $parallaxie.parallaxie({
                        speed: 0.55,
                        offset: 0,
                    });
                }
            }

            // GSAP Animations
            if (gsap && ScrollTrigger && SplitText) {
                gsap.registerPlugin(ScrollTrigger);

                // Image Reveal
                if ($('.reveal').length) {
                    let revealContainers = document.querySelectorAll(".reveal");
                    revealContainers.forEach((container) => {
                        let image = container.querySelector("img");
                        let tl = gsap.timeline({
                            scrollTrigger: {
                                trigger: container,
                                toggleActions: "play none none none"
                            }
                        });
                        tl.set(container, { autoAlpha: 1 });
                        tl.from(container, 1, { xPercent: -100, ease: "power2.out" });
                        tl.from(image, 1, { xPercent: 100, scale: 1, delay: -1, ease: "power2.out" });
                    });
                }

                // Text Animations
                const animateText = (selector, fromVars) => {
                    const elements = document.querySelectorAll(selector);
                    elements.forEach((element) => {
                        if (element.anim) element.anim.progress(1).kill();
                        if (element.split) element.split.revert();

                        element.split = new SplitText(element, { type: "lines,words,chars", linesClass: "split-line" });
                        gsap.set(element, { perspective: 400 });
                        gsap.set(element.split.chars, { opacity: 0, x: "50" });

                        element.anim = gsap.to(element.split.chars, {
                            scrollTrigger: { trigger: element, start: "top 90%" },
                            x: "0", y: "0", rotateX: "0", opacity: 1, duration: 1,
                            ease: "back.out", stagger: 0.02,
                            ...fromVars
                        });
                    });
                };

                if ($('.text-anime-style-3').length) {
                    animateText('.text-anime-style-3', {});
                }
            }
        };

        const timer = setTimeout(initPlugins, 100);

        return () => {
            clearTimeout(timer);
            const $ = window.jQuery;
            if ($) {
                $(window).off("scroll");
            }
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

            <Preloader />
            <Header />
            <AdmissionButton />
            {children}
            <Footer />
        </>
    );
}

export default Layout;
