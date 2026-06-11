LINKUP APP — Missing Screens & States — High Fidelity Completion Pack
Add these screens and components to the existing LinkUp prototype.
Same design tokens: bg #080808, surface #0f0f0f, card #161616,
border #242424, accent #e8ff47, green #3bff8a, red #ff3b3b.
Font: Clash Display headings, DM Mono body. Frame 390x844px.
All text Portuguese (Brazil).

════════════════════════════════════════
SCREEN 17 — ESQUECI A SENHA
════════════════════════════════════════
- Status bar + Header:
  Back arrow 36x36 card + "Recuperar senha" Clash Display 18px centered

- Body padding 28px gap 24px:

  ILLUSTRATION centered:
    Circle 96px bg #161616 border 1.5px #242424 radius 50%
    "🔐" emoji 40px centered inside
    Below: thin ring glow rgba(232,255,71,0.08) 120px

  TEXT BLOCK centered:
    "Esqueceu a senha?" Clash Display 24px #f5f5f5 bold
    "Digite seu e-mail e enviaremos um link
     para você criar uma nova senha."
    DM Mono 13px #888 line-height 1.8 centered max-width 280px

  Input: E-MAIL
    label "SEU E-MAIL" 10px #888 uppercase letter-spacing 1.5px
    bg #161616 border 1.5px #242424 radius 12px padding 14px 16px
    placeholder "seu@email.com" #444
    focused: border accent #e8ff47

  Button primary full-width height 52px: "Enviar link de recuperação"
    bg #e8ff47 text #080808 bold radius 14px

  Ghost button centered: "← Voltar ao login" #888 → SCREEN 04 Login

- SUCCESS STATE (shown after button tap):
  Replace form with:
  Circle 96px bg #3bff8a15 border 1.5px #3bff8a
    "✓" 40px #3bff8a centered
  "Link enviado!" Clash Display 22px #f5f5f5
  "Verifique seu e-mail em
   seu***@gmail.com" DM Mono 13px #888 centered
  "Não recebeu?" 12px #555 + "Reenviar" accent underline inline
  Button secondary "Voltar ao login" → SCREEN 04

════════════════════════════════════════
SCREEN 18 — NOTIFICAÇÕES
════════════════════════════════════════
- Header: back arrow + "Notificações" Clash Display 18px +
  "Marcar todas como lidas" 11px accent right (no connection)

- Filter pills row horizontal scroll:
  "Todas" active | "Matches" | "Eventos" | "Sistema"
  Active: bg accentBg border accent text accent
  Inactive: bg #161616 border #242424 text #555

- NOTIFICATION LIST vertical scroll gap 1px:

  Each notification row: bg #161616 border-bottom #1a1a1a
  padding 14px 18px gap 12px horizontal:

  LEFT: icon circle 44px
    Match notif: person emoji + person color border
    Event notif: event emoji bg event-color 15%
    System notif: "⚙" #555 bg #1a1a1a

  CENTER col flex-1:
    Title DM Mono 14px:
      Unread: #f5f5f5 bold / Read: #888 normal
    Body 12px #555 line-height 1.5 2 lines max
    Time 10px #333 margin-top 4px

  RIGHT: unread dot 8px accent (if unread) OR nothing

  UNREAD DOT also shown as left border 3px accent on row

  NOTIFICATIONS LIST:

  Row 01 — UNREAD — Match:
    Icon: 🌙 #c084fc border
    "Julia deu match com você! ⭐"
    "Vocês podem conversar agora antes
     de se encontrar na balada."
    "agora" → tap → SCREEN 12a Match Julia

  Row 02 — UNREAD — Match:
    Icon: ⚡ #facc15 border
    "Carol também curtiu você!"
    "Você tem um novo match. Diz oi!"
    "2 min atrás" → tap → SCREEN 12c Match Carol

  Row 03 — READ — Evento:
    Icon: 🎸 #e8ff47 bg
    "Festa do Rock começa em 1 hora"
    "Bar XV abre às 22h. Seu ingresso
     está válido e pronto para uso."
    "58 min atrás" → tap → SCREEN 10 Ingresso

  Row 04 — READ — Evento:
    Icon: 🌸 #ff6eb4 bg
    "K-pop Universe está quase esgotado"
    "Restam apenas 12 ingressos.
     Garanta o seu agora!"
    "1h atrás" → tap → SCREEN 08 Detalhe

  Row 05 — READ — Match:
    Icon: 🌿 #4ade80 border
    "Ana está online no evento"
    "Ela confirmou presença na Festa
     do Rock. Que tal dizer oi?"
    "2h atrás" → tap → SCREEN 13e Chat Ana

  Row 06 — READ — Sistema:
    Icon: ⚙ #555 bg #1a1a1a
    "Seu perfil foi verificado ✓"
    "Agora você pode interagir com
     todos os usuários da plataforma."
    "3h atrás"

  Row 07 — READ — Sistema:
    Icon: 🔒 #38bdf8 bg
    "Novo login detectado"
    "Acesso realizado em Curitiba, PR.
     Se não foi você, altere a senha."
    "Ontem"

  EMPTY STATE (if no notifications):
    Centered: "🔔" 64px + "Sem notificações" Clash Display 20px #555
    "Quando acontecer algo importante,
     você verá aqui." DM Mono 13px #333

════════════════════════════════════════
SCREEN 19 — CONFIGURAÇÕES DO PERFIL
════════════════════════════════════════
- Header: back arrow + "Configurações" Clash Display 18px

- PROFILE PREVIEW CARD top:
  bg #161616 border #242424 radius 18px padding 18px:
  Row: avatar circle 56px accent border "😊" left +
  col center: "Lucas M., 20" bold 16px white /
              "verificado ✓" 12px accent /
              "lucas@email.com" 11px #555
  Right: "Editar" pill bg accentBg border accent text accent 12px
         → SCREEN 05 Perfil

- SETTINGS SECTIONS (each section: label + rows):

  SECTION "CONTA" label 10px #888 uppercase letter-spacing 1.5px:

  Row: "👤 Editar perfil"
    → SCREEN 05 Perfil
  Row: "🔒 Alterar senha"
    → SCREEN 17 Recuperar senha
  Row: "📧 Alterar e-mail"
    subtitle "lucas@email.com" 11px #555
  Row: "✓ Status de verificação"
    right tag: "Verificado" bg #3bff8a15 text #3bff8a border #3bff8a
    radius 999px 10px padding 3px 10px

  SECTION "PRIVACIDADE":
  Row: "👁 Visibilidade do perfil"
    right: toggle ON (accent)
  Row: "📍 Compartilhar localização"
    right: toggle ON (accent)
  Row: "💬 Quem pode me enviar mensagem"
    subtitle "Apenas matches" 11px #555
    right: "›" #555
  Row: "🚫 Usuários bloqueados"
    subtitle "0 bloqueados" 11px #555
    right: "›" #555

  SECTION "NOTIFICAÇÕES":
  Row: "🔔 Notificações push"
    right: toggle ON accent
  Row: "💜 Novos matches"
    right: toggle ON accent
  Row: "🎵 Alertas de evento"
    right: toggle ON accent
  Row: "📩 Mensagens"
    right: toggle ON accent

  SECTION "EMERGÊNCIA":
  Row: "🆘 Contatos de emergência"
    subtitle "Mãe, Ana, Gabi" 11px #555
    right: "›" → SCREEN 16 SOS / edit contacts
  Row: "📍 Rastreamento de segurança"
    right: toggle OFF #333

  SECTION "SOBRE":
  Row: "⭐ Avaliar o app" (no connection)
  Row: "📋 Termos de uso" (no connection)
  Row: "🔐 Política de privacidade" (no connection)
  Row: "💬 Suporte" (no connection)
  Row: "ℹ Versão 1.0.0 Beta" right: #333

  DANGER ZONE:
  Button ghost full-width centered:
    "Sair da conta" 14px #ff3b3b → SCREEN 01 Splash
  Button ghost full-width centered:
    "Excluir conta" 13px #333

  SETTINGS ROW SPEC:
    each row: bg transparent border-bottom #1a1a1a
    padding 16px 18px horizontal layout:
    Left: icon 18px + label DM Mono 14px #f5f5f5
    Center: subtitle 11px #555 if exists
    Right: toggle OR "›" OR tag OR nothing

  TOGGLE COMPONENT:
    ON: bg accent width 44px height 24px radius 999px
        white circle 20px right side
    OFF: bg #242424 same shape
        white circle 20px left side
    Tap: animates position 0.2s ease

════════════════════════════════════════
SCREEN 20 — EDITAR CONTATOS DE EMERGÊNCIA
════════════════════════════════════════
- Header: back arrow + "Contatos de Emergência" +
  "Salvar" accent right (saves and goes back)

- INFO BANNER:
  bg #ff3b3b10 border 1px #ff3b3b30 radius 12px padding 14px margin 16px:
  "🛡 Estes contatos serão notificados
   automaticamente se você ativar o SOS."
  DM Mono 12px #ff3b3b80 line-height 1.6

- CURRENT CONTACTS section label "SEUS CONTATOS" 10px #888 uppercase:

  3 contact cards each:
  bg #161616 border #242424 radius 14px padding 14px:
  Row horizontal:
    Left: emoji avatar 44px bg person-color 15% border person-color
    Center col: name bold 14px white / phone 12px #555
    Right: "✎" edit icon #555 + "✕" delete icon #ff3b3b15
           (delete shows confirm modal)

  Contact 1: "👩 Mãe" / "+55 41 99999-0001" / color #f97316
  Contact 2: "🌿 Ana" / "+55 41 99999-0002" / color #4ade80
  Contact 3: "✨ Gabi" / "+55 41 99999-0003" / color #f472b6

- ADD CONTACT button:
  Dashed border 1.5px #333 radius 14px full-width padding 16px:
  "+" 20px #555 centered + "Adicionar contato" DM Mono 13px #555
  tap → shows inline form below

- ADD CONTACT INLINE FORM (shown on tap):
  bg #161616 border accent radius 14px padding 16px gap 12px:
  Input: NOME DO CONTATO
  Input: NÚMERO DE TELEFONE (keyboard numeric)
  Row 2 buttons: "Cancelar" ghost #888 | "Adicionar" primary accent
  Both radius 10px

- SAVE BUTTON fixed bottom:
  bg #e8ff47 text #080808 bold full-width height 52px radius 14px
  "Salvar contatos" → back to SCREEN 19 or SCREEN 16

════════════════════════════════════════
SCREEN 21 — ERRO / VALIDAÇÃO DE INPUTS
(component overlay — applies to all form screens)
════════════════════════════════════════
Show these states on SCREEN 02 (Criar Conta) and SCREEN 04 (Login):

INPUT ERROR STATE:
  Border color: #ff3b3b instead of #242424
  Below input: row gap 6px:
    "⚠" icon 12px #ff3b3b
    Error message DM Mono 11px #ff3b3b
  Input bg: #ff3b3b08

ERROR MESSAGES BY FIELD:
  Nome completo empty: "Nome é obrigatório"
  E-mail invalid format: "Digite um e-mail válido"
  E-mail already used: "Este e-mail já está em uso"
  Senha < 8 chars: "Mínimo 8 caracteres"
  Senha no number: "Inclua pelo menos um número"
  Confirmar senha mismatch: "As senhas não coincidem"
  Data nasc. underage: "Você precisa ter 18 anos ou mais"
  Login wrong password: "E-mail ou senha incorretos"
  Login account not found: "Conta não encontrada"

PASSWORD STRENGTH INDICATOR (below senha field):
  4 segment bar full-width height 4px radius 999px:
  Segment 1 always: red #ff3b3b (weak)
  Segments 1+2: yellow #facc15 (medium)
  Segments 1+2+3: #a3e635 (strong)
  All 4: accent #e8ff47 glow (very strong)
  Label right: "Fraca" / "Média" / "Forte" / "Ótima"
  10px matching color DM Mono

INPUT SUCCESS STATE:
  Border: #3bff8a
  Right inside input: "✓" 14px #3bff8a

════════════════════════════════════════
SCREEN 22 — LOADING / SKELETON STATES
(applies to feed, chat, profile loading)
════════════════════════════════════════
SKELETON COMPONENT SPEC:
  bg: linear-gradient 90deg
    #1a1a1a 0% → #222222 50% → #1a1a1a 100%
  background-size: 200% 100%
  animation: shimmer 1.5s infinite linear
  (background-position moves from 100% to -100%)

SKELETON — EVENT FEED (SCREEN 06 loading state):
  Top bar: real content (not skeleton)
  Search bar: skeleton rect 100%x44px radius 12px
  Filter tabs: 5 skeleton pills 80px x 32px radius 999px gap 8px
  Featured card: skeleton rect 100%x190px radius 18px
  Section header: skeleton rect 120px x 20px radius 6px
  Card row: 2 skeleton cards 200x280px radius 18px gap 12px

SKELETON — CHAT (SCREEN 13 loading state):
  Header: avatar skeleton circle 42px + 2 rect lines right
  Chat area 3 skeleton bubbles alternating:
    RIGHT: rect 200px x 44px radius 18px 18px 4px 18px align-self flex-end
    LEFT: circle 24px + rect 160px x 44px radius 18px 18px 18px 4px
    RIGHT: rect 240px x 44px same style

SKELETON — PROFILE (SCREEN 11 loading state):
  2-column grid 6 skeleton cards:
    Each: rect 100%x280px radius 18px
    No inner detail — full card skeleton

LOADING SPINNER (for button press states):
  Inside button: 18px circle border 2px white transparent
  top border white, animation: spin 0.8s linear infinite
  Replace button text while loading

════════════════════════════════════════
SCREEN 23 — TOAST / SNACKBAR SYSTEM
(floating overlays — appear on top of any screen)
════════════════════════════════════════
TOAST COMPONENT SPEC:
  Position: fixed bottom 90px (above bottom nav), center horizontal
  Width: calc(100% - 32px) max-width 358px
  bg #1e1e1e border 1px #2a2a2a radius 14px
  padding 14px 16px
  box-shadow 0 8px 32px rgba(0,0,0,0.6)
  Entry: slide up + fade in 0.25s ease
  Exit: fade out 0.2s ease after 3s

  Row layout:
    Left: icon circle 32px bg color 15% border color — icon inside
    Center flex-1: title DM Mono 13px white bold /
                   subtitle 12px #888 (optional)
    Right: "✕" 14px #555 dismiss button OR action link accent 12px

TOAST VARIANTS:

  SUCCESS toast (green):
    Icon circle bg #3bff8a15 border #3bff8a: "✓" #3bff8a
    border-left 3px #3bff8a on toast card
    TRIGGERS:
      After liking someone: "Curtida enviada ♡"
      After buying ticket: "Ingresso confirmado! ✓"
      After saving profile: "Perfil atualizado"
      After sending SOS: "SOS ativado! Contatos notificados"

  MATCH toast (accent):
    Icon: person emoji circle person-color border
    border-left 3px accent
    "⭐ Novo match!" title / "Julia curtiu você de volta!" subtitle
    Right: "Ver" accent link → SCREEN 12a
    TRIGGER: when other person would match back (auto after curtir)

  INFO toast (blue):
    Icon "ℹ" #38bdf8 circle bg #38bdf815 border #38bdf8
    border-left 3px #38bdf8
    TRIGGERS:
      When event starts: "Festa do Rock começou! 🎸"
      When match messages: "Julia enviou uma mensagem"

  ERROR toast (red):
    Icon "⚠" #ff3b3b circle
    border-left 3px #ff3b3b
    TRIGGERS:
      Payment fail: "Pagamento não processado. Tente novamente."
      No internet: "Sem conexão. Verifique sua rede."

════════════════════════════════════════
SCREEN 24 — BUSCA EXPANDIDA
════════════════════════════════════════
- Triggered when user taps search bar on SCREEN 06
- Full screen overlay slides up from search bar position

- TOP BAR:
  Input active (accent border focused) full-width
    "🔍 Buscar eventos, artistas, venues..." (empty)
    Cursor blinking inside input
  "Cancelar" accent right 13px → dismiss → back to SCREEN 06

- SECTION "BUSCAS RECENTES" 10px #888 uppercase:
  Row of pill chips horizontal wrap:
    "Festa do Rock" | "K-pop" | "Bar XV" | "Techno"
    Each: bg #161616 border #242424 radius 999px padding 7px 14px
    Left: "🕐" 12px #555 / text 13px #888 / right "✕" 10px #444
  "Limpar histórico" 12px #555 underline right

- SECTION "EM ALTA" 10px #888 uppercase:
  3 rows trending items:
    Row: rank number bold 16px accent (01 02 03) +
         event name 14px white + genre pill small right
    01 "BTS Night — Tribute" + 💜 K-pop pill
    02 "House Sessions" + 🏠 House pill
    03 "Festa do Rock 2026" + 🎸 Rock pill

- SECTION "CATEGORIAS" grid 2 cols gap 10px:
  6 category cards radius 14px height 72px:
    bg = genre-color 10% border genre-color
    emoji 24px left + genre name Clash Display 14px white
    tap → goes to SCREEN 06 with that genre filter active
  Cards: 🌸 K-pop | 🎸 Rock | ⚡ Techno | 🏠 House | 🥁 Pagode | 🤠 Sertanejo

- SEARCH RESULTS STATE (after typing):
  Replace sections above with results list:
  Section "EVENTOS" label:
    Event result rows: event emoji + name bold +
    venue + price right → tap → SCREEN 08 Detalhe
  Section "VENUES" label:
    Venue rows: "📍" + venue name + address #888 → no connection

════════════════════════════════════════
SCREEN 25 — PERFIL DE OUTRA PESSOA
════════════════════════════════════════
- Triggered when tapping an avatar anywhere in the app
  (in Quem está aqui, in Chat, in Matches list)

- HERO AREA top 390x220px relative:
  bg = person-color 8% over #1a1a1a
  Decorative circles background: 2 large circles
    person-color 5% opacity overlapping

  Back button absolute top-left 36x36 card style
  "⊙ Denunciar" absolute top-right 11px #ff3b3b30
    bg rgba(8,8,8,0.7) radius 999px padding 6px 12px

  Bottom of hero: avatar circle xl 96px centered
    bg person-color 15% border 3px person-color
    box-shadow 0 0 0 6px person-color 8%
    person emoji 40px inside
    Verified badge "✓" 18px accent circle 22px
    absolute bottom-right of avatar

- PROFILE INFO centered padding 0 20px:
  "Name, age" Clash Display 24px #f5f5f5 weight 800
  Verified row: "✓ Verificado" 12px accent
  Bio text DM Mono 13px #888 centered line-height 1.7
    "Ama rock e festivais"

  INTENTION PILLS row centered gap 8px:
    "💘 Paquera" | "🤝 Amizade"
    each: bg person-color 12% border person-color
    text person-color 12px DM Mono bold radius 999px

  INTERESTS row centered wrap gap 6px:
    small pills: "Rock" | "Festivais" | "Fotografia" | "Dança"
    bg #161616 border #242424 text #888 12px radius 999px

- STATS ROW 3 cols bg #161616 border #242424 radius 14px margin 16px:
  | Eventos | Matches | Na balada |
  | 12      | 8       | 3h        |
  values bold 18px accent / labels 10px #888

- MUTUAL SECTION if any:
  "Também vão estar lá" 13px #888
  Avatar row overlap: 2-3 people in common + text

- ACTION BUTTONS fixed bottom bg #080808 border-top #242424 padding 16px:
  Row 2 buttons gap 12px:
    Left: Button secondary "💬 Mensagem" → SCREEN 13 chat (if matched)
          OR "♡ Curtir" → SCREEN 12 Match (if not matched)
    Right: Button ghost "🚫 Bloquear" #ff3b3b30 text #ff3b3b
           (shows confirm modal)

  IF ALREADY MATCHED:
    Single full-width button primary "💬 Enviar mensagem" → SCREEN 13

════════════════════════════════════════
SCREEN 26 — AVALIAÇÃO PÓS-EVENTO
════════════════════════════════════════
- Triggered: bottom sheet appears when user returns from event
  (after "Já estou no evento" has been tapped and time passes)

- BOTTOM SHEET modal:
  bg #0f0f0f radius 24px 24px 0 0 border-top #242424
  Handle 32x4px #333 centered top margin 12px
  Drag down to dismiss

- Content padding 24px gap 20px:

  Event badge: emoji + name pill centered
    bg event-color 15% border event-color radius 999px
    padding 8px 18px "🎸 Festa do Rock 2026"

  "Como foi a noite?" Clash Display 22px #f5f5f5 centered
  "Sua avaliação ajuda outras pessoas a
   encontrar as melhores festas." DM Mono 12px #888 centered

  STAR RATING interactive row centered gap 8px:
    5 stars "★" 36px each
    Default: #333 / Hover+selected: accent #e8ff47
    Tap any star: fills that star + all before it accent
    Sub-label below: "Ruim" → "Regular" → "Bom" →
    "Ótimo" → "Incrível!" DM Mono 12px #888

  CATEGORY RATINGS 3 rows:
    Each row: label left 13px #888 + 5 mini stars 18px right
    "Música 🎵" / "Ambiente 🏠" / "Segurança 🛡"

  COMMENT INPUT optional:
    "Deixe um comentário (opcional)" label 10px #888 uppercase
    Textarea bg #161616 border #242424 radius 12px
    padding 14px height 80px resize none
    placeholder "O que você achou? Dica para outros..." #444
    char counter "0/200" 10px #444 right

  PHOTOS optional:
    "📷 Adicionar fotos" outlined dashed button
    bg transparent border dashed #333 radius 12px padding 12px
    text #555 13px centered (no connection)

  Button primary full-width height 52px: "Enviar avaliação"
    → closes sheet + SUCCESS TOAST "Obrigado pelo feedback! ⭐"
  Ghost button centered: "Agora não" #555 → dismisses sheet

════════════════════════════════════════
SCREEN 27 — MAPA COM RAIO DE DISTÂNCIA
════════════════════════════════════════
- Same as SCREEN 07 (Mapa) with these additions:

- DISTANCE RADIUS OVERLAY on map:
  Centered on user dot:
  Circle 1: radius representing 1km — dashed border accent 1px
             fill rgba(232,255,71,0.03) — label "1 km" accent 10px
  Circle 2: radius representing 3km — dashed border #38bdf8 1px
             fill rgba(56,189,248,0.02) — label "3 km" #38bdf8 10px
  Circle 3: radius representing 5km — dashed border #555 1px
             fill transparent — label "5 km" #555 10px

- DISTANCE FILTER in bottom sheet header:
  "Raio:" label 12px #888 +
  Slider component full-width:
    Track bg #242424 height 4px radius 999px
    Fill from left: accent color
    Thumb: circle 20px bg accent border 2px white
    Labels below: "500m" left / "10 km" right DM Mono 10px #555
    Current value floating above thumb:
      "3 km" bg accent text #080808 bold 11px
      radius 6px padding 3px 8px
      triangle pointer below

- When slider moves:
  → Radius circles on map resize accordingly
  → Event count updates: "8 eventos em 3 km" → "12 eventos em 5 km"
  → Bottom sheet list filters to show only events within radius

- DISTANCE BADGE on each event pin:
  Small tag below each pin circle:
  "1.2 km" bg rgba(8,8,8,0.8) text #f5f5f5 9px
  radius 999px padding 2px 6px

════════════════════════════════════════
SCREEN 28 — CONFIRM MODALS
(reusable modal component)
════════════════════════════════════════
- Semi-transparent overlay bg rgba(0,0,0,0.75)
  backdrop-filter blur(4px)
  covers full screen

- MODAL CARD centered:
  bg #161616 border #242424 radius 20px
  padding 24px width calc(100% - 48px) max-width 340px
  shadow 0 24px 64px rgba(0,0,0,0.8)
  entry: scale from 0.9 + fade in 0.2s ease

MODAL VARIANTS:

  DELETE CONTACT modal:
    "🗑 Remover contato?" Clash Display 18px white
    "Tem certeza que deseja remover
     Mãe dos seus contatos de emergência?"
    DM Mono 13px #888 line-height 1.7
    2 buttons gap 10px:
      "Cancelar" secondary full-width → dismiss
      "Remover" bg #ff3b3b text white full-width → removes + toast

  BLOCK USER modal:
    "🚫 Bloquear usuário?" Clash Display 18px white
    "Julia não poderá mais ver seu
     perfil ou enviar mensagens."
    "Cancelar" secondary | "Bloquear" danger full-width

  LOGOUT modal:
    "Sair da conta?" Clash Display 18px white
    "Você precisará fazer login novamente."
    "Cancelar" secondary | "Sair" danger

  ACTIVATE SOS modal:
    bg #ff3b3b10 border #ff3b3b30
    "🆘 Ativar SOS?" Clash Display 18px #ff3b3b
    "Isso irá notificar seus contatos de
     emergência e compartilhar sua localização."
    "Cancelar" secondary | "Ativar SOS" danger

════════════════════════════════════════
SCREEN 29 — TRANSIÇÕES ENTRE TELAS
(define animation for all connections)
════════════════════════════════════════
TRANSITION TYPES — apply to prototype connections:

PUSH RIGHT (standard forward navigation):
  New screen slides in from RIGHT
  Current screen slides out to LEFT
  Duration: 280ms cubic-bezier(0.4, 0, 0.2, 1)
  Apply to: all → navigation going deeper

PUSH LEFT (back navigation):
  New screen slides in from LEFT
  Current screen slides out to RIGHT
  Duration: 250ms cubic-bezier(0.4, 0, 0.2, 1)
  Apply to: all ← back arrow taps

SLIDE UP (bottom sheets and modals):
  New screen slides up from bottom
  Overlay fades in behind
  Duration: 320ms cubic-bezier(0.34, 1.56, 0.64, 1) (spring)
  Apply to: bottom sheets, modals, SOS screen, rating screen

FADE (tab navigation):
  Cross-fade between screens
  Duration: 200ms ease
  Apply to: bottom nav tab switches

SCALE UP (match screen):
  Screen scales from 0.92 + fades in
  Duration: 350ms cubic-bezier(0.34, 1.56, 0.64, 1)
  Apply to: SCREEN 12 Match (special moment)

════════════════════════════════════════
SCREEN 30 — MICROINTERAÇÕES
(component-level animations)
════════════════════════════════════════
BUTTON PRESS:
  All buttons: scale 0.96 on press / scale 1.0 on release
  Duration: 120ms ease / 200ms spring
  Primary button also: shadow reduces to 0 on press

CURTIR BUTTON (SCREEN 11):
  Tap sequence:
  1. Scale pulse: 1.0 → 1.12 → 1.0 (200ms)
  2. Border flashes person-color (300ms)
  3. Icon "♡" morphs to "♥" filled (200ms)
  4. Text changes "Curtir" → "Curtido ✓"
  5. Card border glows person-color 400ms then fades
  6. Small heart particle "+1" floats up and fades (500ms)

MATCH SCREEN ENTRY:
  1. Background color fade in (300ms)
  2. Confetti particles appear staggered (400ms)
  3. Star "★" scales 0→1.3→1.0 (500ms) with bounce
  4. "MATCH" text slides up + fades in (400ms delay 200ms)
  5. Avatar circles scale in simultaneously (400ms delay 400ms)
  6. Body text fades in (300ms delay 600ms)
  7. Buttons slide up (300ms delay 800ms)

SEND MESSAGE:
  1. Send button: scale 0.9 → 1.0 spring (150ms)
  2. Bubble appears: scale 0.8→1.0 + fade (200ms)
  3. Input clears with fade (150ms)
  4. Typing indicator: dots animate in stagger 0.2s each
  5. Reply bubble: scale 0.95→1.0 + fade (250ms)

TOGGLE SWITCH:
  Thumb slides position: 220ms cubic-bezier(0.4, 0, 0.2, 1)
  Track color changes: 200ms ease
  Haptic feedback symbol in spec: [HAPTIC]

NOTIFICATION DOT:
  New notification: scale 0→1 with spring bounce (300ms)
  Pulse ring: scale 1→1.5 opacity 1→0 repeat every 2s

SOS BUTTON ACTIVATED:
  1. Scale: 1.0 → 0.95 → 1.0 (200ms)
  2. Fill: transparent → red (300ms)
  3. Pulse rings: expand outward infinite (800ms each ring)
  4. Text changes "SOS" → "ATIVO" cross-fade (200ms)

════════════════════════════════════════
UPDATED PROTOTYPE CONNECTIONS (new screens)
════════════════════════════════════════
04 Login → [Esqueci a senha] ──────────→ 17 Esqueci a senha
17 → [Enviar link] ────────────────────→ 17 Success state
17 → [Voltar ao login] ────────────────→ 04 Login

06 → [🔔 notification bell] ──────────→ 18 Notificações
18 → [row match tap] ──────────────────→ 12x Match (respective)
18 → [row evento tap] ─────────────────→ 08 Detalhe
18 → [row ingresso tap] ───────────────→ 10 Ingresso

06 → [user avatar top-left] ──────────→ 19 Configurações
19 → [Editar perfil] ──────────────────→ 05 Perfil
19 → [Alterar senha] ──────────────────→ 17 Esqueci a senha
19 → [Contatos emergência] ────────────→ 20 Editar contatos
19 → [Sair da conta] ──────────────────→ 28 Modal logout → 01 Splash
20 → [Salvar] ─────────────────────────→ 19 Configurações

06 → [search bar tap] ─────────────────→ 24 Busca expandida
24 → [Cancelar] ───────────────────────→ 06 Esta Noite
24 → [category tap] ───────────────────→ 06 filtered
24 → [result tap] ─────────────────────→ 08 Detalhe

11 → [avatar tap] ─────────────────────→ 25 Perfil de pessoa
25 → [Curtir] ─────────────────────────→ 12x Match
25 → [Mensagem] ───────────────────────→ 13x Chat

10 → [after event] ────────────────────→ 26 Avaliação
26 → [Enviar avaliação] ───────────────→ 06 + success toast
26 → [Agora não] ──────────────────────→ 06

07 Mapa → (now includes radius overlay) same connections as before

ALL DELETE/BLOCK/LOGOUT actions → 28 Confirm modal first
ALL screens → toasts appear on top per trigger events
ALL forward nav → push right transition
ALL back nav → push left transition
Bottom sheet screens → slide up transition
Match screen → scale up transition
Tab switches → fade transition