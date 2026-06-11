SCREEN 06 — ESTA NOITE (home feed)
════════════════════════════════════════
- Top bar no back arrow:
  Left: avatar circle sm 32px (user "😊" #e8ff47) + "Olá, Lucas 👋" 14px white
  Right: notification bell icon 22px #888 + dot indicator accent 6px

- Search bar below top bar:
  bg #161616 border #242424 radius 12px padding 12px 16px
  "🔍" icon left #555 + placeholder "Buscar eventos, artistas..." #555

- Horizontal filter tabs scroll:
  "Todos" | "Rock" | "Funk" | "Techno" | "House" | "Eletrônico" | "Sertanejo"
  Active: bg accentBg border accent text accent
  Inactive: bg transparent text #555

- FEATURED CARD (first card larger):
  Full-width card radius 18px overflow hidden:
  Image placeholder 390x180px X lines bg #1e1e1e
  Bottom overlay gradient black transparent:
    Genre pill top-left: "ROCK" accent pill
    Stars "★ 4.6" + "47 confirmados" bottom-left white bold
    "Hoje 22h" right-aligned #e8ff47
  Below image in card padding 14px:
    "Festa do Rock 2026" Clash Display 18px white bold
    "Bar XV • Curitiba" 12px #888 + distance "3.2 km" accent right
    Row: avatars overlap 4x24px + "+42 vão" 12px #888 + "Ver" button right

- EVENT LIST 2 more cards compact:
  Each: horizontal layout, card radius 14px padding 14px:
  LEFT: image placeholder 72x72px radius 10px X lines
  RIGHT col:
    Genre pill + name bold 14px white
    Time + venue 12px #888
    Bottom row: "★ X.X" accent + confirmados #888 + "Ver" button sm right
  Card 2: "Techno Rave" / "Hoje 23h • Wavehouse" / "123 conf" / ★4.9
  Card 3: "Funk Night" / "Hoje 23h30 • Clubão" / "89 conf" / ★3.9

- Bottom nav (◈ Início active accent)

════════════════════════════════════════
SCREEN 07 — MAPA
════════════════════════════════════════
- Top floating header (absolute, not blocking map):
  bg rgba(8,8,8,0.85) blur(12px) border-bottom #242424
  "Eventos Próximos" Clash Display 16px + 🔔 right

- Full-screen map bg #0f1a0f (dark green tint):
  Grid lines #1a2a1a faint, labels street names #2a3a2a
  3 event pins custom styled:
    Pin shape: circle 40px bg accent/person-color shadow
    Inner: event emoji or name initial
    Pin 1 (Festa do Rock): bg #e8ff47 "🎸" — largest, pulse ring
    Pin 2 (Techno Rave): bg #38bdf8 "⚡"
    Pin 3 (Funk Night): bg #f97316 "🎵"
  User location: filled dot 16px accent + outer ring pulse animation
    rgba(232,255,71,0.3) expanding ring

- Bottom sheet card (draggable, default half height):
  Handle bar 32x4px bg #333 centered top
  bg #0f0f0f radius 24px 24px 0 0 border-top #242424
  "Próximo de você" 11px #888 uppercase letter-spacing 1.5px
  Featured event row: pin icon accent + name + time + distance
  Button primary "Ver evento" full-width

- Bottom nav (◉ Mapa active)

════════════════════════════════════════
SCREEN 08 — DETALHE DO EVENTO
════════════════════════════════════════
- Hero image placeholder full-bleed 390x260px X lines bg #1e1e1e
  Overlays on image:
    Back button absolute top-left 14px: 36x36 bg rgba(8,8,8,0.7)
      blur border #333 radius 10px "←" white
    Share button absolute top-right same style: "↗"
    Bottom gradient overlay dark:
      Genre pill bottom-left: "ROCK" accent
      "★ 4.6" white bold bottom-right

- STICKY HEADER (shows on scroll, hidden at top):
  bg #080808 border-bottom #242424
  "Festa do Rock 2026" 16px white bold + back arrow left

- Content body padding 20px gap 20px:

  "Festa do Rock 2026" Clash Display 24px white weight 800
  
  Info row: clock icon + "Hoje, 22h — 05h" #888 |
            pin icon + "Bar XV, Curitiba" #888
  
  Stats bar 3 cols (bg #161616 border #242424 radius 14px):
    [47 confirmados] [23 ingressos] [R$40 desde]
    value bold 18px accent / label 10px #888 uppercase
  
  SECTION "SOBRE O EVENTO"
    Text placeholder 3 lines #888 13px line-height 1.7
  
  SECTION "QUEM VAI ESTAR LÁ"
    Header row: "Quem vai estar lá?" bold white + "ver todos →" accent
    Avatars row: 5 overlapping circles 36px (real emoji avatars
    from PERSON DATA above) + "+42" 13px #888
  
  SECTION "LOCALIZAÇÃO"
    Map thumbnail placeholder 100% x 120px radius 14px X lines
    "Bar XV — Rua Av. 800, Curitiba" 13px #888 below
  
  FIXED BOTTOM BAR border-top #242424 bg #080808 padding 16px:
    Left: "R$40" Clash Display 22px accent bold + "/ pessoa" 12px #888
    Right: Button primary "Comprar ingresso" width auto padding 14px 24px

════════════════════════════════════════
SCREEN 09 — COMPRAR INGRESSO
════════════════════════════════════════
- Header: back arrow + "Comprar Ingresso" + event name small #888 subtitle

- Event recap card bg #161616 border #242424 radius 14px padding 14px:
  Image thumbnail 60x60px X lines radius 10px left
  Right: name bold 14px + time #888 + venue #888

- SECTION "ESCOLHA SEU LOTE"
  3 selectable cards stacked radius 14px border padding 16px:
    Row: radio circle left + info center + price right
    Radio: 20px circle border 2px, selected = filled accent dot inside
    Info: lote name bold 14px white + availability "Restam X ingressos" 11px #888
    Price: bold 18px right, selected = accent color
    
    Lote 1: ○ "1° Lote" / "Últimos 8 disponíveis" / R$40
    Lote 2: ● SELECTED bg #e8ff4708 border accent /
             "2° Lote — Mais popular" / R$60 accent
    Lote 3: ○ "Pista VIP" / "Acesso exclusivo" / R$180

- SECTION "FORMA DE PAGAMENTO"
  3 payment option cards horizontal row:
    Each 110px height radius 14px border:
      Icon centered + label 11px #888
    ● PIX selected (border accent) / ○ Cartão / ○ Crypto
    Selected state: border accent bg #e8ff4705

- ORDER SUMMARY card bg #161616 radius 14px padding 16px:
  Row: "2° Lote" left "#888" + "R$60" right
  Row: "Taxa de serviço" #888 + "R$6" #888
  Divider 1px #242424
  Row bold: "Total" white + "R$66" accent 18px

- FIXED BOTTOM: Button primary "Finalizar compra" full-width
  + "Pagamento 100% seguro 🔒" 11px #555 centered below
