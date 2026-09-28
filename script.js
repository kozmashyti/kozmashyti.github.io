const themeBtn = document.getElementById("themeBtn");
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        themeBtn.textContent = isLight ? "☀" : "☾";
        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );
    });
}
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light");
    if (themeBtn) {
        themeBtn.textContent = "☀";
    }
}
const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });
}
const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach(link => {
    link.addEventListener("click", () => {
        if (navMenu) {
            navMenu.classList.remove("active");
        }
    });
});
const revealElements = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("active");
                    observer.unobserve(entry.target);
                }
            });
        },
        {
            threshold: 0.15
        }
    );
    revealElements.forEach(element => {
        observer.observe(element);
    });
} else {
    revealElements.forEach(element => {
        element.classList.add("active");
    });
}
const languageSwitcher = document.getElementById("languageSwitcher");
const languageBtn = document.getElementById("languageBtn");
const languageMenu = document.getElementById("languageMenu");
const currentLanguage = document.getElementById("currentLanguage");
const languageOptions = document.querySelectorAll(".language-option[data-lang]");
let activeLanguage = "en";
const languages = {
    en: {
        label: "English (US)",
        htmlLang: "en"
    },
    sq: {
        label: "Shqip (AL)",
        htmlLang: "sq"
    }
};
const translations = {
    en: {
        title: "Kozma Shyti | Data & Software Engineer",
        description: "Professional portfolio - Kozma Shyti",
        themeAria: "Change theme",
        menuAria: "Open menu",
        languageAria: "Choose language",
        nav: [
            "Home",
            "About",
            "Skills",
            "Projects",
            "Education",
            "Contact"
        ],
        heroEyebrow: "HELLO, I'M KOZMA SHYTI",
        heroBefore: "I build",
        heroHighlight: "digital products",
        heroAfter: "that solve real problems.",
        heroDescription: "Software, data and modern web technologies combined to create useful and scalable digital solutions.",
        heroButtons: ["View my work", "Let's talk"],
        heroStats: ["Projects", "Technologies", "Ideas"],
        terminalValues: [
            '"Kozma"',
            '"Engineer"',
            '"Web"',
            '"Data"',
            '"Software"',
            '"Building"'
        ],
        aboutEyebrow: "ABOUT ME",
        aboutTitle: "Turning complex problems into simple solutions.",
        aboutParagraphs: [
            "I am passionate about software engineering, data processing and building modern digital solutions.",
            "My approach combines analytical thinking with practical engineering to create systems that are efficient, maintainable and user-friendly."
        ],
        aboutLink: "Let's work together →",
        aboutCardTitle: "Engineering mindset",
        aboutCardText: "Clean architecture, scalable solutions and continuous learning.",
        skillsEyebrow: "MY SKILLS",
        skillsTitle: "Technologies I work with.",
        skillTitles: ["HTML", "CSS", "JavaScript", "Data"],
        skillDescriptions: [
            "Semantic and accessible web structure.",
            "Responsive and modern interfaces.",
            "Interactive web applications and logic.",
            "Data processing, analysis and visualization."
        ],
        projectsEyebrow: "SELECTED WORK",
        projectsTitle: "Projects I'm proud of.",
        projectCategories: [
            "DATA / ANALYTICS",
            "WEB DEVELOPMENT",
            "SOFTWARE"
        ],
        projectTitles: [
            "Analytics Dashboard",
            "Modern Web Application",
            "Intelligent System"
        ],
        projectDescriptions: [
            "A modern dashboard for transforming complex datasets into actionable insights.",
            "Responsive web application designed for performance and excellent user experience.",
            "A software concept focused on automation and intelligent data processing."
        ],
        projectLinks: [
            "View project →",
            "View project →",
            "View project →"
        ],
        projectOneTags: ["JavaScript", "Data", "Analytics"],
        projectThreeTags: ["Python", "Data", "AI"],
        educationEyebrow: "04 — JOURNEY",
        educationTitle: "Education & experience.",
        educationBachelorLabel: "BACHELOR",
        educationBachelorTitle: "BSc Mathematical & Informatics Engineering",
        educationBachelorText: "University of Tirana · Faculty of Natural Sciences",
        educationBachelorTag: "Graduated",
        educationMasterLabel: "MASTER",
        educationMasterTitle: "MSc Mathematical & Informatics Engineering",
        educationMasterText: "University of Tirana · Faculty of Natural Sciences",
        educationMasterTag: "Graduated",
        educationPracticeLabel: "PRACTICE",
        educationPracticeTitle: "IT Support Practice",
        educationPracticeText: "Technical support, troubleshooting and day-to-day IT operations.",
        educationPracticeTag: "IT Support",
        educationInternshipLabel: "INTERNSHIP",
        educationInternshipTitle: "Sales Operations Intern",
        educationInternshipText: "Vodafone · Sales operations support, reporting and operational processes.",
        educationInternshipTag: "Vodafone",
        educationRoleLabel: "CURRENT ROLE",
        educationRoleTitle: "Data Processing Specialist",
        educationRoleText: "Data processing, validation, organization and operational data workflows.",
        educationRoleTag: "Vodafone",
        educationNextLabel: "NEXT",
        educationNextTitle: "Software Engineer | Data | Cyber Security",
        educationNextText: "Building toward software engineering roles focused on modern technologies, scalable systems and high-quality digital products.",
        educationNextTag: "Technology",
contactEyebrow: "CONTACT",
        contactTitle: "Let's build something great together.",
        contactIntro: "Have an idea, project or opportunity? Send me a message.",
        labels: ["Name", "Email", "Subject", "Message"],
        namePlaceholder: "Your name",
        emailPlaceholder: "you@example.com",
        subjectPlaceholder: "Project, opportunity, collaboration...",
        messagePlaceholder: "Tell me about your project...",
        sendButton: "Send message",
        successMessage: (name) => `Thank you ${name}! Your message was received.`,
        footerAbout: "About Us",
        footerLanguages: "Country / Region",
        footerPrivacy: "Privacy",
        footerTerms: "Terms",
        allLanguages: "All languages",
        bagTitle: "Quick access",
        bagSubtitle: "Portfolio shortcuts",
        bagProjects: "Projects",
        bagProjectsNote: "Selected work",
        bagEducation: "Education",
        bagEducationNote: "Study & experience",
        bagAbout: "About Us",
        bagAboutNote: "More about Kozma",
        bagAccount: "Account",
        bagAccountNote: "Login or create account",
        bagContact: "Contact",
        bagContactNote: "Send a message",
        footerCopyright: "© 2026 Kozma Shyti. All Rights Reserved"
    },
    sq: {
        title: "Kozma Shyti | Inxhinier i të Dhënave & Softuerit",
        description: "Portofol profesional - Kozma Shyti",
        themeAria: "Ndrysho temën",
        menuAria: "Hap menunë",
        languageAria: "Zgjidh gjuhën",
        nav: [
            "Kreu",
            "Rreth meje",
            "Aftësitë",
            "Projektet",
            "Edukimi",
            "Kontakti"
        ],
        heroEyebrow: "PËRSHËNDETJE, JAM KOZMA SHYTI",
        heroBefore: "Unë ndërtoj",
        heroHighlight: "produkte dixhitale",
        heroAfter: "që zgjidhin probleme reale.",
        heroDescription: "Softueri, të dhënat dhe teknologjitë moderne të web-it të kombinuara për të krijuar zgjidhje dixhitale të dobishme dhe të shkallëzueshme.",
        heroButtons: ["Shiko punën time", "Le të flasim"],
        heroStats: ["Projekte", "Teknologji", "Ide"],
        terminalValues: [
            '"Kozma"',
            '"Inxhinier"',
            '"Web"',
            '"Të dhëna"',
            '"Softuer"',
            '"Ndërtim"'
        ],
        aboutEyebrow: "RRETH MEJE",
        aboutTitle: "I kthej problemet komplekse në zgjidhje të thjeshta.",
        aboutParagraphs: [
            "Jam i apasionuar pas inxhinierisë së softuerit, përpunimit të të dhënave dhe ndërtimit të zgjidhjeve moderne dixhitale.",
            "Qasja ime kombinon të menduarit analitik me inxhinierinë praktike për të krijuar sisteme efikase, të mirëmbajtshme dhe të lehta për t'u përdorur."
        ],
        aboutLink: "Le të punojmë së bashku →",
        aboutCardTitle: "Mendësi inxhinierike",
        aboutCardText: "Arkitekturë e pastër, zgjidhje të shkallëzueshme dhe të mësuarit e vazhdueshëm.",
        skillsEyebrow: "AFTËSITË E MIA",
        skillsTitle: "Teknologjitë me të cilat punoj.",
        skillTitles: ["HTML", "CSS", "JavaScript", "Të dhëna"],
        skillDescriptions: [
            "Strukturë web semantike dhe e aksesueshme.",
            "Ndërfaqe responsive dhe moderne.",
            "Aplikacione web interaktive dhe logjikë programimi.",
            "Përpunim, analizë dhe vizualizim i të dhënave."
        ],
        projectsEyebrow: "PUNË TË PËRZGJEDHURA",
        projectsTitle: "Projekte për të cilat jam krenar.",
        projectCategories: [
            "TË DHËNA / ANALITIKË",
            "ZHVILLIM WEB",
            "SOFTUER"
        ],
        projectTitles: [
            "Panel Analitik",
            "Aplikacion Modern Web",
            "Sistem Inteligjent"
        ],
        projectDescriptions: [
            "Një panel modern për transformimin e grupeve komplekse të të dhënave në informacione të dobishme për vendimmarrje.",
            "Aplikacion web responsive, i projektuar për performancë dhe përvojë të shkëlqyer të përdoruesit.",
            "Një koncept softuerik i fokusuar në automatizim dhe përpunim inteligjent të të dhënave."
        ],
        projectLinks: [
            "Shiko projektin →",
            "Shiko projektin →",
            "Shiko projektin →"
        ],
        projectOneTags: ["JavaScript", "Të dhëna", "Analitikë"],
        projectThreeTags: ["Python", "Të dhëna", "AI"],
        educationEyebrow: "04 — RRUGËTIMI",
        educationTitle: "Edukimi & eksperienca.",
        educationBachelorLabel: "BACHELOR",
        educationBachelorTitle: "Bachelor në Inxhinieri Matematike dhe Informatike",
        educationBachelorText: "Universiteti i Tiranës · Fakulteti i Shkencave të Natyrës",
        educationBachelorTag: "Diplomuar",
        educationMasterLabel: "MASTER",
        educationMasterTitle: "Master në Inxhinieri Matematike dhe Informatike",
        educationMasterText: "Universiteti i Tiranës · Fakulteti i Shkencave të Natyrës",
        educationMasterTag: "Diplomuar",
        educationPracticeLabel: "PRAKTIKË",
        educationPracticeTitle: "Praktikë në IT Support",
        educationPracticeText: "Mbështetje teknike, zgjidhje problemesh dhe operacione të përditshme IT.",
        educationPracticeTag: "IT Support",
        educationInternshipLabel: "INTERNSHIP",
        educationInternshipTitle: "Sales Operations Intern",
        educationInternshipText: "Vodafone · Mbështetje në operacionet e shitjeve, raportim dhe procese operacionale.",
        educationInternshipTag: "Vodafone",
        educationRoleLabel: "ROLI AKTUAL",
        educationRoleTitle: "Data Processing Specialist",
        educationRoleText: "Përpunim, verifikim, organizim dhe rrjedha operacionale të të dhënave.",
        educationRoleTag: "Vodafone",
        educationNextLabel: "HAPI TJETËR",
        educationNextTitle: "Software Engineer | Data | Cyber Security",
        educationNextText: "Orientim drejt roleve në inxhinieri softuerike, me fokus te teknologjitë moderne, sistemet e shkallëzueshme dhe produktet dixhitale cilësore.",
        educationNextTag: "Teknologji",
contactEyebrow: "KONTAKTI",
        contactTitle: "Le të ndërtojmë diçka të shkëlqyer së bashku.",
        contactIntro: "Ke një ide, projekt ose mundësi bashkëpunimi? Më dërgo një mesazh.",
        labels: ["Emri", "Email", "Subjekti", "Mesazhi"],
        namePlaceholder: "Emri juaj",
        emailPlaceholder: "ju@shembull.com",
        subjectPlaceholder: "Projekt, mundësi, bashkëpunim...",
        messagePlaceholder: "Më trego rreth projektit tuaj...",
        sendButton: "Dërgo mesazhin",
        successMessage: (name) => `Faleminderit ${name}! Mesazhi juaj u pranua.`,
        footerAbout: "Rreth meje",
        footerLanguages: "Shteti / Rajoni",
        footerPrivacy: "Privatësia",
        footerTerms: "Kushtet",
        allLanguages: "Të gjitha gjuhët",
        bagTitle: "Akses i shpejtë",
        bagSubtitle: "Shkurtore të portfolio-s",
        bagProjects: "Projektet",
        bagProjectsNote: "Punë të përzgjedhura",
        bagEducation: "Edukimi",
        bagEducationNote: "Studime & eksperiencë",
        bagAbout: "Rreth Meje",
        bagAboutNote: "Më shumë rreth Kozmës",
        bagAccount: "Llogaria",
        bagAccountNote: "Hyr ose krijo llogari",
        bagContact: "Kontakti",
        bagContactNote: "Dërgo një mesazh",
        footerCopyright: "© 2026 Kozma Shyti. Të gjitha të drejtat e rezervuara"
    }
};
function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.textContent = value;
    }
}
function setTexts(selector, values) {
    const elements = document.querySelectorAll(selector);
    elements.forEach((element, index) => {
        if (values[index] !== undefined) {
            element.textContent = values[index];
        }
    });
}
function setAttribute(selector, attribute, value) {
    const element = document.querySelector(selector);
    if (element) {
        element.setAttribute(attribute, value);
    }
}
function closeLanguageMenu() {
    if (!languageSwitcher || !languageBtn) {
        return;
    }
    languageSwitcher.classList.remove("open");
    languageBtn.setAttribute("aria-expanded", "false");
}
function translateWebsite(languageCode) {
    const t = translations[languageCode] || translations.en;
    document.title = t.title;
    document.documentElement.lang = languages[languageCode].htmlLang;
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute("content", t.description);
    }
    if (themeBtn) {
        themeBtn.setAttribute("aria-label", t.themeAria);
    }
    if (menuBtn) {
        menuBtn.setAttribute("aria-label", t.menuAria);
    }
    if (languageBtn) {
        languageBtn.setAttribute("aria-label", t.languageAria);
    }
    if (languageMenu) {
        languageMenu.setAttribute("aria-label", t.languageAria);
    }
    setTexts(".nav-menu a", t.nav);
    setText("#home .hero-content .eyebrow", t.heroEyebrow);
    const heroTitle = document.querySelector("#home .hero-content h1");
    if (heroTitle) {
        heroTitle.innerHTML = `${t.heroBefore} <span>${t.heroHighlight}</span> ${t.heroAfter}`;
    }
    setText("#home .hero-description", t.heroDescription);
    setTexts("#home .hero-buttons a", t.heroButtons);
    setTexts("#home .hero-stats span", t.heroStats);
    const terminalValues = document.querySelectorAll("#home .terminal-body .green");
    terminalValues.forEach((element, index) => {
        if (t.terminalValues[index] !== undefined) {
            element.textContent = t.terminalValues[index];
        }
    });
    setText("#about .section-heading .eyebrow", t.aboutEyebrow);
    setText("#about .section-heading h2", t.aboutTitle);
    setTexts("#about .about-text p", t.aboutParagraphs);
    setText("#about .text-link", t.aboutLink);
    setText("#about .about-card h3", t.aboutCardTitle);
    setText("#about .about-card p", t.aboutCardText);
    setText("#skills .section-heading .eyebrow", t.skillsEyebrow);
    setText("#skills .section-heading h2", t.skillsTitle);
    setTexts("#skills .skill-card h3", t.skillTitles);
    setTexts("#skills .skill-card p", t.skillDescriptions);
    setText("#projects .section-heading .eyebrow", t.projectsEyebrow);
    setText("#projects .section-heading h2", t.projectsTitle);
    setTexts("#projects .project-category", t.projectCategories);
    setTexts("#projects .project-content h3", t.projectTitles);
    setTexts("#projects .project-content > p:not(.project-category)", t.projectDescriptions);
    setTexts("#projects .project-link", t.projectLinks);
    setTexts("#projects .project-card:nth-child(1) .project-tags span", t.projectOneTags);
    setTexts("#projects .project-card:nth-child(3) .project-tags span", t.projectThreeTags);

    setText("#education .education-kicker", t.educationEyebrow);
    setText("#education .education-journey-heading h2", t.educationTitle);

    setText("#education .education-row:nth-child(1) .education-row-label", t.educationBachelorLabel);
    setText("#education .education-row:nth-child(1) h3", t.educationBachelorTitle);
    setText("#education .education-row:nth-child(1) p", t.educationBachelorText);
    setText("#education .education-row:nth-child(1) .education-row-tag", t.educationBachelorTag);

    setText("#education .education-row:nth-child(2) .education-row-label", t.educationMasterLabel);
    setText("#education .education-row:nth-child(2) h3", t.educationMasterTitle);
    setText("#education .education-row:nth-child(2) p", t.educationMasterText);
    setText("#education .education-row:nth-child(2) .education-row-tag", t.educationMasterTag);

    setText("#education .education-row:nth-child(3) .education-row-label", t.educationPracticeLabel);
    setText("#education .education-row:nth-child(3) h3", t.educationPracticeTitle);
    setText("#education .education-row:nth-child(3) p", t.educationPracticeText);
    setText("#education .education-row:nth-child(3) .education-row-tag", t.educationPracticeTag);

    setText("#education .education-row:nth-child(4) .education-row-label", t.educationInternshipLabel);
    setText("#education .education-row:nth-child(4) h3", t.educationInternshipTitle);
    setText("#education .education-row:nth-child(4) p", t.educationInternshipText);
    setText("#education .education-row:nth-child(4) .education-row-tag", t.educationInternshipTag);

    setText("#education .education-row:nth-child(5) .education-row-label", t.educationRoleLabel);
    setText("#education .education-row:nth-child(5) h3", t.educationRoleTitle);
    setText("#education .education-row:nth-child(5) p", t.educationRoleText);
    setText("#education .education-row:nth-child(5) .education-row-tag", t.educationRoleTag);

    setText("#education .education-row:nth-child(6) .education-row-label", t.educationNextLabel);
    setText("#education .education-row:nth-child(6) h3", t.educationNextTitle);
    setText("#education .education-row:nth-child(6) p", t.educationNextText);
    setText("#education .education-row:nth-child(6) .education-row-tag", t.educationNextTag);

    setText("#contact .section-heading .eyebrow", t.contactEyebrow);
    setText("#contact .section-heading h2", t.contactTitle);
    setText("#contact .section-heading > p:last-child", t.contactIntro);
    setTexts("#contact .form-group label", t.labels);
    setAttribute("#name", "placeholder", t.namePlaceholder);
    setAttribute("#email", "placeholder", t.emailPlaceholder);
    setAttribute("#subject", "placeholder", t.subjectPlaceholder);
    setAttribute("#message", "placeholder", t.messagePlaceholder);
    setText("#contact button[type='submit']", t.sendButton);
    setText(".footer-right a[href='about.html']", t.footerAbout);
    setText(".footer-right a[href='languages.html']", t.footerLanguages);
    setText(".footer-right a[href='privacy.html']", t.footerPrivacy);
    setText(".footer-right a[href='terms.html']", t.footerTerms);
    setText(".language-all-label", t.allLanguages);
    setText(".bag-dropdown-title", t.bagTitle);
    setText(".bag-dropdown-subtitle", t.bagSubtitle);
    setText(".bag-projects", t.bagProjects);
    setText(".bag-projects-note", t.bagProjectsNote);
    setText(".bag-education", t.bagEducation);
    setText(".bag-education-note", t.bagEducationNote);
    setText(".bag-about", t.bagAbout);
    setText(".bag-about-note", t.bagAboutNote);
    setText(".bag-account", t.bagAccount);
    setText(".bag-account-note", t.bagAccountNote);
    setText(".bag-contact", t.bagContact);
    setText(".bag-contact-note", t.bagContactNote);
    setText(".footer-copy", t.footerCopyright);
    const formMessage = document.getElementById("formMessage");
    if (formMessage) {
        formMessage.textContent = "";
    }
}
function clearGoogleTranslateCookie() {
    document.cookie =
        "googtrans=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/";
}

function setLanguage(
    languageCode,
    persist = true
) {
    const safeLanguageCode =
        languages[languageCode]
            ? languageCode
            : "en";

    const selectedLanguage =
        languages[safeLanguageCode];

    activeLanguage =
        safeLanguageCode;

    if (currentLanguage) {
        currentLanguage.textContent =
            selectedLanguage.label;
    }

    languageOptions.forEach(option => {
        const isActive =
            option.dataset.lang ===
            safeLanguageCode;

        option.classList.toggle(
            "active",
            isActive
        );

        option.setAttribute(
            "aria-checked",
            isActive ? "true" : "false"
        );
    });

    translateWebsite(
        safeLanguageCode
    );

    if (persist) {
        localStorage.setItem(
            "language",
            safeLanguageCode
        );

        localStorage.removeItem(
            "languageName"
        );

        clearGoogleTranslateCookie();
    }
}
if (languageSwitcher && languageBtn) {
    languageBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = languageSwitcher.classList.toggle("open");
        languageBtn.setAttribute(
            "aria-expanded",
            isOpen ? "true" : "false"
        );
    });
    languageOptions.forEach(option => {
        option.addEventListener("click", () => {
            setLanguage(
                option.dataset.lang,
                true
            );

            closeLanguageMenu();

            /*
             * Reload so an existing automatic Google translation
             * is completely removed when returning to English/Shqip.
             */
            window.location.reload();
        });
    });
    document.addEventListener("click", (event) => {
        if (!languageSwitcher.contains(event.target)) {
            closeLanguageMenu();
        }
    });
    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeLanguageMenu();
            languageBtn.focus();
        }
    });
}
const savedLanguage =
    localStorage.getItem("language") ||
    "en";

const nativeLanguage =
    savedLanguage === "sq"
        ? "sq"
        : "en";

/*
 * For machine-translated languages, render the site's English
 * version first. auto-translate.js then translates that English
 * source into the selected language.
 */
setLanguage(
    nativeLanguage,
    false
);

if (
    currentLanguage &&
    savedLanguage !== "en" &&
    savedLanguage !== "sq"
) {
    const savedLanguageName =
        localStorage.getItem(
            "languageName"
        );

    currentLanguage.textContent =
        savedLanguageName ||
        savedLanguage.toUpperCase();
}
const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");
if (contactForm && formMessage) {
    contactForm.addEventListener("submit", async (event) => {
        event.preventDefault();
        const submitBtn =
            contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        const currentLanguage =
            activeLanguage === "sq" ? "sq" : "en";
        submitBtn.disabled = true;
        submitBtn.textContent =
            currentLanguage === "sq"
                ? "Duke dërguar..."
                : "Sending...";
        formMessage.textContent = "";
        try {
            const formData =
                new FormData(contactForm);
            const response =
                await fetch(
                    "https://api.web3forms.com/submit",
                    {
                        method: "POST",
                        body: formData
                    }
                );
            const data =
                await response.json();
            if (data.success) {
                formMessage.textContent =
                    currentLanguage === "sq"
                        ? "Mesazhi u dërgua me sukses. Faleminderit!"
                        : "Message sent successfully. Thank you!";
                contactForm.reset();
            } else {
                formMessage.textContent =
                    currentLanguage === "sq"
                        ? "Mesazhi nuk u dërgua. Provo përsëri."
                        : "Message could not be sent. Please try again.";
                console.error(
                    "Web3Forms error:",
                    data.message
                );
            }
        } catch (error) {
            formMessage.textContent =
                currentLanguage === "sq"
                    ? "Ndodhi një gabim. Provo përsëri."
                    : "Something went wrong. Please try again.";
            console.error(
                "Contact form error:",
                error
            );
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
        }
    });
}
const navSectionLinks = Array.from(navLinks).filter(link => {
    const href = link.getAttribute("href");
    return href && href.startsWith("#") && document.querySelector(href);
});
function setCurrentNavLink(targetId) {
    navLinks.forEach(link => {
        link.classList.toggle(
            "nav-current",
            link.getAttribute("href") === `#${targetId}`
        );
    });
}
navSectionLinks.forEach(link => {
    link.addEventListener("click", () => {
        const href = link.getAttribute("href");
        if (href && href.startsWith("#")) {
            setCurrentNavLink(href.slice(1));
        }
    });
});
function setNavFromHash() {
    const hashId = window.location.hash.replace("#", "");
    const hasMatchingLink = navSectionLinks.some(
        link => link.getAttribute("href") === `#${hashId}`
    );
    setCurrentNavLink(hasMatchingLink ? hashId : "home");
}
window.addEventListener("hashchange", setNavFromHash);
setNavFromHash();


/* =========================
   RELIABLE NAVIGATION
   No queued smooth-scroll animations:
   every click goes immediately to the latest selected section.
========================= */

document.addEventListener(
    "click",
    function (event) {
        const link = event.target.closest('.nav-menu a[href^="#"]');

        if (!link) return;

        const href = link.getAttribute("href");
        if (!href || href === "#") return;

        const target = document.querySelector(href);
        if (!target) return;

        event.preventDefault();

        const navbar = document.querySelector(".navbar");
        const navbarHeight = navbar ? navbar.offsetHeight : 0;

        const targetTop = Math.max(
            0,
            target.getBoundingClientRect().top +
            window.pageYOffset -
            navbarHeight
        );

        /* Always jump to the newest clicked section immediately. */
        window.scrollTo({
            top: targetTop,
            left: 0,
            behavior: "auto"
        });

        const targetId = href.substring(1);

        if (typeof setCurrentNavLink === "function") {
            setCurrentNavLink(targetId);
        }

        if (navMenu) {
            navMenu.classList.remove("active");
        }

        if (history.replaceState) {
            history.replaceState(null, "", href);
        }
    },
    true
);


/* =========================
   QUICK ACCESS BAG MENU
========================= */

const bagMenu = document.getElementById("bagMenu");
const bagBtn = document.getElementById("bagBtn");
const bagDropdown = document.getElementById("bagDropdown");

function closeBagMenu() {
    if (!bagMenu || !bagBtn || !bagDropdown) return;
    bagMenu.classList.remove("open");
    bagBtn.setAttribute("aria-expanded", "false");
    bagDropdown.setAttribute("aria-hidden", "true");
}

function openBagMenu() {
    if (!bagMenu || !bagBtn || !bagDropdown) return;
    bagMenu.classList.add("open");
    bagBtn.setAttribute("aria-expanded", "true");
    bagDropdown.setAttribute("aria-hidden", "false");
}

if (bagBtn && bagMenu && bagDropdown) {
    bagBtn.addEventListener("click", (event) => {
        event.stopPropagation();
        const isOpen = bagMenu.classList.contains("open");

        if (isOpen) {
            closeBagMenu();
        } else {
            closeLanguageMenu();
            openBagMenu();
        }
    });

    document.addEventListener("click", (event) => {
        if (!bagMenu.contains(event.target)) {
            closeBagMenu();
        }
    });

    document.addEventListener("keydown", (event) => {
        if (event.key === "Escape") {
            closeBagMenu();
            bagBtn.focus();
        }
    });

    bagDropdown.querySelectorAll("a").forEach(link => {
        link.addEventListener("click", (event) => {
            const href = link.getAttribute("href");

            if (href && href.startsWith("#")) {
                const target = document.querySelector(href);

                if (target) {
                    event.preventDefault();

                    const navbar = document.querySelector(".navbar");
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;

                    const targetTop = Math.max(
                        0,
                        target.getBoundingClientRect().top +
                        window.pageYOffset -
                        navbarHeight
                    );

                    window.scrollTo({
                        top: targetTop,
                        left: 0,
                        behavior: "auto"
                    });

                    if (typeof setCurrentNavLink === "function") {
                        setCurrentNavLink(href.slice(1));
                    }

                    if (history.replaceState) {
                        history.replaceState(null, "", href);
                    }
                }
            }

            closeBagMenu();
        });
    });
}
