// Calculadora principal del proyecto control-versiones

function validateNumbers(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los valores deben ser números');
  }
}

function sum(a, b) {
  validateNumbers(a, b);
  return a + b;
}

function subtract(a, b) {
  validateNumbers(a, b);
  return a - b;
}

module.exports = { sum, subtract };
