import { useNavigate } from 'react-router-dom';

/**
 * Voltar seguro: usa o histórico do app quando existe; senão vai pra rota de
 * fallback. Evita que navigate(-1) em deep link (ex.: abrir #/event/1 direto)
 * jogue o usuário pra fora do app ou pra Splash.
 * O react-router mantém `idx` no history.state — idx 0 = primeira entrada.
 */
export function useBack(fallback: string = '/home') {
  const navigate = useNavigate();
  return () => {
    const idx = (window.history.state as { idx?: number } | null)?.idx ?? 0;
    if (idx > 0) navigate(-1);
    else navigate(fallback, { replace: true });
  };
}
