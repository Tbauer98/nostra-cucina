# Nostra Cucina

Landingpage für ein fiktives italienisches Restaurant.
Umgesetzt im Rahmen der Weiterbildung zum Software Engineer als Teamprojekt.

---

## Technik

- HTML5 (semantisch: `header`, `main`, `section`, `article`, `footer`)
- CSS3 (Grid und Flexbox, CSS-Variablen, Media Query)
- JavaScript ausschließlich für das Burger-Menü

Keine Frameworks, keine externen Bibliotheken.

---

## Projektstruktur

```
nostra-cucina/
├── index.html                            Startseite
├── style.css                             gesamtes Styling
├── script.js                             Burger-Menü
└── nostra_cucina_logo_transparent.png    Logo
```

---

## Aufgabenverteilung

| Bereich | Umsetzung |
|---|---|
| Header (Logo, Navigation, Burger-Menü) | Michael |
| Footer (Spalten, Social Icons, Newsletter) | Michael |
| Burger-Menü (JavaScript) | Michael |
| Zusammenführung HTML und CSS | Michael |
| Hero-Sektion | Tomas |
| Main-Sektion | Tomas |

---

## Design

Farben und Schriftart wurden im Team abgestimmt und liegen als CSS-Variablen
im Block `:root` am Anfang der `style.css`. Eine Änderung dort wirkt sich auf
das gesamte Projekt aus.

| Variable | Wert | Verwendung |
|---|---|---|
| `--c-cream` | `#fcfaf8` | Hintergrund Header, Hero, Karten |
| `--c-white` | `#ffffff` | Nav-Kachel, Spezialitäten-Sektion |
| `--c-red` | `#9d3f3f` | Überschriften, Akzente |
| `--c-green` | `#404c48` | Footer, Buttons |
| `--c-text` | `#333333` | Fließtext |

Schriftart: Arial (Systemschrift, keine externe Einbindung).

---

## Responsives Verhalten

Breakpoint: **768px**

Unterhalb von 768px:

- Die Navigation wird ausgeblendet, die Links sind über das Burger-Menü erreichbar
- Die Footer-Spalten stapeln sich untereinander
- Die Spezialitäten-Karten rutschen untereinander (`flex-wrap`)
- Schriftgrößen und Abstände werden reduziert

---

## Barrierefreiheit

- `aria-label` an allen Navigationen und Social-Icons
- `aria-expanded` und `aria-controls` am Burger-Button, per JavaScript aktualisiert
- `hidden` am Ausklappmenü, damit es im geschlossenen Zustand auch für Screenreader nicht erreichbar ist
- Sichtbare Fokus-Rahmen über `:focus-visible`

---

## Lokal starten

Repository klonen und `index.html` im Browser öffnen.
Ein Server wird nicht benötigt.

---

## Offene/ wichtige Punkte

- Unterseiten `about.html`, `menue.html` und `contact.html` sind nicht angelegt
- Bilder für die Hero-Sektion fehlen??
- Logo-Höhe muss nach der finalen Logo-Auswahl angepasst werden

