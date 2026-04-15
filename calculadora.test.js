const { calcularDesconto } = require('./calculadora');

test('deve calcular desconto de 10% corretamente', () => {
    // Se o valor é 100 e o desconto é 10, o resultado deve ser 90
    expect(calcularDesconto(100, 10)).toBe(90);
});