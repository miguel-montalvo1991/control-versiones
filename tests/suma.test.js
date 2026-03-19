// ============================================================
// suma.test.js
// Pruebas unitarias de la calculadora
// Módulo: tests/suma.test.js
// ============================================================

// Importamos el módulo nativo de pruebas de Node.js (no necesita instalación)
import test from 'node:test';

// Importamos assert para verificar que los resultados sean correctos
import assert from 'node:assert/strict';

// Importamos las funciones reales desde calculator.js
import { sum, subtract } from '../features/utils/calculator.js';

// ─── Pruebas de la función sum (suma) ────────────────────────

test('sum: 2 + 3 debe ser igual a 5', () => {
  assert.equal(sum(2, 3), 5);
});

test('sum: números negativos, -4 + -6 debe ser igual a -10', () => {
  assert.equal(sum(-4, -6), -10);
});

test('sum: número positivo y negativo, 10 + -3 debe ser igual a 7', () => {
  assert.equal(sum(10, -3), 7);
});

test('sum: debe lanzar error si el primer valor no es número', () => {
  assert.throws(() => sum('cinco', 3), { message: 'Los dos valores deben ser números' });
});

test('sum: debe lanzar error si el segundo valor no es número', () => {
  assert.throws(() => sum(5, null), { message: 'Los dos valores deben ser números' });
});

// ─── Pruebas de la función subtract (resta) ──────────────────

test('subtract: 10 - 4 debe ser igual a 6', () => {
  assert.equal(subtract(10, 4), 6);
});

test('subtract: 5 - 10 debe ser igual a -5', () => {
  assert.equal(subtract(5, 10), -5);
});

test('subtract: debe lanzar error si algún valor no es número', () => {
  assert.throws(() => subtract('diez', 2), { message: 'Los dos valores deben ser números' });
});