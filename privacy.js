const themeBtn = document.getElementById("themeBtn");
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "light") {
    document.body.classList.add("light");
    if (themeBtn) themeBtn.textContent = "☀";
}
if (themeBtn) {
    themeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");
        const isLight = document.body.classList.contains("light");
        themeBtn.textContent = isLight ? "☀" : "☾";
        localStorage.setItem("theme", isLight ? "light" : "dark");
    });
}
const languageSwitcher = document.getElementById("languageSwitcher");
const languageBtn = document.getElementById("languageBtn");
const currentLanguage = document.getElementById("currentLanguage");
const languageOptions = document.querySelectorAll(".language-option");
const copy = {
    en: {
        label: "English (US)",
        titlePage: "Privacy Policy | Kozma Shyti",
        backPortfolio: "← Back to portfolio",
        eyebrow: "LEGAL",
        title: "Privacy Policy",
        intro: "This Privacy Policy explains how information is handled when you visit or interact with this portfolio website.",
        lastUpdated: "Last updated:",
        updatedDate: "11 September 2026",
        scopeTitle: "Scope of this policy",
        scopeText: "This policy applies to this personal portfolio website and explains the types of information that may be processed when you browse the site, change preferences or use the contact form.",
        collectTitle: "Information you provide",
        collectText: "The contact form includes fields for your name, email address and message. In the current static version of this portfolio, submitting the form only displays a confirmation in your browser and does not send or store the form data on a server.",
        preferencesTitle: "Local preferences",
        preferencesText: "The website uses your browser's localStorage to remember interface preferences such as dark or light mode and the selected language. These preferences remain on your device until you clear your browser data or change them.",
        cookiesTitle: "Cookies and analytics",
        cookiesText: "The current portfolio does not intentionally use advertising cookies or built-in analytics tracking. If analytics, advertising or other tracking tools are added later, this policy should be updated to describe them before or when they are introduced.",
        hostingTitle: "Hosting and technical data",
        hostingText: "When the website is published, the hosting provider may automatically process technical information such as IP address, browser type, device information, request time and server logs for security, reliability and delivery of the website. The exact handling depends on the hosting provider used.",
        linksTitle: "Third-party links",
        linksText: "This portfolio may link to third-party websites or services such as LinkedIn, GitHub or social media platforms. When you follow those links, their own privacy policies and data practices apply.",
        securityTitle: "Data security",
        securityText: "Reasonable care is taken to keep the website secure. However, no website or internet transmission can be guaranteed to be completely secure, and visitors should avoid sending sensitive or confidential information through a public contact form.",
        rightsTitle: "Your choices and rights",
        rightsText: "You can clear saved theme and language preferences through your browser settings. If this website later begins storing personal information, you may contact the site owner to ask about access, correction or deletion where applicable under relevant law.",
        changesTitle: "Changes to this policy",
        changesText: "This Privacy Policy may be updated when the website, contact functionality, hosting setup or data practices change. The latest version will be published on this page with an updated date.",
        contactTitle: "Contact",
        contactText: "If you have a question about this Privacy Policy or the handling of information on this website, please use the contact section of the portfolio.",
        contactButton: "Go to Contact →",
        returnButton: "← Return to portfolio",
        rights: "All Rights Reserved"
    },
    sq: {
        label: "Shqip (AL)",
        titlePage: "Politika e Privatësisë | Kozma Shyti",
        backPortfolio: "← Kthehu te portfolio",
        eyebrow: "LIGJORE",
        title: "Politika e Privatësisë",
        intro: "Kjo Politikë e Privatësisë shpjegon se si trajtohet informacioni kur vizitoni ose ndërveproni me këtë website portfolio.",
        lastUpdated: "Përditësuar më:",
        updatedDate: "11 Shtator 2026",
        scopeTitle: "Fusha e kësaj politike",
        scopeText: "Kjo politikë zbatohet për këtë website personal portfolio dhe shpjegon llojet e informacionit që mund të përpunohen kur shfletoni faqen, ndryshoni preferencat ose përdorni formularin e kontaktit.",
        collectTitle: "Informacioni që jepni",
        collectText: "Formulari i kontaktit përmban fusha për emrin, adresën e email-it dhe mesazhin tuaj. Në versionin aktual statik të këtij portfolio-je, dërgimi i formularit vetëm shfaq një konfirmim në shfletues dhe nuk i dërgon ose ruan të dhënat e formularit në një server.",
        preferencesTitle: "Preferencat lokale",
        preferencesText: "Website-i përdor localStorage të shfletuesit për të mbajtur mend preferenca të ndërfaqes si modaliteti i errët ose i hapur dhe gjuha e zgjedhur. Këto preferenca qëndrojnë në pajisjen tuaj derisa të pastroni të dhënat e shfletuesit ose t'i ndryshoni ato.",
        cookiesTitle: "Cookies dhe analitika",
        cookiesText: "Portfolio aktual nuk përdor qëllimisht cookies reklamimi ose gjurmim analitik të integruar. Nëse në të ardhmen shtohen mjete analitike, reklamuese ose gjurmimi, kjo politikë duhet të përditësohet për t'i përshkruar ato para ose në momentin e aktivizimit.",
        hostingTitle: "Hostimi dhe të dhënat teknike",
        hostingText: "Kur website-i publikohet, ofruesi i hostimit mund të përpunojë automatikisht informacion teknik si adresa IP, lloji i shfletuesit, informacioni i pajisjes, koha e kërkesës dhe log-et e serverit për siguri, besueshmëri dhe shpërndarjen e website-it. Mënyra e saktë e trajtimit varet nga ofruesi i hostimit që përdoret.",
        linksTitle: "Lidhjet me palë të treta",
        linksText: "Ky portfolio mund të përmbajë lidhje me website ose shërbime të palëve të treta si LinkedIn, GitHub ose platforma sociale. Kur ndiqni këto lidhje, zbatohen politikat e tyre të privatësisë dhe praktikat e tyre të të dhënave.",
        securityTitle: "Siguria e të dhënave",
        securityText: "Tregohet kujdes i arsyeshëm për ta mbajtur website-in të sigurt. Megjithatë, asnjë website ose transmetim në internet nuk mund të garantohet si plotësisht i sigurt, ndaj vizitorët duhet të shmangin dërgimin e informacionit të ndjeshëm ose konfidencial përmes një formulari publik kontakti.",
        rightsTitle: "Zgjedhjet dhe të drejtat tuaja",
        rightsText: "Mund të pastroni preferencat e ruajtura për temën dhe gjuhën nga cilësimet e shfletuesit. Nëse ky website në të ardhmen fillon të ruajë të dhëna personale, mund të kontaktoni pronarin e faqes për të kërkuar akses, korrigjim ose fshirje kur kjo zbatohet sipas ligjit përkatës.",
        changesTitle: "Ndryshimet e kësaj politike",
        changesText: "Kjo Politikë e Privatësisë mund të përditësohet kur ndryshojnë website-i, funksioni i kontaktit, konfigurimi i hostimit ose praktikat e të dhënave. Versioni më i fundit do të publikohet në këtë faqe së bashku me datën e përditësimit.",
        contactTitle: "Kontakt",
        contactText: "Nëse keni pyetje për këtë Politikë të Privatësisë ose për mënyrën e trajtimit të informacionit në këtë website, ju lutemi përdorni seksionin e kontaktit të portfolio-s.",
        contactButton: "Shko te Kontakti →",
        returnButton: "← Kthehu te portfolio",
        rights: "Të gjitha të drejtat të rezervuara"
    }
};
function closeLanguageMenu() {
    if (!languageSwitcher || !languageBtn) return;
    languageSwitcher.classList.remove("open");
    languageBtn.setAttribute("aria-expanded", "false");
}
function setLanguage(lang) {
    const safe = copy[lang] ? lang : "en";
    const t = copy[safe];
    document.documentElement.lang = safe === "sq" ? "sq" : "en";
    document.title = t.titlePage;
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.dataset.i18n;
        if (t[key] !== undefined) el.textContent = t[key];
    });
    if (currentLanguage) currentLanguage.textContent = t.label;
    languageOptions.forEach(option => {
        const active = option.dataset.lang === safe;
        option.classList.toggle("active", active);
        option.setAttribute("aria-checked", active ? "true" : "false");
    });
}
if (languageBtn && languageSwitcher) {
    languageBtn.addEventListener("click", event => {
        event.stopPropagation();
        const open = languageSwitcher.classList.toggle("open");
        languageBtn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    languageOptions.forEach(option => {
        option.addEventListener("click", () => {
            setLanguage(option.dataset.lang);
            closeLanguageMenu();
        });
    });
    document.addEventListener("click", event => {
        if (!languageSwitcher.contains(event.target)) closeLanguageMenu();
    });
    document.addEventListener("keydown", event => {
        if (event.key === "Escape") closeLanguageMenu();
    });
}
setLanguage("en");
