//Variables globales
const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const invitados = [];

/* Actualizamos la información en el HTML */
function renderInvitados() {
  let html = "";
  for (let invitado of invitados) {
    html += `<li>${invitado.nombre} <button class="borrar" onclick="borrar(${invitado.id})"> x </button> </li>`;
  }
  listaDeInvitados.innerHTML = html;
}

btnAgregar.addEventListener("click", () => {
  const nuevoInvitado = invitadoInput.value.trim(); // Usamos trim() para eliminar espacios en blanco al principio y al final

  // Validación: Si el input está vacío, mostramos un mensaje y no agregamos el invitado
  if (nuevoInvitado === "") {
    alert("Por favor, ingresa un nombre.");
    return; // Salimos de la función si el campo está vacío
  }

  // Si el input no está vacío, agregamos el invitado al arreglo
  invitados.push({ id: Date.now(), nombre: nuevoInvitado });
  invitadoInput.value = ""; // Limpiamos el campo de entrada
  renderInvitados(); // Actualizamos la lista en el HTML
});

function borrar(id) {
  const index = invitados.findIndex((ele) => ele.id == id);
  invitados.splice(index, 1);
  renderInvitados(); // Volvemos a renderizar la lista después de eliminar el invitado
}

/* 
1. Selección de elementos HTML

const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");
const invitados = [];

listaDeInvitados: Es el contenedor donde se mostrarán los invitados (el ul con id invitados).
invitadoInput: Es el campo de entrada donde el usuario escribirá el nombre del nuevo invitado.
btnAgregar: Es el botón que el usuario presiona para agregar un nuevo invitado.
invitados: Es el arreglo que contiene la lista de invitados. Cada invitado es un objeto con un id (único, generado con Date.now()) y un nombre.


2. Función renderInvitados()

function renderInvitados() {
  let html = "";
  for (let invitado of invitados) {
    html += `<li>${invitado.nombre} <button onclick="borrar(${invitado.id})"> x </button> </li>`;
  }
  listaDeInvitados.innerHTML = html;
}

renderInvitados(): Esta función se encarga de actualizar la lista de invitados en el HTML.
Se recorre el arreglo invitados con un for y, por cada invitado, se genera un li con su nombre y un botón de "Borrar" con el evento onclick que llama a la función borrar(id).
Luego, el contenido generado se inserta en el contenedor listaDeInvitados usando innerHTML.

3. Agregar un invitado

btnAgregar.addEventListener("click", () => {
  const nuevoInvitado = { id: Date.now(), nombre: invitadoInput.value };
  invitados.push(nuevoInvitado);
  invitadoInput.value = "";
  renderInvitados();
});

btnAgregar.addEventListener("click", () => {...}): Cuando el usuario hace clic en el botón "Agregar", se ejecuta esta función.
Se crea un objeto nuevoInvitado con un id único (utilizando Date.now()) y el nombre tomado del valor del campo de entrada (invitadoInput.value).
Este objeto se agrega al arreglo invitados con el método push().
Después de agregar el invitado, el campo de entrada se limpia (invitadoInput.value = "").
Finalmente, se llama a renderInvitados() para actualizar la lista en el HTML.

4. Eliminar un invitado

function borrar(id) {
  const index = invitados.findIndex((ele) => ele.id == id);
  invitados.splice(index, 1);
  renderInvitados();
}
borrar(id): Esta función se encarga de eliminar un invitado de la lista.
Se busca el índice del invitado a eliminar en el arreglo invitados utilizando findIndex(), que busca el primer elemento que coincida con el id proporcionado.
Luego, se elimina el invitado del arreglo usando splice(index, 1), lo que elimina un elemento en la posición index.
 Finalmente, se llama a renderInvitados() para actualizar la lista en el HTML después de la eliminación.
 */
