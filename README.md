# 🧠 Sistema de utilidades con buenas prácticas de ingeniería

Proyecto que implementa una calculadora modular en Node.js aplicando prácticas profesionales de desarrollo de software como control de versiones, testing automatizado e integración continua.

---

## 🚀 Demo rápida

```bash
npm install
npm test
```

Ejemplo de uso:

```js
import { sum, subtract } from './features/utils/calculator.js';

try {
  const result = sum(5, 3);
  console.log(`Resultado: ${result}`);
} catch (error) {
  console.error(error.message);
}
```

---

## 🎯 ¿Qué demuestra este proyecto?

Este proyecto demuestra:

* Uso profesional de Git (ramas, Pull Requests, commits semánticos)
* Implementación de integración continua con GitHub Actions
* Escritura de pruebas automatizadas con `node:test`
* Aplicación de buenas prácticas de Clean Code
* Organización modular del código
* Validación de datos y manejo de errores

---

## 📁 Estructura del proyecto

```
control-versiones/
├── .github/
│   └── workflows/
│       └── ci.yml                # Integración continua (GitHub Actions)
│   └── pull_request_template.md  # Plantilla para Pull Requests
├── features/
│   └── utils/
│       ├── services/
│       │   ├── api.js            # Simulación de llamadas a API
│       │   ├── helpers.js        # Funciones reutilizables
│       │   └── validation.js     # Validación de datos
│       └── calculator.js         # Lógica principal
├── tests/
│   └── suma.test.js              # Pruebas unitarias
├── .gitignore
├── .prettierrc.json
├── package.json
└── README.md
```

---

## ⚙️ Instalación

### Requisitos

* Node.js 14 o superior

### Pasos

```bash
git clone https://github.com/miguel-montalvo1991/control-versiones.git
cd control-versiones
npm install
```

---

## ▶️ Uso

Funciones disponibles:

* `sum(a, b)`
* `subtract(a, b)`

### Ejemplo básico

```js
import { sum } from './features/utils/calculator.js';

console.log(sum(10, 20)); // 30
```

### Manejo de errores

```js
sum('cinco', 3); 
// Error: Los dos valores deben ser números
```

---

## 🧪 Pruebas

Este proyecto usa el módulo nativo de Node.js `node:test`.

### Ejecutar todas las pruebas

```bash
npm test
```

### Ejecutar manualmente

```bash
node --test tests/suma.test.js
```

### Cobertura actual

* Suma de números positivos y negativos
* Operaciones mixtas
* Validación de errores

---

## 🔀 Flujo de trabajo

Este proyecto utiliza un flujo basado en ramas:

```
main
 ├── feat/*
 ├── fix/*
 └── docs/*
```

### Crear una rama

```bash
git checkout -b feat/nueva-funcionalidad
```

### Subir cambios

```bash
git push origin feat/nueva-funcionalidad
```

Luego abrir un Pull Request hacia `main`.

---

## 🧾 Convenciones de commits

Se utiliza el estándar **Conventional Commits**:

```
tipo(alcance): descripcion corta
```

### Tipos comunes

| Tipo     | Uso                        |
| -------- | -------------------------- |
| feat     | Nueva funcionalidad        |
| fix      | Corrección de errores      |
| docs     | Documentación              |
| style    | Formato (no afecta lógica) |
| refactor | Mejora interna del código  |
| test     | Pruebas                    |
| chore    | Tareas de mantenimiento    |

### Ejemplos

```bash
git commit -m "feat(calculator): agregar multiplicacion"
git commit -m "fix(validation): corregir validacion"
git commit -m "docs(readme): mejorar documentacion"
```

---

## ⚙️ Integración continua (CI)

El proyecto incluye un flujo de trabajo con GitHub Actions que:

* Instala dependencias
* Verifica formato con Prettier
* Ejecuta pruebas automáticamente

Esto asegura la calidad del código antes de hacer merge.

---

## 📜 Scripts disponibles

| Comando        | Descripción                  |
| -------------- | ---------------------------- |
| npm test       | Ejecuta pruebas              |
| npm run format | Formatea código con Prettier |

---

## 📦 Dependencias

| Paquete  | Uso                          |
| -------- | ---------------------------- |
| prettier | Formato automático de código |

---

## 👨‍💻 Autor

**Miguel Montalvo**
Tecnólogo en Análisis y Desarrollo de Software - SENA

Repositorio:
https://github.com/miguel-montalvo1991/control-versiones
