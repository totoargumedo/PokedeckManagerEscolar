# 🧩 PokéDeck Manager

> Proyecto de práctica para reforzar **JavaScript**, **funciones**, **objetos** y **arrays**, dentro del marco del proyecto integrador de desarrollo web.

---

## 🎯 Objetivo del trabajo

Desarrollar una pequeña **aplicación web dinámica** que gestione una lista de Pokémon (PokéDeck), aplicando **manipulación de arrays y objetos mediante funciones**, dentro de un proyecto colaborativo en **GitHub**.

Cada grupo deberá implementar **una función específica** que modifique el array `pokemons` y se integre a la app existente.

---

## 🧱 Estructura del proyecto

El repositorio contiene los siguientes archivos:

index.html → Interfaz principal (ya completa)
style.css → Estilos básicos
app.js → Lógica general y eventos del DOM
pokemons.js → Datos base del array de Pokémon
README.md → Este archivo

Toda la estructura de **interfaz, DOM y eventos** ya está desarrollada.  
El objetivo es **completar las funciones que manipulan el array `pokemons`** y lograr que la aplicación funcione plenamente.

---

## ⚙️ Funcionalidades del proyecto base

- Mostrar los Pokémon en pantalla con su imagen, tipo y vida.
- Buscar Pokémon por nombre.
- Filtrar por tipo.
- Agregar un nuevo Pokémon.
- Bajar la vida de un Pokémon con un botón de ataque.
- (A completar) Curar, eliminar, etc.

---

## 👥 Organización del trabajo

- Se trabajará en **equipos de hasta 4 integrantes**.
- Cada grupo tiene asignada **una función a desarrollar**.
- El trabajo se organiza mediante **GitHub** con fork, commit y pull request.

---

## 🚀 Instrucciones paso a paso

### 1️⃣ Hacer un fork del repositorio

1. Entrar al repositorio original del docente.
2. Hacer clic en el botón **"Fork"** (arriba a la derecha).
3. Esto creará una copia del proyecto en su cuenta personal o del grupo.

### 2️⃣ Clonar el repositorio

````bash
git clone https://github.com/<usuario>/<nombre-del-repo>.git

3️⃣ Crear una nueva rama

Recomendado para mantener su trabajo organizado.
```bash
git checkout -b grupoX-funcion

4️⃣ Programar la función asignada

Agregar su función en el archivo app.js (al final o antes de los eventos según corresponda).

5️⃣ Probar localmente

Abrir index.html en el navegador y probar que la función realiza lo que se pide sin errores en consola.

6️⃣ Subir los cambios
```bash
git add .
git commit -m "Agrego función <nombreFunción>"
git push origin grupoX-funcion

7️⃣ Crear un Pull Request

Desde GitHub → Compare & Pull Request → describir brevemente qué función implementaron.

🧠 Funciones asignadas por grupo
| Grupo | Función                                       | Descripción breve                                                                |
| :---- | :-------------------------------------------- | :------------------------------------------------------------------------------- |
| 1     | `buscarPokemon(nombre, listaPokemons)`        | Busca y devuelve un Pokémon por nombre. Devuelve array vacío si no lo encuentra. |
| 2     | `filtrarPorTipo(tipo, listaPokemons)`         | Devuelve un array filtrado por tipo.                                             |
| 3     | `bajarVida(nombre, puntos, listaPokemons)`    | Resta puntos de vida, sin permitir valores negativos.                            |
| 4     | `agregarPokemon(nuevoPokemon, listaPokemons)` | Agrega un nuevo Pokémon validando duplicados y datos.                            |
| 5     | `eliminarPokemon(nombre, listaPokemons)`      | Elimina un Pokémon del array según nombre.                                       |
| 6     | `curarPokemon(nombre, puntos, listaPokemons)` | Suma puntos de vida sin superar 100.                                             |

🧩 Requerimientos técnicos mínimos

✅ La función debe:

Recibir y devolver valores adecuados.

Validar errores (nombre vacío, tipo inexistente, datos incorrectos).

Modificar correctamente el array pokemons según la tarea.

No generar errores en consola.

✅ Cada grupo debe:

Subir al menos 1 commit por integrante.

Realizar 1 pull request al repo original del docente.

Probar el funcionamiento completo antes de entregar.

🧭 Sugerencias

Revisen bien los nombres de variables y funciones.

Probar cada cambio antes de hacer commit.

Consultar por Teams en el canal #dudas-y-ayuda si algo no funciona.

No borrar código existente: ¡integremos, no rompamos!

🧠 Bonus (opcional)

Si terminan antes, pueden:

Agregar una función para ordenar Pokémon por vida o tipo.

Crear un botón de “Curar a todos”.

Implementar un contador de batallas ganadas en localStorage (si ya vimos el tema).
````
