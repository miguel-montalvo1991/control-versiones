# Control de Versiones - Práctica ADSO

## Descripción

Proyecto de práctica del programa **Análisis y Desarrollo de Software (ADSO)** del SENA.
Cubre commits atómicos, Conventional Commits, ramas, Pull Requests, code review e integración continua (CI).

---

## Estructura del proyecto

```
control-versiones/
├── .github/
│   ├── workflows/
│   │   └── ci.yml
│   └── pull_request_template.md
├── features/
│   ├── calculator.js
│   └── utils/
│       ├── services/
│       │   ├── api.js
│       │   └── helpers.js
│       └── validation.js
├── tests/
│   └── suma.test.js
├── .prettierrc.json
├── package.json
└── README.md
```

---

## Uso

### Calculadora

```js
import { sum, subtract } from './features/calculator.js';

console.log(sum(2, 3)); // 5
console.log(subtract(5, 2)); // 3
```

### Validación de Email

```js
import { validateEmail } from './features/utils/validation.js';

console.log(validateEmail('user@email.com')); // true
console.log(validateEmail('')); // false
```

### Manejo de errores

```js
import { handleError } from './features/utils/services/api.js';

handleError({ status: 404 }); // No encontrado
handleError({ status: 500 }); // Error del servidor
```

### Helpers

```js
import { capitalize } from './features/utils/services/helpers.js';

console.log(capitalize('hola mundo')); // Hola mundo
```

---

## Integración Continua (CI)

Este proyecto tiene un pipeline de CI con GitHub Actions que se ejecuta automáticamente en cada `push` o `pull_request` hacia `main`.

### ¿Qué verifica el pipeline?

- **Prettier**: revisa que el código tenga formato consistente
- **Tests**: ejecuta las pruebas con `node:test` nativo de Node.js 20

### Comandos locales

```bash
# Verificar formato
npx prettier . --check

# Aplicar formato automáticamente
npx prettier . --write

# Ejecutar tests
node --test
```

---

## Semanas trabajadas

| Semana   | Tema                                    |
| -------- | --------------------------------------- |
| Semana 4 | Ramas y Pull Requests                   |
| Semana 5 | Code Review efectivo                    |
| Semana 6 | Integración Continua con GitHub Actions |

---

## Convenciones de commits

Este proyecto usa [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` nueva funcionalidad
- `fix:` corrección de bug
- `refactor:` mejora de código sin cambiar funcionalidad
- `ci:` cambios en el pipeline de CI
- `docs:` cambios en documentación
- `style:` cambios de formato (Prettier)
- `test:` agregar o corregir tests

---

## Autor

**Miguel Montalvo**
Aprendiz ADSO - SENA Regional Antioquia
CTMA - Ficha 3229209
