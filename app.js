// ----- ELEMENTOS DEL DOM -----
const lista = document.getElementById("lista");
const inputBuscar = document.getElementById("buscar");
const botonBuscar = document.getElementById("btnBuscar");
const filtroTipo = document.getElementById("filtroTipo");
const botonMostrarTodos = document.getElementById("btnMostrarTodos");
const botonAgregar = document.getElementById("btnAgregar");

// Inputs del formulario
const nombreNuevo = document.getElementById("nombreNuevo");
const tipoNuevo = document.getElementById("tipoNuevo");
const vidaNueva = document.getElementById("vidaNueva");
const imagenNueva = document.getElementById("imagenNueva");

// ----- FUNCIONES COMPLETAS -----

function renderPokemons(array) {
  lista.innerHTML = "";
  array.forEach((p) => {
    const card = document.createElement("div");
    card.className = "pokemon-card";
    card.innerHTML = `
      <img src="${p.imagen}" alt="${p.nombre}">
      <h3>${p.nombre}</h3>
      <p>Tipo: ${p.tipo}</p>
      <p>Vida: ${p.vida}</p>
      <button class="btnGolpe" data-nombre="${p.nombre}">Atacar</button>
    `;
    lista.appendChild(card);
  });
}

renderPokemons(pokemons);

// ----- EVENTOS -----

botonBuscar.addEventListener("click", () => {
  const nombre = inputBuscar.value.trim().toLowerCase();
  const resultado = buscarPokemon(nombre, pokemons);
  renderPokemons(resultado);
});

filtroTipo.addEventListener("change", () => {
  const tipo = filtroTipo.value;
  const filtrados = filtrarPorTipo(tipo, pokemons);
  renderPokemons(filtrados);
});

botonMostrarTodos.addEventListener("click", () => renderPokemons(pokemons));

botonAgregar.addEventListener("click", () => {
  const nuevo = {
    nombre: nombreNuevo.value,
    tipo: tipoNuevo.value,
    vida: parseInt(vidaNueva.value),
    imagen: imagenNueva.value,
  };
  agregarPokemon(nuevo, pokemons);
  renderPokemons(pokemons);
});

// Evento para ataque
lista.addEventListener("click", (e) => {
  if (e.target.classList.contains("btnGolpe")) {
    const nombre = e.target.dataset.nombre;
    bajarVida(nombre, 20, pokemons);
    renderPokemons(pokemons);
  }
});
