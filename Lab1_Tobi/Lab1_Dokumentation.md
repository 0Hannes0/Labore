# Labor 1 - Dokumentation


## Aufgabe 1.6
- `<!doctype html>`: Das Dokument wird als HTML-File deklariert
- `<html lang="en">`: Setzt die Dokumentensprache (HTML) auf Englisch
- `<head>`: Enthält die Metadaten des Dokuments
- `<meta charset="utf-8">`: Setzt die Zeichenkodierung auf UTF-8
- `<title>`: Definiert den Titel der Seite (sichtbar im Browser-Tab)
- `<body>`: Enthält den angezeigten Content der Seite
- `<article>`: Repräsentiert einen eigenen Inhalt (z. B. Artikel)
- `<h2>`: Überschrift der 2. Ebene
- `<p>`: Absatz


## Aufgabe 2.2
#### Teil 1
`<!doctype html>`: Das Document wird als HTML-File deklariert
#### Teil 2
-  `dir="ltr"`: Gibt die Richtung des Textes an, in dem Fall "left to right"
- `lang="de-DE"`: Gibt die Sprache an welche in dem Fall deutsche Klein- und Großbuchstaben umfasst
- `class="no-js"`: Gibt dem File mit, dass JavaScript nicht aktiv ist
#### Teil 3
Die Webseite verwendet utf-8 Encoding
#### Teil 4
- Impressum: Man landet auf der entsprechenden HTML-Seite
- Instagram: Man wird auf eine Instagram-Seite weitergeleitet
- CSS: Das Stylesheet des Dokuments öffnet sich
- JS: Weiterleitung auf den Seitenquelltext des entsprechenden Dokuments
## Aufgabee 2.3
#### Teil 1
1. startseite - 135ms
2. 602a2288601547 - 0ms
3. styles.css?1736869242 - 0ms
4. vendor_head.min.js?vqk0vqs - 0ms
5. main.min.css?vqk0vq - 0ms
#### Teil 2
###### Request Headers
1. `:authority`: www.ravensburg.dhbw.de
Bedeutung: Gibt die Host-Domain an, an die die Anfrage gesendet wird. Dies entspricht dem Servernamen in der URL.
2. `:method`: GET
Bedeutung: Gibt die HTTP-Methode der Anfrage an. In diesem Fall ist es  GET, was bedeutet, dass der Browser eine Ressource vom Server abrufen möchte.
3. `:path`: /startseite
Bedeutung: Gibt den Pfad der angeforderten Ressource auf dem Server an.
4. `:scheme`: https
Bedeutung: Gibt das Protokoll an, das für die Anfrage verwendet wird. In diesem Fall ist es HTTPS.
###### Response Headers
1. `content-language`: de
Bedeutung: Gibt die Sprache des Inhalts an, die der Server zurücksendet(hier: Deutsch).
2. `content-security-policy-report-only`:  default-src 'self'; report-uri https://sentry2.in2code.de/api/24/security/?sentry_key=c7b33dfea5e4a45ee44013171a669946
Bedeutung: Diese Richtlinie ist eine Content Security Policy (CSP) im Report-Only-Modus.
CSP ist eine Sicherheitsfunktion, die hilft, Cross-Site Scripting (XSS) und Dateninjektionsangriffe zu verhindern. Meldungen werden an die URL https://sentry2.in2code.de/api/24/security/ gesendet.
3. `content-type`: text/html; charset=utf-8
Bedeutung: Der Server teilt dem Browser mit, dass die zurückgesendeten Daten eine HTML-Seite (text/html) sind.
charset=utf-8 bedeutet, dass der UTF-8-Zeichensatz verwendet wird.
4. `date`: Wed, 05 Mar 2025 14:37:51 GMT
Bedeutung: Gibt das Datum und die Uhrzeit an, zu der die Antwort vom Server gesendet wurde. Die Zeit wird in GMT (Greenwich Mean Time) angegeben.
#### Teil 7
Matomo gibt an, dass es sich dabei um Dateien für die Datenanalyse handelt
