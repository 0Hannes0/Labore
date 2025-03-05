# Labor 1
## 1.6. Erste HTML-Seite
```html
<!DOCTYPE html>                             <!--Information für Browser um welche html version es sich bei der aktuellen webseite handelt-->
    <html lang="en">                        <!--kennzeichnet das Dokument als html-Dokument-->
        <head>                              <!--enthält Metadaten, welche nicht in dem sichtbaren Teil der Webseite angezeigt werden-->
            <meta charset="utf-8">          <!--speichert Metadaten wie z.b den Zeichensatz -->
            <title>Hello my Friend!</title> <!--Titel der Seite, erscheint im browser tab -->
        </head>
        <body>                              <!--enthält die sichtbaren Inhalte der Webseite-->
            <article>                       <!--Inhalte die unabhängig für sich alleine stehen können-->
                <h2>Hello my Friend!</h2>   <!--Überschrift (h2 zweit größte Überschrift)-->
                <p>Visual studio code is working fine.</p> <!--Textabsatz-->
            </article>
        </body>
    </html>
```

## 2.2. Quelltext von Web-Seiten
#### 1. Wofür steht die Deklaration \<!DOCTYPE html>
- zeigt an welchen Dokumententyp ein Browser öffnen soll und welche code syntax und grammatik verwendet wird
#### 2. Suchen sie nach dem \<HTML>-Tag und erklären sie die dort verwendeten Attribute (dir="ltr" lang="de-DE" class="no-js")
- dir="ltr": gibt die Text Richtung("direction") an die von links nach recht geht (left to right)
- lang="de-DE": gibt die Sprache an in diesem Fall deutsch für Deutschland
- class="no-js": zeigt ob javascript im Browser aktiviert ist oder nicht, in dem fall ist es deaktiviert
#### 3. Welches Zeichensatz-Encoding verwendet die Web-Seite
- UTF8
#### 4. href Attribute
- Ipressum: es öffnet sich ein neuer Tab und man landet auf der Impressum seite der DHBW Web-Seite
- Instagram: es öffnet sich ein neuer Tab und man landet auf der Instagram seite der dhbw
- css:
- js:

## 2.3. Entwicklungswerkzeuge
#### 4. Die ersten fünf Webobjekte und ihre Ladezeit
- security/?sentry_key=c7b33dfea5e4a45ee44013171a669946 -> 56ms
- security/?sentry_key=c7b33dfea5e4a45ee44013171a669946 -> 52ms
- csm_2502_Tourismustag_0528afde22.jpg ->  1ms
- csm_2501_Biberacher_Wirtschaftpreis_be20e737e5.jpg ->3ms
- csm_2501_Muenschen_65378dcaf7.jpg -> 1ms
- 

#### 5. Die ersten vier Headereinträge für den Request wie den Response Header und deren Bedeutung
##### Beispiel 1
- Request Header:
>:authority:
www.ravensburg.dhbw.de
:method:
GET
:path:
/startseite
:scheme:
https
accept:
text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7
accept-encoding:
gzip, deflate, br, zstd
accept-language:
en-US,en;q=0.9
cache-control:
max-age=0
cookie:
cookiefirst-consent=%7B%22necessary%22%3Atrue%2C%22performance%22%3Afalse%2C%22functional%22%3Afalse%2C%22advertising%22%3Afalse%2C%22timestamp%22%3A1738597020%2C%22type%22%3A%22category%22%2C%22version%22%3A%22bf2afc86-8b02-429f-aedb-0edecf9b9eaf%22%7D
priority:
u=0, i
sec-ch-ua:
"Not A(Brand";v="8", "Chromium";v="132"
sec-ch-ua-mobile:
?0
sec-ch-ua-platform:
"Linux"
sec-fetch-dest:
document
sec-fetch-mode:
navigate
sec-fetch-site:
none
sec-fetch-user:
?1
upgrade-insecure-requests:
1
user-agent:
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36
- Response Header:
>content-language:
de
content-security-policy-report-only:
default-src 'self'; report-uri https://sentry2.in2code.de/api/24/security/?sentry_key=c7b33dfea5e4a45ee44013171a669946
content-type:
text/html; charset=utf-8
date:
Mon, 03 Feb 2025 15:49:53 GMT
server:
Apache
strict-transport-security:
max-age=15552000;icloudludeSubdomains
x-content-type-options:
nosniff
x-frame-options:
SAMEORIGIN
x-xss-protection:
1; mode=block
- Bedeutung:
>Der Request zeigt, dass der Browser eine Anfrage an die Webseite gestellt hat, um die Startseite der DHBW Ravensburg zu laden. Die Anfrage wurde über HTTPS gesendet.
Im Response hat der Server die angeforderte Seite zurückgeschickt. Die Antwort wurde auf Deutsch und im richtigen Format (HTML) gesendet.

##### Beispiel 2
- Request Header:
>referer:
https://www.ravensburg.dhbw.de/startseite
sec-ch-ua:
"Not A(Brand";v="8", "Chromium";v="132"
sec-ch-ua-mobile:
?0
sec-ch-ua-platform:
"Linux"
user-agent:
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36
- Response Header:
> accept-ranges:
bytes
cache-control:
max-age=7776000
content-encoding:
gzip
content-length:
253
content-type:
text/css
date:
Mon, 03 Feb 2025 15:36:47 GMT
etag:
"1fc-60b37f0ca4ff2-gzip"
expires:
Sun, 04 May 2025 15:36:47 GMT
last-modified:
Tue, 28 Nov 2023 15:19:11 GMT
server:
Apache
vary:
Accept-Encoding
x-content-type-options:
nosniff
x-frame-options:
SAMEORIGIN
x-xss-protection:
1; mode=block

- Bedeutung:
>Request: Der Browser sendet eine Anfrage, um eine CSS-Datei von der Seite www.ravensburg.dhbw.de/startseite zu laden. Es werden zusätzlich Informationen über den verwendeten Browser und das Betriebssystem (Linux) übermittelt.
Response: Der Server sendet die angeforderte CSS-Datei im komprimierten Format zurück. Die Datei kann bis zu 3 Monate im Cache gespeichert werden.

##### Beispiel 3
- Request Header:
>referer:
https://www.ravensburg.dhbw.de/startseite
sec-ch-ua:
"Not A(Brand";v="8", "Chromium";v="132"
sec-ch-ua-mobile:
?0
sec-ch-ua-platform:
"Linux"
user-agent:
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36
- Response Header:
>accept-ranges:
bytes
cache-control:
max-age=7776000
content-encoding:
gzip
content-length:
5454
content-type:
application/javascript
date:
Mon, 03 Feb 2025 15:36:47 GMT
etag:
"3358-62bac6234f9b7-gzip"
expires:
Sun, 04 May 2025 15:36:47 GMT
last-modified:
Tue, 14 Jan 2025 15:40:42 GMT
server:
Apache
vary:
Accept-Encoding
x-content-type-options:
nosniff
x-frame-options:
SAMEORIGIN
x-xss-protection:
1; mode=block


- Bedeutung:
>Request: Der Browser fordert eine JavaScript-Datei an, die von der Seite ww.ravensburg.dhbw.de/startseite kommt. Enthält unteranderem Informationen über den verwendeten Browser (Chrome) und das Betriebssystem (Linux).
Response: Der Server sendet die angeforderte JavaScript-Datei im komprimierten Format zurück. Die Datei kann bis zu 3 Monate im Cache des Browsers gespeichert werden. Der Server stellt sicher, dass die Datei korrekt verarbeitet wird (mit dem Header x-content-type-options: nosniff) und schützt vor Angriffen wie XSS oder Clickjacking durch aktive Sicherheitsmechanismen (x-xss-protection und x-frame-options).

##### Beispiel 4
- Request Header:
>referer:
https://www.ravensburg.dhbw.de/startseite
sec-ch-ua:
"Not A(Brand";v="8", "Chromium";v="132"
sec-ch-ua-mobile:
?0
sec-ch-ua-platform:
"Linux"
user-agent:
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/132.0.0.0 Safari/537.36
- Response Header:
>accept-ranges:
bytes
content-length:
93779
content-security-policy:
default-src 'self'; script-src 'none'; style-src 'none'; object-src 'none';
content-type:
image/png
date:
Mon, 03 Feb 2025 15:36:50 GMT
etag:
"16e53-5d783170ee83b"
last-modified:
Tue, 08 Feb 2022 15:08:31 GMT
server:
Apache
x-content-type-options:
nosniff
x-frame-options:
SAMEORIGIN
x-xss-protection:
1; mode=block

- Bedeutung:
>Request: Der Browser fordert ein PNG-Bild von der Seite www.ravensburg.dhbw.de/startseite an und überträgt Informationen über den verwendeten Browser (Chrome) und das Betriebssystem (Linux).
Response: Der Server sendet das angeforderte PNG-Bild zurück. 

#### 7. matomo Ordner im Quellcode Tab
Matomo Bedeutung:
- ist eine Open-Source-Webanalyse-Software, die es ermöglicht, Besucherstatistiken und Nutzerinteraktionen auf einer Website zu verfolgen
- bietet detaillierte Informationen über Traffic, Benutzerverhalten, Conversion-Raten, etc.
- ähnlich zu Google Analytics, aber mit mehr Kontrolle über die Daten, da es auf dem eigenen Server betrieben werden kann

