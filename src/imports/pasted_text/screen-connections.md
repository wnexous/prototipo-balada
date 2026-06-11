SCREEN 14 — MEUS MATCHES (message inbox)
════════════════════════════════════════
- Top bar no back:
  "Mensagens" Clash Display 22px white left
  Edit icon right "✎" #888 (no connection)

- Online now strip:
  "ONLINE AGORA" 10px #888 uppercase letter-spacing 1.5px
  Horizontal scroll row of avatar circles md 48px:
    Each: person avatar + name 10px below + green dot
    Show: Julia | Carol | Ana (online)

- SECTION "CONVERSAS" label 10px #888 letter-spacing 1.5px

- Conversation list rows (tappable → CHAT screen):
  Each row: height 72px padding 0 16px border-bottom #1a1a1a:
  
  LEFT: avatar md 48px (person color + emoji) + unread dot accent 10px
        absolute top-right of avatar if unread
  
  CENTER col flex-1 padding-left 14px:
    Row top: "Name, age" DM Mono 14px #f5f5f5 bold +
             timestamp right "21:47" 11px #555
    Row bottom: last message preview 13px truncated 1 line
      If unread: #f5f5f5 / If read: #555
      Show typing "digitando..." accent italic if typing
  
  Row 1 (Julia 24): unread dot + "Te vejo em breve! 🎶" unread #f5f5f5 + "21:49"
  Row 2 (Carol 23): no unread + "Combinado!" read #555 + "20:30"
  Row 3 (Ana 22): "digitando..." accent italic + "agora"
  
  MATCH REQUEST CARD (different style, accent border):
    bg #e8ff4708 border 1px accent radius 14px margin 12px 16px padding 14px:
    "⭐ 3 novos matches esperando" DM Mono 13px accent bold
    "Julia, Carol e Ana curtiram você" 12px #888
    Button "Ver matches" small accent outline right

- EMPTY STATE (if no matches):
  Centered: "💫" 64px + "Sem mensagens ainda" Clash Display 20px #555
  "Vá ao evento e curta alguém!" 14px #333
  Button primary "Ir ao evento" width auto centered

- Bottom nav (◷ Chat active)

════════════════════════════════════════
SCREEN 15 — GALERA DO SEXTOU
════════════════════════════════════════
- Header: back arrow + "Galera do Sextou" +
  settings icon right "⚙" #555 (no connection)

- LIVE MAP PANEL card radius 18px overflow hidden bg #0f1a0f:
  Height 150px. Dark map style with faint grid.
  5 position markers: each is avatar circle sm 28px
  (person emoji + color) with name tag below 9px
  
  Markers placed at varied positions (not aligned):
    "Você" → accent dot + glow (user's position, center-ish)
    "Pedro" → white dot
    "Ana" → #4ade80 dot (her color)
    "Rafa" → white dot
    "Bia" → #f472b6 dot (her color)
  
  Bottom-right of map: "Atualizado agora" 10px #555

- ACTIVITY FEED label row:
  "MEMBROS" 10px #888 uppercase + "3 ativos" accent 10px right

- Member list 3 rows each:
  Padding 14px 0 border-bottom #1a1a1a:
  
  LEFT: avatar md 44px
    Active: person color border 2px + glow
    Inactive: #242424 border
  
  CENTER col flex-1 padding-left 14px:
    Name bold 14px white
    Status row: colored dot 6px + status text 12px
    
  RIGHT: "Chat" button small secondary → SCREEN 13 chat
  
  Row 1: Ana avatar 🌿 #4ade80 — "● No bar" green active
  Row 2: Pedro 👤 white — "● Pista principal" green active
  Row 3: Rafa 👤 #242424 border — "● Acabou de chegar" #888

- ACTION BUTTONS:
  Primary "Conversar no grupo" full-width → SCREEN 13
  Secondary "Ver no mapa" full-width → SCREEN 07

- Bottom nav (◎ Galera active)

════════════════════════════════════════
SCREEN 16 — EMERGÊNCIA (SOS)
════════════════════════════════════════
- 4px solid #ff3b3b stripe absolute top
- Header: back arrow + "EMERGÊNCIA" Clash Display 18px #ff3b3b bold
  right: "🔔 Alerta ativo" 11px #ff3b3b if SOS activated

- Alert info cards 4 rows bg #161616 border #1a1a1a radius 14px padding 14px:
  Each: icon 20px left + text col + toggle/status right
  
  Row 1: 📍 "Localização atual enviada" +
    status "Ativo" green pill right
  Row 2: 👥 "Contatos notificados" +
    contacts "Mãe, Ana, Gabi" 11px #888
  Row 3: 🛡 "Equipe de moderação alertada" +
    "Respondendo em 2min" #888
  Row 4: ⏱ "Rastreamento ativo por" +
    "23h 47min" accent countdown right

- SOS BUTTON centered, margin 24px auto:
  Circle 130px:
    DEFAULT: border 3px #ff3b3b bg #ff3b3b12
      text "SOS" Clash Display 32px #ff3b3b
    ACTIVATED: bg #ff3b3b border none
      text "ATIVO" white + pulse ring animation
      ring 1: 0 0 0 16px rgba(255,59,59,0.15)
      ring 2: 0 0 0 32px rgba(255,59,59,0.07)
  
  ⚠ INTERACTION: tap → button fills red + text "ATIVO" +
  all 4 cards above update to "ativo" state +
  alert banner appears below button:
    bg #ff3b3b15 border #ff3b3b radius 14px padding 14px:
    "🔴 SOS ativado! Equipe notificada. Ajuda a caminho." 13px #ff3b3b

- CONTACTS SECTION:
  "CONTATOS DE EMERGÊNCIA" 10px #888 uppercase label
  3 contact pills horizontal: "Mãe 👩" "#f97316" | "Ana 🌿" "#4ade80" | "Gabi ✨" "#f472b6"
  "+ Editar contatos" 13px accent underline centered

- Bottom nav (⊗ SOS active red)

════════════════════════════════════════
ALL PROTOTYPE CONNECTIONS
════════════════════════════════════════
01 Splash → [Entrar] ──────────────────→ 04 Login
01 Splash → [Criar Conta] ─────────────→ 02 Criar Conta
02 Criar Conta → [Continuar] ──────────→ 03 Verificar
03 Verificar → [Começar verificação] ──→ 05 Perfil
03 Verificar → [Pular por agora] ──────→ 05 Perfil
04 Login → [Entrar] ───────────────────→ 06 Esta Noite
04 Login → [Criar conta] ──────────────→ 02 Criar Conta
05 Perfil → [Finalizar e entrar] ──────→ 06 Esta Noite

06 Esta Noite → [card tap / Ver] ──────→ 08 Detalhe
06 Esta Noite → [◉ Mapa] ──────────────→ 07 Mapa
06 Esta Noite → [◎ Galera] ────────────→ 15 Galera
06 Esta Noite → [◷ Chat] ──────────────→ 14 Matches
06 Esta Noite → [⊗ SOS] ───────────────→ 16 SOS

07 Mapa → [pin tap / Ver evento] ──────→ 08 Detalhe
07 Mapa → all nav tabs work

08 Detalhe → [Quem está aqui] ─────────→ 11 Quem está aqui
08 Detalhe → [ver todos →] ────────────→ 11 Quem está aqui
08 Detalhe → [Comprar ingresso] ───────→ 09 Comprar

09 Comprar → [Finalizar compra] ───────→ 10 Ingresso
10 Ingresso → [Já estou no evento →] ──→ 11 Quem está aqui

11 Quem está → [Curtir Julia] ─────────→ 12a Match Julia
11 Quem está → [Curtir Maria] ─────────→ 12b Match Maria
11 Quem está → [Curtir Carol] ─────────→ 12c Match Carol
11 Quem está → [Curtir Paula] ─────────→ 12d Match Paula
11 Quem está → [Curtir Ana] ───────────→ 12e Match Ana
11 Quem está → [Curtir Bia] ───────────→ 12f Match Bia

12a → [Mandar mensagem] ───────────────→ 13a Chat Julia
12b → [Mandar mensagem] ───────────────→ 13b Chat Maria
12c → [Mandar mensagem] ───────────────→ 13c Chat Carol
12d → [Mandar mensagem] ───────────────→ 13d Chat Paula
12e → [Mandar mensagem] ───────────────→ 13e Chat Ana
12f → [Mandar mensagem] ───────────────→ 13f Chat Bia
ALL 12x → [Continuar] / [← Voltar] ───→ 11 Quem está aqui

ALL 13x → [← back] ────────────────────→ 14 Matches
ALL 13x → [⊗ header] ──────────────────→ 16 SOS
14 Matches → [row Julia] ──────────────→ 13a Chat Julia
14 Matches → [row Carol] ──────────────→ 13c Chat Carol
14 Matches → [row Ana] ────────────────→ 13e Chat Ana

15 Galera → [Chat row Ana] ────────────→ 13e Chat Ana
15 Galera → [Chat row Pedro] ──────────→ 14 Matches
15 Galera → [Conversar no grupo] ──────→ 14 Matches
15 Galera → [Ver no mapa] ─────────────→ 07 Mapa

16 SOS → all nav tabs work

ALL SCREENS → [← back arrow] ─────────→ previous screen
ALL SCREENS bottom nav → respective screen