import { startCLI } from "./chat/cli.js";
import { askClaude } from "./llm/athropic-client.js";
import {
  CODE_REVIEWER_PROMPT,
  DOCUMENTATION_ASSISTANT_PROMPT,
} from "./llm/prompts.js";
import { streamClaude } from "./llm/streaming.js";

const CODIGO_CON_PROBLEMAS = `
async function getUser(id) {
  const query = "SELECT * FROM users WHERE id = " + id;
  const result = await db.query(query);
  return result[0];
}
function calcularDescuento(precio, tipo) {
  if (tipo == "vip") {
    return precio * 0.8;
  } else if (tipo == "regular") {
    return precio * 0.9;
  } else {
    return precio;
  }
}
`;

async function main(): Promise<void> {
  console.log("╔════════════════════════════════════════╗");
  console.log("║        DevAssistant - Curso IA         ║");
  console.log("╚════════════════════════════════════════╝");
  console.log("");
  // console.log("Enviando pregunta a Claude...");
  // const question = "¿Que es un embedding? Responde brevemente";
  // console.log(`   • Pregunta: ${question}`);
  // const answer = await askClaude(question);
  // console.log("-".repeat(50));
  // console.log(`   • Respuesta: ${answer}`);
  // console.log("-".repeat(50));

  // console.log("");

  // console.log("Demo 1: enviando codigo con problemas...");
  // const question2 = `Revisa este codigo y encuentra los problemas:\n\`\`\`javascript\n ${CODIGO_CON_PROBLEMAS}`;
  // const answer2 = await askClaude(question2);
  // console.log("-".repeat(50));
  // console.log(`   • Respuesta: ${answer2}`);
  // console.log("-".repeat(50));

  // console.log("");

  // console.log("Demo 2: enviando codigo con system prompt...");
  // const question3 = `Revisa este codigo y encuentra los problemas:\n\`\`\`javascript\n ${CODIGO_CON_PROBLEMAS}`;
  // const reviewerPromptAnswer = await askClaude(question3, CODE_REVIEWER_PROMPT);
  // console.log("-".repeat(50));
  // console.log(`   • Respuesta: ${reviewerPromptAnswer}`);
  // console.log("-".repeat(50));

  // console.log("");
  // console.log(
  //   "Demo 3: enviando codigo con streaming (es cuando responde estilo por bloques como chatgpt tipo tipando a medida que va generando el texto)...",
  // );
  // const question4 = `¿Que es async/await en javascript?`;
  // await streamClaude(question4, DOCUMENTATION_ASSISTANT_PROMPT);
  // console.log("-".repeat(50));

  startCLI().catch((error: Error) => {
    console.error("Error:", error.message);
    process.exit(1);
  });
}

main().catch((error: Error) => {
  console.error("Error:", error.message);
  process.exit(1);
});
