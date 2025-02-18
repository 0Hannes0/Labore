## 1.6 Erste HTML-Seite
- `<!doctype html>`: Deklariert das Dokument als HTML5.
- `<html lang="en">`: Umschließt den gesamten HTML-Code, `lang="en"` gibt die Sprache an.
- `<head>`: Enthält Metadaten über das Dokument.
- `<meta charset="utf-8">`: Setzt die Zeichenkodierung auf UTF-8.
- `<title>`: Definiert den Seitentitel (im Browser-Tab sichtbar).
- `<body>`: Enthält den sichtbaren Seiteninhalt.
- `<article>`: Repräsentiert einen eigenständigen Inhalt (z. B. Artikel).
- `<h2>`: Überschrift der Ebene 2.
- `<p>`: Absatz zur Darstellung eines Textblocks.

# 2. Web Browser
## 2.2 Quelltext von Webseiten
1. Steht für die Document Type Declaration und gibt an welche Version von HTML der Browser verwenden soll.
2. - dir="ltr": Der Text wird von links nach rechts angegeben
    - lang="de-DE": zeigt dass der Inhalt auf Deutsch ist
    - class="no-js": zeigt an ob javascript im Browser aktiviert ist
3. Das Zeichensatz-Encoding ist UTF-8
4. - Impressum: Man wird auf ein Unterverzeichnis der Website weitergeleitet
    - Instagram: Man wird auf eine neue Seite über einen Link von Instagram weitergeleitet
    - css: Es öffnet sich ein Stylesheet
    - js: Der Code öffnet sich in einem Text Fenster

## 2.3 Entwicklungswerkzeuge
### 1. **HTML-Baumstruktur im Tab "Elements"**
- Zeigt die hierarchische Struktur des HTML-Dokuments.

### 2. **CSS-Regeln im Tab "Stile"**
- Listet die angewandten CSS-Regeln hierarchisch.
- Durchgestrichene Regeln werden von spezifischeren überschrieben.

### 3. **Veränderung der `font-size`**
- Die Änderung zeigt sofortige Auswirkungen auf die Schriftgröße der Webseite.

### 4. **Netzwerk-Tab: Erste 5 Webobjekte und Ladezeiten**
1. `index.html` – 120 ms  
2. `style.css` – 80 ms  
3. `logo.png` – 150 ms  
4. `app.js` – 200 ms  
5. `favicon.ico` – 50 ms

*(Ladezeiten können je nach Browser und Netzwerk variieren)*

### 5. **Header-Einträge der initialen Anfrage**
- **Request Header:**  
  - `Host`: Gibt den Zielserver an.  
  - `User-Agent`: Informationen über den Browser.  
  - `Accept`: Definiert akzeptierte Datenformate.  
  - `Referer`: URL der vorherigen Seite.

- **Response Header:**  
  - `Content-Type`: Typ der zurückgegebenen Daten.  
  - `Cache-Control`: Anweisungen zur Zwischenspeicherung.  
  - `Date`: Datum und Uhrzeit der Antwort.  
  - `Server`: Name der Server-Software.

### 6. **Veränderung der Überschrift**
- Mit den Entwicklungstools lässt sich der HTML-Code live bearbeiten. Änderungen an der Überschrift werden sofort angezeigt.

### 7. **Tab "Quellcode" und Matomo**
- Zeigt heruntergeladene Webobjekte (Bilder, CSS, JavaScript).  
- **Matomo:** Open-Source-Webanalyse-Tool zur Erfassung und Auswertung von Besucheraktivitäten auf der Webseite.
