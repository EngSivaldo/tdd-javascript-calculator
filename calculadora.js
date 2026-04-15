function calcularDesconto(valor, porcentagem) {
    return valor - (valor * (porcentagem / 100));
}

// O erro costuma estar aqui. Verifique se as chaves {} estão presentes.
module.exports = { calcularDesconto };