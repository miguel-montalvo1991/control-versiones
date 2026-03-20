// ============================================================
// calculator.js
// Lógica principal de la calculadora del proyecto
// Módulo: features/utils/calculator.js
// ============================================================

/**
 * Valida que los dos valores recibidos sean de tipo número.
 * Si alguno no lo es, lanza un error para detener la operación.
 *
 * @param {*} a - Primer valor a validar
 * @param {*} b - Segundo valor a validar
 * @throws {Error} Si alguno de los valores no es un número
 */
function validarNumeros(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('Los dos valores deben ser números');
  }
}

/**
 * Suma dos números y retorna el resultado.
 *
 * @param {number} a - Primer número
 * @param {number} b - Segundo número
 * @returns {number} La suma de a + b
 */
export function sum(a, b) {
  validarNumeros(a, b);
  return a + b;
}

/**
 * Resta el segundo número al primero y retorna el resultado.
 *
 * @param {number} a - Número del que se resta
 * @param {number} b - Número que se resta
 * @returns {number} La resta de a - b
 */
export function subtract(a, b) {
  validarNumeros(a, b);
  return a - b;
}
