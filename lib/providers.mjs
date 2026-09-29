/**
 * The free services ANUS can run on. `id` is the engine's provider id; the
 * key a person pastes in `anus setup` is stored under it in auth.json.
 * Only models of these providers, and only the ones in free-models.json,
 * are ever picked by the router.
 */
export const PROVIDERS = [
  {
    id: 'openrouter',
    name: 'OpenRouter',
    env: 'OPENROUTER_API_KEY',
    keyUrl: 'https://openrouter.ai/keys',
    note: 'one key, about fifteen free models; 50 requests a day, 1000 after a one-time $10 top-up',
  },
  {
    id: 'google',
    name: 'Google Gemini',
    env: 'GEMINI_API_KEY',
    keyUrl: 'https://aistudio.google.com/apikey',
    note: 'free tier while billing is off on the project',
  },
  {
    id: 'groq',
    name: 'Groq',
    env: 'GROQ_API_KEY',
    keyUrl: 'https://console.groq.com/keys',
    note: 'free tier, very fast',
  },
  {
    id: 'cerebras',
    name: 'Cerebras',
    env: 'CEREBRAS_API_KEY',
    keyUrl: 'https://cloud.cerebras.ai',
    note: 'free tier, very fast',
  },
  {
    id: 'mistral',
    name: 'Mistral',
    env: 'MISTRAL_API_KEY',
    keyUrl: 'https://console.mistral.ai/api-keys',
    note: 'free Experiment plan',
  },
];

export const PROVIDER_IDS = PROVIDERS.map((p) => p.id);
