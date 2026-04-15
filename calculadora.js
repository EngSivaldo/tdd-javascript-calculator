function calcularDesconto(valor, porcentagem) {
    // Se a porcentagem for maior que 100 ou menor que 0, ignora o desconto
    if (porcentagem > 100 || porcentagem < 0) {
        return valor;
    }
    return valor - (valor * (porcentagem / 100));
}

module.exports = { calcularDesconto };