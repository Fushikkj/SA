import fs from "fs/promises";

const path = "./src/service/doencas.json";

async function lerDoencas() {
    const data = await fs.readFile(path, "utf-8");
    return JSON.parse(data);
}

async function salvarDoencas(doencas) {
    await fs.writeFile(path, JSON.stringify(doencas, null, 2));
}

export default {
    async getAll() {
        return await lerDoencas();
    },

    async getById(id) {
        const doencas = await lerDoencas();
        return doencas.find(d => d.id == id);
    },

    async create(nome, fatal) {
        const doencas = await lerDoencas();

        const nova = {
            id: doencas.length + 1,
            nome,
            fatal
        };

        doencas.push(nova);
        await salvarDoencas(doencas);

        return nova;
    }
};