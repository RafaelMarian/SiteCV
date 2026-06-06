import { playStoreLinks } from '../data.js';

/**
 * Mini landing pages on this portfolio — use as „Website” in Google Play
 * Example: https://your-domain.com/apps/plant-light-meter
 * Developer site + app-ads.txt must use the SAME domain as in Play Console.
 */
export const appPages = [
  {
    slug: 'plant-light-meter',
    name: { en: 'Plant Light Meter: Lux Test', ro: 'Plant Light Meter: Lux Test' },
    tagline: {
      en: 'Measure light for your plants with the phone sensor.',
      ro: 'Măsoară lumina pentru plante cu senzorul telefonului.',
    },
    logo: '/LogoAplicatii/LogoPlantCareMonitorLight.png',
    playStore: null,
    features: {
      en: [
        'Ambient light (lux) readings in real time',
        'Guidance for indoor plant placement',
        'Simple, focused interface',
        'Data stays on your device',
      ],
      ro: [
        'Citiri lumină ambientală (lux) în timp real',
        'Ghidare pentru poziționarea plantelor de interior',
        'Interfață simplă și clară',
        'Datele rămân pe dispozitiv',
      ],
    },
  },
  {
    slug: 'emf-radar',
    name: { en: 'EMF Radar: Find Metal & Wires', ro: 'EMF Radar: Find Metal & Wires' },
    tagline: {
      en: 'Detect metal and wires using your phone’s magnetometer — EMF field visualization.',
      ro: 'Detectează metal și fire cu magnetometrul telefonului — vizualizare câmp EMF.',
    },
    logo: '/LogoAplicatii/LogoMetalDetector.png',
    playStore: null,
    features: {
      en: [
        'Live EMF / magnetic field strength display',
        'Helps locate metal objects and hidden wires',
        'Sensitivity feedback and visual gauge',
        'Works offline — no account required',
      ],
      ro: [
        'Afișare live a câmpului EMF / magnetic',
        'Ajută la localizarea metalelor și firelor ascunse',
        'Feedback de sensibilitate și indicator vizual',
        'Funcționează offline — fără cont',
      ],
    },
  },
  {
    slug: 'bible-daily-prayer',
    name: { en: 'Bible: Daily Prayer', ro: 'Bible: Daily Prayer' },
    tagline: {
      en: 'Scripture, Orthodox prayers, and daily devotion.',
      ro: 'Scriptură, rugăciuni ortodoxe și devoțiune zilnică.',
    },
    logo: '/LogoAplicatii/LogoBibble.png',
    playStore: playStoreLinks.bible,
    features: {
      en: ['Multi-language Bible offline', 'Daily prayer & Orthodox prayers', 'Bookmarks & highlights'],
      ro: ['Biblie multilingvă offline', 'Rugăciune zilnică & rugăciuni ortodoxe', 'Semne de carte & evidențieri'],
    },
  },
  {
    slug: 'focus-net',
    name: { en: 'Focus Net', ro: 'Focus Net' },
    tagline: {
      en: 'Productivity timer and deep-focus sessions.',
      ro: 'Timer de productivitate și sesiuni de focus profund.',
    },
    logo: '/LogoAplicatii/LogoFocusNet.png',
    playStore: playStoreLinks.focusnet,
    features: {
      en: ['Pomodoro-style timers', 'Focus tags & stats', 'Companion progression'],
      ro: ['Timer-e tip Pomodoro', 'Etichete focus & statistici', 'Companion care evoluează'],
    },
  },
  {
    slug: 'budget-planner',
    name: { en: 'Budget Planner — MoneyTrack', ro: 'Budget Planner — MoneyTrack' },
    tagline: {
      en: 'Personal budget and expense tracking, privacy-first.',
      ro: 'Buget personal și cheltuieli, cu focus pe confidențialitate.',
    },
    logo: '/LogoAplicatii/LogoBudget.png',
    playStore: playStoreLinks.budget,
    features: {
      en: ['Budget limits & categories', 'Charts & cash flow', 'Data stored on device'],
      ro: ['Limite buget & categorii', 'Grafice & flux numerar', 'Date stocate pe dispozitiv'],
    },
  },
  {
    slug: 'offlinebooks',
    name: { en: 'OfflineBooks', ro: 'OfflineBooks' },
    tagline: {
      en: 'Offline accounting and invoicing for small business.',
      ro: 'Contabilitate și facturare offline pentru mici afaceri.',
    },
    logo: '/LogoAplicatii/LogoAccounting.png',
    playStore: playStoreLinks.accounting,
    features: {
      en: ['Invoices & estimates', 'Expenses & bills', 'Reports & CSV export'],
      ro: ['Facturi & estimări', 'Cheltuieli & facturi de plată', 'Rapoarte & export CSV'],
    },
  },
  {
    slug: 'nrstrength',
    name: { en: 'NRStrength', ro: 'NRStrength' },
    tagline: {
      en: 'Gym log, workouts, and fitness gamification.',
      ro: 'Jurnal sală, antrenamente și gamificare fitness.',
    },
    logo: '/LogoAplicatii/LogoFitness.png',
    playStore: playStoreLinks.fitness,
    features: {
      en: ['Workout tracking & 1RM', 'AI training plans', 'RPG-style progression'],
      ro: ['Urmărire antrenamente & 1RM', 'Planuri AI', 'Progresie stil RPG'],
    },
  },
  {
    slug: 'time-means-money',
    name: { en: 'Time Means Money', ro: 'Time Means Money' },
    tagline: {
      en: 'Connect time tracking with financial awareness.',
      ro: 'Leagă timpul petrecut de valoarea financiară.',
    },
    logo: '/LogoAplicatii/LogoTimeMoney.png',
    playStore: null,
    features: {
      en: ['Time sessions', 'Value mapping', 'Productivity insights'],
      ro: ['Sesiuni de timp', 'Mapare valoare', 'Insight-uri productivitate'],
    },
  },
  {
    slug: 'sound-measure',
    name: { en: 'Sound Measure', ro: 'Sound Measure' },
    tagline: {
      en: 'Decibel meter for ambient noise levels.',
      ro: 'Sonometru pentru nivelul de zgomot ambiental.',
    },
    logo: '/LogoAplicatii/LogoSoundMeasureDecibel.png',
    playStore: null,
    features: {
      en: ['Live dB display', 'Microphone-based sensing', 'Lightweight utility'],
      ro: ['Afișare dB live', 'Senzor pe microfon', 'Utilitar ușor'],
    },
  },
  {
    slug: 'stockflow',
    name: { en: 'StockFlow', ro: 'StockFlow' },
    tagline: {
      en: 'Inventory and stock management.',
      ro: 'Gestiune stocuri și inventar.',
    },
    logo: '/LogoAplicatii/LogoStockFlow.png',
    playStore: null,
    features: {
      en: ['Product tracking', 'Stock in/out', 'Offline-first'],
      ro: ['Urmărire produse', 'Intrări/ieșiri stoc', 'Offline-first'],
    },
  },
  {
    slug: 'client-base-crm',
    name: { en: 'Client Base CRM', ro: 'Client Base CRM' },
    tagline: {
      en: 'Offline CRM for clients and follow-ups.',
      ro: 'CRM offline pentru clienți și follow-up.',
    },
    logo: '/LogoAplicatii/LogoClientBaseOfflineCRM.png',
    playStore: null,
    features: {
      en: ['Client profiles', 'Notes & reminders', 'No cloud required'],
      ro: ['Profiluri clienți', 'Note & reminder-e', 'Fără cloud obligatoriu'],
    },
  },
  {
    slug: 'baroscan',
    name: {
      en: 'BaroScan: Altimeter Barometer',
      ro: 'BaroScan: Altimeter Barometer',
    },
    tagline: {
      en: 'Atmospheric pressure, altitude, and weather trends from your phone sensors.',
      ro: 'Presiune atmosferică, altitudine și tendințe meteo din senzorii telefonului.',
    },
    logo: '/LogoAplicatii/LogoBarometer.png',
    playStore: null,
    features: {
      en: [
        'Live barometric pressure (hPa, inHg, mmHg)',
        'Altimeter / elevation estimates',
        'Pressure history and trend charts',
        'Works with device barometer sensor',
        'Lightweight utility — data stays on device',
      ],
      ro: [
        'Presiune barometrică live (hPa, inHg, mmHg)',
        'Altimetru / estimări de altitudine',
        'Istoric presiune și grafice de tendință',
        'Folosește senzorul barometric al dispozitivului',
        'Utilitar ușor — datele rămân pe dispozitiv',
      ],
    },
  },
];

export function getAppPageBySlug(slug) {
  return appPages.find((p) => p.slug === slug);
}

export function getAppPageUrl(slug) {
  return `/apps/${slug}`;
}
