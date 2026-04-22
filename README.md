# DevAssistant — Setup y fundamentos (módulo 02)

Proyecto base del curso: asistente de documentación con RAG, function calling y APIs de modelos.

## Qué está hecho hasta ahora

- **Entorno Node** con **TypeScript** y **tsx** para ejecutar sin build intermedio (`npm run dev` / `start`).
- **Módulos ES** (`"type": "module"`) y configuración en `tsconfig.json`.
- **Variables de entorno** con `dotenv`: proveedor (`anthropic` u `openai`), claves, modelos, rutas de docs y parámetros RAG centralizados en `src/config.ts` y tipos en `src/types.ts`.
- **Punto de entrada** `src/index.ts`: carga la config y muestra un resumen para confirmar que todo está enlazado bien antes de seguir con llamadas a la API.

## Cómo probarlo

1. Copiar y completar `.env` según las variables que espera `config.ts`.
2. `npm install` y luego `npm run dev`.

Documentación de ejemplo del RAG vive en `docs/sample-project/`.

## Rama de trabajo

Los avances de esta etapa van en la rama **`01-setup-y-fundamentos`**.
