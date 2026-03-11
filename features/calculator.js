// Calculadora principal del proyecto control-versiones

function sum(a, b) {

  if (typeof a !== "number" || typeof b !== "number") {
    throw new Error("Los valores deben ser números");
  }

  return a + b;
}

function subtract(a, b) {
  return a - b;
}

module.exports = { sum, subtract };