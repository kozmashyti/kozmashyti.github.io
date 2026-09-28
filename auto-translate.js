/*
 * Automatic site translation for languages selected in languages.html.
 *
 * English and Albanian keep the hand-written translations already built
 * into the portfolio. Other languages use Google Translate in-page.
 */

(function () {
    const selectedLanguage =
        localStorage.getItem("language") || "en";

    const nativeLanguages = ["en", "sq"];

    function setTranslateCookie(languageCode) {
        document.cookie =
            `googtrans=/en/${languageCode};path=/;SameSite=Lax`;
    }

    function injectTranslateCleanupStyles() {
        if (document.getElementById("autoTranslateStyles")) {
            return;
        }

        const style =
            document.createElement("style");

        style.id = "autoTranslateStyles";

        style.textContent = `
            #google_translate_element,
            .goog-te-banner-frame,
            .goog-te-balloon-frame,
            .goog-te-gadget,
            .goog-logo-link,
            .goog-te-menu-value {
                display: none !important;
            }

            html,
            body {
                top: 0 !important;
            }

            body > .skiptranslate {
                display: none !important;
            }
        `;

        document.head.appendChild(style);
    }

    if (nativeLanguages.includes(selectedLanguage)) {
        return;
    }

    document.documentElement.lang =
        selectedLanguage;

    setTranslateCookie(selectedLanguage);
    injectTranslateCleanupStyles();

    const holder =
        document.createElement("div");

    holder.id = "google_translate_element";
    holder.setAttribute("aria-hidden", "true");

    document.body.appendChild(holder);

    window.googleTranslateElementInit = function () {
        if (
            !window.google ||
            !google.translate ||
            !google.translate.TranslateElement
        ) {
            return;
        }

        new google.translate.TranslateElement(
            {
                pageLanguage: "en",
                autoDisplay: false
            },
            "google_translate_element"
        );

        let attempts = 0;

        const interval =
            window.setInterval(() => {
                attempts += 1;

                const combo =
                    document.querySelector(
                        ".goog-te-combo"
                    );

                if (combo) {
                    combo.value =
                        selectedLanguage;

                    combo.dispatchEvent(
                        new Event(
                            "change",
                            {
                                bubbles: true
                            }
                        )
                    );

                    window.clearInterval(
                        interval
                    );

                    return;
                }

                if (attempts >= 40) {
                    window.clearInterval(
                        interval
                    );
                }
            }, 250);
    };

    const script =
        document.createElement("script");

    script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";

    script.async = true;

    document.head.appendChild(script);
})();
