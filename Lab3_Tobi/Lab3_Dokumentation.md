# Labor 3 - Dokumentation

## Aufgabe 1.1
#### Teil 1 - Skizzierung
(Beschreibung, da es schwierig ist eine Skizze einzufügen)
- Oben (Header):
Ein Navigationsbar mit Links zu den         verschiedenen Bereichen der Seite.
Menü: "Home", "Über uns", "Leistungen", "Kontakt"
*  Hauptinhalt (Body):
    - Bereich 1 - Home:
        Titel ("Willkommen auf unserer Webseite")
        Kurzer Einführungstext
        Bild
        Button mit Link
    - Bereich 2 - Über uns:
        Überschrift ("Über uns")
        Abschnitt, der unser Unternehmen vorstellt
        Tabelle mit Fakten und Informationen
    - Bereich 3 - Leistungen:
        Überschrift ("Unsere Leistungen")
        Aufzählung der Dienstleistungen
        Bilder der Dienstleistungen
    - Bereich 4 - Kontakt:
        Überschrift ("Kontaktieren Sie uns")
        Kontaktformular
        Externe Links zu sozialen Netzwerken

#### Teil 2 - Klickverhalten
- **Navigationsleiste**: Wenn der Benutzer auf einen Menüpunkt klickt, wird er zu einem spezifischen Abschnitt der Seite weitergeleitet.
- **Links im Content-Bereich**: Klicks auf externe Links oder Links zu anderen Ressourcen können den Benutzer zu anderen Webseiten oder externen Quellen führen.
- **Kontaktformular**: Nach dem Ausfüllen und Absenden des Formulars wird eine Bestätigung angezeigt.

#### Teil 3 - Kompositionsdiagramm
(Beschreibung, da es schwierig ist ein Kompositionsdiagramm einzufügen)

HTML-Dokument (index.html):
* Header:
Nav (Navigation):
Menüeinträge ("Home", "Über uns", "Leistungen", "Kontakt")
* Body:
    - Bereich 1 - Home:
        Titel (`<h1>`)
        Einführungstext (`<p>`)
        Bild (`<img>`)
        Externer Link (`<a>`)
    - Bereich 2 - Über uns:
        Überschrift (`<h2>`)
        Textabschnitte (`<p>`)
        Tabelle (`<table>`)
    - Bereich 3 - Leistungen:
        Überschrift (`<h2>`)
        Aufzählung (`<ul>`)
        Bilder (`<img>`)
    - Bereich 4 - Kontakt:
        Überschrift (`<h2>`)
        Formular (`<form>`)
        Kontaktmöglichkeiten (`<a>` für soziale Netzwerke)

## Aufgabe 1.2
#### Teil 1 - Sitemap
```
Root-Verzeichnis:
    ├── index.html                  (Startseite)
    ├── about.html                  (Über uns Seite)
    ├── services.html               (Leistungen Seite)
    ├── contact.html                (Kontakt Seite)
    ├── assets/                     (Verzeichnis für Bilder und Videos)
    │   ├── image.jpg               (Bild des Autors)
    │   └── author-video.mp4        (YouTube-Video)
    └── css/                        (Verzeichnis für Stylesheets)
        └── style.css               (Gemeinsames Stylesheet für alle Seiten)

```
#### Teil 2 - Kompositionsdiagramm
(Wieder eine Beschreibung)

* Kompositionsdiagramm für index.html:
    -  Header:
        Titel der Webseite
        Navigationsmenü
    -  Body:
        Einführungstext
        Adresse des Unternehmens
        eingebettetes YouTube-Video
        Lieblingssong (Link zu einer externen Quelle)
        Bild des Autors
    - Footer mit allgemeinen Informationen
* Kompositionsdiagramm für about.html:
    - Header:
        Titel der Webseite
        Navigationsmenü
    - Body:
        Titel ("Über uns")
        Textabschnitt mit Unternehmensgeschichte
        Tabelle mit wichtigen Informationen
    - Footer:
        Allgemeine Informationen
* Kompositionsdiagramm für services.html:
    - Header:
        Titel der Webseite
        Navigationsmenü
    - Body:
        Titel ("Unsere Leistungen")
        Aufzählung der Dienstleistungen
        Bilder der Dienstleistungen
    - Footer:
        Allgemeine Informationen
* Kompositionsdiagramm für contact.html:
    - Header:
        Titel der Webseite
        Navigationsmenü
    - Body:
        Titel ("Kontaktieren Sie uns")
        Kontaktformular
        Externe Links zu sozialen Netzwerken
    - Footer:
        Allgemeine Informationen

#### Teil 3 - Validierung der Übergänge
Übergänge:
* Auf index.html gibt es Links zu den anderen Seiten:
    - "Über uns"
    - "Leistungen"
    - "Kontakt"
* Auf about.html gibt es ebenfalls Links zu:
    - "Home"
    - "Leistungen"
    - "Kontakt"
* Auf services.html gibt es Links zu:
    - "Home"
    - "Über uns"
    - "Kontakt"
* Auf contact.html gibt es Links zu:
    - "Home"
    - "Über uns"
    - "Leistungen"

