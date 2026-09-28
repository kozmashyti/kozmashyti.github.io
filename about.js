const themeBtn = document.getElementById("pageThemeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");
    if (themeBtn) themeBtn.textContent = "☀";
}

if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const light =
            document.body.classList.contains("light");

        themeBtn.textContent = light ? "☀" : "☾";

        localStorage.setItem(
            "theme",
            light ? "light" : "dark"
        );
    });
}

const copy = {
    en: {
        title: "About | Kozma Shyti",
        lang: "en",
        portfolio: "Portfolio",
        eyebrow: "ABOUT KOZMA",
        heroBefore: "Analytical thinking.",
        heroAccent: "Digital building.",
        lead: "I combine mathematical engineering, data and software to build practical, modern digital solutions.",
        currentRole: "CURRENT ROLE",
        profileKicker: "01 — PROFILE",
        profileTitle: "A path between mathematics and technology.",
        story: [
            ["Background", "I completed Bachelor and Master studies in Mathematical & Informatics Engineering at the University of Tirana, Faculty of Natural Sciences."],
            ["Experience", "My experience includes IT Support practice, a Sales Operations internship at Vodafone, and my current work in data processing."],
            ["Direction", "I am building toward work across software engineering, data and cyber security, with a focus on reliable and well-designed digital systems."]
        ],
        journeyKicker: "02 — JOURNEY",
        journeyTitle: "Education & experience.",
        journeyLabels: ["BACHELOR", "MASTER", "PRACTICE", "INTERNSHIP", "NOW"],
        journeyTitles: [
            "BSc Mathematical & Informatics Engineering",
            "MSc Mathematical & Informatics Engineering",
            "IT Support Practice",
            "Sales Operations Intern",
            "Data Processing Specialist"
        ],
        journeyTexts: [
            "University of Tirana · Faculty of Natural Sciences",
            "University of Tirana · Faculty of Natural Sciences",
            "Technical support and troubleshooting.",
            "Vodafone · Operations support and reporting.",
            "Vodafone · Data workflows, validation and organization."
        ],
        connectKicker: "03 — CONNECT",
        connectTitle: "Interested in working together?",
        connectButton: "Contact me →",
        rights: "All Rights Reserved"
    },
    sq: {
        title: "Rreth Meje | Kozma Shyti",
        lang: "sq",
        portfolio: "Portfolio",
        eyebrow: "RRETH KOZMËS",
        heroBefore: "Mendim analitik.",
        heroAccent: "Ndërtim dixhital.",
        lead: "Kombinoj inxhinierinë matematike, të dhënat dhe softuerin për të ndërtuar zgjidhje dixhitale praktike dhe moderne.",
        currentRole: "ROLI AKTUAL",
        profileKicker: "01 — PROFILI",
        profileTitle: "Një rrugëtim mes matematikës dhe teknologjisë.",
        story: [
            ["Formimi", "Kam përfunduar studimet Bachelor dhe Master në Inxhinieri Matematike dhe Informatike në Universitetin e Tiranës, Fakulteti i Shkencave të Natyrës."],
            ["Eksperienca", "Eksperienca ime përfshin praktikë në IT Support, internship në Sales Operations te Vodafone dhe punën aktuale në përpunimin e të dhënave."],
            ["Drejtimi", "Po zhvillohem drejt roleve në software engineering, data dhe cyber security, me fokus te sistemet dixhitale të besueshme dhe të projektuara mirë."]
        ],
        journeyKicker: "02 — RRUGËTIMI",
        journeyTitle: "Edukimi & eksperienca.",
        journeyLabels: ["BACHELOR", "MASTER", "PRAKTIKË", "INTERNSHIP", "TANI"],
        journeyTitles: [
            "Bachelor në Inxhinieri Matematike dhe Informatike",
            "Master në Inxhinieri Matematike dhe Informatike",
            "Praktikë IT Support",
            "Sales Operations Intern",
            "Data Processing Specialist"
        ],
        journeyTexts: [
            "Universiteti i Tiranës · Fakulteti i Shkencave të Natyrës",
            "Universiteti i Tiranës · Fakulteti i Shkencave të Natyrës",
            "Support teknik dhe troubleshooting.",
            "Vodafone · Mbështetje operative dhe raportim.",
            "Vodafone · Përpunim, validim dhe organizim i të dhënave."
        ],
        connectKicker: "03 — KONTAKT",
        connectTitle: "Të intereson të punojmë së bashku?",
        connectButton: "Më kontakto →",
        rights: "Të gjitha të drejtat e rezervuara"
    }
};

const language =
    localStorage.getItem("language") === "sq"
        ? "sq"
        : "en";

const t = copy[language];

document.documentElement.lang = t.lang;
document.title = t.title;

function setText(selector, value) {
    const el = document.querySelector(selector);
    if (el) el.textContent = value;
}

function setTexts(selector, values) {
    document.querySelectorAll(selector).forEach((el, i) => {
        if (values[i] !== undefined) {
            el.textContent = values[i];
        }
    });
}

setText(".portfolio-link", t.portfolio);
setText(".page-eyebrow", t.eyebrow);

const h1 = document.querySelector(".about-hero h1");
if (h1) {
    h1.innerHTML =
        `${t.heroBefore}<span>${t.heroAccent}</span>`;
}

setText(".about-lead", t.lead);
setText(".profile-label", t.currentRole);
setText(".about-section:not(.journey-section) .section-kicker", t.profileKicker);
setText(".about-section:not(.journey-section) .section-head h2", t.profileTitle);

document.querySelectorAll(".story-card").forEach((card, i) => {
    const item = t.story[i];
    if (!item) return;

    const title = card.querySelector("h3");
    const paragraph = card.querySelector("p");

    if (title) title.textContent = item[0];
    if (paragraph) paragraph.textContent = item[1];
});

setText(".journey-section .section-kicker", t.journeyKicker);
setText(".journey-section .section-head h2", t.journeyTitle);
setTexts(".journey-row > span", t.journeyLabels);
setTexts(".journey-row h3", t.journeyTitles);
setTexts(".journey-row p", t.journeyTexts);

setText(".about-cta .section-kicker", t.connectKicker);
setText(".about-cta h2", t.connectTitle);
setText(".cta-button", t.connectButton);

setText(".page-rights", t.rights);
