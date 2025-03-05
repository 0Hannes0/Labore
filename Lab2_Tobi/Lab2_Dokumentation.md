# Labor 2 - Dokumentation

## Aufgabe 1.1
#### Teil 1
XML Namespaces dienen dazu, Elemente und Attribute in einem XML-Dokument eindeutig zu identifizieren. Das ist  besonders hilfreich, wenn mehrere XML-Sprachen oder Vokabulare in einem Dokument kombiniert werden. Sie verhindern Namenskonflikte, die auftreten können, wenn unterschiedliche XML-Sprachen identische Element- oder Attributnamen verwenden.
Beispiel:
```xml
<root xmlns:ns1="http://example.com/ns1" xmlns:ns2="http://example.com/ns2">
    <ns1:element>Wert aus Namespace 1</ns1:element>
    <ns2:element>Wert aus Namespace 2</ns2:element>
</root>
```
Erklärung:
- xmlns:ns1="http://example.com/ns1" → Definiert den Namespace ns1.
- xmlns:ns2="http://example.com/ns2" → Definiert den Namespace ns2.

Ohne Namespaces gäbe es einen Namenskonflikt, weil beide <element> heißen. Mit Namespaces werden sie eindeutig unterschieden.

#### Teil 2
```
Vorlesungsplan
│
├── Semester
│   ├── Kurs
│   │   ├── Veranstaltung
│   │   │   ├── Titel
│   │   │   ├── Typ
```

## Aufgabe 1.2
```
Document
├── Title (Text, fett)
├── Absatz (Text, tw. fett & kursiv)
└── Absatz (Text)
```

## Aufgabe 2.2

#### Teil 1
Python Coding:
```python
import unicodedata

glyphen = ['֎', 'Eü', '©', '€', '֍', '☯', '�', '⚛']

def get_unicode_info(glyphen):
    table = []
    for g in glyphen:
        code_point = ord(g)

        utf_8 = g.encode('utf-8')
        utf_16be = g.encode('utf-16-be')
        utf_32be = g.encode('utf-32-be')

        name = unicodedata.name(g, "Unbekannt")

        table.append({
            'Encoding': 'UTF-8',
            'Codepoint': f'U+{code_point:04X}',
            'Encoded Codepoint': ' '.join([f'{byte:02X}' for byte in utf_8]),
            'Name of Character': name,
            'Glyph': g
        })

        table.append({
            'Encoding': 'UTF-16BE',
            'Codepoint': f'U+{code_point:04X}',
            'Encoded Codepoint': ' '.join([f'{byte:02X}' for byte in utf_16be]),
            'Name of Character': name,
            'Glyph': g
        })

        table.append({
            'Encoding': 'UTF-32BE',
            'Codepoint': f'U+{code_point:04X}',
            'Encoded Codepoint': ' '.join([f'{byte:02X}' for byte in utf_32be]),
            'Name of Character': name,
            'Glyph': g
        })

    return table

info_tabelle = get_unicode_info(glyphen)

print(f"{'Encoding':<10} {'Codepoint':<20} {'Encoded Codepoint':<40} {'Name of Character':<40} {'Glyph'}")
print('-' * 150)

for entry in info_tabelle:
    print(f"{entry['Encoding']:<10} {entry['Codepoint']:<20} {entry['Encoded Codepoint']:<40} {entry['Name of Character']:<40} {entry['Glyph']}")
```
#### Teil 2
- `UTF-8` ist ein flexibles Encoding, das mit einem einzigen Byte für Zeichen aus dem ASCII-Zeichensatz effizient ist. Es ist ideal für europäische Sprachen, da es mit den meisten lateinischen Zeichen und Symbolen gut funktioniert und für viele Sprachen kompatibel ist.

- `UTF-16BE` verwendet 2 oder 4 Byte, um Zeichen zu codieren. Es eignet sich besser für asiatische Sprachen, die viele Zeichen benötigen, die über die ersten 128 ASCII-Zeichen hinausgehen und oft im Bereich der höheren Unicode-Codepunkte liegen.

- `UTF-32BE` verwendet 4 Byte für jedes Zeichen, was die Verarbeitung vereinfacht, aber mehr Speicher benötigt. Es ist weniger effizient als UTF-8 oder UTF-16.

#### Teil 3
Eine `Glyphe` ist die sichtbare Form eines Zeichens, das in einem Schriftsystem verwendet wird. Es ist die Darstellung eines Zeichens in einem bestimmten Kontext.
Zum Beispiel:
Das Zeichen "A" (lateinischer Buchstabe) ist eine Glyphe, ebenso wie das Symbol "©" (Copyright).
Eine Glyphe ist die grafische Darstellung eines Codepunkts, das in einem bestimmten Schriftsystem oder einer Schriftart angezeigt wird.

#### Teil 4
Es können nich alle Zeichen wie "©", "€" oder "☯" problemlos angezeigt werden.
Einige Zeichen wie "�" (ersetzt ungültige Zeichen) erscheinen, weil das Teminal die verwendete Schriftart des Zeichen nicht korrekt darstellen kann.