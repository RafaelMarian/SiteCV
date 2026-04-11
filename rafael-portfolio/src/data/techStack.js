/**
 * Tech stack page — icons from Devicons (jsDelivr) + Cursor from Simple Icons CDN.
 * @see https://github.com/devicons/devicon
 */
const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons';

export const techStackByLang = {
  en: {
    back: '← Back to home',
    intro:
      'Here are the tools and technologies I use to build embedded systems, mobile apps, and the projects showcased on this site.',
    sections: [
      {
        id: 'engineering',
        title: 'Things that power my engineering work',
        items: [
          {
            name: 'MATLAB',
            url: 'https://www.mathworks.com/products/matlab.html',
            icon: `${DI}/matlab/matlab-original.svg`,
            lines: ['Numerical computing and scripting for models, data, and automation.'],
          },
          {
            name: 'Simulink',
            url: 'https://www.mathworks.com/products/simulink.html',
            icon: `${DI}/matlab/matlab-original.svg`,
            lines: ['Model-based design and simulation for control and automotive-style systems.'],
          },
          {
            name: 'C',
            url: 'https://en.cppreference.com/w/c',
            icon: `${DI}/c/c-original.svg`,
            lines: ['Low-level firmware, embedded drivers, and performance-critical code.'],
          },
          {
            name: 'C++',
            url: 'https://isocpp.org/',
            icon: `${DI}/cplusplus/cplusplus-original.svg`,
            lines: ['Embedded and application code where objects and STL help structure complexity.'],
          },
          {
            name: 'Python',
            url: 'https://www.python.org/',
            icon: `${DI}/python/python-original.svg`,
            lines: ['ML pipelines, tooling, OpenCV experiments, and scripting for portfolio work.'],
          },
          {
            name: 'Vivado',
            url: 'https://www.xilinx.com/products/design-tools/vivado.html',
            icon: `${DI}/cmake/cmake-original.svg`,
            lines: ['Synthesis, implementation, and debug for Xilinx FPGA designs.'],
          },
          {
            name: 'MPLAB X IDE',
            url: 'https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide',
            icon: `${DI}/embeddedc/embeddedc-original.svg`,
            lines: ['Microchip IDE and toolchain for firmware on PIC (8/16/32-bit) microcontrollers.'],
          },
        ],
      },
      {
        id: 'apps',
        title: 'Things that power my apps',
        items: [
          {
            name: 'React',
            url: 'https://react.dev/',
            icon: `${DI}/react/react-original.svg`,
            lines: ['UI for web apps and this portfolio-style front ends.'],
          },
          {
            name: 'Vue',
            url: 'https://vuejs.org/',
            icon: `${DI}/vuejs/vuejs-original.svg`,
            lines: ['Component-based web UIs when the stack calls for Vue.'],
          },
          {
            name: 'Flutter',
            url: 'https://flutter.dev/',
            icon: `${DI}/flutter/flutter-original.svg`,
            lines: ['Cross-platform mobile apps (Android & iOS) with Dart.'],
          },
          {
            name: 'Dart',
            url: 'https://dart.dev/',
            icon: `${DI}/dart/dart-original.svg`,
            lines: ['Language behind Flutter mobile apps in this portfolio.'],
          },
          {
            name: 'Vite',
            url: 'https://vite.dev/',
            icon: `${DI}/vite/vite-original.svg`,
            lines: ['Fast dev server and builds for modern React / JS projects.'],
          },
          {
            name: 'JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            icon: `${DI}/javascript/javascript-original.svg`,
            lines: ['Browser-side logic in web projects listed here.'],
          },
          {
            name: 'CSS',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            icon: `${DI}/css3/css3-original.svg`,
            lines: ['Layout, responsive UI, and polish for React / static sites.'],
          },
          {
            name: 'OpenCV',
            url: 'https://opencv.org/',
            icon: `${DI}/opencv/opencv-original.svg`,
            lines: ['Computer vision prototypes and image processing in Python.'],
          },
        ],
      },
      {
        id: 'cloud',
        title: 'Hosting & backends',
        items: [
          {
            name: 'Netlify',
            url: 'https://www.netlify.com/',
            icon: `${DI}/netlify/netlify-original.svg`,
            lines: ['Hosting and deploys for static sites and Jamstack-style apps.'],
          },
          {
            name: 'Firebase',
            url: 'https://firebase.google.com/',
            icon: `${DI}/firebase/firebase-original.svg`,
            lines: ['Auth, realtime data, and backend services for mobile / web.'],
          },
          {
            name: 'Supabase',
            url: 'https://supabase.com/',
            icon: `${DI}/supabase/supabase-original.svg`,
            lines: [
              'Postgres-based platform: auth, auto-generated REST APIs, realtime, storage, and edge functions.',
            ],
          },
        ],
      },
      {
        id: 'delivery',
        title: 'Delivery & collaboration',
        items: [
          {
            name: 'GitHub',
            url: 'https://github.com/',
            icon: `${DI}/github/github-original.svg`,
            lines: ['Source control, reviews, and project history.'],
          },
          {
            name: 'GitHub Actions',
            url: 'https://github.com/features/actions',
            icon: `${DI}/githubactions/githubactions-plain.svg`,
            lines: ['CI workflows: build, test, and deploy from the repo.'],
          },
          {
            name: 'Jenkins',
            url: 'https://www.jenkins.io/',
            icon: `${DI}/jenkins/jenkins-original.svg`,
            lines: ['Automation servers and pipelines in enterprise embedded workflows.'],
          },
        ],
      },
      {
        id: 'editors',
        title: 'Editors & day-to-day workflow',
        items: [
          {
            name: 'Cursor',
            url: 'https://cursor.com/',
            icon: 'https://cdn.simpleicons.org/cursor',
            lines: ['AI-assisted editing and fast iteration on codebases.'],
          },
          {
            name: 'Visual Studio Code',
            url: 'https://code.visualstudio.com/',
            icon: `${DI}/vscode/vscode-original.svg`,
            lines: ['Extensions, debugging, and polyglot editing across stacks.'],
          },
        ],
      },
      {
        id: 'design-ai',
        title: 'Design & AI tools',
        items: [
          {
            name: 'Google Gemini',
            url: 'https://gemini.google.com/',
            icon: 'https://cdn.simpleicons.org/googlegemini',
            lines: ['Brainstorming, drafting, and multimodal help next to coding and documentation.'],
          },
          {
            name: 'Figma',
            url: 'https://www.figma.com/',
            icon: 'https://cdn.simpleicons.org/figma',
            lines: ['UI/UX layout, prototypes, and design handoff for apps and sites.'],
          },
          {
            name: 'Canva',
            url: 'https://www.canva.com/',
            icon: `${DI}/canva/canva-original.svg`,
            lines: ['Quick graphics, social visuals, and presentation layouts.'],
          },
        ],
      },
      {
        id: 'hardware',
        title: 'Hardware & circuit design',
        items: [
          {
            name: 'OrCAD',
            url: 'https://www.cadence.com/',
            icon: `${DI}/qt/qt-original.svg`,
            lines: ['Schematic capture in electronics coursework projects.'],
          },
          {
            name: 'PSpice',
            url: 'https://www.cadence.com/',
            icon: `${DI}/embeddedc/embeddedc-original.svg`,
            lines: ['Circuit simulation and analysis.'],
          },
          {
            name: 'Proteus',
            url: 'https://www.labcenter.com/',
            icon: `${DI}/arduino/arduino-original.svg`,
            lines: ['Embedded simulation and PCB-oriented lab work.'],
          },
        ],
      },
    ],
  },
  ro: {
    back: '← Înapoi acasă',
    intro:
      'Unelte și tehnologii pe care le folosesc pentru sisteme embedded, aplicații mobile și proiectele din acest portofoliu.',
    sections: [
      {
        id: 'engineering',
        title: 'Ce folosesc în inginerie (embedded & control)',
        items: [
          {
            name: 'MATLAB',
            url: 'https://www.mathworks.com/products/matlab.html',
            icon: `${DI}/matlab/matlab-original.svg`,
            lines: ['Calcule numerice, scripturi și modele pentru date și automatizări.'],
          },
          {
            name: 'Simulink',
            url: 'https://www.mathworks.com/products/simulink.html',
            icon: `${DI}/matlab/matlab-original.svg`,
            lines: ['Design pe bază de modele și simulări pentru control și sisteme tip automotive.'],
          },
          {
            name: 'C',
            url: 'https://en.cppreference.com/w/c',
            icon: `${DI}/c/c-original.svg`,
            lines: ['Firmware, drivere embedded și cod unde contează performanța.'],
          },
          {
            name: 'C++',
            url: 'https://isocpp.org/',
            icon: `${DI}/cplusplus/cplusplus-original.svg`,
            lines: ['Cod embedded și aplicații cu STL și abstractizări clare.'],
          },
          {
            name: 'Python',
            url: 'https://www.python.org/',
            icon: `${DI}/python/python-original.svg`,
            lines: ['ML, tooling, OpenCV și scripturi pentru proiecte din portofoliu.'],
          },
          {
            name: 'Vivado',
            url: 'https://www.xilinx.com/products/design-tools/vivado.html',
            icon: `${DI}/cmake/cmake-original.svg`,
            lines: ['Sinteză, implementare și debug pentru designuri Xilinx.'],
          },
          {
            name: 'MPLAB X IDE',
            url: 'https://www.microchip.com/en-us/tools-resources/develop/mplab-x-ide',
            icon: `${DI}/embeddedc/embeddedc-original.svg`,
            lines: ['IDE și toolchain Microchip pentru firmware pe microcontrolere PIC (8/16/32-bit).'],
          },
        ],
      },
      {
        id: 'apps',
        title: 'Ce alimentează aplicațiile mele',
        items: [
          {
            name: 'React',
            url: 'https://react.dev/',
            icon: `${DI}/react/react-original.svg`,
            lines: ['Interfețe web și front-end-uri tip portofoliu.'],
          },
          {
            name: 'Vue',
            url: 'https://vuejs.org/',
            icon: `${DI}/vuejs/vuejs-original.svg`,
            lines: ['UI web pe componente când stack-ul e Vue.'],
          },
          {
            name: 'Flutter',
            url: 'https://flutter.dev/',
            icon: `${DI}/flutter/flutter-original.svg`,
            lines: ['Aplicații mobile cross-platform (Android & iOS) cu Dart.'],
          },
          {
            name: 'Dart',
            url: 'https://dart.dev/',
            icon: `${DI}/dart/dart-original.svg`,
            lines: ['Limbajul din spatele aplicațiilor Flutter din portofoliu.'],
          },
          {
            name: 'Vite',
            url: 'https://vite.dev/',
            icon: `${DI}/vite/vite-original.svg`,
            lines: ['Dev server rapid și build pentru React / JS modern.'],
          },
          {
            name: 'JavaScript',
            url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
            icon: `${DI}/javascript/javascript-original.svg`,
            lines: ['Logică în browser în proiectele web de aici.'],
          },
          {
            name: 'CSS',
            url: 'https://developer.mozilla.org/en-US/docs/Web/CSS',
            icon: `${DI}/css3/css3-original.svg`,
            lines: ['Layout, UI responsive și finisaje pentru React / site-uri statice.'],
          },
          {
            name: 'OpenCV',
            url: 'https://opencv.org/',
            icon: `${DI}/opencv/opencv-original.svg`,
            lines: ['Viziune computerizată și procesare imagini în Python.'],
          },
        ],
      },
      {
        id: 'cloud',
        title: 'Hosting & backend-uri',
        items: [
          {
            name: 'Netlify',
            url: 'https://www.netlify.com/',
            icon: `${DI}/netlify/netlify-original.svg`,
            lines: ['Hosting și deploy pentru site-uri statice și aplicații Jamstack.'],
          },
          {
            name: 'Firebase',
            url: 'https://firebase.google.com/',
            icon: `${DI}/firebase/firebase-original.svg`,
            lines: ['Auth, date în timp real și servicii backend pentru mobile / web.'],
          },
          {
            name: 'Supabase',
            url: 'https://supabase.com/',
            icon: `${DI}/supabase/supabase-original.svg`,
            lines: [
              'Platformă pe Postgres: auth, API-uri REST generate, realtime, storage și edge functions.',
            ],
          },
        ],
      },
      {
        id: 'delivery',
        title: 'Livrare & colaborare',
        items: [
          {
            name: 'GitHub',
            url: 'https://github.com/',
            icon: `${DI}/github/github-original.svg`,
            lines: ['Versionare, review și istoricul proiectelor.'],
          },
          {
            name: 'GitHub Actions',
            url: 'https://github.com/features/actions',
            icon: `${DI}/githubactions/githubactions-plain.svg`,
            lines: ['CI: build, test, deploy direct din repository.'],
          },
          {
            name: 'Jenkins',
            url: 'https://www.jenkins.io/',
            icon: `${DI}/jenkins/jenkins-original.svg`,
            lines: ['Automatizări și pipeline-uri în medii embedded enterprise.'],
          },
        ],
      },
      {
        id: 'editors',
        title: 'Editoare & fluxul zilnic',
        items: [
          {
            name: 'Cursor',
            url: 'https://cursor.com/',
            icon: 'https://cdn.simpleicons.org/cursor',
            lines: ['Editare asistată de AI și iterații rapide pe cod.'],
          },
          {
            name: 'Visual Studio Code',
            url: 'https://code.visualstudio.com/',
            icon: `${DI}/vscode/vscode-original.svg`,
            lines: ['Extensii, debugging și editare polyglot.'],
          },
        ],
      },
      {
        id: 'design-ai',
        title: 'Design & instrumente AI',
        items: [
          {
            name: 'Google Gemini',
            url: 'https://gemini.google.com/',
            icon: 'https://cdn.simpleicons.org/googlegemini',
            lines: ['Brainstorming, texte, idei multimodale alături de cod și documentație.'],
          },
          {
            name: 'Figma',
            url: 'https://www.figma.com/',
            icon: 'https://cdn.simpleicons.org/figma',
            lines: ['Layout UI/UX, prototipuri și handoff design pentru aplicații și site-uri.'],
          },
          {
            name: 'Canva',
            url: 'https://www.canva.com/',
            icon: `${DI}/canva/canva-original.svg`,
            lines: ['Grafică rapidă, materiale pentru social și prezentări.'],
          },
        ],
      },
      {
        id: 'hardware',
        title: 'Hardware & scheme electronice',
        items: [
          {
            name: 'OrCAD',
            url: 'https://www.cadence.com/',
            icon: `${DI}/qt/qt-original.svg`,
            lines: ['Scheme electrice în proiecte de electronică.'],
          },
          {
            name: 'PSpice',
            url: 'https://www.cadence.com/',
            icon: `${DI}/embeddedc/embeddedc-original.svg`,
            lines: ['Simulări și analiză de circuite.'],
          },
          {
            name: 'Proteus',
            url: 'https://www.labcenter.com/',
            icon: `${DI}/arduino/arduino-original.svg`,
            lines: ['Simulare embedded și lucrări de laborator PCB.'],
          },
        ],
      },
    ],
  },
};
