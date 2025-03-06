import unicodedata

# Die Glyphen (Symbole)
glyphs = ['֎', 'E', 'ü', '©', '€', '֍', '☯', '😇', '⚛']

# Funktion zur Ermittlung der Unicode-Informationen für jede Glyphe
def get_unicode_info(glyph):
    codepoint = ord(glyph)
    # UTF-8 Encoding
    utf8_encoding = glyph.encode('utf-8')
    # Unicode Name bestimmen
    try:
        name = unicodedata.name(glyph)
    except ValueError:
        name = "UNKNOWN"
    # Rückgabe der Informationen als Dictionary
    return {
        'glyph': glyph,
        'encoding': 'UTF-8',
        'codepoint': f"U+{codepoint:04X}",
        'encoded_codepoint': ' '.join(f'{b:02X}' for b in utf8_encoding),
        'name': name
    }

# Tabellenüberschrift
header = f"{'Glyph':<5} | {'Encoding':<10} | {'Codepoint':<10} | {'Encoded Codepoint':<20} | {'Name of Character':<40}"
print(header)
print("-" * 100)

# Iteration über die Glyphen und Ausgabe der Daten
for glyph in glyphs:
    info = get_unicode_info(glyph)
    print(f"{info['glyph']:<5} | {info['encoding']:<10} | {info['codepoint']:<10} | {info['encoded_codepoint']:<20} | {info['name']:<40}")
