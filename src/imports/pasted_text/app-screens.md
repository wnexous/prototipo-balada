SCREEN 10 — MEU INGRESSO (ticket)
════════════════════════════════════════
- Header: back arrow + "Meu Ingresso"

- Body centered padding 20px:

  SUCCESS STATE top:
    Checkmark circle 48px bg accent text dark animated
    "Pagamento confirmado!" 13px #3bff8a centered
    margin-bottom 24px

  TICKET CARD full visual ticket design:
    Outer: border 1.5px dashed accent radius 20px overflow hidden
    Glow: box-shadow 0 0 40px rgba(232,255,71,0.1)
    
    TOP BAND bg radial-gradient accent to #e8ff4799:
      Left: event name Clash Display 16px #080808 bold
            "★ Ingresso Válido" 11px #080808
      Right: genre pill dark + rating

    BODY bg #161616 padding 20px:
      Event: "Festa do Rock 2026" Clash Display 20px white
      Details grid 2x2:
        📅 "Hoje, 22h" | 📍 "Bar XV"
        🎟 "Pista VIP" | 👤 "Lucas M."
      
      Dashed separator full-width #242424 style dashed
      with two semicircle cutouts on edges (ticket shape)
      
      QR Code area centered:
        Square 160x160px bg white radius 12px
        Inside: QR pattern (grid of small squares, realistic)
        Below: "LINKUP-2026-ROCK-001" monospace 11px #555
               letter-spacing 2px
      
      Barcode strip at bottom:
        Thin bars pattern + "× × × × × × × ×" monospace

  Action buttons:
    Button secondary "Compartilhar ingresso" with share icon
    Button primary "Já estou no evento →"

════════════════════════════════════════
SCREEN 11 — QUEM ESTÁ AQUI
════════════════════════════════════════
- Header: back arrow + "Quem está aqui" +
  counter badge right: "6" bg accent text dark radius 999px padding 2px 9px

- Filter row: "Todos" | "Paquera" | "Amizade" | "Network"
  horizontal scroll pills

- Body 14px padding:
  → 2-column grid gap 12px — 6 person cards

  Each card: bg #161616 border #242424 radius 18px overflow hidden
  
  TOP AREA 100% x 130px relative:
    Avatar circle lg 72px centered vertically and horizontally
    bg = person color 12% / border 2px person color / emoji 32px
    Person color gradient overlay at very bottom of top area
    (linear-gradient transparent to person color 8%)
  
  BOTTOM AREA padding 12px:
    Name bold 15px #f5f5f5 + ", " + age #888 — on same line
    Bio text 11px #555 line-height 1.4 — 1 line truncated
    Interest pills row (1-2 pills): small pill bg #161616 border #242424
    
    "Curtir ♡" button full-width margin-top 10px:
      DEFAULT state: bg #161616 border #242424 text #555 height 36px radius 10px
      TAPPED/LIKED state: bg #e8ff4715 border accent text accent
                          text changes to "Curtido ✓" icon heart filled
    
  ⚠ CRITICAL INTERACTION PER CARD:
  Tapping "Curtir ♡" on Julia's card:
    1. Button animates: scale pulse → fills accent → "Curtido ✓"
    2. Card border glows person color for 0.5s
    3. Navigate to SCREEN 12-JULIA (Match screen with Julia's data)
  Same for every other person — each routes to their own Match variant.

════════════════════════════════════════
SCREEN 12 — MATCH (6 variants: one per person)
════════════════════════════════════════
- Full screen, NO header, NO nav. bg #080808.

- BACKGROUND EFFECTS:
  Radial gradient center: person color at 6% opacity fading to transparent
  Confetti particles: 20+ small dots (4-8px) scattered randomly
  colors: accent, person color, white — opacity 0.15-0.4, various positions

- Body centered column, padding 40px, gap 22px, justify center:

  STAR + TITLE:
    "★" 48px accent centered — animate: scale from 0 to 1.2 to 1
    "MATCH" Clash Display 40px accent letter-spacing 5px
    animate: slide up + fade in 0.4s delay 0.2s
    "Rolou reciprocidade ✨" DM Mono 12px #888 uppercase letter-spacing 2px

  AVATAR PAIR — strictly side by side, no overlap:
    Container: flex row justify-center align flex-end gap 28px
    
    LEFT — Você:
      Avatar circle xl 92px:
        bg #e8ff4712, border 2.5px accent,
        box-shadow 0 0 0 8px rgba(232,255,71,0.06)
                  0 0 30px rgba(232,255,71,0.15)
        "😊" 36px inside
      "Você" DM Mono 13px #f5f5f5 bold, margin-top 10px, centered
      ← these 2 elements (circle + label) in a flex column

    CENTER:
      "💫" 30px — margin-bottom 32px (sits between circles)

    RIGHT — matched person (varies per variant):
      Avatar circle xl 92px:
        bg = person color 12% opacity
        border 2.5px = person color
        box-shadow 0 0 0 8px person color 6% opacity
                  0 0 30px person color 18% opacity
        person emoji 36px inside
      "Name, age" DM Mono 13px bold = person color, margin-top 10px, centered
      ← also flex column: circle then label below

    ⚠ ZERO text/name overlap with circle images — labels are
    always below each avatar in their own column flex layout

  BODY TEXT centered:
    "Agora vocês podem conversar" 14px #888 line-height 1.9
    "antes de se encontrar na balada" 14px #888

  BUTTONS stacked gap 12px:
    Primary "💬 Mandar mensagem" height 52px → CHAT screen (this person)
    Secondary "Continuar no evento" height 52px → SCREEN 11
    Ghost "← Voltar" → SCREEN 11

  VARIANTS (create one frame per person):
    12a Julia: color #c084fc emoji 🌙 "Julia, 24"
    12b Maria: color #f97316 emoji 🔥 "Maria, 22"
    12c Carol: color #facc15 emoji ⚡ "Carol, 23"
    12d Paula: color #38bdf8 emoji 🌊 "Paula, 21"
    12e Ana:   color #4ade80 emoji 🌿 "Ana, 22"
    12f Bia:   color #f472b6 emoji ✨ "Bia, 20"

════════════════════════════════════════
SCREEN 13 — CHAT (6 variants: one per person)
════════════════════════════════════════
- CUSTOM HEADER (not standard) bg #0f0f0f border-bottom #242424:
  Padding 12px 18px. Height 64px.
  
  Row: [back 36x36] [avatar 42px] [info col flex-1] [actions right]
  
  Avatar: person color border 2px + emoji 18px + online dot
    green #3bff8a 8px absolute bottom-right of avatar
  
  Info col:
    "Name, age" DM Mono 14px #f5f5f5 bold
    "● online agora" 11px #3bff8a + "no Festa do Rock" 11px #555

  Actions right row gap 12px:
    Phone icon 20px #555 (no connection)
    "⊗" 20px red (→ SCREEN 16 SOS)

- CHAT AREA flex-1 scroll, bg #080808, padding 16px 16px 8px, gap 8px:

  DATE SEPARATOR: "— HOJE —" 10px #333 DM Mono centered letter-spacing 2px

  MATCH BANNER:
    bg #161616 border 1px #242424 radius 12px padding 10px 16px
    Center row: "★" accent 14px + "match feito às 21:47" 12px #888
    margin-bottom 4px

  PRE-FILLED CONVERSATION (3 bubbles + timestamps):

    RIGHT bubble (user sent):
      bg #e8ff47, text #080808 bold 14px
      radius 18px 18px 4px 18px
      max-width 75% align-self flex-end
      Timestamp "21:48" 10px #888 right-aligned below bubble
      "Oi! Você veio sozinha?"

    LEFT bubble (person reply):
      bg #1e1e1e, text #f5f5f5 14px, border 1px #242424
      radius 18px 18px 18px 4px
      max-width 75% align-self flex-start
      Avatar sm 24px left of bubble
      Timestamp "21:48" 10px #555 left-aligned below bubble
      "Vim com uma amiga, e você?"

    RIGHT bubble:
      "Tô sozinho, me acha perto do palco 😄"
      Timestamp "21:49"

    LEFT bubble:
      "Combinado! Vou em 10 min 🎶"
      Timestamp "21:49"

  TYPING INDICATOR (shows after last bubble):
    LEFT style bubble with avatar:
    3 animated dots inside: ● ● ● pulsing opacity animation
    bg #1e1e1e border #242424 radius 18px padding 12px 16px

  ⚠ CRITICAL FUNCTIONAL INTERACTION:
  The input bar must be fully interactive:

  Step 1: User taps input field → keyboard appears (show numeric keyboard UI)
  Step 2: User types message → text appears in input field in real time
  Step 3: Send button "↑" becomes accent colored when input has text
          (disabled/gray when empty)
  Step 4: User taps send →
    a. Typed text becomes new RIGHT bubble (accent bg, dark text)
       with "agora" timestamp
    b. Input field clears
    c. Typing indicator LEFT bubble appears after 0.8s
    d. After 1.5s typing indicator disappears and
       automatic LEFT reply bubble appears:
       Replies rotate through:
       "Te vejo em breve! 🎶"
       "Que saudade da balada mesmo ✨"
       "Combinado! Rs"
       "Haha sim vamos nessa"
  Step 5: Chat scrolls to bottom after each new message
  This cycle repeats every time user sends a message.

- INPUT BAR fixed bottom, bg #0f0f0f border-top #1a1a1a padding 10px 14px:
  Row gap 10px align-center:
  
  "+" button 38x38 circle bg #161616 border #242424 #888 (no connection)
  
  Input container flex-1 bg #161616 border 1.5px #242424
    radius 22px padding 10px 16px:
    placeholder "Escreva uma mensagem..." #444
    text #f5f5f5 14px
    RIGHT inside: emoji button "😊" 18px #555
  
  Send button 42x42 circle:
    EMPTY state: bg #161616 border #242424 "↑" #444
    HAS TEXT state: bg #e8ff47 "↑" #080808 bold
                    box-shadow 0 2px 12px rgba(232,255,71,0.3)
    Transition: smooth 0.2s all

  VARIANTS:
    13a Julia: header shows 🌙 #c084fc "Julia, 24"
    13b Maria: 🔥 #f97316 "Maria, 22"
    13c Carol: ⚡ #facc15 "Carol, 23"
    13d Paula: 🌊 #38bdf8 "Paula, 21"
    13e Ana:   🌿 #4ade80 "Ana, 22"
    13f Bia:   ✨ #f472b6 "Bia, 20"