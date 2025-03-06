# Labor 2
----
# 1. Erstellen eines statischen Internetauftritts
## 1.1 Erstellen eines OnePage Internetauftritts
#### 3 Skizze
![alt text](<onepager/img/Screenshot 2025-03-06 at 20.57.57.png>)

#### 4 Klickverhalten
Das Klickverhalten eines Benutzers könnte folgendermaßen aussehen:
- Navigationsleiste – Wenn der Benutzer auf einen Menüpunkt klickt, wird er zu einem spezifischen Abschnitt der Seite weitergeleitet(Bsp. „Top Reiseziele“, „Reisetipps“)
- Reisetipps checken – Packliste durchgehen, günstige Reisezeiten prüfen.
- Bilder in Galerie anschauen
- Video ansehen – Auf „Play“ klicken oder weiterscrollen

#### 5 Kompositionsdiagramm
```plaintext
┌───────────────────────────────────────────────────┐
│ <header>                                          │
│ ┌─────────────────────────────────────────────┐   │
│ │ <h1> Willkommen auf unserer Reise-Webseite  │   │
│ │ <p> Entdecke die schönsten Orte der Welt!   │   │
│ └─────────────────────────────────────────────┘   │
└───────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────┐
│ <nav>                                             │
│ <a href="#ziele">Top Reiseziele</a>               │
│ <a href="#tipps">Reisetipps</a>                   │
│ <a href="#galerie">Galerie</a>                    │
│ <a href="#kontakt">Reise-Inspiration</a>          │
└───────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────┐
│ <section id="ziele">                              │
│ <h2> Top Reiseziele </h2>                         │
│ ┌───────────────────┐ ┌────────────────────┐      │
│ │ <div>             │ │ <div>              │      │
│ │ <h3> Bali </h3>   │ │ <h3> Paris </h3>   │      │
│ │ <img> Bali </img> │ │ <img> Paris </img> │      │
│ │ <p> Beschreibung  │ │ <p> Beschreibung   │      │
│ └───────────────────┘ └────────────────────┘      │
└───────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────┐
│ <section id="tipps">                                 │
│ <h2> Reisetipps </h2>                                │
│ <ul>                                                 │
│ <li> Reisepass & Visum </li>                         │
│ <li> Reiseadapter </li>                              │
│ </ul>                                                │
│ <table>                                              │
│ <tr><th> Ort </th><th> Günstige Reisezeit </th></tr> │
│ <tr><td> Thailand </td><td> Mai - Oktober </td></tr> │
│ </table>                                             │
└──────────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────┐
│ <section id="galerie">                            │
│ <h2> Reisegalerie </h2>                           │
│ ┌───────┐ ┌───────┐ ┌───────┐                     │
│ │ <img> │ │ <img> │ │ <img> │                     │
│ └───────┘ └───────┘ └───────┘                     │
└───────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────┐
│ <section id="inspiration">                        │
│ <h2> Reise-Inspiration </h2>                      │
│ <iframe> YouTube-Video </iframe>                  │
└───────────────────────────────────────────────────┘

┌───────────────────────────────────────────────────┐
│ <footer> © 2025 Reise & Abenteuer </footer>       │
└───────────────────────────────────────────────────┘
```

## 1.2. Erstellen eines Multi-Page Internetauftritts
#### 3 Sitemap
```
├── index.html  
├── reiseziele.html  
├── tipps.html  
├── galerie.html  
├── inspiration.html 
├── media                    
│   ├── author.jpeg               
│   └── ...   
└── css/                        
    └── style.css            
```
#### 4 Kompositionsdiagramm

index.html:

```
+---------------------------------------------------+
|                       Body                        |
|  +---------------------------------------------+  |
|  |                   Header                    |  |
|  |  +---------------------------------------+  |  |
|  |  |    <h1>Willkommen auf unserer         |  |  |
|  |  |    Reise-Webseite</h1>                |  |  |
|  |  |    <p>Entdecke die schönsten Orte     |  |  |
|  |  |    der Welt!</p>                      |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                    Nav                      |  |
|  |  +---------------------------------------+  |  |
|  |  |  <a href="index.html">Startseite</a>  |  |  |
|  |  |  <a href="reiseziele.html">Top Reise- |  |  |
|  |  |  Ziele</a>                            |  |  |
|  |  |  <a href="tipps.html">Reisetipps</a>  |  |  |
|  |  |  <a href="galerie.html">Galerie</a>   |  |  |
|  |  |  <a href="inspiration.html">Inspira-  |  |  |
|  |  |  tion</a>                             |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                 Section: Abenteuer          |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Neue Abenteuer warten!</h2>      |  |  |
|  |  |  <p>Unsere Abenteuer sind mehr als    |  |  |
|  |  |  nur Reisen – sie sind Erlebnisse.    |  |  |
|  |  |  <h3>Unsere neuesten Abenteuer:</h3>  |  |  |
|  |  |  <ul>                                 |  |  |
|  |  |    <li>Auf den Spuren der Inkas: ...  |  |  |
|  |  |    <li>Durch die Wüste Namibias: ...  |  |  |
|  |  |  </ul>                                |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                 Section: Video              |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Unser YouTube-Video</h2>         |  |  |
|  |  |  <iframe>                             |  |  |
|  |  |  </iframe>                            |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |             Section: Lieblingssong          |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Unser Lieblingssong passend zum  |  |  |
|  |  |  Reisen</h2>                          |  |  |
|  |  |  <iframe>                             |  |  |
|  |  |  </iframe>                            |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                Section: Author              |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Über den Autor</h2>              |  |  |
|  |  |  <img>                                |  |  |
|  |  |  <p>Max Mustermann ist ein leidens-   |  |  |
|  |  |  chaftlicher Reisender...</p>         |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |               Section: Kontakt              |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Kontakt</h2>                     |  |  |
|  |  |  <address>                            |  |  |
|  |  |    Globetrotter Reisen                |  |  |
|  |  |    Musterstraße 1, 12345 Musterstadt  |  |  |
|  |  |    <a href="mailto:info@globetrotter- |  |  |
|  |  |    reisen.de">info@globetrotter...</a>|  |  |
|  |  |  </address>                           |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                  Footer                     |  |
|  |  +---------------------------------------+  |  |
|  |  |  <p>&copy; 2025 Reise & Abenteuer</p> |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
+---------------------------------------------------+
```


reiseziele.html:

```
+---------------------------------------------------+
|                       Body                        |
|  +---------------------------------------------+  |
|  |                   Header                    |  |
|  |  +---------------------------------------+  |  |
|  |  |    <h1>Top Reiseziele</h1>            |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                    Nav                      |  |
|  |  +---------------------------------------+  |  |
|  |  |  <a href="index.html">Startseite</a>  |  |  |
|  |  |  <a href="reiseziele.html">Top Reise- |  |  |
|  |  |  Ziele</a>                            |  |  |
|  |  |  <a href="tipps.html">Reisetipps</a>  |  |  |
|  |  |  <a href="galerie.html">Galerie</a>   |  |  |
|  |  |  <a href="inspiration.html">Inspira-  |  |  |
|  |  |  tion</a>                             |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |               Section: Reiseziele           |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Unsere beliebtesten Reiseziele</h2>|  |  |
|  |  |  <div class="grid">                   |  |  |
|  |  |    <div class="destination">          |  |  |
|  |  |      <h3>Bali, Indonesien</h3>        |  |  |
|  |  |      <img src="img/bali.jpeg" alt="Bali"> | |  |
|  |  |      <p>Entspanne an traumhaften      |  |  |
|  |  |      Stränden und entdecke die       |  |  |
|  |  |      Tempel der Insel.</p>            |  |  |
|  |  |    </div>                             |  |  |
|  |  |    <div class="destination">          |  |  |
|  |  |      <h3>Paris, Frankreich</h3>       |  |  |
|  |  |      <img src="img/paris.jpeg" alt="Paris"> | |  |
|  |  |      <p>Die Stadt der Liebe – ein     |  |  |
|  |  |      Paradies für Kultur- und         |  |  |
|  |  |      Kunstliebhaber.</p>              |  |  |
|  |  |    </div>                             |  |  |
|  |  |  </div>                               |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                  Footer                     |  |
|  |  +---------------------------------------+  |  |
|  |  |  <p>&copy; 2025 Reise & Abenteuer</p> |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
+---------------------------------------------------+
```

reisetipps.html:

```
+---------------------------------------------------+
|                       Body                        |
|  +---------------------------------------------+  |
|  |                   Header                    |  |
|  |  +---------------------------------------+  |  |
|  |  |    <h1>Reisetipps</h1>                |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                    Nav                      |  |
|  |  +---------------------------------------+  |  |
|  |  |  <a href="index.html">Startseite</a>  |  |  |
|  |  |  <a href="reiseziele.html">Top Reise- |  |  |
|  |  |  Ziele</a>                            |  |  |
|  |  |  <a href="tipps.html">Reisetipps</a>  |  |  |
|  |  |  <a href="galerie.html">Galerie</a>   |  |  |
|  |  |  <a href="inspiration.html">Inspira-  |  |  |
|  |  |  tion</a>                             |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |               Section: Reisetipps           |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Wichtige Reisetipps</h2>         |  |  |
|  |  |  <h3>Packliste</h3>                   |  |  |
|  |  |  <ul>                                 |  |  |
|  |  |    <li>Reisepass & Visum</li>         |  |  |
|  |  |    <li>Reiseadapter</li>              |  |  |
|  |  |    <li>Leichte Kleidung & wetter-     |  |  |
|  |  |    feste Ausrüstung</li>              |  |  |
|  |  |  </ul>                                |  |  |
|  |  |  <h3>Günstig reisen</h3>              |  |  |
|  |  |  <table>                              |  |  |
|  |  |    <tr><th>Ort</th><th>Günstige Reise-|  |  |
|  |  |    zeit</th></tr>                     |  |  |
|  |  |    <tr><td>Thailand</td><td>Mai -     |  |  |
|  |  |    Oktober</td></tr>                  |  |  |
|  |  |    <tr><td>Portugal</td><td>November- |  |  |
|  |  |    März</td></tr>                     |  |  |
|  |  |  </table>                             |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                  Footer                     |  |
|  |  +---------------------------------------+  |  |
|  |  |  <p>&copy; 2025 Reise & Abenteuer</p> |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
+---------------------------------------------------+

```

galerie.html:

```
+---------------------------------------------------+
|                       Body                        |
|  +---------------------------------------------+  |
|  |                   Header                    |  |
|  |  +---------------------------------------+  |  |
|  |  |    <h1>Reisegalerie</h1>              |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                    Nav                      |  |
|  |  +---------------------------------------+  |  |
|  |  |  <a href="index.html">Startseite</a>  |  |  |
|  |  |  <a href="reiseziele.html">Top Reise- |  |  |
|  |  |  Ziele</a>                            |  |  |
|  |  |  <a href="tipps.html">Reisetipps</a>  |  |  |
|  |  |  <a href="galerie.html">Galerie</a>   |  |  |
|  |  |  <a href="inspiration.html">Inspira-  |  |  |
|  |  |  tion</a>                             |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |             Section: Galerie                |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Erkunde unsere Bildergalerie</h2>|  |  |
|  |  |  <div class="grid">                   |  |  |
|  |  |    <img src="img/berge.jpeg" alt="Berge"> |  |  |
|  |  |    <img src="img/stadt.jpeg" alt="Stadt"> |  |  |
|  |  |    <img src="img/strand.jpeg" alt="Strand"> | |  |
|  |  |  </div>                               |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                  Footer                     |  |
|  |  +---------------------------------------+  |  |
|  |  |  <p>&copy; 2025 Reise & Abenteuer</p> |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
+---------------------------------------------------+

```

inspiration.html:

```
+---------------------------------------------------+
|                       Body                        |
|  +---------------------------------------------+  |
|  |                   Header                    |  |
|  |  +---------------------------------------+  |  |
|  |  |    <h1>Reise-Inspiration</h1>         |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                    Nav                      |  |
|  |  +---------------------------------------+  |  |
|  |  |  <a href="index.html">Startseite</a>  |  |  |
|  |  |  <a href="reiseziele.html">Top Reise- |  |  |
|  |  |  Ziele</a>                            |  |  |
|  |  |  <a href="tipps.html">Reisetipps</a>  |  |  |
|  |  |  <a href="galerie.html">Galerie</a>   |  |  |
|  |  |  <a href="inspiration.html">Inspira-  |  |  |
|  |  |  tion</a>                             |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |            Section: Reise-Inspiration       |  |
|  |  +---------------------------------------+  |  |
|  |  |  <h2>Finde Inspiration für dein       |  |  |
|  |  |      nächstes Abenteuer</h2>          |  |  |
|  |  |  <p>Schau dir dieses tolle Reisevideo |  |  |
|  |  |  an und lass dich inspirieren!</p>    |  |  |
|  |  |  <div style="text-align: center;">    |  |  |
|  |  |    <iframe width="560" height="315"   |  |  |
|  |  |      src="https://www.youtube.com/    |  |  |
|  |  |      embed/dQw4w9WgXcQ"               |  |  |
|  |  |      allowfullscreen>                 |  |  |
|  |  |    </iframe>                          |  |  |
|  |  |  </div>                               |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
|  +---------------------------------------------+  |
|  |                  Footer                     |  |
|  |  +---------------------------------------+  |  |
|  |  |  <p>&copy; 2025 Reise & Abenteuer</p> |  |  |
|  |  +---------------------------------------+  |  |
|  +---------------------------------------------+  |
+---------------------------------------------------+

```

#### 5 Kompositionsdiagramm
Da es schwierig ist bei den Kompositionsdiagrammen die Verbindungen grafisch darzustellen, werde ich diese nur kurz beschreiben.

- über die Navigationsleiste, die auf jeder Unterseite gleich aussieht, kommt man zu allen anderen anderen Unterseiten  