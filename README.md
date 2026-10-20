# fundamentos-JS

Laboratorio **Introducción a JavaScript** de la asignatura *Desarrollo de Aplicaciones Web*
Escuela de Formación de Tecnólogos (ESFOT) – Escuela Politécnica Nacional (EPN)
Profesor: Ing. Byron Loarte

## Descripción

Este repositorio contiene la tarea desafío grupal del laboratorio. Se tomó **Instagram**
como página de referencia y se aplicó cada tema visto en clase usando datos de ejemplo:
perfiles de deportistas y publicaciones.

Todo el código está en un solo archivo, `fundamentos.js`, dividido en secciones
numeradas y comentadas.

## Objetivos

- Configurar las herramientas para el laboratorio.
- Elaborar un documento con extensión `.js`.
- Revisar la sintaxis básica y de programación de JavaScript.
- Visualizar los resultados obtenidos.

## Integrantes

| Integrante        |
| ----------------- |
| José Buñay        |
| Erick Patiño      |
| Fernanda Rodriguez |

## Estructura del repositorio

```
fundamentos-JS/
├── fundamentos.js   # Código de todos los temas
└── README.md        # Este archivo
```

## Temas desarrollados

| # | Tema                      | Qué se aplicó                                                                                   |
| - | ------------------------- | ----------------------------------------------------------------------------------------------- |
| 1 | Fundamentos y variables   | Constantes con `const` (nombre, usuario, deporte, plataforma) y salida con `console.log`.       |
| 2 | Strings                   | Plantillas literales, `toUpperCase()`, `trim()`, `toLowerCase()` y lectura de metaetiquetas.    |
| 3 | Funciones                 | `limpiarTexto`, `crearPresentacion` y `extraerDatosWeb`, con valores por defecto según entorno. |
| 4 | Objetos                   | Arreglo de objetos `deportistas`, recorrido con `forEach` y objeto `perfilExtraido`.            |
| 5 | Arreglos                  | Arreglo `publicaciones` con usuario, likes, comentarios y hashtag.                              |
| 6 | Manipulación del DOM      | Simulación de tarjetas HTML por publicación (`tarjetaSimulada`).                                |
| 7 | Asincronismo              | `Promise` con `setTimeout` de 2 s, `resolve` y `reject`.                                        |
| 8 | API – Local Storage       | `localStorage` con `JSON.stringify` / `JSON.parse` dentro de `try` / `catch`.                   |

## Requisitos

- [Node.js](https://nodejs.org/) para ejecutar el archivo desde la terminal.
- Opcional: un navegador, para probar las partes que dependen de `document` y `localStorage`.

## Cómo ejecutarlo

```bash
git clone https://github.com/DrosherJC/fundamentos-JS.git
cd fundamentos-JS
node fundamentos.js
```

## Salida esperada (extracto)

```
=== 1. FUNDAMENTOS Y VARIABLES ===
Nombre: Lionel Messi
Usuario: @leomessi
Deporte: Fútbol
Plataforma: Instagram

=== 2. STRINGS Y MANIPULACIÓN ===
El deportista Lionel Messi practica Fútbol.
Nombre en mayúsculas: LIONEL MESSI
Usuario limpio: @leomessi

=== 3. FUNCIONES ===
Cristiano Ronaldo es un deportista de fútbol.
Neymar Jr. es un deportista de fútbol.
Stephen Curry es un deportista de baloncesto.
```

## Notas sobre el entorno de ejecución

- **Terminal (Node.js):** `document` no existe, por lo que `extraerDatosWeb` devuelve
  valores predeterminados y el título y la descripción de la página salen vacíos.
  `localStorage` tampoco está disponible, así que se ejecuta el bloque `catch`.
- **Navegador:** las mismas funciones leen las metaetiquetas reales de la página y
  `localStorage` guarda y recupera los datos entre recargas.
- **Asincronismo:** el resultado de la promesa llega 2 segundos después del mensaje de
  conexión. Para probar el manejo de errores, cambia `exito` a `false`.

## Informe

El informe del laboratorio en formato IEEE está en [`docs/`](docs/).

## Referencias

- B. Loarte, Guía de laboratorio *Introducción a JavaScript*, ESFOT – EPN, 2026.
- [MDN Web Docs – JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript)