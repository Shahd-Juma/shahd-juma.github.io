const themeBtn = document.getElementById("theme-btn");

function toggleTheme() {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        themeBtn.textContent = "☀️ Light mode";
    } else {
        themeBtn.textContent = "🌙 Dark mode";
    }
}

themeBtn.addEventListener("click", toggleTheme);

const translations = {
    en: {
        "logo": "SHAHD JUM'AH",
        "photo-btn": "Switch photo",
        "nav-about": "About",
        "nav-skills": "Skills",
        "nav-projects": "Projects",
        "nav-contact": "Contact",
        "about-title": "About Me",
        "about-text": "I'm Shahd Jum'ah, with a background in Fintech and Risk Management, currently building my tech skills at 42 Amman. So far I've learned HTML, CSS, JavaScript, Git and the Linux terminal. I bring curiosity, commitment, self-learning, and a fast-learning mindset to everything I work on.",
        "skills-title": "Skills",
        "skill-linux": "Linux Terminal",
        "projects-title": "Projects",
        "p0-title": "Project 00: Linux & Git",
        "p0-text": "Navigating the Linux terminal and managing code with Git and GitHub.",
        "p1-title": "Project 01: HTML",
        "p1-text": "Building the structure of web pages with semantic HTML5.",
        "p2-title": "Project 02: CSS",
        "p2-text": "Styling pages with Flexbox, positioning, shapes, colors and animations.",
        "p3-title": "Project 03: JavaScript",
        "p3-text": "Making pages interactive: functions, the DOM, events, a counter and a task manager.",
        "p4-title": "Project 04: Personal Portfolio",
        "p4-text": "Designing and building this responsive portfolio from scratch with HTML, CSS and JavaScript.",
        "contact-title": "Contact Me",
        "label-name": "Name",
        "label-email": "Email",
        "label-message": "Message",
        "send-btn": "Send",
        "footer-text": "© 2026 SHAHD JUM'AH",
        "ph-name": "Your name",
        "ph-email": "Your email",
        "ph-message": "Your message",
        "cv-btn": "📄 View CV"
    },
        ar: {
        "logo": "شهد جمعة",
        "photo-btn": "تغيير الصورة",
        "nav-about": "عنّي",
        "nav-skills": "المهارات",
        "nav-projects": "المشاريع",
        "nav-contact": "تواصل",
        "about-title": "نبذة عني",
        "about-text": "أنا شهد جمعة، خلفيتي في التكنولوجيا المالية وإدارة المخاطر، وأطوّر مهاراتي التقنية حالياً في 42 عمّان. تعلّمت حتى الآن HTML وCSS وJavaScript وGit وواجهة أوامر لينكس. أتميّز بالفضول والالتزام والتعلّم الذاتي وسرعة التعلّم في كل ما أعمل عليه.",
        "skills-title": "المهارات",
        "skill-linux": "واجهة أوامر لينكس",
        "projects-title": "المشاريع",
        "p0-title": "المشروع 00: لينكس و Git",
        "p0-text": "التنقّل في واجهة أوامر لينكس وإدارة الكود باستخدام Git و GitHub.",
        "p1-title": "المشروع 01: HTML",
        "p1-text": "بناء هيكل صفحات الويب باستخدام HTML5.",
        "p2-title": "المشروع 02: CSS",
        "p2-text": "تنسيق الصفحات باستخدام Flexbox والتموضع والأشكال والألوان والحركات.",
        "p3-title": "المشروع 03: JavaScript",
        "p3-text": "جعل الصفحات تفاعلية: الدوال، الـ DOM، الأحداث، عدّاد ومدير مهام.",
        "p4-title": "المشروع 04: الموقع الشخصي",
        "p4-text": "تصميم وبناء هذا الموقع الشخصي المتجاوب من الصفر باستخدام HTML وCSS وJavaScript.",
        "contact-title": "تواصل معي",
        "label-name": "الاسم",
        "label-email": "البريد الإلكتروني",
        "label-message": "الرسالة",
        "send-btn": "إرسال",
        "footer-text": "© 2026 شهد جمعة",
        "ph-name": "اسمك",
        "ph-email": "بريدك الإلكتروني",
        "ph-message": "رسالتك",
        "cv-btn": "📄 عرض السيرة الذاتية"
    }
};
const langBtn = document.getElementById("lang-btn");
let currentLang = "en";

function setLanguage(lang) {
    const texts = translations[lang];

    document.querySelectorAll("[data-key]").forEach(function (element) {
        const key = element.getAttribute("data-key");
        element.textContent = texts[key];
    });

    document.querySelectorAll("[data-placeholder]").forEach(function (element) {
        const key = element.getAttribute("data-placeholder");
        element.placeholder = texts[key];
    });

    if (lang === "ar") {
        document.documentElement.dir = "rtl";
        document.documentElement.lang = "ar";
        langBtn.textContent = "English";
    } else {
        document.documentElement.dir = "ltr";
        document.documentElement.lang = "en";
        langBtn.textContent = "العربية";
    }
}

function toggleLanguage() {
    if (currentLang === "en") {
        currentLang = "ar";
    } else {
        currentLang = "en";
    }
    setLanguage(currentLang);
}

langBtn.addEventListener("click", toggleLanguage);

const profilePhoto = document.getElementById("profile-photo");
const photoBtn = document.getElementById("photo-btn");
let isFirstPhoto = true;

function switchPhoto() {
    profilePhoto.classList.add("fade-out");

    setTimeout(function () {
        if (isFirstPhoto === true) {
            profilePhoto.src = "assets/profile2.jpg";
            profilePhoto.alt = "Professional photo of Shahd Jum'ah";
            isFirstPhoto = false;
        } else {
            profilePhoto.src = "assets/profile.jpeg";
            profilePhoto.alt = "Photo of Shahd Jum'ah";
            isFirstPhoto = true;
        }
        profilePhoto.classList.remove("fade-out");
    }, 300);
}

photoBtn.addEventListener("click", switchPhoto);

const topBtn = document.getElementById("top-btn");

window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
        topBtn.classList.add("show");
    } else {
        topBtn.classList.remove("show");
    }
});

topBtn.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});
const contactForm = document.querySelector(".contact-form");

window.addEventListener("pageshow", function () {
    contactForm.reset();
});