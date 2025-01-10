const listaDeInvitados = document.querySelector("#invitados");
const invitadoInput = document.querySelector("#nuevoInvitado");
const btnAgregar = document.querySelector("#agregarInvitado");

const invitados = [];
btnAgregar.addEventListener("click", () => {
  const nuevoInvitado = invitadoInput.value;
  invitados.push(nuevoInvitado);
  invitadoInput.value = "";

  let html = "";
  for (let invitado of invitados) {
    html += `<li>${invitado}</li>`;
  }

  listaDeInvitados.innerHTML = html;
});
