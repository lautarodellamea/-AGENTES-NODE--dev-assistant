/* 
“cerebro de configuración” de tu app RAG.
Define qué usar, cómo usarlo y con qué parámetros, sin hardcodear nada.
*/

import { config as loadDotenv } from "dotenv";

import { AppConfig } from "./types.js";

// al ejecutar esta funcion, carga el archivo .env al iniciar
loadDotenv();

function getRequiredEnvVar(key: string, defaultValue?: string): string {
  const value = process.env[key] || defaultValue;

  if (!value) {
    throw new Error(`La variable de entorno ${key} es requerida`);
  }
  return value;
}

function validateProvider(provider: string): "anthropic" | "openai" {
  if (provider === "anthropic") {
    return "anthropic";
  } else if (provider === "openai") {
    return "openai";
  } else {
    throw new Error(
      `MODEL_PROVIDER: Proveedor de modelo inválido: ${provider} Debe ser anthropic o openai`,
    );
  }
}

const rawProvider = process.env["MODEL_PROVIDER"] ?? "anthropic";

export const config: AppConfig = {
  provider: validateProvider(rawProvider),
  anthropicApiKey: getRequiredEnvVar("ANTHROPIC_API_KEY", ""),
  openaiApiKey: getRequiredEnvVar("OPENAI_API_KEY", ""),
  anthropicModel: getRequiredEnvVar("ANTHROPIC_MODEL", "claude-sonnet-4-6"),
  openaiModel: getRequiredEnvVar("OPENAI_MODEL", "gpt-4o-mini"),
  openaiEmbeddingModel: getRequiredEnvVar(
    "OPENAI_EMBEDDING_MODEL",
    "text-embedding-3-small",
  ),
  docsPath: getRequiredEnvVar("DOCS_PATH", "./docs/sample-project"),
  dbPath: getRequiredEnvVar("DB_PATH", "./data/vectors.db"),
  ragTopK: parseInt(getRequiredEnvVar("RAG_TOP_K", "5"), 10),
};

// validamos si vamos a usar anthropic o openai y si tenemos la API key, en nuestro caso usaremos las dos, openai para embeddings y anthropic para el modelo o viceversa
export function validateConfig(): void {
  if (config.provider === "anthropic" && !config.anthropicApiKey) {
    throw new Error("ANTHROPIC_API_KEY: La API key de Anthropic es requerida");
  }
  if (config.provider === "openai" && !config.openaiApiKey) {
    throw new Error("OPENAI_API_KEY: La API key de OpenAI es requerida");
  }
}

export default config;
