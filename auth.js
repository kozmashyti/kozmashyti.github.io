const authThemeBtn = document.getElementById("authThemeBtn");

/* =========================
   THEME
========================= */

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "light") {
    document.body.classList.add("light");

    if (authThemeBtn) {
        authThemeBtn.textContent = "☀";
    }
}

if (authThemeBtn) {
    authThemeBtn.addEventListener("click", () => {
        document.body.classList.toggle("light");

        const isLight =
            document.body.classList.contains("light");

        authThemeBtn.textContent =
            isLight ? "☀" : "☾";

        localStorage.setItem(
            "theme",
            isLight ? "light" : "dark"
        );
    });
}

/* =========================
   LANGUAGE
========================= */

const authTranslations = {
    en: {
        htmlLang: "en",
        title: "Account | Kozma Shyti",

        portfolio: "Portfolio",
        themeAria: "Change theme",

        eyebrow: "K. ACCOUNT",
        heroBefore: "One place for your",
        heroAccent: "account.",
        heroDescription:
            "Sign in, create an account, verify your email and securely recover your password.",

        benefit1: "Real email & password authentication",
        benefit2: "Email verification and persistent sessions",
        benefit3: "Secure password recovery by email",

        loginTab: "Login",
        signupTab: "Sign Up",

        loginTitle: "Welcome back.",
        loginSubtitle: "Enter your details to continue.",
        emailLabel: "Email",
        emailPlaceholder: "you@example.com",
        passwordLabel: "Password",
        passwordPlaceholder: "Enter your password",
        forgotPassword: "Forgot password?",
        rememberMe: "Remember me",
        loginButton: "Login",

        loginSwitchPrefix: "Don't have an account?",
        loginSwitchAction: "Sign Up",

        signupTitle: "Create account.",
        signupSubtitle: "Set up your account in a few fields.",
        fullNameLabel: "Full name",
        fullNamePlaceholder: "Your name",
        signupEmailLabel: "Email",
        signupEmailPlaceholder: "you@example.com",
        signupPasswordLabel: "Password",
        signupPasswordPlaceholder: "8–16 characters",
        confirmPasswordLabel: "Confirm password",
        confirmPasswordPlaceholder: "Repeat your password",
        termsPrefix: "I agree to the",
        terms: "Terms",
        and: "and",
        privacy: "Privacy Policy",
        createAccountButton: "Create account",

        signupSwitchPrefix: "Already have an account?",
        signupSwitchAction: "Sign In",

        forgotTitle: "Forgot your password?",
        forgotSubtitle: "Enter the email associated with your account.",
        forgotEmailLabel: "Email",
        forgotEmailPlaceholder: "you@example.com",
        sendResetLink: "Send reset link",
        backToSignIn: "← Back to Sign In",

        resetTitle: "Create a new password.",
        resetSubtitle: "Use a strong password that you have not used before.",
        resetPasswordLabel: "New password",
        resetPasswordPlaceholder: "8–16 characters",
        resetConfirmLabel: "Confirm new password",
        resetConfirmPlaceholder: "Repeat your new password",
        updatePassword: "Update password",

        accountTitle: "Your account.",
        accountSubtitle: "You are signed in securely.",
        accountStatus: "Account status",
        accountActive: "Active",
        accountEmail: "Email",
        signOut: "Sign Out",

        ruleLength: "8–16 characters",
        ruleUppercase: "At least one uppercase letter",
        ruleLowercase: "At least one lowercase letter",
        ruleNumber: "At least one number",
        ruleSpecial: "At least one special character",

        show: "Show",
        hide: "Hide",
        showPasswordAria: "Show password",
        hidePasswordAria: "Hide password",

        notConfigured:
            "Supabase is not configured yet. Add your Project URL and publishable key in supabase-config.js.",

        authReady:
            "Supabase Auth is connected.",

        checkEmail:
            "Account created. Check your email and confirm your address before signing in.",

        signedIn:
            "Signed in successfully.",

        signedOut:
            "You have been signed out.",

        resetEmailSent:
            "Password reset email sent. Open the secure link in your email to continue.",

        resetSuccess:
            "Password updated successfully. Please sign in with your new password.",

        passwordsMismatch:
            "Passwords do not match.",

        invalidPassword:
            "Password must be 8–16 characters and include uppercase, lowercase, a number and a special character.",

        rights: "All Rights Reserved",

        genericError:
            "Something went wrong. Please try again."
    },

    sq: {
        htmlLang: "sq",
        title: "Llogaria | Kozma Shyti",

        portfolio: "Portfolio",
        themeAria: "Ndrysho pamjen",

        eyebrow: "K. LLOGARIA",
        heroBefore: "Një vend për",
        heroAccent: "llogarinë tënde.",
        heroDescription:
            "Hyr, krijo llogari, verifiko email-in dhe rikupero në mënyrë të sigurt fjalëkalimin.",

        benefit1: "Autentikim real me email & fjalëkalim",
        benefit2: "Verifikim email-i dhe session i ruajtur",
        benefit3: "Rikuperim i sigurt i fjalëkalimit me email",

        loginTab: "Hyr",
        signupTab: "Regjistrohu",

        loginTitle: "Mirë se u riktheve.",
        loginSubtitle: "Vendos të dhënat për të vazhduar.",
        emailLabel: "Email",
        emailPlaceholder: "ti@example.com",
        passwordLabel: "Fjalëkalimi",
        passwordPlaceholder: "Vendos fjalëkalimin",
        forgotPassword: "Harrove fjalëkalimin?",
        rememberMe: "Më mbaj mend",
        loginButton: "Hyr",

        loginSwitchPrefix: "Nuk ke llogari?",
        loginSwitchAction: "Regjistrohu",

        signupTitle: "Krijo llogari.",
        signupSubtitle: "Plotëso të dhënat për të krijuar llogarinë.",
        fullNameLabel: "Emri i plotë",
        fullNamePlaceholder: "Emri yt",
        signupEmailLabel: "Email",
        signupEmailPlaceholder: "ti@example.com",
        signupPasswordLabel: "Fjalëkalimi",
        signupPasswordPlaceholder: "8–16 karaktere",
        confirmPasswordLabel: "Konfirmo fjalëkalimin",
        confirmPasswordPlaceholder: "Përsërit fjalëkalimin",
        termsPrefix: "Pranoj",
        terms: "Termat",
        and: "dhe",
        privacy: "Politikën e Privatësisë",
        createAccountButton: "Krijo llogari",

        signupSwitchPrefix: "Ke një llogari?",
        signupSwitchAction: "Hyr",

        forgotTitle: "Harrove fjalëkalimin?",
        forgotSubtitle: "Vendos email-in e lidhur me llogarinë tënde.",
        forgotEmailLabel: "Email",
        forgotEmailPlaceholder: "ti@example.com",
        sendResetLink: "Dërgo linkun e rivendosjes",
        backToSignIn: "← Kthehu te Hyrja",

        resetTitle: "Krijo një fjalëkalim të ri.",
        resetSubtitle: "Përdor një fjalëkalim të fortë që nuk e ke përdorur më parë.",
        resetPasswordLabel: "Fjalëkalimi i ri",
        resetPasswordPlaceholder: "8–16 karaktere",
        resetConfirmLabel: "Konfirmo fjalëkalimin e ri",
        resetConfirmPlaceholder: "Përsërit fjalëkalimin e ri",
        updatePassword: "Përditëso fjalëkalimin",

        accountTitle: "Llogaria jote.",
        accountSubtitle: "Je i identifikuar në mënyrë të sigurt.",
        accountStatus: "Statusi i llogarisë",
        accountActive: "Aktive",
        accountEmail: "Email",
        signOut: "Dil",

        ruleLength: "8–16 karaktere",
        ruleUppercase: "Të paktën një shkronjë e madhe",
        ruleLowercase: "Të paktën një shkronjë e vogël",
        ruleNumber: "Të paktën një numër",
        ruleSpecial: "Të paktën një simbol special",

        show: "Shfaq",
        hide: "Fshih",
        showPasswordAria: "Shfaq fjalëkalimin",
        hidePasswordAria: "Fshih fjalëkalimin",

        notConfigured:
            "Supabase nuk është konfiguruar ende. Vendos Project URL dhe publishable key te supabase-config.js.",

        authReady:
            "Supabase Auth është lidhur.",

        checkEmail:
            "Llogaria u krijua. Kontrollo email-in dhe konfirmo adresën para se të hysh.",

        signedIn:
            "Hyrja u krye me sukses.",

        signedOut:
            "Dole nga llogaria.",

        resetEmailSent:
            "Email-i për rivendosjen e fjalëkalimit u dërgua. Hap linkun e sigurt në email për të vazhduar.",

        resetSuccess:
            "Fjalëkalimi u përditësua me sukses. Hyr me fjalëkalimin e ri.",

        passwordsMismatch:
            "Fjalëkalimet nuk përputhen.",

        invalidPassword:
            "Fjalëkalimi duhet të ketë 8–16 karaktere, shkronjë të madhe, të vogël, numër dhe simbol special.",

        rights: "Të gjitha të drejtat e rezervuara",

        genericError:
            "Ndodhi një problem. Provo përsëri."
    }
};

const savedLanguage = localStorage.getItem("language");
const authLanguage = savedLanguage === "sq" ? "sq" : "en";
const t = authTranslations[authLanguage];

/* =========================
   HELPERS
========================= */

const authMessage = document.getElementById("authMessage");
const authCard = document.querySelector(".auth-card");
const tabs = document.querySelectorAll("[data-auth-tab]");
const panels = document.querySelectorAll("[data-auth-panel]");

function setText(selector, value) {
    const element = document.querySelector(selector);
    if (element && value !== undefined) {
        element.textContent = value;
    }
}

function setPlaceholder(selector, value) {
    const element = document.querySelector(selector);
    if (element && value !== undefined) {
        element.placeholder = value;
    }
}

function setMessage(message, type = "success") {
    if (!authMessage) return;

    authMessage.textContent = message;
    authMessage.classList.remove("error", "success");
    authMessage.classList.add(type);
}

function clearMessage() {
    if (!authMessage) return;

    authMessage.textContent = "";
    authMessage.classList.remove("error", "success");
}

function setLoading(button, isLoading, label) {
    if (!button) return;

    button.disabled = isLoading;
    button.textContent = isLoading ? "..." : label;
}

function authPageUrl(query = "") {
    const url = new URL("auth.html", window.location.href);

    url.search = query
        ? `?${query}`
        : "";

    url.hash = "";

    return url.href;
}

/* =========================
   TRANSLATION
========================= */

function applyAuthLanguage() {
    document.documentElement.lang = t.htmlLang;
    document.title = t.title;

    setText(".back-link", t.portfolio);

    if (authThemeBtn) {
        authThemeBtn.setAttribute(
            "aria-label",
            t.themeAria
        );
    }

    setText(".auth-eyebrow", t.eyebrow);

    const heroHeading =
        document.querySelector(".auth-intro h1");

    if (heroHeading) {
        heroHeading.innerHTML =
            `${t.heroBefore}<span>${t.heroAccent}</span>`;
    }

    const introText =
        document.querySelector(
            ".auth-intro > p:not(.auth-eyebrow)"
        );

    if (introText) {
        introText.textContent =
            t.heroDescription;
    }

    const benefits =
        document.querySelectorAll(".auth-benefits p");

    if (benefits[0]) benefits[0].textContent = t.benefit1;
    if (benefits[1]) benefits[1].textContent = t.benefit2;
    if (benefits[2]) benefits[2].textContent = t.benefit3;

    const tabButtons =
        document.querySelectorAll(".auth-tab");

    if (tabButtons[0]) tabButtons[0].textContent = t.loginTab;
    if (tabButtons[1]) tabButtons[1].textContent = t.signupTab;

    setText("#loginPanel .auth-panel-heading h2", t.loginTitle);
    setText("#loginPanel .auth-panel-heading p", t.loginSubtitle);
    setText('label[for="loginEmail"]', t.emailLabel);
    setPlaceholder("#loginEmail", t.emailPlaceholder);
    setText('label[for="loginPassword"]', t.passwordLabel);
    setPlaceholder("#loginPassword", t.passwordPlaceholder);
    setText("#forgotPasswordBtn", t.forgotPassword);

    const rememberText =
        document.querySelector(".remember-row span");

    if (rememberText) {
        rememberText.textContent = t.rememberMe;
    }

    const loginButton =
        document.querySelector('#loginForm button[type="submit"]');

    if (loginButton) {
        loginButton.dataset.label = t.loginButton;
        loginButton.textContent = t.loginButton;
    }

    setText(".login-switch-prefix", t.loginSwitchPrefix);

    const loginSwitchButton =
        document.querySelector('[data-switch-auth="signup"]');

    if (loginSwitchButton) {
        loginSwitchButton.textContent = t.loginSwitchAction;
    }

    setText("#signupPanel .auth-panel-heading h2", t.signupTitle);
    setText("#signupPanel .auth-panel-heading p", t.signupSubtitle);
    setText('label[for="signupName"]', t.fullNameLabel);
    setPlaceholder("#signupName", t.fullNamePlaceholder);
    setText('label[for="signupEmail"]', t.signupEmailLabel);
    setPlaceholder("#signupEmail", t.signupEmailPlaceholder);
    setText('label[for="signupPassword"]', t.signupPasswordLabel);
    setPlaceholder("#signupPassword", t.signupPasswordPlaceholder);
    setText('label[for="signupConfirmPassword"]', t.confirmPasswordLabel);
    setPlaceholder("#signupConfirmPassword", t.confirmPasswordPlaceholder);

    const termsText =
        document.querySelector(".terms-row span");

    if (termsText) {
        termsText.innerHTML =
            `${t.termsPrefix} ` +
            `<a href="terms.html">${t.terms}</a> ` +
            `${t.and} ` +
            `<a href="privacy.html">${t.privacy}</a>.`;
    }

    const signupButton =
        document.querySelector('#signupForm button[type="submit"]');

    if (signupButton) {
        signupButton.dataset.label = t.createAccountButton;
        signupButton.textContent = t.createAccountButton;
    }

    setText(".signup-switch-prefix", t.signupSwitchPrefix);

    const signupSwitchButton =
        document.querySelector('[data-switch-auth="login"]');

    if (signupSwitchButton) {
        signupSwitchButton.textContent = t.signupSwitchAction;
    }

    setText("#forgotPanel .auth-panel-heading h2", t.forgotTitle);
    setText("#forgotPanel .auth-panel-heading p", t.forgotSubtitle);
    setText('label[for="forgotEmail"]', t.forgotEmailLabel);
    setPlaceholder("#forgotEmail", t.forgotEmailPlaceholder);

    const forgotSubmit =
        document.querySelector('#forgotForm button[type="submit"]');

    if (forgotSubmit) {
        forgotSubmit.dataset.label = t.sendResetLink;
        forgotSubmit.textContent = t.sendResetLink;
    }

    document
        .querySelectorAll('#forgotPanel [data-switch-auth="login"]')
        .forEach(button => {
            button.textContent = t.backToSignIn;
        });

    setText("#resetPanel .auth-panel-heading h2", t.resetTitle);
    setText("#resetPanel .auth-panel-heading p", t.resetSubtitle);
    setText('label[for="resetPassword"]', t.resetPasswordLabel);
    setPlaceholder("#resetPassword", t.resetPasswordPlaceholder);
    setText('label[for="resetConfirmPassword"]', t.resetConfirmLabel);
    setPlaceholder("#resetConfirmPassword", t.resetConfirmPlaceholder);

    const resetSubmit =
        document.querySelector('#resetForm button[type="submit"]');

    if (resetSubmit) {
        resetSubmit.dataset.label = t.updatePassword;
        resetSubmit.textContent = t.updatePassword;
    }

    document
        .querySelectorAll('#resetPanel [data-switch-auth="login"]')
        .forEach(button => {
            button.textContent = t.backToSignIn;
        });

    setText(".rule-length", t.ruleLength);
    setText(".rule-uppercase", t.ruleUppercase);
    setText(".rule-lowercase", t.ruleLowercase);
    setText(".rule-number", t.ruleNumber);
    setText(".rule-special", t.ruleSpecial);

    setText(".reset-rule-length", t.ruleLength);
    setText(".reset-rule-uppercase", t.ruleUppercase);
    setText(".reset-rule-lowercase", t.ruleLowercase);
    setText(".reset-rule-number", t.ruleNumber);
    setText(".reset-rule-special", t.ruleSpecial);

    setText("#accountPanel .auth-panel-heading h2", t.accountTitle);
    setText("#accountPanel .auth-panel-heading p", t.accountSubtitle);
    setText(".page-rights", t.rights);

    const detailLabels =
        document.querySelectorAll(".account-detail-label");

    if (detailLabels[0]) detailLabels[0].textContent = t.accountStatus;
    if (detailLabels[1]) detailLabels[1].textContent = t.accountEmail;

    setText(".account-status-value", t.accountActive);

    const logoutBtn =
        document.getElementById("logoutBtn");

    if (logoutBtn) {
        logoutBtn.dataset.label = t.signOut;
        logoutBtn.textContent = t.signOut;
    }

    document
        .querySelectorAll("[data-password-toggle]")
        .forEach(button => {
            const input =
                document.getElementById(
                    button.dataset.passwordToggle
                );

            if (!input) return;

            const isHidden =
                input.type === "password";

            button.textContent =
                isHidden ? t.show : t.hide;

            button.setAttribute(
                "aria-label",
                isHidden
                    ? t.showPasswordAria
                    : t.hidePasswordAria
            );
        });
}

applyAuthLanguage();

/* =========================
   SUPABASE
========================= */

const config =
    window.SUPABASE_CONFIG || {};

const isConfigured =
    typeof config.url === "string" &&
    typeof config.publishableKey === "string" &&
    config.url.startsWith("https://") &&
    !config.url.includes("PASTE_") &&
    config.publishableKey.length > 20 &&
    !config.publishableKey.includes("PASTE_");

let supabaseClient = null;

if (
    isConfigured &&
    window.supabase &&
    typeof window.supabase.createClient === "function"
) {
    supabaseClient =
        window.supabase.createClient(
            config.url,
            config.publishableKey,
            {
                auth: {
                    persistSession: true,
                    autoRefreshToken: true,
                    detectSessionInUrl: true
                }
            }
        );

    setText(
        ".auth-backend-note p",
        t.authReady
    );
} else {
    setText(
        ".auth-backend-note p",
        t.notConfigured
    );

    const note =
        document.querySelector(".auth-backend-note");

    if (note) {
        note.classList.add("auth-config-warning");
    }
}

/* =========================
   PANEL SWITCHING
========================= */

function switchAuthPanel(target) {
    tabs.forEach(item => {
        const isActive =
            item.dataset.authTab === target;

        item.classList.toggle(
            "active",
            isActive
        );

        item.setAttribute(
            "aria-selected",
            isActive ? "true" : "false"
        );
    });

    panels.forEach(panel => {
        panel.classList.toggle(
            "active",
            panel.dataset.authPanel === target
        );
    });

    if (authCard) {
        authCard.classList.toggle(
            "authenticated",
            target === "account"
        );
    }

    clearMessage();
}

tabs.forEach(tab => {
    tab.addEventListener("click", () => {
        switchAuthPanel(tab.dataset.authTab);
    });
});

document
    .querySelectorAll("[data-switch-auth]")
    .forEach(button => {
        button.addEventListener("click", () => {
            switchAuthPanel(
                button.dataset.switchAuth
            );
        });
    });

/* =========================
   PASSWORD VISIBILITY
========================= */

document
    .querySelectorAll("[data-password-toggle]")
    .forEach(button => {
        button.addEventListener("click", () => {
            const input =
                document.getElementById(
                    button.dataset.passwordToggle
                );

            if (!input) return;

            const show =
                input.type === "password";

            input.type =
                show ? "text" : "password";

            button.textContent =
                show ? t.hide : t.show;

            button.setAttribute(
                "aria-label",
                show
                    ? t.hidePasswordAria
                    : t.showPasswordAria
            );
        });
    });

/* =========================
   PASSWORD RULES
========================= */

const passwordChecks = {
    length: value =>
        value.length >= 8 &&
        value.length <= 16,

    uppercase: value =>
        /[A-Z]/.test(value),

    lowercase: value =>
        /[a-z]/.test(value),

    number: value =>
        /\d/.test(value),

    special: value =>
        /[^A-Za-z0-9]/.test(value)
};

function isStrongPassword(value) {
    return Object.values(passwordChecks)
        .every(validate => validate(value));
}

function updateRules(value, attributeName) {
    Object.entries(passwordChecks)
        .forEach(([rule, validate]) => {
            const row =
                document.querySelector(
                    `.password-rule[${attributeName}="${rule}"]`
                );

            if (row) {
                row.classList.toggle(
                    "valid",
                    validate(value)
                );
            }
        });
}

const signupPassword =
    document.getElementById("signupPassword");

const signupConfirmPassword =
    document.getElementById("signupConfirmPassword");

const resetPassword =
    document.getElementById("resetPassword");

const resetConfirmPassword =
    document.getElementById("resetConfirmPassword");

if (signupPassword) {
    signupPassword.addEventListener(
        "input",
        () => {
            updateRules(
                signupPassword.value,
                "data-rule"
            );

            clearMessage();
        }
    );
}

if (resetPassword) {
    resetPassword.addEventListener(
        "input",
        () => {
            updateRules(
                resetPassword.value,
                "data-reset-rule"
            );

            clearMessage();
        }
    );
}

/* =========================
   USER / SESSION UI
========================= */

function showAccount(user) {
    if (!user) return;

    const name =
        user.user_metadata?.full_name ||
        user.email?.split("@")[0] ||
        "User";

    const email =
        user.email || "";

    const avatarText =
        name
            .trim()
            .split(/\s+/)
            .slice(0, 2)
            .map(part => part[0] || "")
            .join("")
            .toUpperCase() || "U";

    setText("#accountName", name);
    setText("#accountEmail", email);
    setText("#accountEmailDetail", email);
    setText("#accountAvatar", avatarText);

    switchAuthPanel("account");
}

async function loadExistingSession() {
    if (!supabaseClient) return;

    const {
        data,
        error
    } =
        await supabaseClient.auth.getSession();

    if (error) {
        setMessage(
            error.message || t.genericError,
            "error"
        );
        return;
    }

    if (
        data?.session?.user &&
        !isRecoveryMode()
    ) {
        showAccount(
            data.session.user
        );
    }
}

function isRecoveryMode() {
    const params =
        new URLSearchParams(
            window.location.search
        );

    return params.get("mode") === "recovery";
}

/* =========================
   SIGN UP
========================= */

const signupForm =
    document.getElementById("signupForm");

if (signupForm) {
    signupForm.addEventListener(
        "submit",
        async event => {
            event.preventDefault();
            clearMessage();

            if (!supabaseClient) {
                setMessage(
                    t.notConfigured,
                    "error"
                );
                return;
            }

            const name =
                document
                    .getElementById("signupName")
                    .value
                    .trim();

            const email =
                document
                    .getElementById("signupEmail")
                    .value
                    .trim();

            const password =
                signupPassword.value;

            const confirmation =
                signupConfirmPassword.value;

            if (!isStrongPassword(password)) {
                setMessage(
                    t.invalidPassword,
                    "error"
                );
                return;
            }

            if (password !== confirmation) {
                setMessage(
                    t.passwordsMismatch,
                    "error"
                );
                return;
            }

            const button =
                signupForm.querySelector(
                    'button[type="submit"]'
                );

            setLoading(
                button,
                true,
                button.dataset.label || t.createAccountButton
            );

            const {
                data,
                error
            } =
                await supabaseClient.auth.signUp({
                    email,
                    password,
                    options: {
                        data: {
                            full_name: name
                        },
                        emailRedirectTo:
                            authPageUrl("verified=1")
                    }
                });

            setLoading(
                button,
                false,
                button.dataset.label || t.createAccountButton
            );

            if (error) {
                setMessage(
                    error.message || t.genericError,
                    "error"
                );
                return;
            }

            signupForm.reset();
            updateRules("", "data-rule");

            if (data?.session?.user) {
                showAccount(
                    data.session.user
                );
                setMessage(
                    t.signedIn,
                    "success"
                );
            } else {
                switchAuthPanel("login");
                setMessage(
                    t.checkEmail,
                    "success"
                );
            }
        }
    );
}

/* =========================
   LOGIN
========================= */

const loginForm =
    document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener(
        "submit",
        async event => {
            event.preventDefault();
            clearMessage();

            if (!supabaseClient) {
                setMessage(
                    t.notConfigured,
                    "error"
                );
                return;
            }

            const email =
                document
                    .getElementById("loginEmail")
                    .value
                    .trim();

            const password =
                document
                    .getElementById("loginPassword")
                    .value;

            const button =
                loginForm.querySelector(
                    'button[type="submit"]'
                );

            setLoading(
                button,
                true,
                button.dataset.label || t.loginButton
            );

            const {
                data,
                error
            } =
                await supabaseClient.auth
                    .signInWithPassword({
                        email,
                        password
                    });

            setLoading(
                button,
                false,
                button.dataset.label || t.loginButton
            );

            if (error) {
                setMessage(
                    error.message || t.genericError,
                    "error"
                );
                return;
            }

            if (data?.user) {
                showAccount(data.user);
                setMessage(
                    t.signedIn,
                    "success"
                );
            }
        }
    );
}

/* =========================
   FORGOT PASSWORD
========================= */

const forgotPasswordBtn =
    document.getElementById("forgotPasswordBtn");

if (forgotPasswordBtn) {
    forgotPasswordBtn.addEventListener(
        "click",
        () => {
            const loginEmail =
                document.getElementById("loginEmail");

            const forgotEmail =
                document.getElementById("forgotEmail");

            if (
                loginEmail &&
                forgotEmail &&
                loginEmail.value
            ) {
                forgotEmail.value =
                    loginEmail.value;
            }

            switchAuthPanel("forgot");
        }
    );
}

const forgotForm =
    document.getElementById("forgotForm");

if (forgotForm) {
    forgotForm.addEventListener(
        "submit",
        async event => {
            event.preventDefault();
            clearMessage();

            if (!supabaseClient) {
                setMessage(
                    t.notConfigured,
                    "error"
                );
                return;
            }

            const email =
                document
                    .getElementById("forgotEmail")
                    .value
                    .trim();

            const button =
                forgotForm.querySelector(
                    'button[type="submit"]'
                );

            setLoading(
                button,
                true,
                button.dataset.label || t.sendResetLink
            );

            const {
                error
            } =
                await supabaseClient.auth
                    .resetPasswordForEmail(
                        email,
                        {
                            redirectTo:
                                authPageUrl("mode=recovery")
                        }
                    );

            setLoading(
                button,
                false,
                button.dataset.label || t.sendResetLink
            );

            if (error) {
                setMessage(
                    error.message || t.genericError,
                    "error"
                );
                return;
            }

            setMessage(
                t.resetEmailSent,
                "success"
            );
        }
    );
}

/* =========================
   RESET PASSWORD
========================= */

const resetForm =
    document.getElementById("resetForm");

if (resetForm) {
    resetForm.addEventListener(
        "submit",
        async event => {
            event.preventDefault();
            clearMessage();

            if (!supabaseClient) {
                setMessage(
                    t.notConfigured,
                    "error"
                );
                return;
            }

            const password =
                resetPassword.value;

            const confirmation =
                resetConfirmPassword.value;

            if (!isStrongPassword(password)) {
                setMessage(
                    t.invalidPassword,
                    "error"
                );
                return;
            }

            if (password !== confirmation) {
                setMessage(
                    t.passwordsMismatch,
                    "error"
                );
                return;
            }

            const button =
                resetForm.querySelector(
                    'button[type="submit"]'
                );

            setLoading(
                button,
                true,
                button.dataset.label || t.updatePassword
            );

            const {
                error
            } =
                await supabaseClient.auth
                    .updateUser({
                        password
                    });

            setLoading(
                button,
                false,
                button.dataset.label || t.updatePassword
            );

            if (error) {
                setMessage(
                    error.message || t.genericError,
                    "error"
                );
                return;
            }

            resetForm.reset();
            updateRules("", "data-reset-rule");

            await supabaseClient.auth.signOut();

            window.history.replaceState(
                {},
                document.title,
                "auth.html"
            );

            switchAuthPanel("login");

            setMessage(
                t.resetSuccess,
                "success"
            );
        }
    );
}

/* =========================
   LOGOUT
========================= */

const logoutBtn =
    document.getElementById("logoutBtn");

if (logoutBtn) {
    logoutBtn.addEventListener(
        "click",
        async () => {
            clearMessage();

            if (!supabaseClient) {
                switchAuthPanel("login");
                return;
            }

            setLoading(
                logoutBtn,
                true,
                logoutBtn.dataset.label || t.signOut
            );

            const {
                error
            } =
                await supabaseClient.auth.signOut();

            setLoading(
                logoutBtn,
                false,
                logoutBtn.dataset.label || t.signOut
            );

            if (error) {
                setMessage(
                    error.message || t.genericError,
                    "error"
                );
                return;
            }

            switchAuthPanel("login");

            setMessage(
                t.signedOut,
                "success"
            );
        }
    );
}

/* =========================
   AUTH STATE
========================= */

if (supabaseClient) {
    supabaseClient.auth.onAuthStateChange(
        (event, session) => {
            if (event === "PASSWORD_RECOVERY") {
                switchAuthPanel("reset");
                return;
            }

            if (
                event === "SIGNED_IN" &&
                session?.user &&
                !isRecoveryMode()
            ) {
                showAccount(
                    session.user
                );
            }

            if (event === "SIGNED_OUT") {
                if (!isRecoveryMode()) {
                    switchAuthPanel("login");
                }
            }
        }
    );

    if (isRecoveryMode()) {
        switchAuthPanel("reset");
    } else {
        loadExistingSession();
    }
}
