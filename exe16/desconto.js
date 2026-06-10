// desconto.js

const aplicarDesconto = (valorProduto, porcentagemDesconto) => {

    // Validação dos tipos
    if (
        typeof valorProduto !== "number" ||
        typeof porcentagemDesconto !== "number"
    ) {
        throw new Error("Valores devem ser numéricos");
    }

    // Validação do desconto
    if (porcentagemDesconto > 100 || porcentagemDesconto < 0) {
        throw new Error("Desconto inválido");
    }

    // Cálculo do desconto
    const valorDesconto = valorProduto * (porcentagemDesconto / 100);

    return valorProduto - valorDesconto;
};

module.exports = { aplicarDesconto };