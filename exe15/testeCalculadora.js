const {
    somar,
    subtrair,
    multiplicar,
    dividir
} = require('./calculadora');

function testarSomar() {
    if (somar(10, 5) !== 15) {
        throw new Error("Teste de soma falhou");
    }
    console.log("✓ Teste de soma passou");
}

function testarSubtrair() {
    if (subtrair(10, 5) !== 5) {
        throw new Error("Teste de subtração falhou");
    }
    console.log("✓ Teste de subtração passou");
}

function testarMultiplicar() {
    if (multiplicar(10, 5) !== 50) {
        throw new Error("Teste de multiplicação falhou");
    }
    console.log("✓ Teste de multiplicação passou");
}

function testarDividir() {
    if (dividir(10, 2) !== 5) {
        throw new Error("Teste de divisão falhou");
    }
    console.log("✓ Teste de divisão passou");
}

function testarDivisaoPorZero() {
    if (dividir(10, 0) !== "Erro: divisão por zero") {
        throw new Error("Teste de divisão por zero falhou");
    }
    console.log("✓ Teste de divisão por zero passou");
}

testarSomar();
testarSubtrair();
testarMultiplicar();
testarDividir();
testarDivisaoPorZero();

console.log("\nTodos os testes passaram!");