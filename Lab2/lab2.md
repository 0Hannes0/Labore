## 1.1 XML Dokumente und Namespaces
### 1. **Erklärung XML Namespaces**
- XML Namespaces werden verwendet, um Namenskonflikte zwischen Elementen und Attributen unterschiedlicher XML-Dokumente zu vermeiden.
- Sie identifizieren Elemente anhand eines eindeutigen Bezeichners (URI).

### **Einsatzzweck – Beispiel**  
Angenommen, Sie haben ein Dokument mit Buchinformationen und ein weiteres für Personendaten. Beide verwenden das Element `<title>`. Durch Namespaces können Sie eindeutig angeben, welches `<title>` zu welchem Schema gehört.

```xml
<library xmlns:book="http://example.com/book" xmlns:person="http://example.com/person">
  <book:title>XML Einführung</book:title>
  <person:title>Dr.</person:title>
</library>
```
### 2. Datenmodell
vorlesungsplan  
├── modul  
│   ├── titel  
│   ├── dozent  
│   └── zeitraum  
└── modul  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── titel  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── dozent  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── zeitraum  

## 1.2 Aufgabe: XML-Dokumente und Textformatierungen  

### 1. Baumartiges Datenmodell
textdokument  
├── titel  
└── absatz+  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;├── text  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;└── formatierung*

## 2.2 UTF-8, UTF-16, UTF-32 Encoding von Zeichen  

### **Python-Programm zur Analyse von Unicode-Zeichen**
Das folgende Python-Programm liest die Glyphen aus einer Datei ein und bestimmt:
1. Unicode-Codepunkt
2. Zeichen-Encoding für UTF-8, UTF-16BE und UTF-32BE
3. Unicode-Namen der Glyphen

```python
import unicodedata

def analyze_glyphs(file_path):
    # Datei mit Glyphen einlesen
    with open(file_path, 'r', encoding='utf-8') as file:
        glyphs = file.read().strip()

    # Tabellenüberschrift
    print(f"{'Zeichen':<5} {'Code Point':<10} {'UTF-8':<20} {'UTF-16BE':<20} {'UTF-32BE':<20} {'Unicode Name'}")
    print("=" * 80)

    for glyph in glyphs:
        code_point = f"U+{ord(glyph):04X}"
        utf8 = glyph.encode('utf-8').hex()
        utf16be = glyph.encode('utf-16be').hex()
        utf32be = glyph.encode('utf-32be').hex()
        unicode_name = unicodedata.name(glyph, "UNKNOWN")

        print(f"{glyph:<5} {code_point:<10} {utf8:<20} {utf16be:<20} {utf32be:<20} {unicode_name}")

# Datei mit den Glyphen (erstelle eine Datei glyphs.txt mit den Zeichen ֎Eü©€֍☯😇⚛)
file_path = "glyphs.txt"
analyze_glyphs(file_path)
```

### **4. Vergleich der Unicode-Encodings**

| Encoding | Beschreibung | Verwendung |
|----------|--------------|------------|
| **UTF-8** | Variable Länge (1 bis 4 Bytes) | Optimal für europäische Sprachen, da viele Zeichen nur 1 Byte benötigen |
| **UTF-16BE** | 2 bis 4 Bytes pro Zeichen | Geeignet für asiatische Sprachen (z. B. Chinesisch oder Japanisch), da viele Zeichen mit 2 Bytes dargestellt werden |
| **UTF-32BE** | 4 Bytes pro Zeichen (konstante Länge) | Speicherintensiv; nützlich in Spezialfällen, wenn die feste Länge vorteilhaft ist |

#### Fazit:  
- **UTF-8** ist platzsparend und effizient für europäische Sprachen.  
- **UTF-16BE** eignet sich besser für asiatische Schriften, da viele Zeichen direkt mit 2 Bytes kodiert werden können.

---

### **5. Begriff der Glyphe**
Eine **Glyphe** ist die konkrete visuelle Darstellung eines Zeichens oder einer Gruppe von Zeichen.  
- **Beispiele:**  
  - Das Zeichen `A` kann in verschiedenen Schriftarten (z. B. Arial, Times New Roman) unterschiedlich aussehen — jede Variante ist eine eigene Glyphe.
  - Das Zeichen `U+1F600` 😁 (grinsendes Gesicht) hat unterschiedliche Darstellungen auf Windows, macOS und Android.

---

### **6. Terminalausgabe von Unicode-Zeichen**
#### **Beobachtungen:**  
- Die meisten modernen Terminals unterstützen Unicode und können die obigen Glyphen (`֎ E ü © € ֍ ☯ 😇 ⚛`) korrekt anzeigen.  
- Falls ein Zeichen nicht dargestellt werden kann, erscheint ein Platzhalter, z. B. ein Rechteck (`□`) oder ein Fragezeichen (`?`).  

#### **Gründe für Probleme:**  
- Das Terminal verwendet möglicherweise eine Schriftart, die nicht alle Unicode-Glyphen unterstützt.  
- Das Terminal muss für UTF-8 konfiguriert sein, um erweiterte Zeichen korrekt darzustellen.  
