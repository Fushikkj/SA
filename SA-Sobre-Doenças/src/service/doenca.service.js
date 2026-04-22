import fs from "fs/promises";

const path = "./src/doencas.json";

async function lerDoencas() {
  const data = await fs.readFile(path, "utf-8");
  return JSON.parse(data);
}

async function salvarDoencas(doencas) {
  const data = JSON.stringify(doencas, null, 2);
  await fs.writeFile(path, data);
}