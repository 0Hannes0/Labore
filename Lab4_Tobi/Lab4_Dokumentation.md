# Labor 4 - Dokumentation
## Aufgabe 1.2
#### Teil 1 - Responsive
<table>
  <thead>
    <tr>
      <th>Gerätetyp</th>
      <th>Breakpoint</th>
      <th>Layoutanpassung</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Desktop</td>
      <td>>1024px</td>
      <td>Drei-Spalten-Layout</td>
    </tr>
    <tr>
      <td>Tablet</td>
      <td>768px - 1024px</td>
      <td>Navigation oben, Spalten untereinander
</td>
    </tr>
    <tr>
      <td>Handy</td>
      <td>>768px</td>
      <td>Alles untereinander, kompakte Navigation</td>
    </tr>
  </tbody>
</table>

#### Teil 2 - CSS
<table>
  <thead>
    <tr>
      <th>Bereich</th>
      <th>Farbe</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>#6cb2eb (Blau)</td>
    </tr>
    <tr>
      <td>Navigation</td>
      <td>#b0c4de (Hellblau)</td>
    </tr>
    <tr>
      <td>Nav-Hover</td>
      <td>#8ca0b3 (Grau-Blau)</td>
    </tr>
    <tr>
      <td>Hauptbereich</td>
      <td>#f4f4f4 (Hellgrau)</td>
    </tr>
    <tr>
      <td>Seitenleiste</td>
      <td>#f8f9fa (Sehr hellgrau)</td>
    </tr>
    <tr>
      <td>Wichtige Überschriften</td>
      <td>#e63946 (Rot)</td>
    </tr>
  </tbody>
</table>

<table>
  <thead>
    <tr>
      <th>Element</th>
      <th>Schriftart</th>
      <th>Größe (px)</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Header</td>
      <td>Arial, sans-serif</td>
      <th>24px (Desktop) / 18px (Mobile)
</th>
    </tr>
    <tr>
      <td>Navigation</td>
      <td>Arial, sans-serif</td>
      <th>18px
</th>
    </tr>
    <tr>
      <td>Hauptseite</td>
      <td>Arial, sans-serif</td>
      <th>16px
</th>
    </tr>
    <tr>
      <td>Überschriften</td>
      <td>Arial, sans-serif</td>
      <th>22px (h1), 20px (h2), 18px (h3)
</th>
    </tr>
    <tr>
      <td>Asidetext</td>
      <td>Arial, sans-serif</td>
      <th>16px, fett für wichtige Begriffe
</th>
    </tr>
    </tr>
  </tbody>
</table>

#### Teil 4 - Kompositionsdiagramm
* Header `(id="header")`
    - Über die gesamte Breite
    - Enthält den Titel der Webseite
* Navigation `(id="nav")`
    - Links als vertikale Sidebar
    - Enthält mindestens 4 Menüpunkte:
        + Startseite
        + Media Queries
        + Flexbox
        + Gridbox
        + Impressum
* Hauptbereich (id="main")
    - Enthält 3 Artikel (class="article")
    - Jeder Artikel besteht aus:
        + Bild (Multimedia-Datei)
        + Überschrift
        + Beschreibungstext
* Seitenleiste (id="aside")
    - Enthält zusätzliche Erklärungen zu Fachbegriffen
    - Positioniert rechts auf größeren Bildschirmen
* Layout-Anordnung (Grid & Flexbox):
    - Desktop (>1024px):
        + Header oben
        + Navigation links
        + Main-Bereich mit 3 Spalten
        + Aside rechts
    - Tablet (768px - 1024px):
        + Navigation oben horizontal
        + Artikel untereinander statt nebeneinander
        + Aside unter dem Main-Bereich
    - Mobile (<768px):
        + Alles untereinander gestapelt
        + Navigation als kompakte Liste