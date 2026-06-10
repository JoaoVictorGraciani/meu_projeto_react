// testeDesconto.js

const { aplicarDesconto } = require('./desconto');

console.log("Iniciando testes da Calculadora de Descontos...\n");

// =====================================================
// TESTE 1 - Caminho Feliz
// =====================================================
try {

    const resultado = aplicarDesconto(100, 20);

    if (resultado !== 80) {
        throw new Error(`Esperava 80, recebeu ${resultado}`);
    }

    console.log("✅ Teste 1 (Caminho Feliz): Desconto de 20% aplicado corretamente.");

} catch (error) {

    console.error("❌ Teste 1 Falhou:", error.message);

}

// =====================================================
// TESTE 2 - Desconto maior que 100%
// =====================================================
try {

    aplicarDesconto(100, 110);

    console.error("❌ Teste 2 Falhou: A função permitiu desconto maior que 100%.");

} catch (error) {

    if (error.message === "Desconto inválido") {

        console.log("✅ Teste 2 (Exceção): Erro de desconto > 100% capturado corretamente.");

    } else {

        console.error("❌ Teste 2 Falhou por motivo incorreto:", error.message);

    }

}

// =====================================================
// TESTE 3 - Desconto negativo
// =====================================================
try {

    aplicarDesconto(100, -10);

    console.error("❌ Teste 3 Falhou: A função permitiu desconto negativo.");

} catch (error) {

    if (error.message === "Desconto inválido") {

        console.log("✅ Teste 3 (Exceção): Erro de desconto negativo capturado corretamente.");

    } else {

        console.error("❌ Teste 3 Falhou por motivo incorreto:", error.message);

    }

}

// =====================================================
// TESTE 4 - Valor do produto como string
// =====================================================
try {

    aplicarDesconto("100", 20);

    console.error("❌ Teste 4 Falhou: A função permitiu valor em texto.");

} catch (error) {

    if (error.message === "Valores devem ser numéricos") {

        console.log("✅ Teste 4 (Validação): Valor do produto deve ser numérico.");

    } else {

        console.error("❌ Teste 4 Falhou por motivo incorreto:", error.message);

    }

}

// =====================================================
// TESTE 5 - Desconto como string
// =====================================================
try {

    aplicarDesconto(100, "20");

    console.error("❌ Teste 5 Falhou: A função permitiu desconto em texto.");

} catch (error) {

    if (error.message === "Valores devem ser numéricos") {

        console.log("✅ Teste 5 (Validação): Desconto deve ser numérico.");

    } else {

        console.error("❌ Teste 5 Falhou por motivo incorreto:", error.message);

    }

}

console.log("\n🏁 Fim da execução dos testes.");