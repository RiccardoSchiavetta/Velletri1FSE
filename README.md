# 🏕️ FSE - Velletri 1

![React](https://img.shields.io/badge/React-18.0.0-61dafb?style=flat&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5.0-646CFF?style=flat&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4-38B2AC?style=flat&logo=tailwindcss&logoColor=white)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3FCF8E?style=flat&logo=supabase&logoColor=white)
![Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=flat&logo=vercel)
![License](https://img.shields.io/badge/License-All%20Rights%20Reserved-red?style=flat)

> **Il punto di riferimento digitale per il gruppo scout Velletri 1 FSE.**  
> Scopri informazioni sulle branche e i capi, contattaci per saperne di più e ordina le nostre uniformi in magazzino, tutto da un'unica piattaforma intuitiva.

---

### 🔗 **Live Preview**
👉 [https://velletri1.vercel.app](https://velletri1.vercel.app)

---


## 📖 Descrizione

Il sito del **Gruppo Scout FSE Velletri 1** è una piattaforma web moderna e interattiva, progettata per unire **comunicazione, informazione e gestione** in un’unica esperienza semplice e intuitiva.

Permette di:
- Scoprire le sei **branche scout** e i loro valori;
- Conoscere la **Comunità Capi (Co.Ca.)** e le attività del gruppo;
- Gestire gli **ordini di uniformi** tramite il magazzino online;
- Contattare facilmente il gruppo per informazioni o iscrizioni.

Tutto realizzato con un design responsive, curato nei dettagli e ispirato all’estetica scout FSE.

---

## ✨ Funzionalità Principali

### 🏠 Homepage
- Presentazione del gruppo e dei valori scout
- Panoramica delle branche con descrizioni e immagini
- Layout responsive con animazioni fluide

### 👥 Branche Scout
- **Lupetti** (8–11 anni) 
- **Coccinelle** (8–11 anni) 
- **Esploratori** (12–16 anni)  
- **Guide** (12–16 anni)
- **Rover** (17–21 anni)  
- **Scolte** (17–21 anni) 

Ogni pagina include:
- Descrizione delle attività e della progressione personale  
- Dettagli su riunioni e contatti dei capi unità  

### 🛒 Magazzino Uniformi
- Catalogo prodotti per branca  
- Gestione taglie e quantità  
- Calcolo automatico del totale ordine  
- Layout ottimizzato per mobile e desktop  

### 📧 Contatti
- Modulo di contatto con campi per età e branca d’interesse  
- Validazione dei dati e messaggi di conferma  

### 👨‍👩‍👧‍👦 Chi Siamo
- Presentazione della Comunità Capi  
- Missione e valori del gruppo  

---

## 🛠️ Tecnologie Utilizzate

### **Frontend**
- ⚛️ React 18 + Vite  
- 🎨 Tailwind CSS  
- 🧱 shadcn/ui (componenti accessibili e moderni)  
- 🪶 Lucide React (icone leggere)  
- 🎞️ Framer Motion (animazioni fluide)  
- 🌐 React Router DOM (navigazione client-side)

### **Backend**
- 🧩 Supabase – Database PostgreSQL e API REST

### **Librerie di supporto**
- `@tanstack/react-query` – gestione cache asincrona  
- `date-fns` – manipolazione delle date  
- `lodash` – utility JavaScript  

---

## 📁 Struttura del Progetto

Velletri1fse/
│
├── src/
│ ├── components/
│ │ └── ui/
│ │ ├── alert.tsx
│ │ ├── button.tsx
│ │ ├── calendar.tsx
│ │ ├── card.tsx
│ │ ├── dropdown-menu.tsx
│ │ ├── input.tsx
│ │ ├── popover.tsx
│ │ ├── select.tsx
│ │ └── textarea.tsx
│ │
│ ├── entities/
│ │ ├── ContactRequest.js
│ │ └── OrderRequest.js
│ │
│ ├── integrations/
│ │ └── Core.js
│ │
│ ├── lib/
│ │ └── utils.ts
│ │
│ ├── pages/
│ │ ├── ChiSiamo.jsx
│ │ ├── Coccinelle.jsx
│ │ ├── Contatti.jsx
│ │ ├── Esploratori.jsx
│ │ ├── Guide.jsx
│ │ ├── Home.jsx
│ │ ├── Lupetti.jsx
│ │ ├── Magazzino.jsx
│ │ ├── Rover.jsx
│ │ └── Scolte.jsx
│ │
│ ├── utils/
│ │ └── ...
│ │
│ ├── App.jsx
│ ├── Layout.jsx
│ ├── index.jsx
│ ├── index.css
│ └── supabaseClient.js
│
├── .env
├── .gitignore
├── components.json
├── index.html
├── package.json
├── tsconfig.app.json
├── tsconfig.json
├── vite.config.mjs
└── README.md


---

## 🎨 Design e Accessibilità

**Palette colori:**
```css
--scout-green: #2d5016;
--scout-dark-green: #15803d;
--scout-light-green: #4ade80;
--scout-beige: #d4b896;
```


-Design moderno e coerente con i valori FSE

-Gradients e colori differenziati per ogni branca

-Layout responsive per smartphone, tablet e desktop

-Animazioni fluide e accessibilità WCAG-compliant

---

## 🚀 Deployment

-L’applicazione è distribuita su Vercel, con:

-Hosting statico e build automatica

-Configurazione .env per le chiavi Supabase

-HTTPS e dominio personalizzato

---

## 👥 Autori

-Gruppo Scout FSE – Velletri 1
-📍 Parrocchia San Clemente, Velletri (RM)

---

## 📄 Licenza

-Copyright © 2025
-Gruppo Scout FSE Velletri 1
-Tutti i diritti riservati.

---

## ⚜️ “Lasciare il mondo un po’ migliore di come lo abbiamo trovato.”
— Robert Baden-Powell
