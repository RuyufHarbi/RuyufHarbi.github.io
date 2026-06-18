const translations = {
  en: {
    pageTitle: 'Ruyuf Harbi',
    siteTitle: 'Ruyuf Harbi',
    heroTitle: 'Welcome to my portfolio',
    heroText: 'Explore my work, experience, and background.',
    aboutTitle: 'About Me',
    aboutText: 'I am a creative developer passionate about building websites and experiences.',
    experienceTitle: 'Experience',
    experienceText: 'I have worked on projects involving web development, design, and user interface work.',
    projectsTitle: 'Projects',
    projectsText: 'Find my latest portfolio projects, apps, and websites here.',
    resumeTitle: 'Resume',
    resumeText: 'Download my resume or review my skills and education below.',
    langBtn: 'العربيه',
    aboutBtn: 'About Me',
    experienceBtn: 'Experience',
    projectsBtn: 'Projects',
    resumeBtn: 'Resume'
  },
  ar: {
    pageTitle: 'ريوف حربي',
    siteTitle: 'ريوف حربي',
    heroTitle: 'مرحبًا بك في ملف أعمالي',
    heroText: 'اكتشف عملي وخبرتي وخلفيتي.',
    aboutTitle: 'عني',
    aboutText: 'أنا مطور مبدع شغوف ببناء المواقع والتجارب.',
    experienceTitle: 'الخبرة',
    experienceText: 'عملت على مشاريع تطوير ويب وتصميم وتجربة مستخدم.',
    projectsTitle: 'المشاريع',
    projectsText: 'ابحث عن مشاريعي الأخيرة وتطبيقاتي ومواقعي هنا.',
    resumeTitle: 'السيرة الذاتية',
    resumeText: 'قم بتنزيل سيرتي الذاتية أو راجع مهاراتي وتعليمي أدناه.',
    langBtn: 'English',
    aboutBtn: 'عني',
    experienceBtn: 'الخبرة',
    projectsBtn: 'المشاريع',
    resumeBtn: 'السيرة الذاتية'
  }
};

const state = {
  language: 'en'
};

const elements = {
  siteTitle: document.querySelector('.site-title'),
  heroTitle: document.querySelector('#hero h1'),
  heroText: document.querySelector('#hero p'),
  aboutTitle: document.querySelector('#about h2'),
  aboutText: document.querySelector('#about p'),
  experienceTitle: document.querySelector('#experience h2'),
  experienceText: document.querySelector('#experience p'),
  projectsTitle: document.querySelector('#projects h2'),
  projectsText: document.querySelector('#projects p'),
  resumeTitle: document.querySelector('#resume h2'),
  resumeText: document.querySelector('#resume p'),
  langBtn: document.getElementById('langBtn'),
  sectionButtons: document.querySelectorAll('.top-nav button[data-section]')
};

function setLanguage(lang) {
  state.language = lang;
  const copy = translations[lang];

  document.title = copy.pageTitle;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';

  elements.siteTitle.textContent = copy.siteTitle;
  elements.heroTitle.textContent = copy.heroTitle;
  elements.heroText.textContent = copy.heroText;
  elements.aboutTitle.textContent = copy.aboutTitle;
  elements.aboutText.textContent = copy.aboutText;
  elements.experienceTitle.textContent = copy.experienceTitle;
  elements.experienceText.textContent = copy.experienceText;
  elements.projectsTitle.textContent = copy.projectsTitle;
  elements.projectsText.textContent = copy.projectsText;
  elements.resumeTitle.textContent = copy.resumeTitle;
  elements.resumeText.textContent = copy.resumeText;
  elements.langBtn.textContent = copy.langBtn;

  elements.sectionButtons.forEach(button => {
    const section = button.dataset.section;
    if (section === 'about') button.textContent = copy.aboutBtn;
    if (section === 'experience') button.textContent = copy.experienceBtn;
    if (section === 'projects') button.textContent = copy.projectsBtn;
    if (section === 'resume') button.textContent = copy.resumeBtn;
  });
}

elements.langBtn.addEventListener('click', () => {
  const nextLang = state.language === 'en' ? 'ar' : 'en';
  setLanguage(nextLang);
});

elements.sectionButtons.forEach(button => {
  button.addEventListener('click', () => {
    const sectionId = button.dataset.section;
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  });
});

setLanguage('en');
