import { mostrarError } from "./funcionAlerta.js";
import { mandarCredencialesAlServidor } from "./practicaAPI.js";

const formulario = document.querySelector("#formulario");
formulario.addEventListener("submit", validarCliente);
  
function validarCliente(e){
e.preventDefault();
//Rescata el valor de los campos del form..
const nombre = document.querySelector("#nombre").value;
const email = document.querySelector('#email').value;
const telefono = document.querySelector('#telefono').value;
const empresa = document.querySelector('#empresa').value;

const cliente = {
    nombre,
    email,
    telefono,
    empresa
};

const vacio = !Object.values( cliente ).every( input => input !=='');
  if(vacio){
    mostrarError("se requieren todos los campos");
    return;  //return cortador
  };
  //Mandar los datos al servidor con el cliente validado 
  mandarCredencialesAlServidor(cliente);
};





















