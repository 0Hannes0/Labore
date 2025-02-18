## 1.1 Erstellen eines OnePage Internetauftritts

### **2. Anforderungen an die OnePager-Webseite**

- **HTML-Dokument:** `index.html`  
- **Webseiten-Titel:** „Mein OnePager“  
- **Top-Navigationsbar:**  
  - Mindestens vier Menüeinträge mit Anker-Links:
    - Startseite  
    - Über uns  
    - Portfolio  
    - Kontakt  
- **Inhalte:**  
  - **Überschriften:** `<h1>`, `<h2>`  
  - **Absätze:** `<p>`  
  - **Kapitel und Artikel:** `<section>`, `<article>`  
  - **Bilder:** `<img>`  
  - **Externe Links:** `<a href="https://example.com" target="_blank">`  
  - **Tabellen:** `<table>`

---

### **3. Skizzierung („Sketching“)**
- **Layout auf Papier:**  
  - Platzierung der Navigationsleiste ganz oben  
  - Darunter vertikal angeordnete Webseitenbereiche:  
    - Startseite  
    - Über uns  
    - Portfolio  
    - Kontakt  
- **Inhaltsplanung:**  
  - Skizzieren Sie Hauptinhalte (Text, Bilder, Tabellen)  
  - Notieren Sie mögliche Benutzeraktionen

---

### **4. Benutzerverhalten**
- **Navigationslinks:**  
  - Scrollen direkt zu den verlinkten Bereichen (Anker-Navigation)  
- **Externe Links:**  
  - Öffnen sich in einem neuen Tab (`target="_blank"`)  
- **Bilder und Tabellen:**  
  - Bieten visuelle Informationen und strukturierte Inhalte

### 5. Kompositionsdiagramm
``` html
<html>
  <head> Title </head>
  <body>
    <header> Navigationsleiste </header>
    <section id="startseite"> Inhalt Startseite </section>
    <section id="ueber-uns"> Inhalt Über uns </section>
    <section id="portfolio"> Inhalt Portfolio </section>
    <section id="kontakt"> Kontaktinformationen </section>
  </body>
</html>
```