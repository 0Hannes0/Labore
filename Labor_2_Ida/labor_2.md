# Labor 2
## 1.1 XML Dokumente und Namespaces
#### 1. XML Namespaces und ihr Einsatzzweck
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

