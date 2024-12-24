# avisarese
Local AVIS website

## Progetto: Sito Web per AVIS Comunale

### **Obiettivo**
Creare un sito web per l'AVIS comunale, ispirato al design condiviso, con sezioni informative, responsive e un backend affidabile. Il sito offrirà informazioni su come donare sangue, contatti utili, orari di apertura, e una sezione news per eventi locali.

---

### **Requisiti Funzionali**
1. **Sezioni del sito**:
   - **Home**: Panoramica con immagini e call-to-action (CTA).
   - **Chi Siamo**: Informazioni sull'AVIS comunale.
   - **Donazione**: Dettagli su come donare sangue.
   - **FAQ**: Risposte alle domande frequenti.
   - **News**: Aggiornamenti sugli eventi e iniziative.
2. **Funzioni**:
   - Form di contatto per richieste e domande.
   - Sezione prenotazioni per donazioni (futura integrazione).
   - Newsletter o sistema di avviso eventi.
3. **Responsività**:
   - Ottimizzazione per dispositivi mobili e desktop.
4. **SEO e Analytics**:
   - Ottimizzazione per i motori di ricerca (SEO).
   - Integrazione di Google Analytics.

---

### **Tech Stack**

#### **Frontend**:
- **Framework**: React.js.
- **Stile**: Tailwind CSS per uno sviluppo rapido e personalizzabile.
- **Routing**: React Router per la gestione delle pagine.
- **Librerie Utili**:
  - Axios per le chiamate API.
  - Formik + Yup per la gestione e validazione dei form.

#### **Backend**:
- **Linguaggio**: Python.
- **Framework**: Flask per la gestione delle API e delle logiche server-side.
- **Database**: PostgreSQL (o SQLite per lo sviluppo locale).
- **Librerie Utili**:
  - Flask-WTF per i form.
  - Flask-Mail per l'invio di email.
  - SQLAlchemy per la gestione del database ORM.

#### **DevOps e Hosting**:
- **Containerizzazione**: Docker per un ambiente di sviluppo e produzione coerente.
- **Server**: Nginx come reverse proxy e Gunicorn per l'app Flask.
- **Hosting**:
  - Vercel per il frontend.
  - Render o un VPS per il backend e il database.
- **Version Control**: Git + GitHub per la gestione del codice.

---

### **Architettura del Progetto**
1. **Frontend**:
   - Cartelle principali:
     ```
     src/
     |-- components/       # Componenti React riutilizzabili
     |-- pages/            # Pagine principali (Home, Chi Siamo, ecc.)
     |-- styles/           # Configurazioni Tailwind e CSS personalizzato
     |-- services/         # Chiamate API (es. axios.js)
     ```
2. **Backend**:
   - Struttura Flask:
     ```
     backend/
     |-- app/
     |   |-- static/        # File statici
     |   |-- templates/     # Template Jinja (per fallback HTML)
     |   |-- routes.py      # Endpoint API
     |   |-- models.py      # Modelli database
     |   |-- forms.py       # Gestione form
     |-- config.py          # Configurazioni principali
     |-- run.py             # Entry point dell’app
     ```

---

### **Fasi di Sviluppo**

#### **Fase 1: Pianificazione**
- Creazione di mockup e wireframe per il layout.
- Definizione della struttura delle API REST.

#### **Fase 2: Sviluppo Frontend**
- Configurazione di un progetto React con Tailwind CSS.
- Implementazione delle pagine principali (Home, Chi Siamo, Donazione, FAQ, News).
- Creazione di componenti riutilizzabili (Navbar, Footer, Card per le news).

#### **Fase 3: Sviluppo Backend**
- Configurazione di Flask con rotte per:
  - **GET**: Recupero dati (news, eventi, ecc.).
  - **POST**: Invio di richieste dai form.
- Connessione al database per la gestione dei contenuti dinamici.
- Configurazione di un sistema di invio email per le richieste di contatto.

#### **Fase 4: Testing**
- Test del frontend (UI/UX) su vari browser e dispositivi.
- Test delle API con Postman o Swagger.
- Test di integrazione tra frontend e backend.

#### **Fase 5: Deployment**
- Deployment del frontend su Vercel.
- Deployment del backend su un server con Docker.
- Configurazione di un dominio personalizzato e certificato HTTPS.

---

### **Estensioni Future**
- Sistema di login per utenti registrati.
- Dashboard per la gestione degli eventi.
- Integrazione con servizi di prenotazione online.

---

### **Primi Passi**
1. **Configurazione Ambiente**:
   - Installare Node.js e creare un'app React (`npx create-react-app`).
   - Installare le dipendenze di Flask (`pip install flask flask-sqlalchemy`).
2. **Creazione Prototipo**:
   - Progettare la homepage con React e Tailwind CSS.
   - Configurare un semplice endpoint Flask per testare la comunicazione frontend-backend.
3. **Version Control**:
   - Inizializzare un repository Git e collegarlo a GitHub.

---

### **Risorse**
- [Documentazione Flask](https://flask.palletsprojects.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [React.js](https://react.dev/)
- [Docker](https://www.docker.com/)

