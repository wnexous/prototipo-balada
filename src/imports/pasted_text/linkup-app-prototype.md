LINKUP APP — High Fidelity Fully Functional Prototype
CHANGES FROM PREVIOUS VERSION:
1. Added K-pop genre with events
2. Event detail screen shows the specific tapped event data
3. Chat starts completely empty — no pre-filled messages
4. Chat has realistic AI-powered replies that vary naturally
5. All interactions feel real and fluid

Same design tokens as before:
bg #080808, surface #0f0f0f, card #161616, elevated #1e1e1e,
border #242424, accent #e8ff47, green #3bff8a, red #ff3b3b.
Font: Clash Display headings, DM Mono body. Frame 390x844px.
All text Portuguese (Brazil).

PERSON DATA (avatars):
Julia 24  → 🌙 #c084fc  "Ama rock e festivais"
Maria 22  → 🔥 #f97316  "DJ nos fins de semana"
Carol 23  → ⚡ #facc15  "Fotógrafa e dançarina"
Paula 21  → 🌊 #38bdf8  "Surfa de manhã, balada à noite"
Ana 22    → 🌿 #4ade80  "Ativista e amante de música"
Bia 20    → ✨ #f472b6  "Artista plástica e performer"

════════════════════════════════════════
UPDATED EVENT DATABASE — 16 EVENTS
════════════════════════════════════════
Event 01: "Festa do Rock 2026"       Rock        "Hoje 22h–05h"  "Bar XV"          R$40  47 conf   ★4.6  🎸 #e8ff47
Event 02: "Techno Rave"              Techno      "Hoje 23h–06h"  "Wavehouse"       R$30  123 conf  ★4.9  ⚡ #38bdf8
Event 03: "Funk Night"               Funk        "Hoje 23h30"    "Clubão"          R$20  89 conf   ★3.9  🎵 #f97316
Event 04: "House Sessions"           House       "Hoje 00h–07h"  "Void Club"       R$50  201 conf  ★4.8  🏠 #c084fc
Event 05: "Pagodão da Sexta"         Pagode      "Hoje 21h–04h"  "Samba Hall"      R$25  156 conf  ★4.5  🥁 #4ade80
Event 06: "Sertanejo Premium"        Sertanejo   "Hoje 21h30"    "Arena Sul"       R$60  312 conf  ★4.3  🤠 #facc15
Event 07: "Hip Hop Underground"      Hip-Hop     "Hoje 22h–05h"  "Base Club"       R$35  98 conf   ★4.7  🎤 #f472b6
Event 08: "Jazz & Bossa Lounge"      Jazz        "Hoje 20h–02h"  "Café Bossa"      R$45  44 conf   ★4.9  🎷 #38bdf8
Event 09: "Eletrônico ao Vivo"       Eletrônico  "Hoje 23h–07h"  "Hangar 522"      R$55  178 conf  ★4.6  🎹 #e879f9
Event 10: "Axé Carnaval Antecipado"  Axé         "Hoje 21h–05h"  "Bloco Central"   R$30  267 conf  ★4.2  🪘 #fb923c
Event 11: "Indie & Alternativo"      Indie       "Hoje 22h30"    "The Roof"        R$40  73 conf   ★4.8  🎸 #a3e635
Event 12: "Reggae Roots Night"       Reggae      "Hoje 21h–03h"  "Marley Bar"      R$20  91 conf   ★4.4  🌿 #4ade80
Event 13: "K-pop Universe Party"     K-pop       "Hoje 20h–04h"  "Neon Hall"       R$45  189 conf  ★4.9  🌸 #ff6eb4
Event 14: "BTS Night — Tribute"      K-pop       "Hoje 21h–05h"  "Arena Neon"      R$55  234 conf  ★5.0  💜 #a78bfa
Event 15: "K-pop Dance Battle"       K-pop       "Hoje 22h–06h"  "Studio K"        R$35  142 conf  ★4.7  🕺 #22d3ee
Event 16: "Seoul Vibes"              K-pop       "Hoje 23h–07h"  "Club Seul"       R$50  98 conf   ★4.6  ✨ #f9a8d4

════════════════════════════════════════
SCREEN 06 — ESTA NOITE (event feed)
════════════════════════════════════════
- Status bar 9:41 left / signal+wifi+battery right 12px #444

- TOP BAR bg #080808 padding 16px 18px:
  Left col:
    "Boa noite 🌙" DM Mono 11px #888 uppercase letter-spacing 1.5px
    "O que rola hoje" Clash Display 24px #f5f5f5 weight 800
  Right: avatar circle 36px accent border "😊" +
         notification bell 22px #888 + accent dot 6px absolute

- SEARCH BAR margin 0 16px:
  bg #161616 border 1.5px #242424 radius 12px padding 12px 16px
  🔍 #555 left + "Buscar eventos, artistas, venues..." #444
  Filter icon "⊟" #555 right

- GENRE FILTER TABS horizontal scroll no wrap, gap 8px padding 0 16px:
  Tabs: Todos | 🎸 Rock | 🎵 Funk | ⚡ Techno | 🏠 House |
        🥁 Pagode | 🤠 Sertanejo | 🎤 Hip-Hop | 🎷 Jazz |
        🎹 Eletrônico | 🪘 Axé | 🌿 Reggae | 🌸 K-pop | 🎸 Indie
  
  Active tab style: bg = genre color 15% / border 1px genre color /
                    text genre color / DM Mono 11px bold radius 999px
  Inactive: bg #161616 border #242424 text #555 radius 999px
  K-pop tab color: #ff6eb4

- FEATURED STRIP — "🔥 Em Alta Agora":
  Label row: Clash Display 16px white + "AO VIVO" red pill right
  Full-width card 100%x190px radius 18px overflow hidden:
    Image placeholder X lines bg #1a1a1a
    TOP-LEFT pill: "EM ALTA" bg #ff3b3b text white 10px bold
    TOP-RIGHT: "💜 234 online agora" bg rgba(0,0,0,0.7) text accent 10px
    BOTTOM OVERLAY gradient black:
      "BTS Night — Tribute" Clash Display 20px white bold
      "Arena Neon • Hoje 21h" 13px #888
      "R$55 • ★5.0" accent right
  
  ⚠ TAP → goes to SCREEN 08 showing Event 14 "BTS Night" data

- EVENT SECTIONS — each genre is its own titled section:

  Each section structure:
    HEADER ROW padding 16px 18px 8px:
      Left: emoji + genre name Clash Display 16px white bold
      Right: "ver todos →" 12px accent
    HORIZONTAL SCROLL ROW padding 0 16px gap 12px:
      Event cards 200x280px (spec below)

  EVENT CARD spec 200x280px radius 18px bg #161616 border #242424:
    TOP IMAGE 200x130px overflow hidden:
      Placeholder X lines bg #1a1a1a
      TOP-LEFT: genre pill bg event-color 20% border event-color
                text event-color bold 10px radius 999px padding 4px 10px
      TOP-RIGHT: distance pill bg rgba(0,0,0,0.65) text #f5f5f5 10px
                 radius 999px padding 4px 10px "X.X km"
      BOTTOM-LEFT: rating pill bg rgba(0,0,0,0.65) text accent 11px bold
                   radius 999px padding 4px 10px "★ X.X"
    BOTTOM CONTENT padding 12px gap 6px:
      Event name Clash Display 14px #f5f5f5 bold 2 lines max
      "Hoje XXh • Venue" DM Mono 11px #888
      Avatars row: 3 overlapping circles 20px + "X conf" 10px #888
      BOTTOM ROW:
        Price "R$XX" event-color bold 14px DM Mono
        "Ver →" bg event-color 15% border event-color
                text event-color 11px bold radius 8px padding 5px 10px
    
    ⚠ TAP ANYWHERE ON CARD → navigate to SCREEN 08
      passing this specific event's data:
      name, genre, time, venue, price, conf, rating, color, emoji

  SECTION LIST (in order):

  ── 🌸 K-pop ──────────────────────────
  Cards: Event 13 "K-pop Universe Party" color #ff6eb4
         Event 14 "BTS Night — Tribute"  color #a78bfa
         Event 15 "K-pop Dance Battle"   color #22d3ee
         Event 16 "Seoul Vibes"          color #f9a8d4

  ── 🎸 Rock ───────────────────────────
  Cards: Event 01 "Festa do Rock 2026"   color #e8ff47
         Event 11 "Indie & Alternativo"  color #a3e635

  ── ⚡ Techno ──────────────────────────
  Cards: Event 02 "Techno Rave"          color #38bdf8
         Event 09 "Eletrônico ao Vivo"   color #e879f9

  ── 🎵 Funk ───────────────────────────
  Cards: Event 03 "Funk Night"           color #f97316

  ── 🏠 House ──────────────────────────
  Cards: Event 04 "House Sessions"       color #c084fc

  ── 🥁 Pagode ─────────────────────────
  Cards: Event 05 "Pagodão da Sexta"     color #4ade80

  ── 🤠 Sertanejo ──────────────────────
  Cards: Event 06 "Sertanejo Premium"    color #facc15

  ── 🎤 Hip-Hop ────────────────────────
  Cards: Event 07 "Hip Hop Underground"  color #f472b6

  ── 🎷 Jazz ───────────────────────────
  Cards: Event 08 "Jazz & Bossa Lounge"  color #38bdf8

  ── 🪘 Axé ────────────────────────────
  Cards: Event 10 "Axé Carnaval Antecipado" color #fb923c

  ── 🌿 Reggae ─────────────────────────
  Cards: Event 12 "Reggae Roots Night"   color #4ade80

  ⚠ FILTER INTERACTION:
  Tap "K-pop" tab → only K-pop section visible, rest hidden
  Tap "Rock" tab → only Rock section visible
  Tap "Todos" → all sections visible
  Transition: opacity + collapse animation 0.2s ease

- Bottom nav ◈ Início active accent

════════════════════════════════════════
SCREEN 08 — DETALHE DO EVENTO
(fully dynamic — shows whichever event was tapped)
════════════════════════════════════════
⚠ THIS SCREEN IS DYNAMIC:
All content changes based on which event card was tapped.
The screen receives: name, genre, time, venue, price,
conf, rating, color (event-color), emoji as parameters.
Design the screen with placeholder slots for each field.

- Hero image placeholder full-bleed 390x260px X lines
  bg = event-color at 6% tint over #1a1a1a
  OVERLAYS:
    Back button absolute top-left 14px 14px:
      36x36 bg rgba(8,8,8,0.75) blur border #333 radius 10px "←" white
    Share button absolute top-right same style: "↗"
    Bottom gradient overlay dark:
      BOTTOM-LEFT: genre pill bg event-color 20% border event-color
                   text event-color bold 11px "[emoji] [genre]"
      BOTTOM-RIGHT: "★ [rating]" white bold DM Mono 13px

- STICKY HEADER shown on scroll:
  bg #080808 border-bottom #242424 padding 14px 18px
  "[event name]" Clash Display 16px white + back arrow left

- CONTENT BODY padding 20px gap 20px:

  "[Event Name]" Clash Display 26px #f5f5f5 weight 900
  
  INFO ROW gap 16px:
    🕐 "[time]" DM Mono 13px #888
    📍 "[venue], Curitiba" DM Mono 13px #888
  
  STATS BAR 3 cols bg #161616 border #242424 radius 14px:
    | [conf] confirmados | [ing] ingressos | R$[price] desde |
    values bold 18px event-color / labels 10px #888 uppercase
  
  SECTION "SOBRE O EVENTO":
    Text placeholder 3 lines DM Mono 13px #888 line-height 1.7
    "Uma noite incrível de [genre] com os melhores artistas
     de Curitiba. Venha se encontrar com quem curte o mesmo
     som que você."
  
  SECTION "QUEM VAI ESTAR LÁ":
    Row: "Quem vai estar lá?" bold white + "ver todos →" event-color right
    5 overlapping avatar circles 36px (person emojis) + "+42" #888
  
  SECTION "LOCALIZAÇÃO":
    Map thumbnail 100%x110px radius 14px X lines bg #0f1a0f
    "[venue] — Curitiba, PR" DM Mono 13px #888 margin-top 8px
  
  FIXED BOTTOM BAR border-top #242424 bg #080808 padding 16px 20px:
    Left: "R$[price]" Clash Display 24px event-color bold
          + "/ pessoa" DM Mono 12px #888
    Right: Button bg event-color text #080808 bold radius 14px
           padding 14px 22px "Comprar ingresso"
    
    Below buttons full-width:
      Button secondary outlined border #242424 full-width:
      "[emoji] Ver quem está aqui" → SCREEN 11

  ⚠ K-POP EVENTS SPECIAL TREATMENT:
  When event is K-pop genre (Events 13-16):
    Hero area has extra decorative elements:
      Small star sparkles ✨ scattered on hero overlay
      Color tint more vibrant (event color at 12% not 6%)
    Genre pill uses gradient: left event-color → right #a78bfa
    Stats bar values use event-color with extra glow
    "SOBRE O EVENTO" text mentions K-pop artists/concepts:
      "Uma festa imersiva no universo K-pop com os maiores
       hits, lightsticks, photocards e muito dance cover."

════════════════════════════════════════
SCREEN 13 — CHAT (EMPTY START — critical update)
════════════════════════════════════════
⚠ CRITICAL CHANGES FROM PREVIOUS VERSION:

The chat opens COMPLETELY EMPTY.
No pre-filled messages. No conversation history.
The only element in the chat area is the match banner.

- CUSTOM HEADER bg #0f0f0f border-bottom #242424 padding 12px 18px:
  [back 36x36] [avatar 42px person-color border + emoji]
  [info col: "Name, age" bold 14px white / "● online agora" 11px green]
  [right: phone 20px #555 | ⊗ 20px red → SOS]

- CHAT AREA flex-1 scroll bg #080808 padding 16px gap 8px:

  DATE SEPARATOR centered:
    "— HOJE —" DM Mono 10px #2a2a2a letter-spacing 3px

  MATCH BANNER centered:
    bg #161616 border 1px #242424 radius 12px padding 10px 16px
    Row: "★" accent 14px + "match feito às [time]" DM Mono 12px #888
    Below banner: person emoji 32px centered
    "Vocês deram match! Diz oi 👋" DM Mono 12px #555 centered
    margin-bottom 8px

  EMPTY STATE below banner:
    Centered column gap 12px margin-top 32px:
    "[person emoji]" 48px
    "Nenhuma mensagem ainda" DM Mono 13px #333
    "Seja o primeiro a dizer oi!" DM Mono 12px #242424
    
    QUICK REPLY SUGGESTIONS (4 pill buttons horizontal wrap):
      Each: bg #161616 border #242424 radius 999px
            padding 8px 16px DM Mono 12px #888
            tap → sends that text as first message
      Pills:
        "👋 Oi, tudo bem?"
        "🎵 Que música você tá curtindo?"
        "📍 Você tá onde no evento?"
        "☕ Quer se encontrar?"
    
    ⚠ When user taps a quick reply pill:
      → Pill animates: scale down + accent border flash
      → Message appears as RIGHT bubble in chat
      → Quick reply pills disappear
      → Typing indicator appears
      → Auto-reply after 1.2s (see reply system below)

- ⚠ FULL INTERACTIVE MESSAGE SYSTEM:

  SEND MESSAGE FLOW:
  1. User types in input OR taps a quick reply pill
  2. RIGHT bubble appears instantly:
     bg #e8ff47, text #080808 bold 14px
     radius 18px 18px 4px 18px
     max-width 78% align-self flex-end
     Timestamp "agora" DM Mono 10px #888 right-aligned below bubble
     Sent checkmark "✓✓" accent 9px right of timestamp
  3. Input field clears immediately
  4. TYPING INDICATOR appears on LEFT after 0.8s:
     bg #1e1e1e border #242424 radius 18px 18px 18px 4px
     padding 12px 16px
     Person avatar sm 24px left of bubble
     3 dots: ● ● ● animated pulse stagger (dot1 delay 0s,
     dot2 delay 0.2s, dot3 delay 0.4s) color #888
  5. After 1.2–2.0s typing indicator disappears and
     LEFT auto-reply bubble appears:
     bg #1e1e1e text #f5f5f5 14px border #242424
     radius 18px 18px 18px 4px
     Person avatar sm 24px left of bubble
     Timestamp "agora" DM Mono 10px #555 left-aligned below

  AUTO-REPLY BANK — realistic varied responses:
  The system cycles through these in order, then loops:
  Reply 01: "Oi!! Que bom que você falou 😊"
  Reply 02: "Tô adorando essa festa hein"
  Reply 03: "Você tá em qual parte do evento?"
  Reply 04: "Que música tá tocando aí onde você tá?"
  Reply 05: "Rs que coincidência a gente dar match aqui"
  Reply 06: "Você veio com amigos?"
  Reply 07: "Haha sim, essa festa tá boa demais"
  Reply 08: "Vem me achar perto do bar 😄"
  Reply 09: "Combinado! Te vejo em breve ✨"
  Reply 10: "Que legal! Eu também curto muito esse estilo"
  Reply 11: "Sério?? Que mundo pequeno haha"
  Reply 12: "Tô passando um perrengue aqui achando você"
  Reply 13: "Manda uma foto do seu look pra eu te achar"
  Reply 14: "Já tô indo aí!"
  Reply 15: "Você é daqui de Curitiba?"
  
  ⚠ Replies must feel NATURAL and CONVERSATIONAL.
  Never repeat the same reply twice in a row.
  Response timing varies: 1.2s to 2.5s (randomize).

  SEND BUTTON STATE:
  EMPTY input: bg #161616 border #242424 "↑" #333 — disabled
  HAS TEXT: bg #e8ff47 "↑" #080808 bold —
            box-shadow 0 2px 12px rgba(232,255,71,0.3) — active
  Transition: 0.15s smooth

  KEYBOARD BEHAVIOR:
  On input focus: keyboard slides up, chat scrolls to bottom
  New message added: auto-scroll to bottom smooth

- INPUT BAR fixed bottom bg #0f0f0f border-top #1a1a1a padding 10px 14px:
  Row gap 10px align-center:
  "+" 38x38 circle bg #161616 border #242424 #555 (no connection)
  Input flex-1 bg #161616 border 1.5px #242424 radius 22px
    padding 10px 16px text #f5f5f5 14px
    placeholder "Diz oi... 👋" #444
    emoji button "😊" inside right #555
  Send button 42x42 circle (states above)

- VARIANTS (6 total, one per person):
  13a Julia 24  🌙 #c084fc — opens empty, match banner shown
  13b Maria 22  🔥 #f97316 — opens empty
  13c Carol 23  ⚡ #facc15 — opens empty
  13d Paula 21  🌊 #38bdf8 — opens empty
  13e Ana 22    🌿 #4ade80 — opens empty
  13f Bia 20    ✨ #f472b6 — opens empty

════════════════════════════════════════
SCREEN 14 — MEUS MATCHES (inbox)
════════════════════════════════════════
- Top bar no back, padding 16px 18px:
  "Mensagens" Clash Display 24px #f5f5f5 bold left
  "✎" edit icon #555 right

- ONLINE NOW ROW:
  "ONLINE AGORA" DM Mono 10px #888 uppercase letter-spacing 1.5px
  Horizontal scroll avatars md 52px each:
    Avatar circle person-color border + emoji + name 10px below
    Green dot 8px absolute bottom-right
  Show: Julia | Carol | Ana | Bia (online)
  "+" circle 52px bg #161616 border #242424 "ver todos" 10px #555

- MATCH REQUEST BANNER (if pending matches):
  bg #e8ff4708 border 1px #e8ff47 radius 16px margin 0 16px padding 14px:
  "⭐ Novos matches!" DM Mono 13px accent bold
  Avatar row overlapping 24px: Julia + Carol + Ana emojis
  "+ 3 pessoas curtiram você" 12px #888
  "Ver →" accent 12px right

- SECTION "CONVERSAS" DM Mono 10px #888 uppercase letter-spacing 1.5px

- CONVERSATION ROWS (tappable → respective CHAT screen):
  Each row height 72px padding 0 18px border-bottom #1a1a1a:
  
  LEFT: avatar md 48px person-color border + emoji
        Unread: accent dot 10px absolute top-right
  
  CENTER flex-1 padding-left 14px:
    Top row: "Name, age" DM Mono 14px #f5f5f5 bold +
             timestamp "agora" / "21:47" DM Mono 11px #555 right
    Bottom row: last message preview 13px 1 line truncated
      Unread: #f5f5f5 bold / Read: #555 normal
      No messages yet: "Diga oi! 👋" italic #333

  Row 1: Julia 24  🌙  "Diga oi! 👋" italic #333  "agora"  (new match, no msgs)
  Row 2: Carol 23  ⚡  "Diga oi! 👋" italic #333  "agora"  (new match, no msgs)
  Row 3: Ana 22    🌿  "digitando..." accent italic "agora"  (typing indicator)

  ⚠ INTERACTION:
  When user has sent a message in chat with Julia,
  Row 1 updates to show last sent message preview
  and removes "Diga oi!" placeholder.

- Bottom nav ◷ Chat active

════════════════════════════════════════
ALL PROTOTYPE CONNECTIONS (complete)
════════════════════════════════════════
01 Splash → [Entrar] ──────────────────→ 04 Login
01 Splash → [Criar Conta] ─────────────→ 02 Criar Conta
02 → [Confirmar] ──────────────────────→ 03 Verificar
03 → [Começar] ────────────────────────→ 05 Perfil
03 → [Pular] ──────────────────────────→ 05 Perfil
04 → [Entrar] ─────────────────────────→ 06 Esta Noite
05 → [Finalizar] ──────────────────────→ 06 Esta Noite

06 → [any event card] ─────────────────→ 08 Detalhe (dynamic)
06 → [featured card] ──────────────────→ 08 Detalhe (Event 14)
06 → [genre filter tap] ───────────────→ 06 filtered state
06 → [◉ Mapa nav] ─────────────────────→ 07 Mapa
06 → [◎ Galera nav] ───────────────────→ 15 Galera
06 → [◷ Chat nav] ─────────────────────→ 14 Matches
06 → [⊗ SOS nav] ──────────────────────→ 16 SOS

07 → [any pin] ────────────────────────→ 08 Detalhe (that event)
08 → [Comprar ingresso] ───────────────→ 09 Comprar
08 → [Ver quem está aqui] ─────────────→ 11 Quem está
08 → [ver todos →] ────────────────────→ 11 Quem está

09 → [Finalizar compra] ───────────────→ 10 Ingresso
10 → [Já estou no evento] ─────────────→ 11 Quem está

11 → [Curtir Julia]  ──────────────────→ 12a Match Julia
11 → [Curtir Maria]  ──────────────────→ 12b Match Maria
11 → [Curtir Carol]  ──────────────────→ 12c Match Carol
11 → [Curtir Paula]  ──────────────────→ 12d Match Paula
11 → [Curtir Ana]    ──────────────────→ 12e Match Ana
11 → [Curtir Bia]    ──────────────────→ 12f Match Bia

12a → [Mandar mensagem] ───────────────→ 13a Chat Julia (empty)
12b → [Mandar mensagem] ───────────────→ 13b Chat Maria (empty)
12c → [Mandar mensagem] ───────────────→ 13c Chat Carol (empty)
12d → [Mandar mensagem] ───────────────→ 13d Chat Paula (empty)
12e → [Mandar mensagem] ───────────────→ 13e Chat Ana   (empty)
12f → [Mandar mensagem] ───────────────→ 13f Chat Bia   (empty)
ALL 12x → [Continuar / Voltar] ────────→ 11 Quem está

ALL 13x → [← back] ────────────────────→ 14 Matches
ALL 13x → [⊗ header icon] ─────────────→ 16 SOS
14 → [row Julia] ──────────────────────→ 13a Chat Julia
14 → [row Carol] ──────────────────────→ 13c Chat Carol
14 → [row Ana] ────────────────────────→ 13e Chat Ana

15 → [Chat row] ───────────────────────→ 14 Matches
15 → [Conversar no grupo] ─────────────→ 14 Matches
15 → [Ver no mapa] ────────────────────→ 07 Mapa

ALL SCREENS → [← back] ────────────────→ previous screen
ALL SCREENS → bottom nav tabs → respective screens