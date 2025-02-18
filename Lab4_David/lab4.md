# 1. Erstellen einer flexiblen Web-Seite mit Layout
## 1.1 Edward Snowden - XML Datei
### 1. XML mit CSS erweitern
- `xml-stylesheet`-Anweisung für `style.css` hinzufügen.
- CSS verbessert **Überschriften, Absätze, Fett/Kursiv**.

### 2. CSS-Stylesheet
- **Global:** Schriftart, Zeilenhöhe, Abstände.
- **Titel:** Zentriert, fett, größer.
- **Absätze:** Definierte Abstände.
- **Formatierungen:** Fett (`font-weight: bold`), Kursiv (`font-style: italic`).

### 3. XML-Überprüfung
- **Öffnen in Firefox/Edge** (Chrome braucht lokalen Server).
- **Validierung:** [xmlvalidation.com](https://www.xmlvalidation.com/).
- **Alternative Anzeige:** `python3 -m http.server`.

## 1.2 Flexibler Onepager
### 1. Sketche & Breakpoints
- Erstelle Skizzen für Desktop, Tablet und Mobil.
- Breakpoints:
  - 1200px+ (Desktop)
  - 768–1199px (Tablet)
  - <768px (Mobil)

### 2. Schriftarten, Größen & Farben
- Schrift: „Inter“, „Roboto“ oder systemseitig.
- Größen:
  - Titel: 32px
  - Überschriften: 24px
  - Fließtext: 16px
- Farben: Catppuccin Mocha Palette

### 3. Kompositionsdiagramm & Layout
- Nutze Grid oder Flexbox.
- IDs/Klassen für Header, Nav, Content, Sidebar, Footer definieren.

### 4. HTML-Seite testen
- Teste in Chrome, Firefox und Edge.

### 5. CSS-Stylesheets
- `layout-basic.css`: Farben, Schriften, Grundstruktur.
- `layout-responsive.css`: Media Queries für Breakpoints.

### 6. Responsive Design testen
- Fenstergröße anpassen & Verhalten testen.
- Feedback einholen.
