// suma.test.js
// Pruebas unitarias de la calculadora
// Modulo: tests/suma.test.js

// Modulo nativo de pruebas de Node.js (no necesita instalacion)
import test from 'node:test';

// Para verificar que los resultados sean correctos
import assert from 'node:assert/strict';

// Importamos las funciones reales desde calculator.js
import { sum, subtract } from '../features/utils/calculator.js';

// --- Pruebas de sum ---

test('sum: 2 + 3 debe ser igual a 5', () => {
  assert.equal(sum(2, 3), 5);
});

test('sum: numeros negativos, -4 + -6 debe ser igual a -10', () => {
  assert.equal(sum(-4, -6), -10);
});

test('sum: positivo y negativo, 10 + -3 debe ser igual a 7', () => {
  assert.equal(sum(10, -3), 7);
});

test('sum: error si el primer valor no es numero', () => {
  assert.throws(() => sum('cinco', 3), {
    message: 'Los dos valores deben ser numeros',
  });
});

test('sum: error si el segundo valor no es numero', () => {
  assert.throws(() => sum(5, null), {
    message: 'Los dos valores deben ser numeros',
  });
});

// --- Pruebas de subtract ---

test('subtract: 10 - 4 debe ser igual a 6', () => {
  assert.equal(subtract(10, 4), 6);
});

test('subtract: 5 - 10 debe ser igual a -5', () => {
  assert.equal(subtract(5, 10), -5);
});

test('subtract: error si algun valor no es numero', () => {
  assert.throws(() => subtract('diez', 2), {
    message: 'Los dos valores deben ser numeros',
  });
});
