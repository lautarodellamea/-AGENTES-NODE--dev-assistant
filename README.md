# DevAssistant — Setup y fundamentos (módulo 02)

Proyecto base del curso: asistente de documentación con **RAG**, chat estilo CLI y conexión a APIs de modelos (**Anthropic / OpenAI**).

## Requisitos

- Node.js (recomendado **18+**)
- npm

## Configuración

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear `.env` (en la raíz del proyecto) con estas variables:

   - `MODEL_PROVIDER`: `anthropic` o `openai`
   - `ANTHROPIC_API_KEY`
   - `OPENAI_API_KEY`
   - `ANTHROPIC_MODEL` (default en código: `claude-sonnet-4-6`)
   - `OPENAI_MODEL` (default en código: `gpt-4o-mini`)
   - `OPENAI_EMBEDDING_MODEL` (default en código: `text-embedding-3-small`)
   - `DOCS_PATH` (default: `./docs/sample-project`)
   - `DB_PATH` (default: `./data/vectors.db`)
   - `RAG_TOP_K` (default: `5`)

La configuración se centraliza en `src/config.ts` y los tipos en `src/types.ts`.

## Scripts

- Desarrollo (sin build intermedio, usando `tsx`):

  ```bash
  npm run dev
  ```

- Producción / ejecución:

  ```bash
  npm run start
  ```

## Estructura principal

- `src/index.ts`: punto de entrada (demos / ejecución principal).
- `src/chat/`: chat/conversación (historial + envío al modelo).
- `src/llm/`: clientes y utilidades de integración con el proveedor.
- `docs/sample-project/`: documentación de ejemplo para RAG.

## Notas de tipado (Anthropic)

En el SDK de Anthropic, el prompt de sistema se envía como `system: string` y el array `messages` acepta roles **solo** `"user" | "assistant"`.
Si tu tipo local de mensaje incluye `"system"`, TypeScript puede marcar error de incompatibilidad.

## Rama de trabajo

Los avances de esta etapa van en la rama **`01-setup-y-fundamentos`**.
