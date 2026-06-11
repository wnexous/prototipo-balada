LINKUP APP — Event Feed Update
Replace SCREEN 06 and SCREEN 07 with the versions below.
All other screens remain identical to the previous prompt.
Same design tokens: bg #080808, cards #161616, borders #242424,
accent #e8ff47, font DM Mono + Clash Display, frame 390x844px.

EVENT DATABASE (use across screens 06, 07, 08):
Event 01: "Festa do Rock 2026"     genre Rock      time "Hoje 22h–05h"  venue "Bar XV"        city Curitiba  price R$40  conf 47   rating 4.6  emoji 🎸  color #e8ff47
Event 02: "Techno Rave"            genre Techno    time "Hoje 23h–06h"  venue "Wavehouse"     city Curitiba  price R$30  conf 123  rating 4.9  emoji ⚡  color #38bdf8
Event 03: "Funk Night"             genre Funk      time "Hoje 23h30–05h" venue "Clubão"       city Curitiba  price R$20  conf 89   rating 3.9  emoji 🎵  color #f97316
Event 04: "House Sessions"         genre House     time "Hoje 00h–07h"  venue "Void Club"     city Curitiba  price R$50  conf 201  rating 4.8  emoji 🏠  color #c084fc
Event 05: "Pagodão da Sexta"       genre Pagode    time "Hoje 21h–04h"  venue "Samba Hall"    city Curitiba  price R$25  conf 156  rating 4.5  emoji 🥁  color #4ade80
Event 06: "Sertanejo Premium"      genre Sertanejo time "Hoje 21h30–05h" venue "Arena Sul"    city Curitiba  price R$60  conf 312  rating 4.3  emoji 🤠  color #facc15
Event 07: "Hip Hop Underground"    genre Hip-Hop   time "Hoje 22h–05h"  venue "Base Club"     city Curitiba  price R$35  conf 98   rating 4.7  emoji 🎤  color #f472b6
Event 08: "Jazz & Bossa Lounge"    genre Jazz      time "Hoje 20h–02h"  venue "Café Bossa"    city Curitiba  price R$45  conf 44   rating 4.9  emoji 🎷  color #38bdf8
Event 09: "Eletrônico ao Vivo"     genre Eletrônico time "Hoje 23h–07h" venue "Hangar 522"   city Curitiba  price R$55  conf 178  rating 4.6  emoji 🎹  color #e879f9
Event 10: "Axé Carnaval Antecipado" genre Axé      time "Hoje 21h–05h"  venue "Bloco Central" city Curitiba  price R$30  conf 267  rating 4.2  emoji 🪘  color #fb923c
Event 11: "Indie & Alternativo"    genre Indie     time "Hoje 22h30–04h" venue "The Roof"    city Curitiba  price R$40  conf 73   rating 4.8  emoji 🎸  color #a3e635
Event 12: "Reggae Roots Night"     genre Reggae    time "Hoje 21h–03h"  venue "Marley Bar"   city Curitiba  price R$20  conf 91   rating 4.4  emoji 🌿  color #4ade80

════════════════════════════════════════
SCREEN 06 — ESTA NOITE (event feed — FULL REDESIGN)
════════════════════════════════════════
- Status bar top 12px #444

- TOP BAR no back arrow, bg #080808:
  Left col:
    "Boa noite 🌙" DM Mono 12px #888
    "O que rola hoje" Clash Display 22px #f5f5f5 bold
  Right: user avatar circle 36px accent border "😊"
         + notification bell 22px #888 with accent dot 6px

- SEARCH BAR:
  bg #161616 border 1.5px #242424 radius 12px
  padding 12px 16px full-width
  Left: 🔍 icon #555
  Input placeholder: "Buscar eventos, artistas, venues..." #444
  Right: filter icon "⊟" #555 (no connection)

- GENRE FILTER TABS — horizontal scroll, no wrap:
  Tabs: Todos | Rock | Funk | Techno | House | Pagode |
        Sertanejo | Hip-Hop | Jazz | Eletrônico | Axé | Indie | Reggae
  Style each tab:
    Active tab: bg = genre event color at 15% / border 1px genre color /
                text = genre color / font DM Mono 11px bold
    Inactive: bg transparent border #242424 text #444
  Active default: "Todos"

- EVENT SECTIONS — each genre gets its own titled section:
  Layout: vertical scroll of sections, each section contains
  one horizontal scroll row of event cards for that genre.

  SECTION HEADER row per genre:
    Left: genre emoji (from event data) + genre name Clash Display 16px white
    Right: "ver todos" 12px accent (no connection)
    margin-bottom 12px

  EVENT CARD per event — horizontal scroll inside each section:
  Card size: 200x280px, radius 18px, bg #161616, border #242424
  Overflow hidden. Each card is a vertical layout:

    TOP IMAGE AREA 200x130px:
      Image placeholder X lines bg #1a1a1a
      TOP-LEFT: genre pill bg = event color 20% / border 1px event color /
                text event color bold 10px / padding 4px 10px / radius 999px
      TOP-RIGHT: distance "3.2 km" bg rgba(0,0,0,0.6) text #f5f5f5 10px
                 padding 4px 10px radius 999px
      BOTTOM-LEFT: rating "★ X.X" bg rgba(0,0,0,0.6) text accent 11px bold
                   padding 4px 10px radius 999px

    BOTTOM CONTENT AREA padding 12px:
      Event name: Clash Display 14px #f5f5f5 bold — 2 lines max
      Time: DM Mono 11px #888 — "Hoje 22h • Bar XV"
      Confirmed row: avatars 3x overlap 20px + "X confirmados" 11px #888
      
      BOTTOM ROW:
        Price: "R$XX" DM Mono 14px event color bold
        "Ver →" button: bg event color 15% border 1px event color
                        text event color 11px bold radius 8px padding 5px 10px

  SECTIONS ORDER AND CONTENT:

  SECTION 1 — 🎸 Rock
    Cards: Event 01 "Festa do Rock 2026" | Event 11 "Indie & Alternativo"

  SECTION 2 — ⚡ Techno
    Cards: Event 02 "Techno Rave" | Event 09 "Eletrônico ao Vivo"

  SECTION 3 — 🎵 Funk
    Cards: Event 03 "Funk Night"

  SECTION 4 — 🏠 House
    Cards: Event 04 "House Sessions"

  SECTION 5 — 🥁 Pagode
    Cards: Event 05 "Pagodão da Sexta"

  SECTION 6 — 🤠 Sertanejo
    Cards: Event 06 "Sertanejo Premium"

  SECTION 7 — 🎤 Hip-Hop
    Cards: Event 07 "Hip Hop Underground"

  SECTION 8 — 🎷 Jazz
    Cards: Event 08 "Jazz & Bossa Lounge"

  SECTION 9 — 🪘 Axé
    Cards: Event 10 "Axé Carnaval Antecipado"

  SECTION 10 — 🌿 Reggae
    Cards: Event 12 "Reggae Roots Night"

  ⚠ FILTER INTERACTION:
  When user taps "Rock" filter tab:
    → Only SECTION 1 Rock is visible, all others hidden
    → Smooth transition (opacity + height collapse)
  When user taps "Todos":
    → All sections visible
  Same logic for every genre tab.

- FEATURED STRIP — above all sections, below filter tabs:
  Label: "🔥 Em Alta Agora" Clash Display 16px white + "ao vivo" red pill right
  1 large featured card full-width 100%x180px radius 18px:
    bg #1e1e1e image placeholder X lines
    Overlay gradient bottom: black transparent
    TOP-LEFT: "EM ALTA" pill bg #ff3b3b text white 10px bold
    TOP-RIGHT: "⚡ 201 online agora" bg rgba(0,0,0,0.7) text accent 10px
    BOTTOM: "House Sessions" Clash Display 18px white bold
            "Void Club • Hoje 00h" #888 12px +
            "R$50" event color right + "Ver →" button accent small

- Bottom nav (◈ Início active accent)

════════════════════════════════════════
SCREEN 06B — ESTA NOITE (genre filtered view)
════════════════════════════════════════
NOTE: Create this as a variant of Screen 06
shown when user taps a specific genre filter (example: "Rock")

- Same top bar + search bar
- Filter tabs: "Rock" tab now active (border + text = event color #e8ff47)
- No featured strip visible
- Single section shown:
  Section header: "🎸 Rock — 2 eventos" Clash Display 16px
  Horizontal scroll with Event 01 + Event 11 cards (same card style)
- Below card list: "Não encontrou o que queria?" 13px #555
  "Ver todos os eventos →" accent underline
- Bottom nav same

════════════════════════════════════════
SCREEN 07 — MAPA (updated with all 12 events)
════════════════════════════════════════
- Top floating header absolute:
  bg rgba(8,8,8,0.9) blur(16px) border-bottom #1a1a1a
  padding 14px 18px:
  Left: back arrow card
  Center: "Eventos Próximos" Clash Display 16px white
  Right: filter icon "⊟" + notification "🔔" gap 12px #888

- SEARCH BAR floating below header:
  bg rgba(22,22,22,0.9) blur(8px) border #242424 radius 12px
  margin 0 16px padding 12px 16px
  "🔍 Buscar no mapa..." #555

- FULL SCREEN MAP bg #0a1a0a dark green toned:
  Faint grid + street name placeholders #1e2e1e

  12 EVENT PINS on map at varied positions:
  Each pin is a circle 44px:
    bg = event color at 90%
    border 2px white
    emoji centered 18px
    box-shadow 0 4px 12px event color 50%
  Pin sizes vary by popularity:
    High conf (200+): 52px / Mid (80-199): 44px / Low (<80): 36px

  Pin positions (varied, not clustered):
    Event 01 Rock 🎸 #e8ff47 → top-left area
    Event 02 Techno ⚡ #38bdf8 → top-right
    Event 03 Funk 🎵 #f97316 → mid-left
    Event 04 House 🏠 #c084fc → center (largest, 52px)
    Event 05 Pagode 🥁 #4ade80 → mid-right
    Event 06 Sertanejo 🤠 #facc15 → bottom-right
    Event 07 Hip-Hop 🎤 #f472b6 → bottom-left
    Event 08 Jazz 🎷 #38bdf8 → top-center
    Event 09 Eletrônico 🎹 #e879f9 → mid-center-right
    Event 10 Axé 🪘 #fb923c → bottom-center
    Event 11 Indie 🎸 #a3e635 → far top-right
    Event 12 Reggae 🌿 #4ade80 → far bottom-left

  USER LOCATION dot:
    Center of map: 16px filled #e8ff47 + white border 2px
    Outer pulse ring 1: rgba(232,255,71,0.2) 32px
    Outer pulse ring 2: rgba(232,255,71,0.08) 48px

- BOTTOM SHEET (draggable panel):
  bg #0f0f0f radius 24px 24px 0 0 border-top #242424
  Handle: 32x4px bg #333 centered top margin 12px

  DEFAULT STATE — list preview:
  "12 eventos próximos" DM Mono 12px #888 + "ordenar ▾" accent right

  MINI EVENT LIST 3 rows visible before scroll:
  Each row: height 64px padding 0 16px border-bottom #1a1a1a:
    Left: pin circle 36px (event color + emoji)
    Center: name 13px white bold + venue + distance #888 11px
    Right: price event color bold 13px + "Ver" button sm

    Row 1: 🏠 House Sessions / Void Club / 0.8km / R$50
    Row 2: 🎸 Festa do Rock / Bar XV / 1.2km / R$40
    Row 3: ⚡ Techno Rave / Wavehouse / 2.1km / R$30
    "... e mais 9 eventos" 12px #555 centered

  ON PIN TAP — bottom sheet expands showing tapped event:
    Large event card: image placeholder 100%x100px radius 14px X lines
    Name bold 18px + time + venue + stats row + "Ver evento" button primary

- GENRE FILTER FLOATING ROW below search bar:
  Horizontal scroll pill chips:
  "Todos" | "🎸" | "⚡" | "🎵" | "🏠" | "🥁" | "🤠" | "🎤" | "🎷" | "🎹" | "🪘" | "🌿"
  Active: bg event color 15% border event color
  When tapped: only that genre's pin shows on map, others fade to 20% opacity

- Bottom nav (◉ Mapa active)

════════════════════════════════════════
PROTOTYPE CONNECTIONS (new/updated)
════════════════════════════════════════
06 Esta Noite → [genre filter tab tap] ─→ 06B Filtered view
06B Filtered → [Ver todos os eventos] ──→ 06 Esta Noite
06 Esta Noite → [any card "Ver →"] ─────→ 08 Detalhe
06B Esta Noite → [any card "Ver →"] ────→ 08 Detalhe
06 Esta Noite → [featured "Ver →"] ─────→ 08 Detalhe
07 Mapa → [any pin tap] ─────────────────→ 08 Detalhe
07 Mapa → [Ver evento in sheet] ─────────→ 08 Detalhe
All other connections remain identical to previous prompt.