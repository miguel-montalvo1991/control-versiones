# Control de Versiones - Practica ADSO

## Descripcion

Proyecto de practica del programa **Analisis y Desarrollo de Software (ADSO)** del SENA.
Cubre commits atomicos, Conventional Commits, ramas, Pull Requests, code review e integracion continua (CI).

---

## Estructura del proyecto

```
control-versiones/
├── .github/
│   └── pull_request_template.md   # Plantilla para Pull Requests en GitHub
├── features/
│   └── utils/
│       ├── services/
│       │   ├── api.js             # Simulacion de llamadas a una API
│       │   ├── helpers.js         # Funciones de apoyo reutilizables
│       │   └── validation.js      # Validacion de datos de entrada
│       └── calculator.js          # Logica principal de la calculadora
├── tests/
│   └── suma.test.js               # Pruebas unitarias con node:test
├── .gitignore                     # Archivos ignorados por Git
├── .prettierrc.json               # Configuracion del formateador de codigo
├── package.json                   # Configuracion del proyecto Node.js
└── README.md                      # Este archivo
```

---

## Instalacion

Antes de empezar necesitas tener instalado **Node.js** (version 14 o superior).

Clona el repositorio y entra a la carpeta:

```bash
git clone https://github.com/miguel-montalvo1991/control-versiones.git
cd control-versiones
```

Instala las dependencias:

```bash
npm install
```

---

## Uso

La calculadora exporta dos funciones: `sum` y `subtract`.

```js
import { sum, subtract } from './features/utils/calculator.js';

console.log(sum(5, 3));       // 8
console.log(subtract(10, 4)); // 6
```

Si alguno de los valores no es un numero, la funcion lanza un error automaticamente:

```js
sum('cinco', 3); // Error: Los dos valores deben ser números
```

---

## Pruebas

Las pruebas usan el modulo nativo de Node.js `node:test`, no necesita instalacion extra.

Para correr todas las pruebas:

```bash
npm test
```

O directamente:

```bash
node --test tests/suma.test.js
```

Las pruebas cubren:
- Suma de numeros positivos
- Suma de numeros negativos
- Suma de positivo y negativo
- Resta con resultado positivo
- Resta con resultado negativo
- Error al pasar un valor que no es numero

---

## Convenciones de commits

Este proyecto sigue el estandar **Conventional Commits**. Cada commit debe tener este formato:

```
tipo(alcance): descripcion corta en minusculas
```

Los tipos disponibles son:

| Tipo | Cuando usarlo |
|------|---------------|
| `feat` | Agregas una funcionalidad nueva |
| `fix` | Corriges un error en el codigo |
| `docs` | Solo cambias documentacion |
| `style` | Cambios de formato que no afectan la logica |
| `refactor` | Mejoras al codigo sin cambiar funcionalidad |
| `test` | Agregas o corriges pruebas |
| `chore` | Tareas de mantenimiento del proyecto |

Ejemplos reales:

```bash
git commit -m "feat(calculator): agregar funcion de multiplicacion"
git commit -m "fix(validation): corregir validacion de numeros negativos"
git commit -m "test(suma): agregar pruebas de casos borde"
git commit -m "docs(readme): actualizar instrucciones de instalacion"
```

---

## Flujo de trabajo con ramas

```
main
 └── develop
      ├── feat/suma
      ├── feat/resta
      └── fix/validacion
```

Crear una rama nueva:

```bash
git checkout -b feat/nombre-de-la-funcionalidad
```

Subir la rama al repositorio remoto:

```bash
git push origin feat/nombre-de-la-funcionalidad
```

Luego abre un Pull Request hacia `develop` en GitHub usando la plantilla que esta en `.github/pull_request_template.md`.

---

## Scripts disponibles

| Comando | Que hace |
|---------|----------|
| `npm test` | Corre todas las pruebas unitarias |
| `npm run format` | Formatea todo el codigo con Prettier |

---

## Dependencias

| Paquete | Version | Para que sirve |
|---------|---------|----------------|
| prettier | ^3.8.1 | Formatea el codigo automaticamente |

---

## Autor

Proyecto desarrollado como practica de la ficha ADSO del SENA.

Repositorio: [github.com/miguel-montalvo1991/control-versiones](https://github.com/miguel-montalvo1991/control-versiones)