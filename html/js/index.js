//DOM

const contenedorPersona = document.querySelector(".contenedor-persona");
const boton = document.querySelector(".boton");
const divBoton = document.querySelector(".div-boton");

//carga datos de la persona

const renderizarPersona = (personas) => {
    contenedorPersona.innerHTML = "";
    personas.forEach((persona) => {
        const div = document.createElement("div");
        div.classList.add("persona");
        div.innerHTML = `
                        <h1>${persona.nombre}</h1>
                        <p>${persona.edad}</p>
                        `
        contenedorPersona.append(div);
    });
}

//trae datos de archivo json

function cargarPersona() {
    fetch("../personas.json")
    .then((response) => response.json())
    .then((personaElegida) => {
        renderizarPersona(personaElegida);
    });
}

cargarPersona();

boton.addEventListener("click", () => {
    divBoton.innerHTML = `
                        <p>dariolema79@gmail.com</p>
                        <p>381456812</p>
                        `;
})