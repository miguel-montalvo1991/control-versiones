# Control de Versiones - Práctica ADSO

## Descripción
Proyecto de práctica para commits atómicos y Conventional Commits.

## Uso

### Calculadora
```js
const { sum, subtract } = require('./features/calculator');
console.log(sum(2, 3));       // 5
console.log(subtract(5, 2));  // 3
```

### Validación de Email
```js
const { validateEmail } = require('./features/utils/validation');
console.log(validateEmail('user@email.com')); // true
console.log(validateEmail(''));               // false
```