# LinkUp — Protótipo do App (contexto p/ Claude Code)

> App social de **conexão em baladas/eventos de nightlife**. Protótipo de alta fidelidade,
> 100% navegável, feito pra apresentação acadêmica. Tudo é **dado mocado** — não há backend.

---

## 1. Contexto do projeto (o "porquê")

LinkUp é o projeto de semestre da disciplina **Prototipagem de Sistemas Computacionais**
(Universidade Positivo, Curitiba). É um app pra galera se conectar **antes e durante** uma
balada. Três diferenciais que guiam TODO o produto:

1. **Match mútuo e anônimo antes da abordagem presencial** — ninguém sabe que deu like até
   ser recíproco. Reduz o medo da rejeição/exposição.
2. **Verificação de identidade obrigatória + botão de SOS de emergência** — segurança é
   feature central, não enfeite. (telas `VerifyIdentity`, `SOS`, `EmergencyContacts`)
3. **Filtros por intenção/afinidade** — paquera, amizade, fazer galera, etc. (tela `WhoIsHere`)

**Personas** (de pesquisa real com respondentes):
- Lucas "O Observador" (~46%) — entra pra ver o rolê, age com cautela.
- Beatriz "A Cautelosa" (~33%) — segurança/verificação são decisivos.
- Rafael "O Desenrolado" (~21%) — social, quer conhecer gente rápido.

Time (5): André Fogaça Gorski, André Ruan Cesar Dal Negro, Erick Pereira Munhoz,
Maria Eduarda Delbone Cardoso, Vinicius Henrique dos Santos.

**Implicação prática:** ao evoluir o app, segurança e o fluxo de match anônimo são
prioridade. Não quebrar esses pilares.

---

## 2. Stack

- **React 18** + **TypeScript** + **Vite 6**
- **React Router 7** com **HashRouter** (`#/rota`) — escolha proposital: faz o app funcionar
  abrindo o `index.html` direto (file://) e em qualquer host estático, sem precisar de
  servidor com rewrite. **Não troque pra BrowserRouter** sem necessidade.
- **Tailwind CSS v4** (via `@tailwindcss/vite`, sem `tailwind.config` — tema fica em CSS).
- **lucide-react** (ícones), **sonner** (toasts).
- **vite-plugin-singlefile** — gera um único `dist/index.html` com tudo inline (o entregável
  de apresentação).

## 3. Como rodar

```bash
npm install                # usar --legacy-peer-deps se reclamar de peer deps
npm run dev                # dev server (Vite) -> http://localhost:5173
npm run build              # gera dist/index.html ÚNICO (HTML+CSS+JS inline) p/ apresentar
```
O `dist/index.html` abre clicando (file://) e funciona **100% offline**: todas as
imagens (avatares + capas) são **fotos reais embutidas localmente** em `src/assets/` e
inlinadas como base64 no build (via `assetsInlineLimit` no `vite.config.ts`). Só as
fontes (Google Fonts) carregam da internet — o resto é autossuficiente.

## 4. Arquitetura

```
src/
  main.tsx                 # entry; monta <App/>
  app/
    App.tsx                # FRAME do celular + roteamento (HashRouter) + Toaster
    data/                  # CAMADA DE DADOS — só objetos mocados p/ alimentar as telas
      people.ts            #   24 pessoas (nome, idade, emoji, cor, bio, photo, interesses,
                           #   intenções, distância, online, stats) + findPerson()
      events.ts            #   28 eventos + sections/filterTabs/featuredEvent + mapEvents
      conversations.ts     #   lista de conversas (Matches) + autoReplies/quickReplies (Chat)
      notifications.ts notifications, crew, emergencyContacts, search, onboarding,
      tickets.ts rating.ts #   demais datasets por domínio
    lib/media.ts           # coverFor(genre, seed) -> capa local (src/assets/covers, 2/gênero)
    components/            # blocos reutilizáveis (Avatar, Button, Input, BottomNav, etc.)
      ui/                  # shadcn/radix primitives (muitos não usados — vieram do Figma Make)
      figma/ImageWithFallback.tsx
    screens/               # UMA tela por rota (ver mapa abaixo)
  assets/
    avatars/               # 24 fotos de avatar (jpg) — embutidas no build
    covers/                # 26 capas de evento (jpg, 2 por gênero) — embutidas no build
  styles/
    theme.css              # DESIGN TOKENS (cores, fontes, radius) — fonte da verdade visual
    fonts.css              # @import Google Fonts (Syne + DM Mono)
    tailwind.css index.css
```

### Mapa de rotas → telas (App.tsx)
| Rota | Tela | O que é |
|---|---|---|
| `/` | Splash | abertura |
| `/login` `/forgot-password` `/signup` | Login / ForgotPassword / CreateAccount | auth |
| `/verify` | VerifyIdentity | **verificação de identidade (diferencial 2)** |
| `/profile-setup` | ProfileSetup | onboarding de perfil |
| `/home` | EventFeed | feed principal de eventos (entry pós-login) |
| `/map` | MapView | eventos no mapa |
| `/event/:id` | EventDetail | detalhe do evento (hero com capa) |
| `/event/:id/ticket` `/my-ticket` | TicketPurchase / MyTicket | ingressos |
| `/who-is-here` | WhoIsHere | **quem tá no rolê + filtros de intenção (diferencial 3)** |
| `/match/:personName` | Match | tela de "deu match" |
| `/chat/:personName` `/messages` | Chat / Matches | conversas |
| `/crew` `/people` | Crew | sua galera |
| `/sos` | SOS | **botão de emergência (diferencial 2)** |
| `/emergency-contacts` | EmergencyContacts | contatos de emergência |
| `/notifications` `/settings` `/search` | Notifications / Settings / SearchExpanded | utilitárias |
| `/profile/:personName` | PersonProfile | perfil de outra pessoa |
| `/event-rating` | EventRating | avaliar evento pós-rolê |

Navegação entre telas usa `useNavigate()` do react-router. Estado é passado via
`navigate(path, { state })` (ex.: EventDetail recebe o evento por `location.state`).

## 5. Design system (não fugir disso)

Tokens em `src/styles/theme.css`. Identidade **dark neon**:
- Fundos: `--background #080808`, `--card #161616`, `--elevated #1e1e1e`, `--border #242424`
- Texto: `--text-primary #f5f5f5`, `--text-secondary #888`, `--text-tertiary #444`
- **Accent (assinatura): `--accent #e8ff47`** (amarelo-limão neon)
- Status: success `#3bff8a`, danger `#ff3b3b`, info `#38bdf8`
- Cores por pessoa: julia roxo, maria laranja, carol amarelo, paula azul, ana verde, bia rosa
- Fontes: **Syne** (800) p/ títulos `h1-h6`; **DM Mono** p/ corpo/botões/inputs
- `--radius: 0.625rem`; muitos componentes usam radius generoso (cards 18px, frame 46px)

Tela é fixa em **390×844** (iPhone) dentro de um **frame de celular** (bezel + botões +
glow), centralizado num backdrop radial — definido em `App.tsx`. Cada tela tem sua própria
`StatusBar` (9:41) e `HomeIndicator`.

## 6. Dados mocados & imagens

- **Tudo vive em `src/app/data/`** — as telas NÃO declaram mais arrays mocados inline;
  importam dos módulos de dados. Pra deixar o protótipo mais populoso, edite os datasets ali.
- **Pessoas:** `src/app/data/people.ts` (24 pessoas). Campo `photo` importa um `.jpg` local
  de `src/assets/avatars/` (foto real, gênero batendo com o nome). Use `findPerson(name)`.
- **Eventos:** `src/app/data/events.ts` (28 eventos). `sections`/`filterTabs` são derivados
  por gênero. Capas vêm de `coverFor()` em `src/app/lib/media.ts`, que importa as fotos
  locais de `src/assets/covers/` (2 variantes por gênero, escolha estável pelo seed).
- **Avatares** = `<img>` com `object-cover rounded-full` dentro do círculo de borda neon.
  Como as imagens são locais e sempre carregam, o fallback de emoji praticamente não dispara.
  Componente central: `components/Avatar.tsx` (aceita `photo`/`name` opcionais).
- Conversas, notificações, contatos, crew, busca, onboarding, ingressos e avaliação têm
  cada um seu arquivo em `data/` — adicione itens lá pra popular as telas correspondentes.

## 7. Convenções / armadilhas

- **HashRouter é proposital** (file:// + estático). Mantém.
- `base: './'` no `vite.config.ts` — caminhos relativos, não quebrar.
- Os componentes em `components/ui/*` são um dump do Figma Make; só alguns são usados.
  Pode remover os não-usados se for limpar, mas não é necessário.
- Sem backend/estado global. Pra "funcionar de verdade" um dia: extrair os mocks pra um
  client de API, adicionar contexto de auth, e um store (zustand/context).
- Emojis decorativos grandes (ex.: estados vazios do Chat) **não** são avatares — não trocar
  por foto.

## 8. Roadmap / ideias (se for evoluir)

- [ ] Logo do LinkUp (ainda pendente — variações: wordmark tipográfico / símbolo de pontos
      conectados / conceito literal tipo globo de espelhos).
- [ ] Persistir estado de likes/matches (hoje é só visual).
- [ ] Animar transições entre telas (já tem `motion` instalado).
- [ ] Tela de filtros de intenção mais rica (alinhar com persona Beatriz/segurança).
- [ ] Fluxo de SOS com confirmação + "fake call" pra demo.
- [ ] i18n — hoje é tudo PT-BR hardcoded.
