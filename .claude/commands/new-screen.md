Criar uma nova tela seguindo os padrões do LinkUp.

Argumento: $ARGUMENTS (nome da tela em PascalCase, ex.: "GroupChat").

Faça:
1. Crie `src/app/screens/$ARGUMENTS.tsx` exportando `export function $ARGUMENTS()`.
2. Use o frame fixo 390×844 já provido pelo App; comece a tela com `<StatusBar />` no topo
   e `<HomeIndicator />` no rodapé (veja telas existentes como referência).
3. Use SOMENTE os design tokens de `src/styles/theme.css` (cor accent #e8ff47, fontes
   Syne/DM Mono). Nada de cores fora da paleta.
4. Registre a rota em `src/app/App.tsx` dentro de `<Routes>`.
5. Navegação com `useNavigate()`; passe dados via `navigate(path, { state })`.
6. Mantenha tudo em PT-BR e com dados mocados.
