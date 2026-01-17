export const labels = {
  en: {
    nav: { home: "Home", exp: "Experience", proj: "Projects", edu: "Education", hobbies: "Hobbies", contact: "Contact" },
    titles: { 
      skills: "Technical Skills", 
      exp: "Work Experience", 
      proj: "Projects Showcase", 
      edu: "Education", 
      hobbies: "My Passions & Hobbies",
      contact: "Get in Touch",
      certifications: "Certifications"
    },
    buttons: { viewGithub: "View on GitHub", grade: "Grade", readMore: "Read Summary", readLess: "Hide Summary", sendMessage: "Send Message", funFact: "See Fun Fact", viewCurriculum: "View Curriculum & Courses", hideCurriculum: "Hide Curriculum" },
    filters: { all: "General (All)", embSw: "Embedded Software", web: "Web Sites & Apps", hw: "Embedded Hardware", soft: "General Software" },
    certFilters: { all: "All", embed_hw: "Embedded & HW", soft_dev: "Software & DevOps", ai_ml: "AI/ML", cybersec: "Cybersecurity", prof_skills: "Professional Skills" },
    contact: { name: "Your Name", email: "Your Email", subject: "Subject", message: "Message", copy: "Copied!", hello: "Say Hello!" }
  },
  ro: {
    nav: { home: "Acasă", exp: "Experiență", proj: "Proiecte", edu: "Studii", hobbies: "Hobby", contact: "Contact" },
    titles: { 
      skills: "Abilități Tehnice", 
      exp: "Experiență Profesională", 
      proj: "Portofoliu Proiecte", 
      edu: "Educație", 
      hobbies: "Pasiuni & Timp Liber",
      contact: "Intră în legătură",
      certifications: "Certificări"
    },
    buttons: { viewGithub: "Vezi pe GitHub", grade: "Notă", readMore: "Vezi Descrierea", readLess: "Ascunde Descrierea", sendMessage: "Trimite Mesaj", funFact: "Curiozitate", viewCurriculum: "Vezi Curriculum & Cursuri", hideCurriculum: "Ascunde Curriculum" },
    filters: { all: "General (Toate)", embSw: "Embedded Software", web: "Site-uri Web & App", hw: "Embedded Hardware", soft: "Software Simplu" },
    certFilters: { all: "Toate", embed_hw: "Embedded & HW", soft_dev: "Software & DevOps", ai_ml: "AI/ML", cybersec: "Securitate Cibernetică", prof_skills: "Abilități Profesionale" },
    contact: { name: "Numele Tău", email: "Email-ul Tău", subject: "Subiect", message: "Mesajul Tău", copy: "Copiat!", hello: "Salut!" }
  }
};

export const personalInfo = {
  name: "Vanca Rafael Marian",
  role: "Embedded Software Engineer",
  subRole: "Advance Innovation Team",
  email: "vanca.rafael.marian@gmail.com",
  phone: "+40 742 734 989",
  location: "Cluj-Napoca, Romania", 
  github: "https://github.com/RafaelMarian",
  linkedin: "https://www.linkedin.com/",
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
    company: "Schaeffler",
    role: "Embedded Software Engineer - Advance Innovation",
    period: "03.2024 - Present",
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
  // --- FLUTTER APP ---
  {
    id: "flutter-fitness",
    categoryFilter: ["web", "software"],
    title: "NRStrength - Fitness Tracker",
    category: "Mobile & Web App",
    tech: "Flutter, Dart, Netlify",
    image: "/images/flutter/cover.png", 
    gallery: ["/images/flutter/img1.png", "/images/flutter/img2.png", "/images/flutter/img3.png", "/images/flutter/img4.png", "/images/flutter/img5.png", "/images/flutter/img6.png"],
    link: "https://nrstrength.netlify.app/",
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

  // --- PCB DESIGN ---
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

  // --- CLASS B AMP ---
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

  // --- LAPLACE (VISION) ---
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

  // --- NRSTRENGTH WEBSITE ---
  {
    id: "nrstrength-website",
    categoryFilter: ["web", "software"],
    title: "NRStrength Website",
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
  }
];
export const hobbies = [
  {
    id: "fitness",
    title: { en: "Fitness & Bodybuilding", ro: "Fitness & Culturism" },
    icon: "Dumbbell",
    color: "#ef4444",
    layout: "sports-book",
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
    layout: "book",
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
      "/images/hiking/image-10.jpg",
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
