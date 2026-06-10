// testeValidador.js

const { validarCandidato } = require('./validador');

console.log("Iniciando testes de Validação Estrutural...\n");

// =====================================================
// TESTE 1 - Caminho Feliz
// =====================================================
try {

    const candidatoValido = {
        nome: "Carlos",
        habilidades: ["JavaScript", "SQL"]
    };

    const resultado = validarCandidato(candidatoValido);

    if (resultado !== true) {
        throw new Error("Deveria retornar true");
    }

    console.log("✅ Teste 1 (Estrutura): Payload perfeitamente estruturado aceito.");

} catch (error) {

    console.error("❌ Teste 1 Falhou:", error.message);

}

// =====================================================
// TESTE 2 - Payload nulo
// =====================================================
try {

    validarCandidato(null);

    console.error("❌ Teste 2 Falhou: Aceitou um payload nulo.");

} catch (error) {

    if (error.message === "Payload deve ser um objeto válido") {
        console.log("✅ Teste 2 (Tipagem): Null/Undefined barrados corretamente.");
    } else {
        console.error("❌ Teste 2 Falhou por motivo incorreto:", error.message);
    }

}

// =====================================================
// TESTE 3 - Nome ausente
// =====================================================
try {

    const candidatoSemNome = {
        idade: 30,
        habilidades: ["Python"]
    };

    validarCandidato(candidatoSemNome);

    console.error("❌ Teste 3 Falhou: Aceitou candidato sem o campo nome.");

} catch (error) {

    console.log("✅ Teste 3 (Propriedade): Bloqueio de nome ausente funcionou.");

}

// =====================================================
// TESTE 4 - Habilidades não é array
// =====================================================
try {

    const candidatoHabilidadeInvalida = {
        nome: "Ana",
        habilidades: "Java"
    };

    validarCandidato(candidatoHabilidadeInvalida);

    console.error("❌ Teste 4 Falhou: Aceitou habilidades fora do formato array.");

} catch (error) {

    console.log("✅ Teste 4 (Array): Estrutura de array validada com sucesso.");

}

console.log("\n🏁 Fim dos testes.");