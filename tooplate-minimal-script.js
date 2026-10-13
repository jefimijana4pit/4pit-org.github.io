/*
 * 4PIT - Main JavaScript
 * Handles Theme toggling (with zero-flicker bookmark persistence),
 * Internationalization (Serbian & English), Navigation, and Animations.
 */

(function () {
    'use strict';

    const THEME_KEY = 'theme';
    const LANG_KEY = 'lang';
    const LIGHT = 'light', DARK = 'dark';
    const CSS_ID = 'theme-css';
    const LIGHT_HREF = 'tooplate-minimal-white-style.css';
    const DARK_HREF = 'tooplate-minimal-black-style.css';

    // Translations Dictionary
    const translations = {
        sr: {
            meta: {
                title: "Elektronska arhiva, knjigovodstvo i materijalno poslovanje | 4PIT",
                description: "Digitalizujte poslovanje uz 4PIT – rešenja za elektronsku arhivu, knjigovodstvo i materijalno poslovanje. Brzo, bezbedno i u skladu sa propisima.",
                keywords: "elektronska arhiva, knjigovodstvo, materijalno poslovanje, arhiviranje dokumenata, finansijsko knjigovodstvo, poslovni softver, digitalna arhiva, ERP rešenja, evidencija robe, fakturisanje, elektronski dokumenti",
                ogTitle: "Elektronska arhiva, knjigovodstvo i materijalno poslovanje | 4PIT",
                ogDescription: "Sve na jednom mestu – elektronska arhiva, knjigovodstvo i materijalno poslovanje. Automatizujte svoje poslovne procese sa 4PIT."
            },
            nav: {
                home: "Generalno",
                about: "O nama",
                services: "Servisi",
                contact: "Kontakt"
            },
            theme: {
                toLight: "Prebaci na svetlu temu",
                toDark: "Prebaci na tamnu temu"
            },
            hero: {
                title: "Pouzdan softver koji pokreće vaše poslovanje",
                subtitle: "Od koncepta do implementacije — kompletna softverska podrška",
                cta: "Više"
            },
            about: {
                quote: "Naša kompanija razvija i nudi sopstvena softverska rešenja, a pored toga pruža i usluge izrade softverskih sistema prema potrebama klijenata.",
                statProjects: "Projekata",
                statExp: "Godina iskustva",
                statPoss: "Mogućnosti",
                philosophyTitle: "Filozofija",
                philosophyLead: "Pre implementacije rešenja vršimo detaljnu analizu poslovnih procesa kako bismo osigurali potpunu funkcionalnost i prilagođenost.",
                point1Title: "Bezbedno",
                point1Desc: "Sigurnost podataka je na prvom mestu",
                point2Title: "Jednostavno",
                point2Desc: "Intuitivan korisnički interfejs",
                point3Title: "Precizno",
                point3Desc: "Definisanje neophodnih funkcionalnosti",
                processTitle: "Naš pristup",
                step1Title: "Ideja",
                step1Desc: "Razumevanje potrebe za softverskim rešenjem",
                step2Title: "Specifikacija",
                step2Desc: "Definisanje najmanjeg skupa funkcionalnosti",
                step3Title: "Revizija",
                step3Desc: "Predlog potencijalnih izmena i unapređenja",
                step4Title: "Isporuka",
                step4Desc: "Funkcionalni softver prema konačnoj specifikaciji"
            },
            services: {
                title: "Naša rešenja",
                service1Title: "Elektronska Arhiva",
                service1Desc: "Za sve vaše dokumente — sigurno, pregledno i dostupno u svakom trenutku",
                service1Tag: "DokFin",
                service2Tag: "Promet sredstava i usluga",
                service2Title: "Finansijsko knjigovodstvo",
                service2Desc: "Interno razvijen sistem koji automatizuje procese finansijskog praćenja, evidencije i izveštavanja",
                service3Title: "Robno knjigovodstvo",
                service3Desc: "Robno knjigovodstvo je sistem namenjen evidenciji robe, ulaza, izlaza i zaliha — uz potpunu kontrolu nad kretanjem robe i troškovima",
                service3Tag: "Promet roba i usluga"
            },
            contact: {
                title: "Kontakt",
                ownerRole: "Osnivač & Glavni Inženjer",
                ownerName: "Jefimija Petković",
                ownerDegree: "Master inženjer elektrotehnike i računarstva",
                ownerUni: "Univerzitet u Nišu",
                ownerSummary: "Master inženjer sa Univerziteta u Nišu, sa ekspertizom u razvoju pouzdanih softverskih sistema, elektronskih arhiva i poslovnih informacionih rešenja.",
                emailLabel: "Email",
                phoneLabel: "Telefon",
                linkedinLabel: "LinkedIn"
            },
            footer: {
                copyright: "© 2025 4PIT. Sva prava zadržana."
            }
        },
        en: {
            meta: {
                title: "Electronic Archive, Accounting & Business ERP Solutions | 4PIT",
                description: "Digitize your business with 4PIT – modern solutions for electronic archiving, accounting, and inventory management. Fast, secure, and compliant.",
                keywords: "electronic archive, accounting, inventory management, document archiving, financial accounting, business software, digital archive, ERP solutions, warehouse management, invoicing, electronic documents",
                ogTitle: "Electronic Archive, Accounting & Business ERP Solutions | 4PIT",
                ogDescription: "All in one place – electronic archiving, financial accounting, and inventory management. Automate your business processes with 4PIT."
            },
            nav: {
                home: "Home",
                about: "About Us",
                services: "Services",
                contact: "Contact"
            },
            theme: {
                toLight: "Switch to light mode",
                toDark: "Switch to dark mode"
            },
            hero: {
                title: "Reliable software that powers your business",
                subtitle: "From concept to implementation — complete software support",
                cta: "Learn More"
            },
            about: {
                quote: "Our company develops and offers proprietary software solutions, alongside custom software engineering tailored to our clients' needs.",
                statProjects: "Projects",
                statExp: "Years of Experience",
                statPoss: "Possibilities",
                philosophyTitle: "Philosophy",
                philosophyLead: "Before implementing solutions, we perform a thorough analysis of business processes to ensure full functionality and a custom fit.",
                point1Title: "Secure",
                point1Desc: "Data security is our top priority",
                point2Title: "Intuitive",
                point2Desc: "Intuitive and user-friendly interface",
                point3Title: "Precise",
                point3Desc: "Precise specification of core requirements",
                processTitle: "Our Approach",
                step1Title: "Discovery",
                step1Desc: "Understanding the strategic software requirement",
                step2Title: "Specification",
                step2Desc: "Defining the optimal core feature set",
                step3Title: "Revision",
                step3Desc: "Proposing refinements and optimizations",
                step4Title: "Delivery",
                step4Desc: "Functional software deployed to final specifications"
            },
            services: {
                title: "Our Solutions",
                service1Title: "Electronic Archive",
                service1Desc: "For all your documents — secure, organized, and accessible anytime",
                service1Tag: "DokFin",
                service2Tag: "Assets & Services",
                service2Title: "Financial Accounting",
                service2Desc: "In-house developed ERP system automating financial tracking, bookkeeping, and statutory reporting",
                service3Title: "Inventory Management",
                service3Desc: "Designed for tracking goods, procurement, outbound shipments, and stock — giving you full control over material flow and costs",
                service3Tag: "Trade & Goods Movement"
            },
            contact: {
                title: "Contact",
                ownerRole: "Founder & Lead Engineer",
                ownerName: "Jefimija Petković",
                ownerDegree: "Master Engineer in Computer Science & Electrical Engineering",
                ownerUni: "University of Niš",
                ownerSummary: "Master Engineer graduated from the University of Niš, dedicated to engineering robust, secure, and modern software architectures, electronic archiving systems, and business solutions.",
                emailLabel: "Email",
                phoneLabel: "Phone",
                linkedinLabel: "LinkedIn"
            },
            footer: {
                copyright: "© 2025 4PIT. All rights reserved."
            }
        }
    };

    // Helper: Get nested property in translations
    function getTranslation(lang, keyPath) {
        const keys = keyPath.split('.');
        let val = translations[lang] || translations.sr;
        for (const k of keys) {
            if (val && typeof val === 'object' && k in val) {
                val = val[k];
            } else {
                return null;
            }
        }
        return val;
    }

    // Language Management
    function getPreferredLanguage() {
        const urlParams = new URLSearchParams(window.location.search);
        const queryLang = urlParams.get('lang');
        if (queryLang && (queryLang === 'en' || queryLang === 'sr')) {
            return queryLang;
        }
        const saved = localStorage.getItem(LANG_KEY);
        if (saved === 'en' || saved === 'sr') {
            return saved;
        }
        return 'sr';
    }

    function setLanguage(lang) {
        if (lang !== 'en' && lang !== 'sr') lang = 'sr';
        document.documentElement.lang = lang;
        localStorage.setItem(LANG_KEY, lang);

        // Update active class on language toggle buttons
        const srBtn = document.getElementById('langSr');
        const enBtn = document.getElementById('langEn');
        if (srBtn) srBtn.classList.toggle('active', lang === 'sr');
        if (enBtn) enBtn.classList.toggle('active', lang === 'en');

        // Translate all elements with data-i18n
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = getTranslation(lang, key);
            if (translation !== null) {
                el.textContent = translation;
            }
        });

        // Translate metadata
        const langData = translations[lang] || translations.sr;
        if (langData.meta) {
            document.title = langData.meta.title;
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc) metaDesc.setAttribute('content', langData.meta.description);
            const metaKeywords = document.querySelector('meta[name="keywords"]');
            if (metaKeywords) metaKeywords.setAttribute('content', langData.meta.keywords);
            const ogTitle = document.querySelector('meta[property="og:title"]');
            if (ogTitle) ogTitle.setAttribute('content', langData.meta.ogTitle);
            const ogDesc = document.querySelector('meta[property="og:description"]');
            if (ogDesc) ogDesc.setAttribute('content', langData.meta.ogDescription);
        }

        // Update Theme Toggle Tooltip based on current language
        const currentTheme = document.documentElement.dataset.theme || getPreferredTheme();
        updateThemeToggleUI(currentTheme);
    }

    // Theme Management
    function getPreferredTheme() {
        const saved = localStorage.getItem(THEME_KEY);
        if (saved === LIGHT || saved === DARK) return saved;
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? DARK : LIGHT;
    }

    function updateThemeToggleUI(theme) {
        const btn = document.getElementById('themeToggle');
        if (!btn) return;
        const currentLang = document.documentElement.lang || 'sr';
        const isDark = theme === DARK;
        btn.setAttribute('aria-pressed', isDark ? 'true' : 'false');

        const titleText = isDark ? translations[currentLang].theme.toLight : translations[currentLang].theme.toDark;
        btn.setAttribute('title', titleText);
        btn.setAttribute('aria-label', titleText);

        const iconEl = btn.querySelector('.theme-icon') || btn;
        iconEl.textContent = isDark ? '☾' : '☼';
    }

    function setTheme(theme) {
        const link = document.getElementById(CSS_ID);
        if (link) {
            link.href = (theme === DARK) ? DARK_HREF : LIGHT_HREF;
            link.setAttribute('data-theme', theme);
        }
        document.documentElement.dataset.theme = theme;
        localStorage.setItem(THEME_KEY, theme);
        updateThemeToggleUI(theme);

        // Update mobile status bar theme color
        const metaThemeColor = document.querySelector('meta[name="theme-color"]');
        if (metaThemeColor) {
            metaThemeColor.setAttribute('content', theme === DARK ? '#0a0d14' : '#f8fafd');
        }
    }

    // Setup Event Listeners and Initialize
    document.addEventListener('DOMContentLoaded', function () {
        const initialLang = getPreferredLanguage();
        setLanguage(initialLang);

        const initialTheme = getPreferredTheme();
        setTheme(initialTheme);

        // Language buttons
        const srBtn = document.getElementById('langSr');
        const enBtn = document.getElementById('langEn');
        if (srBtn) {
            srBtn.addEventListener('click', function () {
                setLanguage('sr');
            });
        }
        if (enBtn) {
            enBtn.addEventListener('click', function () {
                setLanguage('en');
            });
        }

        // Theme toggle button
        const themeBtn = document.getElementById('themeToggle');
        if (themeBtn) {
            themeBtn.addEventListener('click', function () {
                const current = localStorage.getItem(THEME_KEY) || getPreferredTheme();
                const next = current === DARK ? LIGHT : DARK;
                setTheme(next);
            });
        }

        // Mobile menu toggle
        const menuToggle = document.getElementById('menuToggle');
        const navLinks = document.getElementById('navLinks');

        if (menuToggle && navLinks) {
            menuToggle.addEventListener('click', function () {
                menuToggle.classList.toggle('active');
                navLinks.classList.toggle('active');
            });

            // Close mobile menu when nav link is clicked
            document.querySelectorAll('.nav-link').forEach(link => {
                link.addEventListener('click', function () {
                    menuToggle.classList.remove('active');
                    navLinks.classList.remove('active');
                });
            });
        }

        // Navbar scroll effect and active menu highlighting
        const sections = document.querySelectorAll('section');
        const navItems = document.querySelectorAll('.nav-link');
        const navbar = document.getElementById('navbar');

        function onScroll() {
            if (navbar) {
                if (window.scrollY > 40) {
                    navbar.classList.add('scrolled');
                } else {
                    navbar.classList.remove('scrolled');
                }
            }

            let currentSection = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop;
                if (window.scrollY >= (sectionTop - 140)) {
                    currentSection = section.getAttribute('id');
                }
            });

            navItems.forEach(item => {
                item.classList.remove('active');
                const href = item.getAttribute('href');
                if (href && href.slice(1) === currentSection) {
                    item.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                const href = this.getAttribute('href');
                if (href === '#' || !href) return;
                const target = document.querySelector(href);
                if (target) {
                    e.preventDefault();
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });

        // IntersectionObserver for fade-in animation
        const observerOptions = {
            threshold: 0.08,
            rootMargin: '0px 0px -40px 0px'
        };

        const observer = new IntersectionObserver(function (entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach(el => {
            observer.observe(el);
        });

        // Sync with OS color scheme changes if user hasn't explicitly chosen
        try {
            const mql = window.matchMedia('(prefers-color-scheme: dark)');
            mql.addEventListener('change', e => {
                const saved = localStorage.getItem(THEME_KEY);
                if (!saved) setTheme(e.matches ? DARK : LIGHT);
            });
        } catch (e) {}
    });
})();
