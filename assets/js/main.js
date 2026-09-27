// Main JavaScript for Patricia Quiñones García's Portfolio

// Translation Dictionary (ES / EN)
const i18nData = {
  es: {
    // Navigation
    nav_role: "Maestra de Primaria & Especialista en Inglés",
    nav_about: "Sobre Mí",
    nav_philosophy: "Metodología",
    nav_experience: "Experiencia",
    nav_education: "Formación",
    nav_skills: "Competencias",
    nav_contact: "Contacto",
    nav_download_cv: "Imprimir / Guardar CV",

    // Hero Section
    hero_greeting: "¡Hola! Soy",
    hero_role: "Maestra de Educación Primaria & Profesora de Inglés",
    hero_subtext: "Especialista en metodologías activas, aprendizaje inmersivo Kids&Us y educación inclusiva. Comprometida con crear espacios de aprendizaje motivadores, empáticos y adaptados a cada estudiante.",
    hero_badge_kids: "Kids & Us Teacher",
    hero_badge_c1: "Inglés C1 Avanzado (CAE)",
    hero_badge_urjc: "Grado Primaria URJC",
    hero_badge_inclusion: "Atención a la Diversidad",
    hero_btn_contact: "Contactar Conmigo",
    hero_btn_experience: "Ver Trayectoria",

    // Hero Stickers
    hero_sticker_grad: "Graduada URJC",
    hero_sticker_mention: "Mención Inglés",
    hero_sticker_c1: "C1 CAE Certificado",

    // Quick Stats
    stat_experience: "+6 Años",
    stat_experience_label: "Experiencia Educativa",
    stat_level: "C1 CAE",
    stat_level_label: "Nivel de Inglés Avanzado",
    stat_specialty: "Inclusión & NEE",
    stat_specialty_label: "TEA, TDAH y Diversidad",
    stat_volunteering: "+7 Años",
    stat_volunteering_label: "Liderazgo en Cruz Roja",

    // About Me
    about_badge: "Conóceme",
    about_title: "Pasión por enseñar, incluir y transformar",
    about_p1: "Soy maestra de Educación Primaria con mención en Inglés, con amplia experiencia en los ámbitos educativo y social. Mi vocación nace del deseo de conectar con cada alumno y crear entornos de aprendizaje donde la participación, la inclusión y el respeto a la diversidad sean los pilares fundamentales.",
    about_p2: "Me caracterizo por ser creativa, organizada y altamente empática. A lo largo de mi trayectoria he combinado la docencia en academias reconocidas como Kids & Us y English Center con la intervención socioeducativa en Fundación FDI y Cruz Roja Juventud, coordinando proyectos, liderando equipos y adaptando recursos para que nadie se quede atrás.",
    about_tag1: "Empatía y Escucha",
    about_tag2: "Diseño Creativo TIC",
    about_tag3: "Gestión de Equipos",
    
    // Philosophy / Pillars
    phil_badge: "Pilares Pedagógicos",
    phil_title: "¿Cómo enfoco mis clases y proyectos?",
    phil_card1_title: "Metodología Inmersiva",
    phil_card1_desc: "Aprendizaje natural de la lengua inglesa mediante cuentos, canciones, rutinas estructuradas y contextos cotidianos significativos (metodología Kids & Us).",
    phil_card2_title: "Gamificación & TIC Activas",
    phil_card2_desc: "Dinamización del aula a través de dinámicas lúdicas, role-play y plataformas digitales interactivas como Kahoot y Quizlet para potenciar la motivación.",
    phil_card3_title: "Educación Inclusiva & NEE",
    phil_card3_desc: "Diseño y adaptación de materiales accesibles para necesidades educativas especiales: TEA, TDAH, diversidad motora y sensorial.",
    phil_card4_title: "Entornos Seguros & LOPIVI",
    phil_card4_desc: "Creación de espacios de buen trato, escucha activa y bienestar emocional para la infancia y juventud, con enfoque de género y desarrollo integral.",

    // Experience Section
    exp_badge: "Trayectoria",
    exp_title: "Experiencia Profesional y Voluntariado",
    filter_all: "Todos",
    filter_teaching: "Docencia & Idiomas",
    filter_social: "Inclusión & Social",
    filter_mgmt: "Coordinación & Gestión",

    // Jobs
    job_kids_title: "Profesora de Inglés",
    job_kids_company: "Kids & Us",
    job_kids_period: "11/2025 – Actualidad",
    job_kids_desc1: "Sesiones de inglés 100% inmersivas para alumnado de infantil y primaria siguiendo la metodología propia de Kids & Us.",
    job_kids_desc2: "Preparación de actividades adaptadas a cada nivel mediante cuentos, canciones y rutinas pedagógicas estimulantes.",
    job_kids_desc3: "Fomento de un ambiente dinámico y motivador con juegos interactivos y seguimiento continuo con informes para familias.",

    job_coord_title: "Coordinadora de Formación",
    job_coord_company: "Proactiva Formación",
    job_coord_period: "12/2023 – 04/2026",
    job_coord_desc1: "Apoyo en la gestión, coordinación y presupuestación de proyectos formativos.",
    job_coord_desc2: "Organización y control de bases de datos, recursos y documentación clave de programas.",
    job_coord_desc3: "Gestión integral de inscripciones y seguimiento continuo de las actividades.",

    job_ec_prof_title: "Profesora de Inglés",
    job_ec_prof_company: "English Center",
    job_ec_prof_period: "04/2024 – 06/2024",
    job_ec_prof_desc1: "Impartición de clases de inglés en todas las etapas educativas (infantil, primaria, secundaria y adultos).",
    job_ec_prof_desc2: "Diseño de materiales didácticos y aplicación de metodologías activas (role play, audiovisuales y TIC).",
    job_ec_prof_desc3: "Evaluación continua y seguimiento pedagógico individualizado del progreso de cada estudiante.",

    job_ec_admin_title: "Auxiliar Administrativa",
    job_ec_admin_company: "English Center",
    job_ec_admin_period: "10/2019 – 10/2023",
    job_ec_admin_desc1: "Organización de bases de datos, matriculaciones y documentación del centro.",
    job_ec_admin_desc2: "Apoyo directo en la gestión de clases, atención al alumnado y comunicación con las familias.",

    job_fdi_title: "Monitora de Necesidades Especiales (NEE)",
    job_fdi_company: "Fundación FDI",
    job_fdi_period: "07/2019 – 09/2021",
    job_fdi_desc1: "Acompañamiento a niños y niñas con NEE en campamentos deportivos y de ocio educativo.",
    job_fdi_desc2: "Atención especializada a perfiles con Trastorno del Espectro Autista (TEA), TDAH, Espina Bífida y Ceguera.",
    job_fdi_desc3: "Creación y adaptación de recursos para garantizar la plena inclusión en actividades deportivas.",

    job_particular_title: "Profesora Particular de Inglés",
    job_particular_company: "Docencia Privada",
    job_particular_period: "10/2018 – 06/2019",
    job_particular_desc1: "Clases de refuerzo y preparación de inglés para alumnas de Bachillerato y Primaria.",
    job_particular_desc2: "Diseño de sesiones dinámicas con aplicaciones interactivas (Kahoot, Quizlet) para gramática y expresión oral.",

    job_cruzroja_title: "Voluntaria & Equipo Directivo",
    job_cruzroja_company: "Cruz Roja Juventud",
    job_cruzroja_period: "2017 – Actualidad",
    job_cruzroja_desc1: "Miembro del equipo directivo de Cruz Roja Juventud en la Comunidad de Madrid.",
    job_cruzroja_desc2: "Diseño e impartición de talleres educativos, culturales y de valores para jóvenes de 6 a 20 años.",
    job_cruzroja_desc3: "Promoción de hábitos saludables, competencias para la vida y acompañamiento individualizado.",

    // Experience tags
    tag_kids_1: "Metodología Kids&Us",
    tag_kids_2: "Infantil y Primaria",
    tag_kids_3: "Inmersión Lingüística",
    tag_coord_1: "Gestión de Proyectos",
    tag_coord_2: "Presupuestos",
    tag_coord_3: "Bases de Datos",
    tag_ec_1: "Infantil & Primaria",
    tag_ec_2: "Secundaria & Adultos",
    tag_ec_3: "Role Play & Gamificación",
    tag_cr_1: "Liderazgo Juvenil",
    tag_cr_2: "Educación No Formal",
    tag_cr_3: "Gestión de Grupos",
    tag_adm_1: "Gestión de Centro",
    tag_adm_2: "Atención a Familias",
    tag_fdi_1: "TEA & TDAH",
    tag_fdi_2: "Diversidad Funcional",
    tag_fdi_3: "Inclusión Deportiva",
    tag_part_1: "Clases Personalizadas",
    tag_part_2: "Kahoot & Quizlet",

    // Education & Certifications
    edu_badge: "Estudios & Títulos",
    edu_title: "Educación y Formación Continua",
    edu_grado_title: "Grado en Educación Primaria (Mención en Inglés)",
    edu_grado_inst: "Universidad Rey Juan Carlos",
    edu_grado_year: "Finalizado en 11/2022",
    edu_grado_desc: "Especialización completa en didáctica de la lengua extranjera (inglés), desarrollo curricular y metodologías docentes.",

    edu_c1_title: "Inglés C1 Avanzado (CAE)",
    edu_c1_inst: "Cambridge Assessment English",
    edu_c1_desc: "Competencia lingüística fluida y profesional demostrada en comprensión, expresión oral, lectura y redacción.",
    edu_level_c1: "Nivel MCER C1",

    edu_courses_title: "Formaciones y Certificaciones Especializadas",
    course_cat_diversity: "Atención a la Diversidad",
    course1_title: "Formación Básica en Autismo",
    course1_inst: "Fundación Conectea · Formación Online",
    course_cat_values: "Valores & Sociedad",
    course2_title: "Perspectiva de Género para Alcanzar la Igualdad",
    course2_inst: "Ayuntamiento de Alcobendas (Madrid) · Formación Online",
    course_cat_childhood: "Protección a la Infancia",
    course3_title: "Entornos Seguros y Buen Trato en Infancia (LOPIVI)",
    course3_inst: "Comunidad de Madrid · Formación Online",
    course_cat_highschool: "Bachillerato",
    edu_bach_title: "Bachillerato en Ciencias Sociales",
    edu_bach_inst: "IES Francisco Giner de los Ríos (06/2015)",

    // Skills
    skills_badge: "Habilidades",
    skills_title: "Competencias Clave",
    skill_group_teaching: "Metodología y Didáctica",
    skill_group_social: "Inclusión y Valores",
    skill_group_tools: "Herramientas TIC",
    skill_group_soft: "Habilidades Interpersonales",

    skill_active_method: "Metodologías Activas",
    skill_kids_method: "Metodología Kids&Us",
    skill_gamification: "Gamificación Educativa",
    skill_storytelling: "Storytelling & Cuentos",
    skill_tea_tdah: "Atención a TEA y TDAH",
    skill_materials: "Adaptación de Materiales",
    skill_lopivi: "Entornos Seguros (LOPIVI)",
    skill_equality: "Perspectiva de Género",
    skill_tool1: "Kahoot! & Quizlet",
    skill_tool2: "Canva Educativo",
    skill_tool3: "Pizarras Digitales Interactivas",
    skill_tool4: "Gestión Documental & Ofimática",
    skill_empathy: "Empatía y Escucha Activa",
    skill_leadership: "Liderazgo de Grupos",
    skill_planning: "Planificación Pedagógica",
    skill_communication: "Comunicación con Familias",

    // Quote
    quote_text: "«La educación no es llenar un cubo, sino encender un fuego. Enseñar un idioma es abrir una ventana al mundo desde la empatía y la confianza.»",
    quote_author: "Patricia Quiñones García",

    // Contact
    contact_badge: "¿Hablamos?",
    contact_title: "Ponte en contacto",
    contact_subtitle: "Disponible para oportunidades docentes en academias, colegios bilingües, coordinación de proyectos formativos y colaboraciones socioeducativas.",
    contact_email_title: "Correo Electrónico",
    contact_send_email: "Enviar Email",
    contact_email_btn: "Copiar Email",
    contact_phone_title: "Teléfono / WhatsApp",
    contact_phone_btn: "Abrir WhatsApp",
    contact_call_phone: "Llamar por Teléfono",
    contact_linkedin_title: "Perfil Profesional",
    contact_linkedin_btn: "Ver en LinkedIn",
    contact_copied_toast: "¡Copiado al portapapeles con éxito!",
    
    // Footer
    footer_rights: "Todos los derechos reservados."
  },

  en: {
    // Navigation
    nav_role: "Primary Teacher & English Specialist",
    nav_about: "About Me",
    nav_philosophy: "Methodology",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_skills: "Skills",
    nav_contact: "Contact",
    nav_download_cv: "Print / Save CV",

    // Hero Section
    hero_greeting: "Hello! I am",
    hero_role: "Primary Education Teacher & English Specialist",
    hero_subtext: "Specialized in active methodologies, Kids&Us immersive learning, and inclusive education. Committed to creating motivating, empathetic, and tailored learning environments for every student.",
    hero_badge_kids: "Kids & Us Teacher",
    hero_badge_c1: "English C1 Advanced (CAE)",
    hero_badge_urjc: "Primary Education Degree (URJC)",
    hero_badge_inclusion: "Special Needs & Inclusion",
    hero_btn_contact: "Get in Touch",
    hero_btn_experience: "View Career Path",

    // Hero Stickers
    hero_sticker_grad: "URJC Graduate",
    hero_sticker_mention: "English Major",
    hero_sticker_c1: "C1 CAE Certified",

    // Quick Stats
    stat_experience: "+6 Years",
    stat_experience_label: "Educational Experience",
    stat_level: "C1 CAE",
    stat_level_label: "Advanced English Level",
    stat_specialty: "Inclusion & SEN",
    stat_specialty_label: "ASD, ADHD & Diversity",
    stat_volunteering: "+7 Years",
    stat_volunteering_label: "Leadership in Red Cross",

    // About Me
    about_badge: "Get to know me",
    about_title: "Passionate about teaching, inclusion, and inspiring others",
    about_p1: "I am a Primary Education teacher with a major in English, with extensive experience in educational and social fields. My vocation stems from the desire to connect with each student and create learning environments where participation, inclusion, and respect for diversity are core pillars.",
    about_p2: "I am creative, well-organized, and deeply empathetic. Throughout my career, I have combined teaching in renowned language academies such as Kids & Us and English Center with socio-educational intervention at FDI Foundation and Red Cross Youth, coordinating projects, leading teams, and adapting resources so that no student is left behind.",
    about_tag1: "Empathy & Listening",
    about_tag2: "Creative EdTech Design",
    about_tag3: "Team Leadership",

    // Philosophy / Pillars
    phil_badge: "Pedagogical Pillars",
    phil_title: "How do I approach my classes and projects?",
    phil_card1_title: "Immersive Methodology",
    phil_card1_desc: "Natural English acquisition through storytelling, songs, structured routines, and meaningful everyday context (Kids & Us approach).",
    phil_card2_title: "Gamification & EdTech",
    phil_card2_desc: "Classroom engagement powered by playful dynamics, role-playing, and interactive digital platforms like Kahoot and Quizlet to boost motivation.",
    phil_card3_title: "Inclusive Education & SEN",
    phil_card3_desc: "Designing and tailoring accessible resources for special educational needs: ASD, ADHD, visual and motor diversity.",
    phil_card4_title: "Safe Environments & LOPIVI",
    phil_card4_desc: "Creating safe spaces based on positive treatment, active listening, and emotional well-being for children and youth, with a gender-sensitive lens.",

    // Experience Section
    exp_badge: "Career Path",
    exp_title: "Professional Experience & Volunteering",
    filter_all: "All",
    filter_teaching: "Teaching & Languages",
    filter_social: "Inclusion & Social",
    filter_mgmt: "Coordination & Mgmt",

    // Jobs
    job_kids_title: "English Teacher",
    job_kids_company: "Kids & Us",
    job_kids_period: "11/2025 – Present",
    job_kids_desc1: "100% immersive English sessions for early childhood and primary school students using the official Kids & Us methodology.",
    job_kids_desc2: "Lesson planning tailored to each level using stories, songs, and engaging pedagogical routines.",
    job_kids_desc3: "Fostering a dynamic and motivating classroom environment with interactive games, along with continuous progress tracking reports for families.",

    job_coord_title: "Training Coordinator",
    job_coord_company: "Proactiva Formación",
    job_coord_period: "12/2023 – 04/2026",
    job_coord_desc1: "Support in project management, budgeting, and coordination of training programs.",
    job_coord_desc2: "Organization and management of databases, documentation, and educational materials.",
    job_coord_desc3: "Participant enrollment handling and ongoing monitoring of activities.",

    job_ec_prof_title: "English Teacher",
    job_ec_prof_company: "English Center",
    job_ec_prof_period: "04/2024 – 06/2024",
    job_ec_prof_desc1: "Delivering English classes across all educational stages (infant, primary, secondary, and adults).",
    job_ec_prof_desc2: "Design of didactic materials and implementation of active methodologies (role play, audiovisuals, and digital tools).",
    job_ec_prof_desc3: "Continuous assessment and personalized pedagogical tracking of each student's learning journey.",

    job_ec_admin_title: "Administrative Assistant",
    job_ec_admin_company: "English Center",
    job_ec_admin_period: "10/2019 – 10/2023",
    job_ec_admin_desc1: "Database management, enrollments, and academic documentation.",
    job_ec_admin_desc2: "Support in class management, student assistance, and family communication.",

    job_fdi_title: "Special Needs (SEN) Monitor",
    job_fdi_company: "FDI Foundation",
    job_fdi_period: "07/2019 – 09/2021",
    job_fdi_desc1: "Supporting children with special educational needs during summer sports and recreational camps.",
    job_fdi_desc2: "Specialized assistance for Autism Spectrum Disorder (ASD), ADHD, Spina Bifida, and Visual Impairment.",
    job_fdi_desc3: "Creation and adaptation of resources to ensure full inclusion in sports and educational activities.",

    job_particular_title: "Private English Tutor",
    job_particular_company: "Private Tutoring",
    job_particular_period: "10/2018 – 06/2019",
    job_particular_desc1: "Reinforcement and exam preparation classes for Primary and Baccalaureate students.",
    job_particular_desc2: "Dynamic sessions designed with interactive apps (Kahoot, Quizlet) for grammar, writing, and oral fluency.",

    job_cruzroja_title: "Volunteer & Steering Committee Member",
    job_cruzroja_company: "Spanish Red Cross Youth",
    job_cruzroja_period: "2017 – Present",
    job_cruzroja_desc1: "Member of the steering board of Red Cross Youth in the Community of Madrid.",
    job_cruzroja_desc2: "Design and delivery of educational, cultural, and values workshops for young people aged 6 to 20.",
    job_cruzroja_desc3: "Promoting healthy lifestyle habits, key life skills, and individual personal/academic mentoring.",

    // Experience tags
    tag_kids_1: "Kids&Us Methodology",
    tag_kids_2: "Infant & Primary",
    tag_kids_3: "Language Immersion",
    tag_coord_1: "Project Management",
    tag_coord_2: "Budgeting",
    tag_coord_3: "Databases",
    tag_ec_1: "Infant & Primary",
    tag_ec_2: "Secondary & Adults",
    tag_ec_3: "Role Play & Gamification",
    tag_cr_1: "Youth Leadership",
    tag_cr_2: "Non-Formal Education",
    tag_cr_3: "Group Management",
    tag_adm_1: "Center Management",
    tag_adm_2: "Family Support",
    tag_fdi_1: "ASD & ADHD",
    tag_fdi_2: "Functional Diversity",
    tag_fdi_3: "Inclusive Sports",
    tag_part_1: "Personalized Lessons",
    tag_part_2: "Kahoot & Quizlet",

    // Education & Certifications
    edu_badge: "Studies & Degrees",
    edu_title: "Education & Continuous Learning",
    edu_grado_title: "Bachelor's Degree in Primary Education (English Mention)",
    edu_grado_inst: "Rey Juan Carlos University (URJC)",
    edu_grado_year: "Completed 11/2022",
    edu_grado_desc: "Comprehensive specialization in foreign language teaching pedagogy (English), curriculum design, and active teaching methodologies.",

    edu_c1_title: "English C1 Advanced (CAE)",
    edu_c1_inst: "Cambridge Assessment English",
    edu_c1_desc: "Demonstrated professional fluency in oral expression, listening comprehension, advanced reading, and academic writing.",
    edu_level_c1: "CEFR Level C1",

    edu_courses_title: "Specialized Certifications & Courses",
    course_cat_diversity: "Diversity Support",
    course1_title: "Basic Training in Autism Spectrum Disorder",
    course1_inst: "Conectea Foundation · Online Training",
    course_cat_values: "Values & Society",
    course2_title: "Gender Perspective for Equality",
    course2_inst: "Alcobendas City Council · Online Training",
    course_cat_childhood: "Child Protection",
    course3_title: "Safe Environments & Child Protection (LOPIVI)",
    course3_inst: "Community of Madrid · Online Training",
    course_cat_highschool: "High School",
    edu_bach_title: "High School Diploma in Social Sciences",
    edu_bach_inst: "IES Francisco Giner de los Ríos (06/2015)",

    // Skills
    skills_badge: "Competencies",
    skills_title: "Key Skills & Proficiencies",
    skill_group_teaching: "Teaching & Methodology",
    skill_group_social: "Inclusion & Social Values",
    skill_group_tools: "EdTech Tools",
    skill_group_soft: "Interpersonal Skills",

    skill_active_method: "Active Methodologies",
    skill_kids_method: "Kids & Us Methodology",
    skill_gamification: "Educational Gamification",
    skill_storytelling: "Storytelling & Routines",
    skill_tea_tdah: "ASD & ADHD Support",
    skill_materials: "Material Adaptation",
    skill_lopivi: "Safe Environments (LOPIVI)",
    skill_equality: "Gender Perspective",
    skill_tool1: "Kahoot! & Quizlet",
    skill_tool2: "Educational Canva",
    skill_tool3: "Interactive Digital Whiteboards",
    skill_tool4: "Document Management & Office Suites",
    skill_empathy: "Empathy & Active Listening",
    skill_leadership: "Group Leadership",
    skill_planning: "Pedagogical Planning",
    skill_communication: "Family Communication",

    // Quote
    quote_text: "«Education is not the filling of a pail, but the lighting of a fire. Teaching a language means opening a window to the world through empathy and trust.»",
    quote_author: "Patricia Quiñones García",

    // Contact
    contact_badge: "Let's connect",
    contact_title: "Get in touch",
    contact_subtitle: "Available for teaching opportunities at language academies, bilingual schools, educational project management, and socio-educational initiatives.",
    contact_email_title: "Email Address",
    contact_send_email: "Send Email",
    contact_email_btn: "Copy Email",
    contact_phone_title: "Phone / WhatsApp",
    contact_phone_btn: "Open WhatsApp",
    contact_call_phone: "Call by Phone",
    contact_linkedin_title: "LinkedIn Profile",
    contact_linkedin_btn: "View on LinkedIn",
    contact_copied_toast: "Copied to clipboard successfully!",

    // Footer
    footer_rights: "All rights reserved."
  }
};

let currentLang = 'es';

// Language switcher function
function setLanguage(lang) {
  currentLang = lang;
  document.documentElement.lang = lang;
  
  // Update all elements with data-i18n
  const elements = document.querySelectorAll('[data-i18n]');
  elements.forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (i18nData[lang] && i18nData[lang][key]) {
      el.innerHTML = i18nData[lang][key];
    }
  });

  // Update button active states
  const btnEs = document.getElementById('lang-btn-es');
  const btnEn = document.getElementById('lang-btn-en');
  if (btnEs && btnEn) {
    if (lang === 'es') {
      btnEs.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      btnEs.classList.remove('text-slate-600', 'hover:bg-slate-200');
      btnEn.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
      btnEn.classList.add('text-slate-600', 'hover:bg-slate-200');
    } else {
      btnEn.classList.add('bg-indigo-600', 'text-white', 'shadow-sm');
      btnEn.classList.remove('text-slate-600', 'hover:bg-slate-200');
      btnEs.classList.remove('bg-indigo-600', 'text-white', 'shadow-sm');
      btnEs.classList.add('text-slate-600', 'hover:bg-slate-200');
    }
  }

  // Save preference
  localStorage.setItem('portfolio_lang', lang);

  // Re-run icons
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Filter experience items
function filterExperience(category, clickedButton) {
  const cards = document.querySelectorAll('.timeline-item');
  const buttons = document.querySelectorAll('.filter-btn');

  // Update button styles
  buttons.forEach(btn => {
    btn.classList.remove('bg-indigo-600', 'text-white', 'shadow-md');
    btn.classList.add('bg-white', 'text-slate-700', 'border', 'border-slate-200');
  });
  clickedButton.classList.add('bg-indigo-600', 'text-white', 'shadow-md');
  clickedButton.classList.remove('bg-white', 'text-slate-700', 'border', 'border-slate-200');

  // Filter cards with smooth fade
  cards.forEach(card => {
    const cardCat = card.getAttribute('data-category');
    if (category === 'all' || cardCat.includes(category)) {
      card.style.display = 'flex';
      setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      }, 10);
    } else {
      card.style.opacity = '0';
      card.style.transform = 'translateY(10px)';
      setTimeout(() => {
        card.style.display = 'none';
      }, 200);
    }
  });
}

// Copy to Clipboard with toast notification
function copyToClipboard(text, message) {
  navigator.clipboard.writeText(text).then(() => {
    showToast(message || (currentLang === 'es' ? "¡Copiado al portapapeles!" : "Copied to clipboard!"));
  }).catch(err => {
    console.error('Error copying text: ', err);
  });
}

// Toast notification helper
function showToast(msg) {
  const toast = document.getElementById('toast');
  const toastText = document.getElementById('toast-text');
  if (toast && toastText) {
    toastText.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => {
      toast.classList.remove('show');
    }, 3000);
  }
}

// Mobile Menu Toggle
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) {
    menu.classList.toggle('hidden');
  }
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  const savedLang = localStorage.getItem('portfolio_lang') || 'es';
  setLanguage(savedLang);

  // Close mobile menu when clicking nav links
  document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
      const menu = document.getElementById('mobile-menu');
      if (menu) menu.classList.add('hidden');
    });
  });
});
