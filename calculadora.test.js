const { calcularDesconto } = require('./calculadora'); // Importa apenas UMA vez no topo

test('deve calcular desconto de 10% corretamente', () => {
    expect(calcularDesconto(100, 10)).toBe(90);
});

test('não deve aplicar desconto se a porcentagem for maior que 100', () => {
    // Se tentarem 150% de desconto, retorna o valor original
    expect(calcularDesconto(100, 150)).toBe(100);
});

test('não deve aplicar desconto se a porcentagem for negativa', () => {
    expect(calcularDesconto(100, -10)).toBe(100);
});