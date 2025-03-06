# Labor 2
---- 
# 1. XML-Dokumente und DTD
## 1.1 XML Dokumente und Namespaces
#### 1 XML Namespaces und ihr Einsatzzweck
- XML Namespaces werden benutzt um Elemente und Attribute in einem XML-Dokument eindeutig zu identifizieren. Sie geben den Elementen eine eindeutige Kennung um Namenskonflikte zu vermeiden
- dadurch kann zwischen XML-Elementen mit demselben Namen unterschieden werden
- Beispiel: das obere table Element enthält Informationen zu einer html Tabelle und das untere table Element enthält Informationen zu einem Tisch ohne die Namespaces h: und f: würde es zu problemen führen da beide den gleichen Namen besitzen aber durch die Namespaces können beide Elemente klar unterschieden werden.
```html
<h:table xmlns:h="http://www.w3.org/TR/html4/">
  <h:tr>
    <h:td>Apples</h:td>
    <h:td>Bananas</h:td>
  </h:tr>
</h:table>

<f:table xmlns:f="https://www.w3schools.com/furniture">
  <f:name>African Coffee Table</f:name>
  <f:width>80</f:width>
  <f:length>120</f:length>
</f:table>
```
#### 2 XML Dokument für aktuellen Vorlesungsplan
Vorlesungsplan  
├── Vorlesung  
│   ├── Fach
│   ├── Dozent 
│   ├── Raum
│   ├── Datum
│   ├── Beginn
│   └── Ende
└── Vorlesung  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Fach
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Dozent
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Raum
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Datum
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── Beginn
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Ende

## 1.2 XML-Dokumente und Textformatierungen
#### 1 Baumartiges Datenmodell
dokument
├── titel
│   └── Edward Snowden
└── absatz
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── bold
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   └── Edward Snowden
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── text
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   └── ist ein
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── italic
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   └── US-amerikanischer Whistleblower
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── text
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   └── und ehemaliger
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── italic
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   └── CIA-Mitarbeiter
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── text
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;│   └── . Seine Enthüllungen gaben Einblicke in das Ausmaß der weltweiten Überwachungs- und Spionagepraktiken von Geheimdiensten – überwiegend jenen der Vereinigten Staaten und Großbritanniens. Diese lösten im Sommer 2013 die NSA-Affäre aus.
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── linebreak
└── absatz
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── text
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── Er wurde dafür mehrfach von nichtstaatlichen Organisationen ausgezeichnet und für den Friedensnobelpreis nominiert.

---

# 2. Zeichensätze, Code-Tabellen und Character Encoding
## 2.2. UTF-8, UTF-16, UTF-32 Encoding von Zeichen
#### 4 verschiedene Encodings für verschiedene Sprachen
UTF-8 Speichereffizient für europäische Sprachen.(ateinische Zeichen)
UTF-16BE eignet sich besser für asiatische Schriften
#### 5 Glyphe
- visuelle Darstellung eines Zeichens oder Symbols in einer bestimmten Schriftart oder einem bestimmten Schriftsystem
- im gegensatz zu Zeichen, dass eine abstrakte Einheit ist, ist Glyphe eine konkrete Form, in der dieses Zeichen dargestellt wird.
- kann sich je nach Schriftart, Stil oder Kontext ändern

Beispiel:
- Zeichen "A" kann in verschiedenen Schriftarten angezeigt werden(Bsp: Arial, Times New Roman, kursiv, fett)
- Emojis sehen je nach System unterschiedlich aus (Apple, Samsung, Windows)
#### 6 Unicode Zeichen in Terminal
- Ausgabe der Unicode-Zeichen im Terminal ist möglich
- das verhalten hängt von mehreren Faktoren ab:
  - Unterstützung der Terminal-Schriftart (nicht alle Schriften enthalten alle Glyphen)
  - Eingestellte Zeichenkodierung des Terminals (UTF-8 sollte aktiviert sein)
  - Plattform (Windows, macOS, Linux) (Einige Systeme unterstützen mehr Zeichen als andere)
