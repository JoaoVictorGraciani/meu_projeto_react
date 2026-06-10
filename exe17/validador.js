// validador.js

const validarCandidato = (payload) => {

    // 1. Verifica se é um objeto válido
    if (!payload || typeof payload !== 'object' || Array.isArray(payload)) {
        throw new Error("Payload deve ser um objeto válido");
    }

    // 2. Verifica o campo nome
    if (typeof payload.nome !== 'string' || payload.nome.trim() === '') {
        throw new Error("O campo 'nome' é obrigatório e deve ser um texto");
    }

    // 3. Verifica o campo habilidades
    if (!Array.isArray(payload.habilidades) || payload.habilidades.length === 0) {
        throw new Error("O campo 'habilidades' deve ser um array com pelo menos um item");
    }

    // Tudo certo
    return true;
};

module.exports = { validarCandidato };
