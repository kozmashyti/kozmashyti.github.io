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
        titlePage: "Terms & Conditions | Kozma Shyti",
        backPortfolio: "← Back to portfolio",
        eyebrow: "LEGAL",
        title: "Terms & Conditions",
        intro: "These terms explain the rules for using this portfolio website and its content.",
        lastUpdated: "Last updated:",
        updatedDate: "11 September 2026",
        acceptTitle: "Acceptance of these terms",
        acceptText: "By accessing or using this website, you agree to these Terms & Conditions. If you do not agree with them, please do not use the website.",
        purposeTitle: "Purpose of the website",
        purposeText: "This website is a personal professional portfolio created to present skills, education, projects, experience and contact information. Its content is provided for informational and professional presentation purposes.",
        ipTitle: "Intellectual property",
        ipText: "Unless otherwise stated, the website design, original text, code, graphics and portfolio materials are owned by Kozma Shyti. You may view the website for personal or recruitment purposes, but you may not reproduce, republish or commercially use its original content without permission.",
        accuracyTitle: "Accuracy of information",
        accuracyText: "Reasonable care is taken to keep portfolio information accurate and current, but no guarantee is made that every item is complete, error-free or continuously up to date.",
        linksTitle: "External links",
        linksText: "This website may contain links to third-party websites or services such as LinkedIn, GitHub or social platforms. Those services are controlled by their respective providers, and this website is not responsible for their content, availability or privacy practices.",
        contactTitle: "Contact form and communications",
        contactText: "If you use a contact form or contact link, the information you provide should be accurate and lawful. You must not use the website to send spam, malicious content, abusive messages or material that infringes the rights of others.",
        warrantyTitle: "No warranties",
        warrantyText: "The website is provided on an “as is” and “as available” basis. No warranty is made that the website will always be available, uninterrupted, secure or free from technical errors.",
        liabilityTitle: "Limitation of liability",
        liabilityText: "To the extent permitted by applicable law, Kozma Shyti is not responsible for indirect, incidental or consequential loss arising from the use of, or inability to use, this website or third-party links.",
        changesTitle: "Changes to these terms",
        changesText: "These Terms & Conditions may be updated when the website, its services or legal requirements change. The latest version will be published on this page together with its updated date.",
        contactMeTitle: "Contact",
        contactMeText: "For questions about these terms or permission to use portfolio content, please use the contact section of the portfolio website.",
        contactButton: "Go to Contact →",
        returnButton: "← Return to portfolio",
        rights: "All Rights Reserved"
    },
    sq: {
        label: "Shqip (AL)",
        titlePage: "Termat & Kushtet | Kozma Shyti",
        backPortfolio: "← Kthehu te portfolio",
        eyebrow: "LIGJORE",
        title: "Termat & Kushtet",
        intro: "Këto terma shpjegojnë rregullat për përdorimin e këtij website-i portfolio dhe përmbajtjes së tij.",
        lastUpdated: "Përditësuar më:",
        updatedDate: "11 Shtator 2026",
        acceptTitle: "Pranimi i këtyre termave",
        acceptText: "Duke hyrë ose përdorur këtë website, ju pranoni këto Terma & Kushte. Nëse nuk jeni dakord me to, ju lutemi mos e përdorni website-in.",
        purposeTitle: "Qëllimi i website-it",
        purposeText: "Ky website është një portfolio personal profesional i krijuar për të paraqitur aftësitë, edukimin, projektet, eksperiencën dhe informacionin e kontaktit. Përmbajtja ofrohet për qëllime informative dhe prezantimi profesional.",
        ipTitle: "Pronësia intelektuale",
        ipText: "Nëse nuk përcaktohet ndryshe, dizajni i website-it, tekstet origjinale, kodi, grafikat dhe materialet e portfolio-s janë pronë e Kozma Shyti. Mund ta shikoni website-in për përdorim personal ose rekrutimi, por nuk mund të riprodhoni, ripublikoni apo përdorni komercialisht përmbajtjen origjinale pa leje.",
        accuracyTitle: "Saktësia e informacionit",
        accuracyText: "Tregohet kujdes i arsyeshëm që informacioni i portfolio-s të jetë i saktë dhe i përditësuar, por nuk garantohet që çdo informacion të jetë i plotë, pa gabime ose vazhdimisht i përditësuar.",
        linksTitle: "Lidhjet e jashtme",
        linksText: "Website-i mund të përmbajë lidhje me faqe ose shërbime të palëve të treta si LinkedIn, GitHub ose platforma sociale. Këto shërbime kontrollohen nga ofruesit përkatës dhe ky website nuk mban përgjegjësi për përmbajtjen, disponueshmërinë ose praktikat e tyre të privatësisë.",
        contactTitle: "Formulari i kontaktit dhe komunikimet",
        contactText: "Nëse përdorni formularin ose një lidhje kontakti, informacioni që jepni duhet të jetë i saktë dhe i ligjshëm. Website-i nuk duhet të përdoret për spam, përmbajtje keqdashëse, mesazhe abuzive ose materiale që cenojnë të drejtat e të tjerëve.",
        warrantyTitle: "Pa garanci",
        warrantyText: "Website-i ofrohet në gjendjen që është dhe sipas disponueshmërisë. Nuk garantohet që ai do të jetë gjithmonë i disponueshëm, pa ndërprerje, i sigurt ose pa gabime teknike.",
        liabilityTitle: "Kufizimi i përgjegjësisë",
        liabilityText: "Në masën e lejuar nga ligji në fuqi, Kozma Shyti nuk mban përgjegjësi për humbje indirekte, aksidentale ose pasuese që mund të lindin nga përdorimi ose pamundësia për të përdorur këtë website ose lidhjet e palëve të treta.",
        changesTitle: "Ndryshimet e këtyre termave",
        changesText: "Këto Terma & Kushte mund të përditësohen kur ndryshon website-i, shërbimet e tij ose kërkesat ligjore. Versioni më i fundit do të publikohet në këtë faqe së bashku me datën e përditësimit.",
        contactMeTitle: "Kontakt",
        contactMeText: "Për pyetje mbi këto terma ose për leje për përdorimin e përmbajtjes së portfolio-s, ju lutemi përdorni seksionin e kontaktit të website-it.",
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
