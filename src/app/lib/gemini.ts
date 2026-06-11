// Integração com a API REST do Gemini (Google AI) para respostas de chat reais.
// A chave vem de VITE_GEMINI_API_KEY (.env local). Se não houver chave, o Chat
// usa as respostas simuladas como fallback — o app nunca quebra.
import type { Person } from '../data/people';

// Tenta os modelos em ordem; cai pro próximo se o projeto não tiver acesso (404).
// gemini-2.5-flash confirmado funcionando com a chave; demais como fallback.
const MODELS = ['gemini-2.5-flash', 'gemini-flash-latest', 'gemini-2.0-flash', 'gemini-2.5-flash-lite'];

export const GEMINI_KEY_STORAGE = 'linkup:gemini-key';

/**
 * A chave NUNCA é embutida no bundle público: vem do localStorage (colada pelo
 * usuário em Configurações > Chat com IA) ou, em dev local, do .env (VITE_).
 */
function getKey(): string | undefined {
  try {
    const stored = localStorage.getItem(GEMINI_KEY_STORAGE)?.trim();
    if (stored) return stored;
  } catch {
    /* localStorage indisponível */
  }
  return (import.meta.env.VITE_GEMINI_API_KEY as string | undefined)?.trim();
}

export function hasGeminiKey(): boolean {
  const k = getKey();
  return Boolean(k && k.length > 10);
}

export function setGeminiKey(key: string): void {
  try {
    if (key.trim()) localStorage.setItem(GEMINI_KEY_STORAGE, key.trim());
    else localStorage.removeItem(GEMINI_KEY_STORAGE);
  } catch {
    /* ignora */
  }
}

export function getGeminiKeyMasked(): string | null {
  const k = getKey();
  if (!k) return null;
  return `${k.slice(0, 6)}…${k.slice(-4)}`;
}

export type ChatTurn = { sender: 'user' | 'other'; text: string };

function systemInstruction(person: Person): string {
  const flerte = person.intentions.includes('Paquera')
    ? 'Seja simpática(o) e levemente paqueradora(o), sem exagero nem ser apelativa(o).'
    : 'Seja amigável, curiosa(o) e aberta(o) a conhecer gente nova.';
  return [
    `Você é ${person.name}, ${person.age} anos, em uma balada/evento de nightlife em Curitiba agora.`,
    `Sua bio: "${person.bio}". Seus interesses: ${person.interests.join(', ')}.`,
    `Você acabou de dar match com a pessoa com quem está conversando no app LinkUp.`,
    `Responda SEMPRE em português do Brasil, de forma casual, jovem e descontraída — como num chat real de balada.`,
    `Mensagens curtas (1 a 2 frases). Emojis com moderação.`,
    flerte,
    `Faça perguntas de vez em quando pra puxar papo. Nunca revele que é uma IA; mantenha o personagem ${person.name} o tempo todo.`,
  ].join(' ');
}

export async function chatWithGemini(person: Person, history: ChatTurn[]): Promise<string> {
  const KEY = getKey();
  if (!KEY || KEY.length <= 10) throw new Error('no-key');

  const body = {
    systemInstruction: { parts: [{ text: systemInstruction(person) }] },
    contents: history.map((t) => ({
      role: t.sender === 'user' ? 'user' : 'model',
      parts: [{ text: t.text }],
    })),
    generationConfig: { temperature: 0.9, maxOutputTokens: 220 },
  };

  let lastErr: unknown = new Error('gemini-failed');
  for (const model of MODELS) {
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'x-goog-api-key': KEY },
          body: JSON.stringify(body),
        },
      );
      if (res.status === 404) { lastErr = new Error('model-404'); continue; }
      if (!res.ok) { lastErr = new Error('http-' + res.status); break; }
      const data = await res.json();
      const text: string = (data?.candidates?.[0]?.content?.parts ?? [])
        .map((p: { text?: string }) => p.text ?? '')
        .join('')
        .trim();
      if (text) return text;
      lastErr = new Error('empty-response');
      break;
    } catch (e) {
      lastErr = e;
    }
  }
  throw lastErr;
}
