export const labels = {
  en: {
    nav: { home: "Home", exp: "Experience", proj: "Projects", stack: "Tech stack", edu: "Education", hobbies: "Hobbies", contact: "Contact" },
    titles: { 
      skills: "Technical Skills", 
      exp: "Work Experience", 
      proj: "Projects Showcase", 
      edu: "Education", 
      hobbies: "My Passions & Hobbies",
      contact: "Get in Touch",
      certifications: "Certifications",
      stack: "Tech stack"
    },
    buttons: { viewGithub: "View on GitHub", grade: "Grade", readMore: "Read Summary", readLess: "Hide Summary", sendMessage: "Send Message", funFact: "See Fun Fact", viewCurriculum: "View Curriculum & Courses", hideCurriculum: "Hide Curriculum" },
    filters: { all: "General (All)", embSw: "Embedded Software", web: "Web Sites & Apps", mobile: "Mobile Apps", hw: "Embedded Hardware", soft: "General Software" },
    certFilters: { all: "All", embed_hw: "Embedded & HW", soft_dev: "Software & DevOps", ai_ml: "AI/ML", cybersec: "Cybersecurity", prof_skills: "Professional Skills" },
    contact: { name: "Your Name", email: "Your Email", subject: "Subject", message: "Message", copy: "Copied!", hello: "Say Hello!" },
    appStack: {
      title: "Mobile apps (Android & iOS)",
      subtitle: "Hover the stack to spread the icons — click a logo to open the live landing page.",
      soon: "In development — no public link yet",
      playStore: "View on Google Play"
    }
  },
  ro: {
    nav: { home: "Acasă", exp: "Experiență", proj: "Proiecte", stack: "Stack tehnologic", edu: "Studii", hobbies: "Hobby", contact: "Contact" },
    titles: { 
      skills: "Abilități Tehnice", 
      exp: "Experiență Profesională", 
      proj: "Portofoliu Proiecte", 
      edu: "Educație", 
      hobbies: "Pasiuni & Timp Liber",
      contact: "Intră în legătură",
      certifications: "Certificări",
      stack: "Stack tehnologic"
    },
    buttons: { viewGithub: "Vezi pe GitHub", grade: "Notă", readMore: "Vezi Descrierea", readLess: "Ascunde Descrierea", sendMessage: "Trimite Mesaj", funFact: "Curiozitate", viewCurriculum: "Vezi Curriculum & Cursuri", hideCurriculum: "Ascunde Curriculum" },
    filters: { all: "General (Toate)", embSw: "Embedded Software", web: "Site-uri Web & App", mobile: "Aplicații Mobile", hw: "Embedded Hardware", soft: "Software Simplu" },
    certFilters: { all: "Toate", embed_hw: "Embedded & HW", soft_dev: "Software & DevOps", ai_ml: "AI/ML", cybersec: "Securitate Cibernetică", prof_skills: "Abilități Profesionale" },
    contact: { name: "Numele Tău", email: "Email-ul Tău", subject: "Subiect", message: "Mesajul Tău", copy: "Copiat!", hello: "Salut!" },
    appStack: {
      title: "Aplicații mobile (Android & iOS)",
      subtitle: "Treci cu mouse-ul peste stivă pentru a le despărți — apasă pe un logo pentru pagina live.",
      soon: "În dezvoltare — fără link public încă",
      playStore: "Vezi pe Google Play"
    }
  }
};

/** Google Play — aplicații publicate */
export const playStoreLinks = {
  bible: 'https://play.google.com/store/apps/details?id=com.bibleprayer.bible_prayer',
  focusnet: 'https://play.google.com/store/apps/details?id=com.rafaelmarian.focusnet',
  budget: 'https://play.google.com/store/apps/details?id=com.aplicatiiidentifier.budgetapp',
  accounting: 'https://play.google.com/store/apps/details?id=com.accountingapp.accounting_app',
  fitness: 'https://play.google.com/store/apps/details?id=com.nrstrength.app',
  photoboom: 'https://play.google.com/store/apps/details?id=com.vanca.photobooth360studio',
  timemoney: 'https://play.google.com/store/apps/details?id=com.timesmeansmoney.app',
  stockflow: 'https://play.google.com/store/apps/details?id=com.stockflow.inventory.stockflow',
  barometer: 'https://play.google.com/store/apps/details?id=com.aplicatiiidentifier.barometer_altimeter',
  plantlux: 'https://play.google.com/store/apps/details?id=com.vanca.plantluxmeter',
  clientcrm: 'https://play.google.com/store/apps/details?id=com.clientbase.client_base_crm',
  emfradar: 'https://play.google.com/store/apps/details?id=com.emfradar.detector',
};

/** Mobile apps: logos in /public/LogoAplicatii — url = site, playStore = Google Play */
export const mobileApps = [
  { id: 'bibble', name: 'Bible: Daily Prayer', logo: '/LogoAplicatii/LogoBibble.png', url: '/apps/bible-daily-prayer', playStore: playStoreLinks.bible },
  { id: 'focusnet', name: 'Focus Net', logo: '/LogoAplicatii/LogoFocusNet.png', url: '/apps/focus-net', playStore: playStoreLinks.focusnet },
  { id: 'accounting', name: 'OfflineBooks', logo: '/LogoAplicatii/LogoAccounting.png', url: '/apps/offlinebooks', playStore: playStoreLinks.accounting },
  { id: 'budget', name: 'Budget tracker', logo: '/LogoAplicatii/LogoBudget.png', url: '/apps/budget-planner', playStore: playStoreLinks.budget },
  { id: 'fitness', name: 'NRStrength', logo: '/LogoAplicatii/LogoFitness.png', url: '/apps/nrstrength', playStore: playStoreLinks.fitness },
  { id: 'photoboom', name: 'PhotoBoom', logo: '/LogoAplicatii/LogoPhotoBoom.png', url: '/apps/photoboom', playStore: playStoreLinks.photoboom },
  { id: 'timemoney', name: 'Time & Money', logo: '/LogoAplicatii/LogoTimeMoney.png', url: '/apps/time-means-money', playStore: playStoreLinks.timemoney },
  { id: 'stockflow', name: 'StockFlow', logo: '/LogoAplicatii/LogoStockFlow.png', url: '/apps/stockflow', playStore: playStoreLinks.stockflow },
  { id: 'plantmonitor', name: 'Plant Care Monitor', logo: '/LogoAplicatii/LogoPlantCareMonitorLight.png', url: '/apps/plant-light-meter', playStore: playStoreLinks.plantlux },
  { id: 'metaldetector', name: 'EMF Radar', logo: '/LogoAplicatii/LogoMetalDetector.png', url: '/apps/emf-radar', playStore: playStoreLinks.emfradar },
  { id: 'clientcrm', name: 'Client Base CRM', logo: '/LogoAplicatii/LogoClientBaseOfflineCRM.png', url: '/apps/client-base-crm', playStore: playStoreLinks.clientcrm },
  { id: 'batterycharge', name: 'Battery Charging Speed', logo: '/LogoAplicatii/LogoBatteryChargingSpeed.png', url: null },
  { id: 'barometer', name: 'BaroScan', logo: '/LogoAplicatii/LogoBarometer.png', url: '/apps/baroscan', playStore: playStoreLinks.barometer }
];

export const personalInfo = {
  name: "Vanca Rafael Marian",
  role: "Embedded Software Engineer",
  subRole: "Advance Innovation Team",
  email: "vanca.rafael.marian@gmail.com",
  phone: "+40 742 734 989",
  location: "Cluj-Napoca, Romania", 
  github: "https://github.com/RafaelMarian",
  linkedin: "https://www.linkedin.com/in/rafael-vanca-958399209/",
  tiktok: "https://www.tiktok.com/@vantech22",
  youtube: "https://www.youtube.com/@rafaelmarianvanca",
  x: "https://x.com/VancaMarian",
  facebook: "https://www.facebook.com/vancarafael.vancarafael/",
  instagram: "https://www.instagram.com/rafael.vanca/",
  producthunt: "https://www.producthunt.com/@rafael_marian_vanca",
  playStore: "https://play.google.com/store/apps/developer?id=NRStrength",
  about: {
    en: "Embedded Software Engineer in the Advance Innovation Team, working to develop products that will innovate the Automotive Industry. Passionate about new technologies, from FPGA and Control Logic to Machine Learning integration in embedded systems.",
    ro: "Inginer Software Embedded în echipa de Inovație Avansată, lucrând la dezvoltarea produselor care vor inova industria auto. Pasionat de noile tehnologii, de la FPGA și logică de control până la integrarea Machine Learning în sisteme embedded."
  }
};

export const skills = [
  { category: "Embedded & FPGA", items: ["C/C++", "VHDL", "Verilog", "Vivado", "Vitis SDK", "FPGA (Xilinx)", "System-on-Chip", "Microcontrollers (8051, ARM)"] },
  { category: "Software & Tools", items: ["Matlab/Simulink", "Python", "Jenkins", "Docker", "Git/GitHub", "Jira/Confluence", "CI/CD Pipelines", "AWS Amazon"] },
  { category: "Engineering Concepts", items: ["PCB Design", "Signal Processing", "Control Systems (FOC)", "Electronics", "Reinforcement Learning"] },
  { category: "Languages", items: ["English (Fluent)", "Romanian (Fluent)", "German (Basic)"] }
];

export const experience = [
  {
    company: "Hanna Instruments",
    role: "Embedded Software Engineer",
    period: "02.2026 - Present",
    techStack: ["C", "C++", "PIC", "Renesas", "I2C", "SPI", "UART", "Firmware", "Test Stands"],
    summary: {
      en: "Firmware and system engineering for precision analytical instrumentation on PIC and Renesas microcontrollers.",
      ro: "Dezvoltare firmware și inginerie de sistem pentru instrumentație analitică de precizie pe microcontrolere PIC și Renesas."
    },
    details: {
      en: [
        "Engineered and maintained robust firmware in C/C++ for PIC and Renesas microcontrollers, ensuring high reliability for precision analytical instrumentation.",
        "Interfaced directly with hardware registers and peripherals (I2C, SPI, UART) to optimize memory management, power consumption, and processing speed.",
        "Acted as the primary technical escalation point for a 40-person production unit, resolving critical hardware and software issues across 12 distinct product lines.",
        "Engineered integrated hardware-software test stands enabling manufacturing staff to mount PCBs, flash microcontroller firmware, and run functional diagnostics."
      ],
      ro: [
        "Proiectare și mentenanță firmware robust în C/C++ pentru microcontrolere PIC și Renesas, asigurând fiabilitate ridicată pentru instrumentație analitică de precizie.",
        "Interfațare directă cu registre hardware și periferice (I2C, SPI, UART) pentru optimizarea memoriei, consumului de energie și vitezei de procesare.",
        "Punct principal de escaladare tehnică pentru o unitate de producție de 40 de persoane, rezolvând probleme critice hardware și software pe 12 linii de produse distincte.",
        "Proiectare standuri integrate hardware-software care permit personalului de producție montarea PCB-urilor, flash-ul firmware-ului și rularea diagnosticelor funcționale."
      ]
    }
  },
  {
    company: "Schaeffler",
    role: "Embedded Software Engineer - Advance Innovation",
    period: "03.2024 - 02.2026",
    techStack: ["Matlab", "Simulink", "Reinforcement Learning", "AWS", "Jenkins", "SpeedGoat", "MicroAutoBox"],
    summary: {
      en: "Developing innovative automotive products using advanced control logic and AI.",
      ro: "Dezvoltarea de produse auto inovatoare folosind logică de control avansată și AI."
    },
    details: {
      en: [
        "Study and implementation of energy systems: 3-phase grid to DC conversion using rectifiers.",
        "Developing DC-DC Boost converters for battery storage systems.",
        "Implementing Current Control for 3L inverters.",
        "Using Machine Learning and Reinforcement Learning to optimize Field Oriented Control (FOC).",
        "CI/CD implementation using Jenkins and GitHub Actions.",
        "Testing on hardware: SpeedGoat, MicroAutoBox 3, Oscilloscopes.",
        "Working in Agile with Jira & Polarion."
      ],
      ro: [
        "Studiul și implementarea sistemelor energetice: conversie trifazată în DC.",
        "Dezvoltarea convertoarelor DC-DC Boost pentru sisteme de baterii.",
        "Implementarea Controlului de Curent pentru invertoare 3L.",
        "Utilizarea Machine Learning și Reinforcement Learning pentru optimizarea FOC.",
        "Implementare CI/CD folosind Jenkins și GitHub Actions.",
        "Testare pe hardware: SpeedGoat, MicroAutoBox 3, Osciloscoape.",
        "Lucru în sistem Agile cu Jira & Polarion."
      ]
    }
  },
  {
    company: "Digilent",
    role: "Student - VHDL Club",
    period: "03.2023 - 06.2023",
    techStack: ["FPGA", "VHDL", "C Embedded", "Linux", "Zybo Z7", "Vivado"],
    summary: {
      en: "FPGA and System-on-Chip development on ARM processors.",
      ro: "Dezvoltare FPGA și System-on-Chip pe procesoare ARM."
    },
    details: {
      en: [
        "Working with Vitis SDK to develop projects using C Embedded for Zybo Z7 and Basys 3.",
        "Implementing tasks using Vivado with VHDL.",
        "Using Linux and PetaLinux to implement projects on Zybo Z7 development board."
      ],
      ro: [
        "Lucru cu Vitis SDK pentru dezvoltarea proiectelor în C Embedded.",
        "Implementarea task-urilor folosind Vivado și VHDL.",
        "Utilizarea Linux și PetaLinux pentru implementarea proiectelor pe plăci Zybo Z7."
      ]
    }
  },
  {
    company: "SC PROELECTRO SRL",
    role: "Technology Assistant",
    period: "06.2022 - 08.2022",
    techStack: ["Electronics", "Surveillance Systems", "Hardware Installation"],
    summary: {
      en: "Implementation of security systems.",
      ro: "Implementarea sistemelor de securitate."
    },
    details: {
      en: [
        "Study and implementation of alarm systems.",
        "Study and implementation of video surveillance systems.",
        "Field installation and testing."
      ],
      ro: [
        "Studiul și implementarea sistemelor de alarmă.",
        "Studiul și implementarea sistemelor de supraveghere video.",
        "Instalare și testare pe teren."
      ]
    }
  }
];

export const education = [
  {
    id: "master",
    institution: "Technical University of Cluj Napoca",
    degree: { 
      en: "Master - Circuits and Integrated Systems", 
      ro: "Master - Circuite și Sisteme Integrate" 
    },
    period: "2023 - 2025",
    grade: "10.0 / 10.0",
    location: "Cluj-Napoca, Romania",
    link: "http://bel.utcluj.ro/index.htm",
    desc: {
      en: "Specialization focused on the design of electronic systems found in automotive, medical, and industrial equipment. It combines Information Technology with advanced Electronics.",
      ro: "Specializare axată pe proiectarea sistemelor cu circuite electronice care se regăsesc în echipamente auto, medicale și industriale. Îmbină Tehnologia Informației cu Electronica avansată."
    },
    curriculum: [
      {
        year: { en: "Year 1", ro: "Anul 1" },
        subjects: [
          { en: "Advanced Analog Blocks", ro: "Blocuri analogice avansate" },
          { en: "Advanced Signal Processing", ro: "Prelucrarea avansată a semnalelor" },
          { en: "VLSI Digital Circuit Design", ro: "Proiectarea circuitelor digitale VLSI" },
          { en: "Elements of Artificial Intelligence", ro: "Elemente de inteligență artificială" },
          { en: "Statistical Signal Modeling", ro: "Modelarea statistică a semnalelor" },
          { en: "Intelligent Sensor Networks and IoT Technologies", ro: "Rețele senzori inteligenți și tehnologii IoT" },
          { en: "Reconfigurable Digital Systems (FPGA)", ro: "Sisteme digitale reconfigurabile (FPGA)" },
          { en: "Testing Technologies and Environments", ro: "Tehnologii și medii de testare" }
        ]
      },
      {
        year: { en: "Year 2", ro: "Anul 2" },
        subjects: [
          { en: "Integrated Circuits for the Automotive Industry", ro: "Circuite integrate pentru industria auto" },
          { en: "Digital Circuit Design and Testing", ro: "Proiectarea și testarea circuitelor digitale" },
          { en: "Game Theory", ro: "Teoria jocurilor" },
          { en: "Digital Economy and Electronic Services", ro: "Economie digitală și servicii electronice" },
          { en: "Research Activity and Dissertation", ro: "Activitate de cercetare și Disertație" }
        ]
      }
    ]
  },
  {
    id: "bachelor",
    institution: "Technical University of Cluj Napoca",
    degree: { 
      en: "Bachelor - Applied Electronics", 
      ro: "Licență - Electronică Aplicată" 
    },
    period: "2019 - 2023",
    grade: "9.4 / 10.0",
    location: "Cluj-Napoca, Romania",
    link: "https://www.utcluj.ro/",
    desc: {
      en: "Faculty of Electronics, Telecommunications and Information Technology. A comprehensive 4-year engineering program covering hardware and software fundamentals.",
      ro: "Facultatea de Electronică, Telecomunicații și Tehnologia Informației. Un program complet de inginerie de 4 ani care acoperă fundamentele hardware și software."
    },
    curriculum: [
      {
        year: { en: "Year 1 (Fundamentals)", ro: "Anul 1 (Fundamente)" },
        subjects: [
          { en: "Mathematical Analysis & Linear Algebra", ro: "Analiză matematică & Algebră liniară" },
          { en: "Physics I & II", ro: "Fizică I & II" },
          { en: "Computer Programming (C/C++)", ro: "Programarea calculatoarelor (C/C++)" },
          { en: "Passive Components and Circuits", ro: "Componente și circuite pasive" },
          { en: "Applied Informatics", ro: "Informatică aplicată" },
          { en: "Fundamentals of Electrical Engineering I", ro: "Bazele electrotehnicii I" }
        ]
      },
      {
        year: { en: "Year 2 (Core Electronics)", ro: "Anul 2 (Electronică)" },
        subjects: [
          { en: "Fundamentals of Electrical Engineering II", ro: "Bazele electrotehnicii II" },
          { en: "Signals and Systems", ro: "Semnale și sisteme" },
          { en: "Digital Integrated Circuits", ro: "Circuite integrate digitale" },
          { en: "Fundamental Electronic Circuits", ro: "Circuite electronice fundamentale" },
          { en: "Measurements in Electronics", ro: "Măsurări în electronică" },
          { en: "Microwaves", ro: "Microunde" },
          { en: "Circuit Analysis and Synthesis", ro: "Analiza și sinteza circuitelor" },
          { en: "CAD Techniques (OrCad)", ro: "Tehnici CAD (OrCad)" },
          { en: "Software Engineering", ro: "Inginerie software" }
        ]
      },
      {
        year: { en: "Year 3 (Specialization)", ro: "Anul 3 (Specializare)" },
        subjects: [
          { en: "Systems with Analog Integrated Circuits", ro: "Sisteme cu circuite integrate analogice" },
          { en: "Microprocessor Architecture", ro: "Arhitectura microprocesoarelor" },
          { en: "Optoelectronics", ro: "Optoelectronică" },
          { en: "Web Technologies", ro: "Tehnologii Web" },
          { en: "Power Electronics", ro: "Electronică de putere" },
          { en: "Microprocessor Systems", ro: "Sisteme cu microprocesoare" },
          { en: "Digital Signal Processing (DSP)", ro: "Prelucrarea digitală a semnalelor (DSP)" },
          { en: "Microcontrollers (uC)", ro: "Microcontrolere (uC)" },
          { en: "Regulation and Control Elements", ro: "Elemente de reglare și control" }
        ]
      },
      {
        year: { en: "Year 4 (Advanced)", ro: "Anul 4 (Avansat)" },
        subjects: [
          { en: "FPGA Systems", ro: "Sisteme cu FPGA" },
          { en: "Sensors and Transducers", ro: "Senzori și traductoare" },
          { en: "Virtual Instrumentation (LabView)", ro: "Instrumentație virtuală (LabView)" },
          { en: "Power Supplies", ro: "Surse de alimentare" },
          { en: "Digital Image Processing", ro: "Prelucrarea numerică a imaginilor" },
          { en: "Fuzzy Systems & Artificial Intelligence", ro: "Sisteme fuzzy & Inteligență Artificială" },
          { en: "Data Acquisition Systems", ro: "Sisteme de achiziții de date" },
          { en: "Project Management", ro: "Managementul proiectelor" }
        ]
      }
    ]
  },
  {
    id: "highschool",
    institution: "Colegiul Național „Silvania” Zalău",
    degree: { 
      en: "High School Diploma", 
      ro: "Diplomă de Bacalaureat" 
    },
    period: "2015 - 2019",
    grade: "-",
    location: "Zalău, Sălaj",
    link: "https://cnszalau.ro/",
    desc: {
      en: "The oldest high school in Zalău (roots in 1646), known for academic excellence and tradition. Focused on Mathematics and Informatics.",
      ro: "Cel mai vechi liceu din Zalău (rădăcini din 1646), cunoscut pentru excelență academică și tradiție. Profil Real (Matematică-Informatică)."
    },
    curriculum: [
      {
        year: { en: "History & Values", ro: "Istoric & Valori" },
        subjects: [
          { en: "Tradition of over 375 years", ro: "Tradiție de peste 375 de ani" },
          { en: "Historic monument building (Neoclassical style)", ro: "Clădire monument istoric (Stil Neoclasic)" },
          { en: "Promoting excellence and performance", ro: "Promovarea excelenței și performanței" },
          { en: "Education based on European values", ro: "Educație fundamentată pe valori europene" }
        ]
      }
    ]
  }
];

export const projects = [

  // --- FPGA SOUND EQUALIZER (LICENTA) ---
  {
    id: "sound-eq",
    categoryFilter: ["hardware", "embedded-sw"],
    title: "FPGA Hardware Sound Equalizer",
    category: "FPGA & Embedded",
    tech: "VHDL, C, Zybo Z7, Vivado",
    image: "/images/sound-eq/cover.png",
    gallery: ["/images/sound-eq/img1.png", "/images/sound-eq/img2.png", "/images/sound-eq/img3.png", "/images/sound-eq/img4.png", "/images/sound-eq/img5.png", "/images/sound-eq/img6.png"],
    link: "https://github.com/RafaelMarian/SoundEqualizer",
    github: "https://github.com/RafaelMarian/SoundEqualizer",
    desc: {
      en: "Real-time digital audio equalizer on Zybo Z7 FPGA with VGA spectrum visualization.",
      ro: "Egalizator audio digital în timp real pe FPGA Zybo Z7 cu vizualizarea spectrului pe VGA."
    },
    extendedSummary: {
      en: "A Hardware/Software co-design project. The Zynq-7000 SoC is utilized to its full potential: custom VHDL IP cores handle high-speed VGA signal generation (1920x1080) and AXI interconnection, while the ARM Cortex-A9 processor runs Embedded C code to manage the SSM2603 Audio Codec via I2C and apply EMA (Exponential Moving Average) filters for noise reduction.",
      ro: "Un proiect de co-design Hardware/Software. SoC-ul Zynq-7000 este utilizat la potențial maxim: IP-uri VHDL custom gestionează generarea semnalului VGA (1920x1080) și interconectarea AXI, în timp ce procesorul ARM Cortex-A9 rulează cod C Embedded pentru a gestiona Codecul Audio SSM2603 prin I2C și a aplica filtre EMA pentru reducerea zgomotului."
    },
    details: {
      en: ["Zynq-7000 SoC Architecture.", "VHDL IP Cores for AXI & VGA.", "I2C Communication with Audio Codec.", "Digital Signal Processing (EMA Filters)."],
      ro: ["Arhitectură SoC Zynq-7000.", "IP-uri VHDL pentru AXI & VGA.", "Comunicație I2C cu Codec Audio.", "Procesare Digitală de Semnal (Filtre EMA)."]
    }
  },

  // --- EV CONTROL (DISERTATIE) ---
  {
    id: "foc-ml",
    categoryFilter: "embedded-sw",
    title: "EV Control System (RL)",
    category: "Automotive & AI",
    tech: "Matlab, Simulink, Reinforcement Learning",
    image: "/images/disertatie/cover.png",
    gallery: ["/images/disertatie/img1.png", "/images/disertatie/img2.png", "/images/disertatie/img3.png", "/images/disertatie/img4.png", "/images/disertatie/img5.png", "/images/disertatie/img6.png"],
    link: "https://github.com/RafaelMarian/DisertatieRaf",
    github: "https://github.com/RafaelMarian/DisertatieRaf",
    desc: {
      en: "Optimization of Field Oriented Control (FOC) for Porsche Taycan powertrain using Reinforcement Learning.",
      ro: "Optimizarea FOC pentru trenul de rulare Porsche Taycan folosind Reinforcement Learning."
    },
    extendedSummary: {
      en: "This Master's Thesis replaces classical PI controllers with DDPG/TD3 Reinforcement Learning agents to control a high-performance EV powertrain. The project involves a complete Simulink simulation including the Grid, Rectifier, DC-DC Boost Converter, Li-Ion Battery, and PMSM Motor. The RL agents showed superior dynamic response compared to static tuning.",
      ro: "Această teză de disertație înlocuiește regulatoarele PI clasice cu agenți de Reinforcement Learning (DDPG/TD3) pentru controlul trenului de rulare al unui EV de performanță. Proiectul implică o simulare completă în Simulink incluzând Rețeaua, Redresorul, Convertorul DC-DC Boost, Bateria Li-Ion și Motorul PMSM. Agenții RL au demonstrat un răspuns dinamic superior față de reglajele statice."
    },
    details: {
      en: ["Full Powertrain Simulation (Grid to Wheel).", "Reinforcement Learning (DDPG agents).", "CI/CD with Jenkins & GitHub Actions."],
      ro: ["Simulare Completă Tren de Rulare.", "Reinforcement Learning (Agenți DDPG).", "CI/CD cu Jenkins & GitHub Actions."]
    }
  },

  // --- STEPPER MOTOR CONTROLLER (PIC24) ---
  {
    id: "stepper-pic24",
    categoryFilter: ["embedded-sw", "hardware"],
    title: "Stepper Motor Controller — PIC24",
    category: "Embedded Systems",
    tech: "PIC24FJ256GB110, DRV8825, XC16, NEMA-17",
    image: "/images/stepper-pic24/cover.png",
    gallery: [
      "/images/stepper-pic24/cover.png",
      "/images/stepper-pic24/img1.png",
      "/images/stepper-pic24/img2.png"
    ],
    link: "https://github.com/RafaelMarian/MotorControlPIC",
    github: "https://github.com/RafaelMarian/MotorControlPIC",
    desc: {
      en: "Bare-metal PIC24 controller for a NEMA-17 stepper: multiplexed 7-segment UI, ISR-driven STEP pulses, DRV8825 driver.",
      ro: "Controller bare-metal PIC24 pentru stepper NEMA-17: UI 7-segment multiplexat, impulsuri STEP din ISR, driver DRV8825."
    },
    extendedSummary: {
      en: "Embedded control system for a NEMA-17 stepper motor, built around a PIC24FJ256GB110 and a DRV8825 driver. The UI is a multiplexed 3-digit 7-segment display and two buttons: the shown value (000–100) sets motor speed in real time. Three status LEDs run a continuous chase. Stepping is generated with a Timer1 interrupt (STEP pulses), with direction and enable handled in firmware. The board is a custom prototype on perfboard with dense point-to-point wiring. The power section uses Manhattan-style construction on a copper ground plane (solid return path, short power loops, cleaner motor supply). Logic, MCU, display, buttons, and the DRV8825 sit on the perfboard above, programmed in-circuit with a PICkit 5. Motor power is 12 V on VM; coil current is set with AVREF/BVREF (not VM). The stepper uses paired coil wiring into AOUT/BOUT. Demonstrates bare-metal C on PIC24 (MPLAB X / XC16): GPIO, multiplexed display, debounced UI with hold-to-repeat, ISR-driven motion control, and speed mapping from a user setpoint — plus practical hardware skills in prototype layout, mixed Manhattan + wired assembly, and driver bring-up.",
      ro: "Sistem de control embedded pentru un motor pas cu pas NEMA-17, construit în jurul PIC24FJ256GB110 și al driverului DRV8825. UI-ul e un display 7-segment cu 3 digiți multiplexat și două butoane: valoarea afișată (000–100) setează viteza motorului în timp real. Trei LED-uri de status rulează un chase continuu. Pașii sunt generați cu Timer1 în interrupt (impulsuri STEP), iar direcția și enable sunt gestionate în firmware. Placa e un prototip custom pe perfboard cu cablaj punct-la-punct dens. Secțiunea de alimentare folosește construcție tip Manhattan pe plan de masă cupru (retur solid, bucle scurte, alimentare motor mai curată). Logica, MCU, display, butoane și DRV8825 stau pe perfboard deasupra, programate in-circuit cu PICkit 5. Alimentarea motorului e 12 V pe VM; curentul pe bobine se setează cu AVREF/BVREF (nu VM). Stepperul folosește cablare pe perechi de bobine în AOUT/BOUT. Demonstrează C bare-metal pe PIC24 (MPLAB X / XC16): GPIO, display multiplexat, UI cu debounce și hold-to-repeat, control mișcare din ISR și mapare viteză din setpoint — plus abilități practice de layout prototip, asamblare mixtă Manhattan + cablaj și bring-up driver."
    },
    details: {
      en: [
        "PIC24FJ256GB110 firmware in XC16 (MPLAB X).",
        "DRV8825 stepper driver: STEP from Timer1 ISR, DIR/EN in software.",
        "Multiplexed 3-digit 7-segment UI; speed setpoint 000–100.",
        "Debounced buttons with hold-to-repeat; LED chase status.",
        "12 V motor supply on VM; current set via AVREF/BVREF.",
        "Perfboard + Manhattan copper ground plane; PICkit 5 ISP."
      ],
      ro: [
        "Firmware PIC24FJ256GB110 în XC16 (MPLAB X).",
        "Driver stepper DRV8825: STEP din Timer1 ISR, DIR/EN în software.",
        "UI 7-segment 3 digiți multiplexat; setpoint viteză 000–100.",
        "Butoane cu debounce și hold-to-repeat; chase LED status.",
        "Alimentare motor 12 V pe VM; curent setat pe AVREF/BVREF.",
        "Perfboard + plan masă Manhattan; programare PICkit 5."
      ]
    }
  },

  // --- PIC FILTER ANALYZER ---
  {
    id: "pic-filter-analyzer",
    categoryFilter: ["embedded-sw", "hardware"],
    title: "PIC Filter Analyzer",
    category: "Embedded Systems",
    tech: "C, PIC24, MPLAB X, ADC, GPIO, character LCD",
    image: "/images/pic-filter-analyzer/cover.png",
    gallery: [
      "/images/pic-filter-analyzer/cover.png",
      "/images/pic-filter-analyzer/img1.png",
      "/images/pic-filter-analyzer/img2.png",
      "/images/pic-filter-analyzer/img3.png"
    ],
    link: "https://github.com/RafaelMarian/PICProjectFilterAnalyzer",
    github: "https://github.com/RafaelMarian/PICProjectFilterAnalyzer",
    desc: {
      en: "Bare-metal PIC24 firmware: buttons, DIP switches, ADC pot, status LEDs, and a custom 20×4 LCD — hardware layer for an interactive filter / signal demo.",
      ro: "Firmware bare-metal PIC24: butoane, DIP switch, pot ADC, LED-uri status și LCD 20×4 custom — stratul hardware pentru un demo interactiv de filtru / semnal."
    },
    extendedSummary: {
      en: "Bare-metal C firmware for a PIC24FJ256GB110, built in MPLAB X. It wires up the board’s real I/O so the MCU can read user input, sample an analog signal, drive status LEDs, and show feedback on a character LCD — the hardware layer for an interactive filter / signal demo. The firmware configures GPIO for buttons and DIP switches, ADC for a potentiometer (with LED thresholds by range), and a custom 20×4 LCD driver in 4-bit mode (init, commands, cursor, text). Clock and pin setup are done through Microchip’s toolchain so the app stays close to the silicon. Prototype uses Manhattan-style construction on a copper ground plane with PICkit 5 in-circuit programming.",
      ro: "Firmware C bare-metal pentru PIC24FJ256GB110, construit în MPLAB X. Conectează I/O-ul real al plăcii astfel încât MCU-ul să citească input de la utilizator, să eșantioneze un semnal analogic, să comande LED-uri de status și să afișeze feedback pe un LCD caracter — stratul hardware pentru un demo interactiv de filtru / semnal. Firmware-ul configurează GPIO pentru butoane și DIP switch-uri, ADC pentru un potențiometru (cu praguri LED pe intervale) și un driver LCD 20×4 custom pe 4 biți (init, comenzi, cursor, text). Clock-ul și pinii sunt setați prin toolchain-ul Microchip, aproape de silicon. Prototipul folosește construcție tip Manhattan pe plan de masă cupru, cu programare in-circuit PICkit 5."
    },
    details: {
      en: [
        "<strong>LCD 20×4 (4-bit):</strong> RD14=RS, RD4=E, RD5=RW, RE4–RE7=D4–D7, RD15=backlight, RA14=reset.",
        "<strong>Buttons (active low, CN pull-ups):</strong> RB8–RB11 = Button 1–4 (CN26–CN29).",
        "<strong>DIP switches (active low):</strong> RA1, RB13, RB0, RB1 = Switch 1–4.",
        "<strong>ADC:</strong> RB5 / AN5 = potentiometer.",
        "<strong>LEDs by pot range:</strong> RB3 (≤337), RB4 (338–675), RC1 (&gt;675).",
        "Custom LCD driver + GPIO/ADC bring-up on PIC24FJ256GB110 (MPLAB X)."
      ],
      ro: [
        "<strong>LCD 20×4 (4 biți):</strong> RD14=RS, RD4=E, RD5=RW, RE4–RE7=D4–D7, RD15=backlight, RA14=reset.",
        "<strong>Butoane (active low, CN pull-up):</strong> RB8–RB11 = Buton 1–4 (CN26–CN29).",
        "<strong>DIP switch (active low):</strong> RA1, RB13, RB0, RB1 = Switch 1–4.",
        "<strong>ADC:</strong> RB5 / AN5 = potențiometru.",
        "<strong>LED-uri pe interval pot:</strong> RB3 (≤337), RB4 (338–675), RC1 (&gt;675).",
        "Driver LCD custom + bring-up GPIO/ADC pe PIC24FJ256GB110 (MPLAB X)."
      ]
    }
  },

  // --- ARDUINO + RPi SENSING & COOLING ---
  {
    id: "arduino-rpi-sensing",
    categoryFilter: ["embedded-sw", "hardware"],
    title: "Arduino + Raspberry Pi Sensing & Cooling",
    category: "Embedded Systems",
    tech: "Arduino Nano, Arduino Due, C, Raspberry Pi, Python",
    image: "/images/arduino-rpi-sensing/cover.png",
    gallery: [
      "/images/arduino-rpi-sensing/cover.png",
      "/images/arduino-rpi-sensing/img1.png",
      "/images/arduino-rpi-sensing/img2.png",
      "/images/arduino-rpi-sensing/img3.png"
    ],
    desc: {
      en: "Dual-MCU system: Nano cooling for Raspberry Pi and Due multi-sensor front-end (temperature, pH, light/lux).",
      ro: "Sistem dual-MCU: răcire pe Nano pentru Raspberry Pi și front-end multi-senzor pe Due (temperatură, pH, lumină/lux)."
    },
    extendedSummary: {
      en: "An embedded hardware/software project linking Arduino boards with a Raspberry Pi 3. The Arduino Nano (ATmega328, 16 MHz, 5 V) handles thermal management: NTC thermistor sensing (Steinhart–Hart) and a cooling fan driven via a 2N2222 transistor. The Arduino Due (ARM Cortex-M3, 84 MHz, 3.3 V) acquires analog channels for temperature, pH, and light — including a photodiode path through a transimpedance amplifier (TIA), NTC divider, pH probe conditioning, and a 10k/10k reference. Potentiometers (PT1–PT3) allow simulation of Temp / pH / Lux during bring-up. Sensor data is monitored from the Pi (Python on Debian/Linux).",
      ro: "Proiect embedded hardware/software care leagă plăci Arduino de un Raspberry Pi 3. Arduino Nano (ATmega328, 16 MHz, 5 V) face management termic: senzor NTC (Steinhart–Hart) și ventilator comandat prin 2N2222. Arduino Due (ARM Cortex-M3, 84 MHz, 3.3 V) achiziționează canale analogice pentru temperatură, pH și lumină — inclusiv cale fotodiodă prin amplificator de transimpedanță (TIA), divizor NTC, condiționare sondă pH și referință 10k/10k. Potențiometrele (PT1–PT3) simulează Temp / pH / Lux la aducerea pe banc. Datele sunt monitorizate de pe Pi (Python pe Debian/Linux)."
    },
    details: {
      en: [
        "Arduino Nano cooling loop: NTC sensing + 2N2222 fan drive.",
        "Arduino Due analog front-end: Temp, pH, Lux (photodiode TIA).",
        "Steinhart–Hart temperature conversion; Nernst-based pH path.",
        "PT1–PT3 potentiometers for sensor simulation during testing.",
        "Raspberry Pi 3 host (Python / Debian) for cross-monitoring.",
        "Bench prototype with dual MCUs, fan, and sensor housing."
      ],
      ro: [
        "Buclă răcire pe Arduino Nano: NTC + ventilator 2N2222.",
        "Front-end analog Due: Temp, pH, Lux (fotodiodă + TIA).",
        "Conversie Steinhart–Hart; cale pH pe baza Nernst.",
        "Potențiometre PT1–PT3 pentru simulare senzori la test.",
        "Host Raspberry Pi 3 (Python / Debian) pentru monitorizare.",
        "Prototip pe banc cu dual MCU, ventilator și carcasă senzor."
      ]
    }
  },

  // --- 8051 MONITOR ---
  {
    id: "micro-8051",
    categoryFilter: "embedded-sw",
    title: "8051 Environment Monitor",
    category: "Embedded Systems",
    tech: "Assembly, Proteus",
    image: "/images/micro-8051/cover.png",
    gallery: ["/images/micro-8051/img1.png", "/images/micro-8051/img2.png", "/images/micro-8051/img3.png", "/images/micro-8051/img4.png", "/images/micro-8051/img5.png", "/images/micro-8051/img6.png"],
    link: "https://github.com/RafaelMarian/8051-microcontrollers.-",
    github: "https://github.com/RafaelMarian/8051-microcontrollers.-",
    desc: {
      en: "Low-level Assembly programming for environmental sensor interfacing.",
      ro: "Programare low-level în Asamblare pentru interfațarea senzorilor de mediu."
    },
    extendedSummary: {
      en: "Demonstrates fundamental embedded skills by implementing I2C and ADC protocols from scratch in Assembly language. The system monitors temperature and humidity and displays data on an LCD, simulated entirely in Proteus.",
      ro: "Demonstrează abilități fundamentale embedded prin implementarea protocoalelor I2C și ADC de la zero în limbaj de Asamblare. Sistemul monitorizează temperatura și umiditatea și afișează datele pe un LCD, simulat complet în Proteus."
    },
    details: {
      en: ["Assembly Language.", "I2C & ADC Implementation.", "Proteus Simulation.", "LCD Interfacing."],
      ro: ["Limbaj de Asamblare.", "Implementare I2C & ADC.", "Simulare Proteus.", "Interfațare LCD."]
    }
  },

  // --- PCB ---
  {
    id: "pcb-design",
    categoryFilter: "hardware",
    title: "Multi-layer PCB Design",
    category: "Electronics",
    tech: "OrCad",
    image: "/images/pcb/cover.png",
    gallery: ["/images/pcb/img1.png", "/images/pcb/img2.png", "/images/pcb/img3.png", "/images/pcb/img4.png", "/images/pcb/img5.png", "/images/pcb/img6.png"],
    link: "https://github.com/RafaelMarian/PCB-Design",
    github: "https://github.com/RafaelMarian/PCB-Design",
    desc: { 
      en: "Professional multi-layer PCB layouts with signal integrity considerations.", 
      ro: "Layout-uri PCB multi-strat profesionale cu considerații de integritate a semnalului." 
    },
    extendedSummary: { 
      en: "Executed the complete hardware design flow: Schematic Capture, Footprint Creation, and Layout Routing. Included Design Rule Checks (DRC) and specific routing strategies for ground planes and power distribution.", 
      ro: "Executarea fluxului complet de design hardware: Captură Schematică, Creare Amprente și Rutare Layout. A inclus Verificări DRC și strategii specifice de rutare pentru planuri de masă și distribuția puterii." 
    },
    details: { 
      en: ["OrCad Capture & Layout.", "Multi-layer Routing.", "DRC Validation."], 
      ro: ["OrCad Capture & Layout.", "Rutare Multi-strat.", "Validare DRC."] 
    }
  },

  // --- LIQUID CONTROL ---
  {
    id: "liquid-control",
    categoryFilter: "hardware",
    title: "Liquid Level Control",
    category: "Simulation",
    tech: "PSpice",
    image: "/images/liquid-control/cover.png",
    gallery: ["/images/liquid-control/img1.png", "/images/liquid-control/img2.png", "/images/liquid-control/img3.png", "/images/liquid-control/img4.png", "/images/liquid-control/img5.png", "/images/liquid-control/img6.png"],
    link: "https://github.com/RafaelMarian/Liquid-level-control-system-",
    github: "https://github.com/RafaelMarian/Liquid-level-control-system-",
    desc: { 
      en: "Analog control loop simulation validated with Monte Carlo analysis.", 
      ro: "Simulare buclă de control analogic validată cu analiză Monte Carlo." 
    },
    extendedSummary: { 
      en: "Design of an automated control system using operational amplifiers and feedback loops. System stability and robustness were tested using PSpice simulations including Worst-Case and Monte Carlo scenarios.", 
      ro: "Proiectarea unui sistem de control automat folosind amplificatoare operaționale și bucle de reacție. Stabilitatea și robustețea sistemului au fost testate folosind simulări PSpice, inclusiv scenarii Worst-Case și Monte Carlo." 
    },
    details: { 
      en: ["Analog Circuit Design.", "Feedback Control Loops.", "Monte Carlo Analysis."], 
      ro: ["Design Circuit Analogic.", "Bucle de Control cu Reacție.", "Analiză Monte Carlo."] 
    }
  },

  // --- CLASS B ---
  {
    id: "class-b",
    categoryFilter: "hardware",
    title: "Class B Amplifier",
    category: "Electronics",
    tech: "Simulink",
    image: "/images/class-b/cover.png",
    gallery: ["/images/class-b/img1.png", "/images/class-b/img2.png", "/images/class-b/img3.png", "/images/class-b/img4.png", "/images/class-b/img5.png", "/images/class-b/img6.png"],
    link: "https://github.com/RafaelMarian/Class-B-Amplifier-",
    github: "https://github.com/RafaelMarian/Class-B-Amplifier-",
    desc: { 
      en: "Efficiency and distortion analysis of Push-Pull topology.", 
      ro: "Analiza eficienței și distorsiunilor topologiei Push-Pull." 
    },
    extendedSummary: { 
      en: "Investigation of Class-B amplifier characteristics, specifically focusing on crossover distortion elimination and power efficiency compared to Class-A. Waveform analysis performed in Simulink.", 
      ro: "Investigarea caracteristicilor amplificatorului Clasa-B, concentrându-se specific pe eliminarea distorsiunilor de crossover și eficiența energetică comparativ cu Clasa-A. Analiza formelor de undă realizată în Simulink." 
    },
    details: { 
      en: ["Push-Pull Topology.", "Crossover Distortion.", "Power Efficiency Analysis."], 
      ro: ["Topologie Push-Pull.", "Distorsiuni de Crossover.", "Analiza Eficienței Energetice."] 
    }
  },

  // --- IMAGE PROCESSING ---
  {
    id: "laplace-img",
    categoryFilter: "software",
    title: "Image Filtering Algorithms",
    category: "Computer Vision",
    tech: "Python, OpenCV",
    image: "/images/laplace/cover.png",
    gallery: ["/images/laplace/img1.png", "/images/laplace/img2.png", "/images/laplace/img3.png", "/images/laplace/img4.png", "/images/laplace/img5.png", "/images/laplace/img6.png"],
    link: "https://github.com/RafaelMarian/ImageProcessing-Laplacian.Gaussian",
    github: "https://github.com/RafaelMarian/ImageProcessing-Laplacian.Gaussian",
    desc: { 
      en: "Edge detection using second-order differential operators.", 
      ro: "Detecția marginilor folosind operatori diferențiali de ordinul doi." 
    },
    extendedSummary: { 
      en: "Algorithmic implementation of Laplacian and Gaussian filters for feature extraction. Focuses on the mathematical application of convolution masks in image processing.", 
      ro: "Implementarea algoritmică a filtrelor Laplacian și Gaussian pentru extragerea trăsăturilor. Se concentrează pe aplicația matematică a măștilor de convoluție în procesarea imaginilor." 
    },
    details: { 
      en: ["Computer Vision Algorithms.", "Convolution Masks.", "Python Implementation."], 
      ro: ["Algoritmi Computer Vision.", "Măști de Convoluție.", "Implementare Python."] 
    }
  },

  // --- FLUTTER APP ---
  {
    id: "flutter-fitness",
    categoryFilter: ["mobile", "software"],
    title: "NRStrength — Fitness Tracker",
    category: "Mobile App",
    tech: "Flutter, Dart, Android",
    image: "/images/flutter/cover.png", 
    gallery: ["/images/flutter/img1.png", "/images/flutter/img2.png", "/images/flutter/img3.png", "/images/flutter/img4.png", "/images/flutter/img5.png", "/images/flutter/img6.png"],
    playStore: playStoreLinks.fitness,
    link: "/apps/nrstrength",
    github: "https://github.com/RafaelMarian",
    desc: {
      en: "Comprehensive fitness app with real-time syncing and analytics replacing traditional paper logs.",
      ro: "Aplicație completă de fitness cu sincronizare în timp real și analize, înlocuind jurnalul clasic."
    },
    extendedSummary: {
      en: "A cross-platform solution developed in Flutter to modernize workout tracking. It uses and AI coach to start a 3 months cycle but also RPG style gamification techniques. The app calculates 1RM, tracks volume history, and provides graphical insights into progress.",
      ro: "O soluție cross-platform dezvoltată în Flutter pentru modernizarea monitorizării antrenamentelor. Porneste un program pe 3 luni de antrenament folosind un Coach AI. Aplicația calculează 1RM, istoricul volumului și oferă grafice de progres pe langa multe altele."
    },
    details: {
      en: ["Cross-platform Architecture (Mobile/Web).", "State Management (Provider).", "Automated Netlify Deployment."],
      ro: ["Arhitectură Cross-platform (Mobil/Web).", "State Management (Provider).", "Deploy Automat pe Netlify."]
    }
  },

  // --- AI PURCHASE PREDICTION ---
  {
    id: "ai-purchase",
    categoryFilter: ["web", "software"],
    title: "Product Purchase AI Prediction",
    category: "Full Stack AI",
    tech: "Python, React, Docker, Flask",
    image: "/images/ai-purchase/cover.png",
    gallery: ["/images/ai-purchase/img1.png", "/images/ai-purchase/img2.png", "/images/ai-purchase/img3.png", "/images/ai-purchase/img4.png", "/images/ai-purchase/img5.png", "/images/ai-purchase/img6.png"],
    link: "https://github.com/RafaelMarian/ai-insights",
    github: "https://github.com/RafaelMarian/ai-insights",
    desc: {
      en: "Full-stack web app predicting purchase trends using ML models served via Flask.",
      ro: "Aplicație web Full-stack ce prezice tendințele de cumpărare folosind modele ML servite prin Flask."
    },
    extendedSummary: {
      en: "Integrates Data Science with Modern Web Development. A Random Forest model trained on historical data is exposed via a Python Flask API. The frontend is a responsive React dashboard that visualizes prediction confidence. The entire stack is containerized using Docker for consistent deployment.",
      ro: "Integrează Data Science cu Dezvoltarea Web modernă. Un model Random Forest antrenat pe date istorice este expus printr-un API Python Flask. Frontend-ul este un dashboard React responsiv care vizualizează încrederea predicției. Întregul stack este containerizat folosind Docker pentru un deploy consistent."
    },
    details: {
      en: ["Flask API & Python ML.", "React Dashboard.", "Docker Containerization.", "REST API Architecture."],
      ro: ["API Flask & Python ML.", "Dashboard React.", "Containerizare Docker.", "Arhitectură REST API."]
    }
  },

  // --- NRSTRENGTH WEBSITE ---
  {
    id: "nrstrength-website",
    categoryFilter: "web",
    title: "NRStrength — Website",
    category: "Web Development",
    tech: "React, CSS3",
    image: "/images/nrstrength-web/cover.png",
    gallery: ["/images/nrstrength-web/img1.png", "/images/nrstrength-web/img2.png", "/images/nrstrength-web/img3.png", "/images/nrstrength-web/img4.png", "/images/nrstrength-web/img5.png", "/images/nrstrength-web/img6.png"],
    link: "https://nrstrength.netlify.app/",
    github: "https://github.com/RafaelMarian",
    desc: {
      en: "Promotional landing page for the fitness application.",
      ro: "Landing page de prezentare pentru aplicația de fitness."
    },
    extendedSummary: {
      en: "A responsive presentation website designed to convert visitors into app users. Showcases features, screenshots, and download links for NRStrength.",
      ro: "Un site de prezentare responsiv conceput pentru a converti vizitatorii în utilizatori ai aplicației. Prezintă funcționalități, capturi de ecran și link-uri de descărcare pentru NRStrength."
    },
    details: {
      en: ["React SPA.", "Responsive Layout.", "Modern UI/UX."],
      ro: ["React SPA.", "Layout Responsiv.", "UI/UX Modern."]
    }
  },

  // --- PORTFOLIO SITE ---
  {
    id: "portfolio-site",
    categoryFilter: "web",
    title: "Personal Portfolio Website",
    category: "Web Development",
    tech: "React, Vite, CSS3",
    image: "/images/portfolio/cover.png", 
    gallery: ["/images/portfolio/img1.png", "/images/portfolio/img2.png", "/images/portfolio/img3.png", "/images/portfolio/img4.png", "/images/portfolio/img5.png", "/images/portfolio/img6.png"],
    link: "#",
    github: "https://github.com/RafaelMarian/rafael-portfolio",
    desc: {
      en: "The modern React portfolio you are currently browsing.",
      ro: "Portofoliul modern React pe care îl navighezi chiar acum."
    },
    extendedSummary: {
      en: "A complete showcase of engineering skills built with React and Vite. Features advanced filtering, interactive galleries, glassmorphism UI, and dark mode support.",
      ro: "O prezentare completă a abilităților inginerești construită cu React și Vite. Include filtrare avansată, galerii interactive, UI glassmorphism și suport Dark Mode."
    },
    details: {
      en: ["React Hooks & State.", "Glassmorphism UI.", "Dark Mode Engine."],
      ro: ["React Hooks & State.", "UI Glassmorphism.", "Motor Dark Mode."]
    }
  },

  {
    id: "cns-website",
    categoryFilter: ["web"],
    title: "CNS Website",
    category: "Web Development",
    tech: "React, CSS, JavaScript",
    image: "/images/cns-website/cover.png",
    gallery: ["/images/cns-website/img1.png", "/images/cns-website/img2.png", "/images/cns-website/img3.png", "/images/cns-website/img4.png", "/images/cns-website/img5.png", "/images/cns-website/img6.png"],
    link: "#",
    github: "#",
    desc: {
      en: "A modern website for my high school, Colegiul Național 'Silvania' Zalău.",
      ro: "Un site web modern pentru liceul meu, Colegiul Național 'Silvania' Zalău."
    },
    extendedSummary: {
      en: "A project to redesign and modernize the official high school website, focusing on a clean UI and better user experience for students, teachers, and parents.",
      ro: "Un proiect de redesign și modernizare a site-ului oficial al liceului, axat pe o interfață curată și o experiență de utilizare mai bună pentru elevi, profesori și părinți."
    },
    details: {
      en: ["React Components", "Responsive Design", "UI/UX Improvement"],
      ro: ["Componente React", "Design Responsiv", "Îmbunătățire UI/UX"]
    }
  },

  // --- APP LANDING PAGES (websites) ---
  {
    id: "bible-daily-prayer-web",
    categoryFilter: "web",
    title: "Bible: Daily Prayer — Website",
    category: "Web Development",
    tech: "React, Netlify",
    image: "/images/BibleDailyPrayerSite/cover.png",
    gallery: [
      "/images/BibleDailyPrayerSite/img1.png",
      "/images/BibleDailyPrayerSite/img2.png",
      "/images/BibleDailyPrayerSite/img3.png",
      "/images/BibleDailyPrayerSite/img4.png",
      "/images/BibleDailyPrayerSite/img5.png",
      "/images/BibleDailyPrayerSite/img6.png"
    ],
    link: "https://bibledailyprayer.netlify.app/en",
    desc: {
      en: "Landing page for a Scripture and Orthodox devotion app with daily prayer content.",
      ro: "Landing page pentru o aplicație de Scriptură și devoțiune ortodoxă, cu conținut zilnic de rugăciune."
    },
    extendedSummary: {
      en: "A responsive presentation site for Bible: Daily Prayer. It introduces the app, highlights core features, and guides visitors to the live experience on web and mobile.",
      ro: "Un site de prezentare responsiv pentru Bible: Daily Prayer. Prezintă aplicația, evidențiază funcționalitățile principale și direcționează vizitatorii către experiența live pe web și mobil."
    },
    details: {
      en: ["React SPA.", "Responsive Layout.", "Netlify Deployment.", "Multilingual support (EN)."],
      ro: ["React SPA.", "Layout responsiv.", "Deploy pe Netlify.", "Suport multilingv (EN)."]
    }
  },,
  {
    id: "time-means-money-web",
    categoryFilter: "web",
    title: "Time Means Money — Website",
    category: "Web Development",
    tech: "React, Netlify",
    image: "/images/TimeMeansMoneySite/cover.png",
    gallery: [
      "/images/TimeMeansMoneySite/img1.png",
      "/images/TimeMeansMoneySite/img2.png",
      "/images/TimeMeansMoneySite/img3.png",
      "/images/TimeMeansMoneySite/img4.png",
      "/images/TimeMeansMoneySite/img5.png",
      "/images/TimeMeansMoneySite/img6.png"
    ],
    link: "https://timemeansmoney.netlify.app/",
    desc: {
      en: "Landing page for a productivity app that connects time tracking with financial awareness.",
      ro: "Landing page pentru o aplicație de productivitate care leagă urmărirea timpului de conștientizarea financiară."
    },
    extendedSummary: {
      en: "A clean, conversion-focused website for the Time Means Money app. It presents the product value proposition and links users to the live web experience.",
      ro: "Un site curat, orientat spre conversie, pentru aplicația Time Means Money. Prezintă propunerea de valoare și direcționează utilizatorii către experiența web live."
    },
    details: {
      en: ["React SPA.", "Responsive Layout.", "Netlify Deployment.", "Product-focused UI/UX."],
      ro: ["React SPA.", "Layout responsiv.", "Deploy pe Netlify.", "UI/UX orientat pe produs."]
    }
  },,
  {
    id: "budget-app-web",
    categoryFilter: "web",
    title: "Budget Planner — MoneyTrack — Website",
    category: "Web Development",
    tech: "React, Netlify",
    image: "/images/BudgetPlannerSite/cover.png",
    gallery: [
      "/images/BudgetPlannerSite/img1.png",
      "/images/BudgetPlannerSite/img2.png",
      "/images/BudgetPlannerSite/img3.png",
      "/images/BudgetPlannerSite/img4.png",
      "/images/BudgetPlannerSite/img5.png",
      "/images/BudgetPlannerSite/img6.png"
    ],
    link: "https://budgetappmoneytrack.netlify.app/",
    desc: {
      en: "Landing page for a personal budget and expense tracking application.",
      ro: "Landing page pentru o aplicație de buget personal și urmărire a cheltuielilor."
    },
    extendedSummary: {
      en: "A promotional website for the Budget Planner app. It showcases budgeting features, expense tracking, and download paths for users who want to manage their finances.",
      ro: "Un site promoțional pentru aplicația Budget Planner. Prezintă funcții de bugetare, urmărirea cheltuielilor și căile de acces pentru utilizatorii care își gestionează finanțele."
    },
    details: {
      en: ["React SPA.", "Responsive Layout.", "Netlify Deployment.", "Finance-focused presentation."],
      ro: ["React SPA.", "Layout responsiv.", "Deploy pe Netlify.", "Prezentare axată pe finanțe personale."]
    }
  },,
  {
    id: "offlinebooks-web",
    categoryFilter: "web",
    title: "OfflineBooks — Website",
    category: "Web Development",
    tech: "React, Netlify",
    image: "/images/OfflineBooksSite/cover.png",
    gallery: [
      "/images/OfflineBooksSite/img1.png",
      "/images/OfflineBooksSite/img2.png",
      "/images/OfflineBooksSite/img3.png",
      "/images/OfflineBooksSite/img4.png",
      "/images/OfflineBooksSite/img5.png",
      "/images/OfflineBooksSite/img6.png"
    ],
    link: "https://offlineaccountant.netlify.app/",
    desc: {
      en: "Landing page for an offline accounting and invoicing app for small businesses.",
      ro: "Landing page pentru o aplicație de contabilitate și facturare offline, pentru mici afaceri."
    },
    extendedSummary: {
      en: "A presentation website for OfflineBooks — simple accounting and invoicing that works without an internet connection. Highlights offline-first workflows and core business features.",
      ro: "Un site de prezentare pentru OfflineBooks — contabilitate și facturare simplă, funcțională fără conexiune la internet. Evidențiază fluxurile offline-first și funcționalitățile esențiale pentru afaceri."
    },
    details: {
      en: ["React SPA.", "Responsive Layout.", "Netlify Deployment.", "Offline-first product messaging."],
      ro: ["React SPA.", "Layout responsiv.", "Deploy pe Netlify.", "Mesajare produs offline-first."]
    }
  },,
  {
    id: "focus-net-web",
    categoryFilter: "web",
    title: "Focus Net — Website",
    category: "Web Development",
    tech: "React, Netlify",
    image: "/images/FocusNetSite/cover.png",
    gallery: [
      "/images/FocusNetSite/img1.png",
      "/images/FocusNetSite/img2.png",
      "/images/FocusNetSite/img3.png",
      "/images/FocusNetSite/img4.png",
      "/images/FocusNetSite/img5.png",
      "/images/FocusNetSite/img6.png"
    ],
    link: "https://focusnet.netlify.app/",
    desc: {
      en: "Landing page for a productivity and deep-focus timer application.",
      ro: "Landing page pentru o aplicație de productivitate și timer pentru focus profund."
    },
    extendedSummary: {
      en: "A modern landing page for Focus Net — a productivity tool built around timed focus sessions. The site presents features, benefits, and links to the live app experience.",
      ro: "Un landing page modern pentru Focus Net — un instrument de productivitate construit în jurul sesiunilor de focus cronometrate. Site-ul prezintă funcții, beneficii și link către experiența live."
    },
    details: {
      en: ["React SPA.", "Responsive Layout.", "Netlify Deployment.", "Productivity-focused UI/UX."],
      ro: ["React SPA.", "Layout responsiv.", "Deploy pe Netlify.", "UI/UX orientat pe productivitate."]
    }
  },

  // --- MOBILE APPS (Android) — only entries with real screenshots ---
  {
    id: "offlinebooks-app",
    categoryFilter: ["mobile", "software"],
    title: "OfflineBooks",
    category: "Mobile App",
    tech: "Flutter, Android",
    image: "/images/AccountingApp/img1.png",
    gallery: [
      "/images/AccountingApp/img1.png",
      "/images/AccountingApp/img2.png",
      "/images/AccountingApp/img3.png",
      "/images/AccountingApp/img4.png",
      "/images/AccountingApp/img5.png"
    ],
    playStore: playStoreLinks.accounting,
    link: "/apps/offlinebooks",
    desc: {
      en: "Offline accounting and invoicing app for freelancers and small businesses.",
      ro: "Aplicație de contabilitate și facturare offline pentru freelanceri și mici afaceri."
    },
    extendedSummary: {
      en: "OfflineBooks keeps invoices, clients, and basic accounting on-device — no internet required. Built for simple, reliable business bookkeeping on Android.",
      ro: "OfflineBooks păstrează facturi, clienți și contabilitate de bază pe dispozitiv — fără internet. Construită pentru evidență simplă și fiabilă pe Android."
    },
    details: {
      en: ["Invoicing & client management.", "Offline-first architecture.", "Simple accounting workflows.", "Published on Google Play."],
      ro: ["Facturare și gestiune clienți.", "Arhitectură offline-first.", "Fluxuri contabilitate simple.", "Publicat pe Google Play."]
    }
  },,
  {
    id: "sound-measure-app",
    categoryFilter: ["mobile", "software"],
    title: "Sound Measure",
    category: "Mobile App",
    tech: "Flutter, Android",
    image: "/images/SoundMeasureApp/img1.png",
    gallery: [
      "/images/SoundMeasureApp/img1.png",
      "/images/SoundMeasureApp/img2.png",
      "/images/SoundMeasureApp/img3.png",
      "/images/SoundMeasureApp/img4.png",
      "/images/SoundMeasureApp/img5.png"
    ],
    desc: {
      en: "Decibel meter app for measuring ambient sound levels in real time.",
      ro: "Aplicație sonometru pentru măsurarea nivelului sonor ambiental în timp real."
    },
    extendedSummary: {
      en: "Uses the device microphone to display live dB readings, helping users check noise levels at home, work, or on the go.",
      ro: "Folosește microfonul dispozitivului pentru afișarea valorilor dB live, ajutând utilizatorii să verifice nivelul de zgomot acasă, la birou sau în deplasare."
    },
    details: {
      en: ["Real-time dB monitoring.", "Microphone-based sensing.", "Readable gauges & history.", "Lightweight Android app."],
      ro: ["Monitorizare dB în timp real.", "Senzor bazat pe microfon.", "Grafice și istoric lizibil.", "Aplicație Android ușoară."]
    }
  },,
  {
    id: "client-crm-app",
    categoryFilter: ["mobile", "software"],
    title: "Client Base CRM",
    category: "Mobile App",
    tech: "Flutter, Android",
    image: "/images/CRMAPP/img1.png",
    gallery: [
      "/images/CRMAPP/img1.png",
      "/images/CRMAPP/img2.png",
      "/images/CRMAPP/img3.png",
      "/images/CRMAPP/img4.png",
      "/images/CRMAPP/img5.png"
    ],
    playStore: playStoreLinks.clientcrm,
    link: "/apps/client-base-crm",
    desc: {
      en: "Offline CRM for managing clients, notes, and follow-ups without an internet connection.",
      ro: "CRM offline pentru gestionarea clienților, notelor și follow-up-urilor fără internet."
    },
    extendedSummary: {
      en: "Client Base CRM keeps customer data on-device so freelancers and small teams can manage relationships reliably, even offline.",
      ro: "Client Base CRM păstrează datele clienților pe dispozitiv, astfel încât freelancerii și echipele mici pot gestiona relațiile în mod fiabil, chiar și offline."
    },
    details: {
      en: ["Client profiles & notes.", "Offline-first storage.", "Follow-up tracking.", "Simple CRM workflows."],
      ro: ["Profiluri clienți și note.", "Stocare offline-first.", "Urmărire follow-up.", "Fluxuri CRM simple."]
    }
  },,
  {
    id: "barometer-app",
    categoryFilter: ["mobile", "software"],
    title: "BaroScan: Altimeter Barometer",
    category: "Mobile App",
    tech: "Flutter, Android",
    image: "/images/BarometerApp/img1.png",
    gallery: [
      "/images/BarometerApp/img1.png",
      "/images/BarometerApp/img2.png",
      "/images/BarometerApp/img3.png",
      "/images/BarometerApp/img4.png",
      "/images/BarometerApp/img5.png"
    ],
    playStore: playStoreLinks.barometer,
    link: "/apps/baroscan",
    desc: {
      en: "Barometric pressure app for weather trends and altitude-related readings.",
      ro: "Aplicație de presiune barometrică pentru tendințe meteo și citiri legate de altitudine."
    },
    extendedSummary: {
      en: "Uses device pressure sensors to show atmospheric pressure changes — useful for weather awareness and outdoor activity planning.",
      ro: "Folosește senzorii de presiune ai dispozitivului pentru a afișa variațiile de presiune atmosferică — util pentru conștientizare meteo și planificarea activităților outdoor."
    },
    details: {
      en: ["Pressure sensor readings.", "Trend visualization.", "Weather awareness utility.", "Lightweight Android build."],
      ro: ["Citiri senzor presiune.", "Vizualizare tendințe.", "Utilitar conștientizare meteo.", "Build Android ușor."]
    }
  }
];
export const hobbies = [
  {
    id: "fitness",
    title: { en: "Fitness & Bodybuilding", ro: "Fitness & Culturism" },
    icon: "Dumbbell",
    color: "#ef4444",
    layout: "fitness-coach",
    image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=800",
    summary: {
      en: "A lifelong passion for physical and mental discipline through strength training.",
      ro: "O pasiune de-o viață pentru disciplina fizică și mentală prin antrenamentul de forță."
    },
    journey: [
      {
        title: { en: "The Spark (Age 10)", ro: "Scânteia (10 ani)" },
        description: { en: "A 6-month introduction to fitness that planted the seed for a lifelong passion.", ro: "Prima mea introducere în fitness, o călătorie de 6 luni care a plantat sămânța pentru o pasiune de o viață." }
      },
      {
        title: { en: "The Foundation (High School)", ro: "Fundația (Liceu)" },
        description: { en: "Two dedicated years during high school where I learned the fundamentals of training and discipline.", ro: "Doi ani dedicați în timpul liceului, unde am învățat fundamentele antrenamentului și disciplinei." }
      },
      {
        title: { en: "Mastering Bodyweight (University)", ro: "Stăpânirea Greutății Corporale (Facultate)" },
        description: { en: "A 2-year deep dive into calisthenics, exploring the limits of what can be achieved with bodyweight alone.", ro: "O explorare de 2 ani a calistenicii, descoperind limitele a ceea ce se poate realiza doar cu greutatea corporală." }
      },
      {
        title: { en: "The Pursuit of Strength (Present)", ro: "În Căutarea Forței (Prezent)" },
        description: { en: "For the last 3+ years, my focus has been on powerbuilding—a hybrid approach to getting stronger and building muscle.", ro: "În ultimii 3+ ani, focusul meu a fost pe powerbuilding—o abordare hibridă pentru a deveni mai puternic și a construi masă musculară." }
      }
    ],
    principles: [
      { title: { en: "Discipline", ro: "Disciplină" }, icon: "Zap" },
      { title: { en: "Consistency", ro: "Consecvență" }, icon: "Repeat" },
      { title: { en: "Patience", ro: "Răbdare" }, icon: "Hourglass" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1581009137052-c2b6b3588570?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?auto=format&fit=crop&q=80&w=800"
    ]
  },
  {
    id: "hiking",
    title: { en: "Hiking & Nature", ro: "Drumeții & Natură" },
    icon: "Mountain",
    color: "#22c55e",
    layout: "hiking-nature",
    image: "/images/hiking/cover.jpg",
    summary: {
      en: "Exploring the Carpathian Mountains to recharge and reconnect with nature.",
      ro: "Explorarea Munților Carpați pentru a mă reîncărca și a mă reconecta cu natura."
    },
    journey: [
      {
        title: { en: "Discovering the Trails", ro: "Descoperirea Potecilor" },
        description: { en: "From short local trails to challenging mountain peaks, every hike is a new adventure.", ro: "De la trasee locale scurte la vârfuri montane provocatoare, fiecare drumeție este o nouă aventură." }
      }
    ],
    principles: [
      { title: { en: "Perseverance", ro: "Perseverență" }, icon: "Zap" },
      { title: { en: "Respect for Nature", ro: "Respect pentru Natură" }, icon: "Repeat" }
    ],
    gallery: [
      "/images/hiking/image-1.jpg",
      "/images/hiking/image-2.jpg",
      "/images/hiking/image-3.jpg",
      "/images/hiking/image-4.jpg",
      "/images/hiking/image-5.jpg",
      "/images/hiking/image-6.jpg",
      "/images/hiking/image-7.jpg",
      "/images/hiking/image-8.jpg",
      "/images/hiking/image-9.jpg",
      "/images/hiking/image-11.jpg"
    ]
  },
  {
    id: "traveling",
    title: { en: "Traveling the World", ro: "Călătorind prin Lume" },
    icon: "Plane",
    color: "#3b82f6",
    layout: "book",
    image: "/images/traveling/image-1.jpg",
    summary: {
      en: "Discovering new cultures, tasting different cuisines, and creating unforgettable memories around the globe.",
      ro: "Descoperind culturi noi, gustând bucătării diferite și creând amintiri de neuitat în jurul lumii."
    },
    journey: [
      {
        title: { en: "First Trip Abroad", ro: "Prima Călătorie în Străinătate" },
        description: { en: "The journey that ignited my passion for exploring the world.", ro: "Călătoria care mi-a aprins pasiunea pentru a explora lumea." }
      },
      {
        title: { en: "Backpacking through Europe", ro: "Cu rucsacul prin Europa" },
        description: { en: "An adventure of a lifetime, visiting 10 countries in 30 days.", ro: "O aventură de-o viață, vizitând 10 țări în 30 de zile." }
      }
    ],
    principles: [
      { title: { en: "Open Mind", ro: "Minte Deschisă" }, icon: "Zap" },
      { title: { en: "Adventure", ro: "Aventură" }, icon: "Repeat" }
    ],
    gallery: [
      "/images/traveling/image-2.jpg",
      "/images/traveling/image-3.jpg",
      "/images/traveling/image-4.jpg",
      "/images/traveling/image-5.jpg",
      "/images/traveling/image-6.jpg",
      "/images/traveling/image-7.jpg",
      "/images/traveling/image-8.jpg",
      "/images/traveling/image-9.jpg",
      "/images/traveling/image-10.jpg",
      "/images/traveling/image-11.jpg",
      "/images/traveling/image-12.jpg"
    ]
  },
  {
    id: "tech",
    title: { en: "Gaming & Tech Tinkering", ro: "Gaming & Gadget-uri" },
    icon: "Gamepad2",
    color: "#8b5cf6",
    layout: "gamer-page",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&q=80&w=800",
    summary: {
      en: "From strategy games that challenge my logic to dismantling and fixing old electronics.",
      ro: "De la jocuri de strategie care îmi provoacă logica, până la demontarea și repararea electronicelor vechi."
    },
    journey: [
       {
        title: { en: "Problem-Solving Through Play", ro: "Rezolvarea Problemelor prin Joc" },
        description: { en: "Strategy games have always been a passion, teaching me to think ahead and adapt.", ro: "Jocurile de strategie au fost mereu o pasiune, învățându-mă să gândesc în avans și să mă adaptez." }
      },
      {
        title: { en: "Hardware Curiosity", ro: "Curiozitate Hardware" },
        description: { en: "I enjoy taking apart old electronics to understand how they work, from microcontrollers to classic consoles.", ro: "Îmi place să demontez electronice vechi pentru a înțelege cum funcționează, de la microcontrolere la console clasice." }
      }
    ],
    principles: [
      { title: { en: "Strategic Thinking", ro: "Gândire Strategică" }, icon: "Zap" },
      { title: { en: "Curiosity", ro: "Curiozitate" }, icon: "Repeat" }
    ],
    gallery: [
      "https://images.unsplash.com/photo-1593305842219-928d3a82d073?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1550745165-9bc0b252726a?auto=format&fit=crop&q=80&w=800",
      "https://images.unsplash.com/photo-1582287132239-2b8135da0752?auto=format&fit=crop&q=80&w=800"
    ]
  }
];


export const certificates = [
  { title: "Advanced C Data Structure And Pointers", path: "/Certificate/AdvancedCDataStructureAndPointers.pdf", category: "embed_hw" },
  { title: "Battery and Charging", path: "/Certificate/BatteryandCharging.pdf", category: "embed_hw" },
  { title: "Calculation Methods", path: "/Certificate/CalculationMethods.pdf", category: "embed_hw" },
  { title: "CAN Analyser Basic", path: "/Certificate/CANAnalyserBasic.pdf", category: "embed_hw" },
  { title: "C Best Practices for Developers", path: "/Certificate/CertificateOfCompletion_C Best Practices for Developers.pdf", category: "embed_hw" },
  { title: "C Essential Training", path: "/Certificate/CertificateOfCompletion_C Essential Training.pdf", category: "embed_hw" },
  { title: "C Programming for Embedded Applications", path: "/Certificate/CertificateOfCompletion_C Programming for Embedded Applications.pdf", category: "embed_hw" },
  { title: "Complete Guide to C Programming Foundations", path: "/Certificate/CertificateOfCompletion_Complete Guide to C Programming Foundations.pdf", category: "embed_hw" },
  { title: "Git Essential Training", path: "/Certificate/CertificateOfCompletion_Git Essential Training.pdf", category: "soft_dev" },
  { title: "Learning C", path: "/Certificate/CertificateOfCompletion_Learning C.pdf", category: "embed_hw" },
  { title: "Software Architecture Foundations", path: "/Certificate/CertificateOfCompletion_Software Architecture Foundations.pdf", category: "soft_dev" },
  { title: "Training Neural Networks in C", path: "/Certificate/CertificateOfCompletion_Training Neural Networks in C.pdf", category: "ai_ml" },
  { title: "Cyber Security Essentials", path: "/Certificate/CyberSecurityEssentials.pdf", category: "cybersec" },
  { title: "Electrification Program 2 Module 1 Electrical Machines Advanced", path: "/Certificate/ElectrificationProgram2Module1ElectricalMachinesAdvanced.pdf", category: "embed_hw" },
  { title: "Electrification Program 2 Module 2 Power Electronics Advanced", path: "/Certificate/ElectrificationProgram2Module2PowerElectronicsAdvanced.pdf", category: "embed_hw" },
  { title: "Electrification Program 2 Module 3 Energy Storage And Charging Advanced", path: "/Certificate/ElectrificationProgram2Module3EnergyStorageAndChargingAdvanced.pdf", category: "embed_hw" },
  { title: "Electrification Program 2 Module 4 Electrical Control Advanced", path: "/Certificate/ElectrificationProgram2Module4ElectricalControlAdvanced.pdf", category: "embed_hw" },
  { title: "Electrification Program 2 Module 5 System Electrical Vehicles Advanced", path: "/Certificate/ElectrificationProgram2Module5SystemElectricalVehiclesAdvanced.pdf", category: "embed_hw" },
  { title: "Electrification Program 2 Module 6 Autonomous Driving Advanced", path: "/Certificate/ElectrificationProgram2Module6AutonomousDrivingAdvanced.pdf", category: "embed_hw" },
  { title: "Electrification Program Module 1 Physical Basic", path: "/Certificate/ElectrificationProgramModule1PhysicalBasic.pdf", category: "embed_hw" },
  { title: "Electrification Program Module 2 Electric Machines", path: "/Certificate/ElectrificationProgramModule2ElectricMachines.pdf", category: "embed_hw" },
  { title: "Electrification Program Module 3 Power Electronics", path: "/Certificate/ElectrificationProgramModule3PowerElectronics.pdf", category: "embed_hw" },
  { title: "Electrification Program Module 4 Energy Storage And Charging", path: "/Certificate/ElectrificationProgramModule4EnergyStorageAndCharging.pdf", category: "embed_hw" },
  { title: "Electrification Program Module 5 System Electrical Vehicles", path: "/Certificate/ElectrificationProgramModule5SystemElectricalVehicles.pdf", category: "embed_hw" },
  { title: "Electrification Program Module 6 EMC High Voltage", path: "/Certificate/ElectrificationProgramModule6EMCHighVoltage.pdf", category: "embed_hw" },
  { title: "Electrification Program Module 7 Electrical Control", path: "/Certificate/ElectrificationProgramModule7ElectricalControl.pdf", category: "embed_hw" },
  { title: "Filed Oriented Control (FOC) and PWM Advanced", path: "/Certificate/FiledOrientedControl(FOC)andPWM-methodofelectricalmachines(PSM)Advanced.pdf", category: "embed_hw" },
  { title: "Filed Oriented Control (FOC) and PWM Basic", path: "/Certificate/FiledOrientedControl(FOC)andPWM-methodofelectricalmachines(PSM)Basic.pdf", category: "embed_hw" },
  { title: "German A1.1", path: "/Certificate/GermanA1.1.pdf", category: "prof_skills" },
  { title: "GitHub and CICD", path: "/Certificate/GitHubandCICD.pdf", category: "soft_dev" },
  { title: "Introduction to Motor Control Mathworks", path: "/Certificate/Introduction to Motor Control Mathworks.pdf", category: "embed_hw" },
  { title: "IT Project Management", path: "/Certificate/ITProjectManagement.pdf", category: "prof_skills" },
  { title: "IT Project Management Basic Knowledge", path: "/Certificate/ITPROJECTManagementBasicKnowledge.pdf", category: "prof_skills" },
  { title: "IT Project Management Intro", path: "/Certificate/ITProjectManagementIntro.pdf", category: "prof_skills" },
  { title: "Matlab Simulink Basics", path: "/Certificate/MatlabSimulinkBasics.pdf", category: "embed_hw" },
  { title: "Multi Core Software Arhitecture", path: "/Certificate/MultiCoreSoftwareArhitecture.pdf", category: "soft_dev" },
  { title: "OMS Polarion Onboarding", path: "/Certificate/OMSPolarionOnboarding.pdf", category: "soft_dev" },
  { title: "PCB Technology & Basics of Printed Circuits Boards", path: "/Certificate/PCBTechnology&BasicsofPrintedCircuitsBoards.pdf", category: "embed_hw" },
  { title: "Physical Basics", path: "/Certificate/PhysicalBasics.pdf", category: "embed_hw" },
  { title: "Power Electronics", path: "/Certificate/PowerElectronics.pdf", category: "embed_hw" },
  { title: "Product Security", path: "/Certificate/ProductSecurity.pdf", category: "cybersec" },
  { title: "Prototipe Protection", path: "/Certificate/PrototipeProtection.pdf", category: "cybersec" },
  { title: "Rafael-Marian Vanca Certificate EP II", path: "/Certificate/Rafael-Marian Vanca_Certificate EP II.pdf", category: "embed_hw" },
  { title: "SAP Time Management", path: "/Certificate/SAPTimeManagement.pdf", category: "prof_skills" },
  { title: "Software Arhitecture Design", path: "/Certificate/SoftwareArhitectureDesign.pdf", category: "soft_dev" },
  { title: "Software Configuration Management", path: "/Certificate/SoftwareConfigurationManagement.pdf", category: "soft_dev" },
  { title: "Software Construction Methods", path: "/Certificate/SoftwareConstructionMethods.pdf", category: "soft_dev" },
  { title: "Software Development Guidline", path: "/Certificate/SoftwareDevelopmentGuidline.pdf", category: "soft_dev" },
  { title: "Software Quality Assurance", path: "/Certificate/SoftwareQualityAssurance.pdf", category: "soft_dev" },
  { title: "Software Release And Prototypes", path: "/Certificate/SoftwareReleaseAndPrototypes.pdf", category: "soft_dev" },
  { title: "Algoritm Training And Essentials", path: "/Certificate/NewCerficicates/AlgoritmTrainingAndEssentials.pdf", category: "soft_dev" },
  { title: "Becoming Indestructible", path: "/Certificate/NewCerficicates/BecomingIndestructible.pdf", category: "prof_skills" },
  { title: "Career Essentials in Cybersecurity by Microsoft and LinkedIn", path: "/Certificate/NewCerficicates/CertificateOfCompletion_Career_Essentials_in_Cybersecurity_by_Microsoft_and_LinkedIn.pdf", category: "cybersec" },
  { title: "Career Essentials in Generative AI by Microsoft and LinkedIn", path: "/Certificate/NewCerficicates/CertificateOfCompletion_Career_Essentials_in_Generative_AI_by_Microsoft_and_LinkedIn.pdf", category: "ai_ml" },
  { title: "Complete Guide To C Programming", path: "/Certificate/NewCerficicates/CompleteGuideToCProgramming.pdf", category: "embed_hw" },
  { title: "C++ Best Practice For Developing", path: "/Certificate/NewCerficicates/CPlusPlusBestPracticeForDeveloping.pdf", category: "embed_hw" },
  { title: "C++ Essential Training", path: "/Certificate/NewCerficicates/CPlusPlusEssentialTraining.pdf", category: "embed_hw" },
  { title: "C Programming For Embedded Applications", path: "/Certificate/NewCerficicates/CProgrammingForEmbeddedApplications.pdf", category: "embed_hw" },
  { title: "Critical Thinking And Problem Solving", path: "/Certificate/NewCerficicates/CriticalThinkingAndProblemSolving.pdf", category: "prof_skills" },
  { title: "CyberSecurity Awerness", path: "/Certificate/NewCerficicates/CyberSecurityAwerness.pdf", category: "cybersec" },
  { title: "CyberSecurity Fundation", path: "/Certificate/NewCerficicates/CyberSecurityFundation.pdf", category: "cybersec" },
  { title: "Flutter Basics", path: "/Certificate/NewCerficicates/FlutterBasics.pdf", category: "soft_dev" },
  { title: "Generative AI", path: "/Certificate/NewCerficicates/GenerativeAI.pdf", category: "ai_ml" },
  { title: "GitHub", path: "/Certificate/NewCerficicates/GitHub.pdf", category: "soft_dev" },
  { title: "Github Certificate", path: "/Certificate/NewCerficicates/GithubCertificate.pdf", category: "soft_dev" },
  { title: "Improvment Your Listening Skils", path: "/Certificate/NewCerficicates/ImprovmentYourListeningSkils.pdf", category: "prof_skills" },
  { title: "Introduction To Ai Governance", path: "/Certificate/NewCerficicates/IntroductionToAiGovernance.pdf", category: "ai_ml" },
  { title: "Introduction To Artificial Intelligence", path: "/Certificate/NewCerficicates/IntroductionToArtificialIntelligence.pdf", category: "ai_ml" },
  { title: "Introduction To Carrer Skils In Software", path: "/Certificate/NewCerficicates/IntroductionToCarrerSkilsInSoftware.pdf", category: "soft_dev" },
  { title: "Introduction To Dart", path: "/Certificate/NewCerficicates/IntroductionToDart.pdf", category: "soft_dev" },
  { title: "Involving Your Listening Skills", path: "/Certificate/NewCerficicates/InvolvingYourListeningSkills.pdf", category: "prof_skills" },
  { title: "Lear Microsoft Copilot", path: "/Certificate/NewCerficicates/LearMicrosoftCopilot.pdf", category: "ai_ml" },
  { title: "Learning C++", path: "/Certificate/NewCerficicates/LearningCPlusPlus.pdf", category: "embed_hw" },
  { title: "Learning Jenkins", path: "/Certificate/NewCerficicates/LearningJenkins.pdf", category: "soft_dev" },
  { title: "Microsoft Copilot For Security", path: "/Certificate/NewCerficicates/MicrosoftCopilotForSecurity.pdf", category: "cybersec" },
  { title: "Navigathing Ambiguity", path: "/Certificate/NewCerficicates/NavigathingAmbiguity.pdf", category: "prof_skills" },
  { title: "Practical Github", path: "/Certificate/NewCerficicates/PracticalGithub.pdf", category: "soft_dev" },
  { title: "Practical Github Actions", path: "/Certificate/NewCerficicates/PracticalGithubActions.pdf", category: "soft_dev" },
  { title: "Practical Github Copilot", path: "/Certificate/NewCerficicates/PracticalGithubCopilot.pdf", category: "ai_ml" },
  { title: "Practical Github Management And Projects", path: "/Certificate/NewCerficicates/PracticalGithubManagementAndProjects.pdf", category: "soft_dev" },
  { title: "Problem Solving Tehnique", path: "/Certificate/NewCerficicates/ProblemSolvingTehnique.pdf", category: "prof_skills" },
  { title: "Rise And Shine", path: "/Certificate/NewCerficicates/RiseAndShine.pdf", category: "prof_skills" },
  { title: "Software Application Fundations", path: "/Certificate/NewCerficicates/SoftwareApplicationFundations.pdf", category: "soft_dev" },
  { title: "Streamlining Your Work With Microsoft Copilot", path: "/Certificate/NewCerficicates/StreamliningYourWorkWithMicrosoftCopilot.pdf", category: "ai_ml" },
  { title: "The Cybersecurity Threat", path: "/Certificate/NewCerficicates/TheCybersecurityThreat.pdf", category: "cybersec" },
  { title: "The Master Key to Overcome Procastination", path: "/Certificate/NewCerficicates/TheMasterKeytoOvercomeProcastination.pdf", category: "prof_skills" },
  { title: "Training NN In C++", path: "/Certificate/NewCerficicates/TrainingNNInCPlusPlus.pdf", category: "ai_ml" },
  { title: "Training Your Mind And Focus", path: "/Certificate/NewCerficicates/TrainingYourMindAndFocus.pdf", category: "prof_skills" },
  { title: "What Is Generative AI", path: "/Certificate/NewCerficicates/WhatIsGenerativeAI.pdf", category: "ai_ml" }
];
