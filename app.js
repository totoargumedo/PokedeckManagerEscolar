const contenedor = document.getElementById("listaPokemons");
const btnBuscar = document.getElementById("btnBuscar");
const btnFiltrar = document.getElementById("btnFiltrar");
const btnAgregar = document.getElementById("btnAgregar");

function renderPokemons(lista) {
  contenedor.innerHTML = "";
  lista.forEach((p) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${p.foto}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>Nivel: ${p.nivel}</p>
      <p>HP: ${p.hp} / ${p.hp_total}</p>
      <p>Tipo: ${p.tipo.join(", ")}</p>
      <button class="btn-attack" onclick="bajarVida('${
        p.nombre
      }', 10, pokemons)">Atacar</button>
      <button class="btn-heal" onclick="curarPokemon('${
        p.nombre
      }', 10, pokemons)">Curar</button>
      <button class="btn-delete" onclick="eliminarPokemon('${
        p.nombre
      }', pokemons)">Eliminar</button>
    `;
    contenedor.appendChild(card);
  });
}

renderPokemons(pokemons);

// BOTONES PRINCIPALES
btnBuscar.addEventListener("click", () => {
  const nombre = document.getElementById("buscarInput").value.trim();
  const resultado = buscarPokemon(nombre, pokemons);
  renderPokemons(resultado.length ? resultado : pokemons);
});

btnFiltrar.addEventListener("click", () => {
  const tipo = document.getElementById("filtroTipo").value;
  const resultado = tipo ? filtrarPorTipo(tipo, pokemons) : pokemons;
  renderPokemons(resultado);
});

btnAgregar.addEventListener("click", () => {
  const nombre = document.getElementById("nombreNuevo").value.trim();
  const tipo = document.getElementById("tipoNuevo").value.trim();
  const nivel = parseInt(document.getElementById("nivelNuevo").value);
  const hp = parseInt(document.getElementById("hpNuevo").value);
  const foto = document.getElementById("fotoNuevo").value.trim();
  const nuevo = {
    nombre,
    nivel,
    tipo: [tipo],
    foto,
    hp,
    hp_total: hp,
    evolucion: false,
  };
  agregarPokemon(nuevo, pokemons);
  renderPokemons(pokemons);
});
