import { obtenerCLiente, actualizarCliente } from "./practicaAPI.js";
import { mostrarError } from "./funcionAlerta.js";

(function(){
    const nombre2 = document.querySelector("#nombre");
    const email2= document.querySelector("#email");
    const telefono2 = document.querySelector("#telefono");
    const empresa2 = document.querySelector("#empresa");
    const idInput = document.querySelector("#id");

    document.addEventListener("DOMContentLoaded",  async () => {

        const formulario = document.querySelector("#formulario");
        formulario.addEventListener("submit", validarClienteEditado);
        const url = new URLSearchParams( window.location.search );
        const clienteid = url.get("id");

        const cliente = await obtenerCLiente({id: clienteid});
        const {nombre, email, telefono, empresa, id } = cliente;
        
        nombre2.value = nombre;
        email2.value = email;
        telefono2.value = telefono;
        empresa2.value = empresa;
        idInput.value = id;
    });
    async function validarClienteEditado(e){
        e.preventDefault();
        const cliente = {
            nombre: nombre2.value,
            email: email2.value,
            telefono: telefono2.value,
            empresa: empresa2.value,
            id: parseInt(idInput.value)
        }
        const vacio = !Object.values(cliente).every( input => input !=='');

        if ( vacio ){
            mostrarError("Llene todos los campos");
            return;
        };
        await actualizarCliente( cliente );
    }
})();


