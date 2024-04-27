import { mostrarError } from './funciones.js'
import {enviarDatosServidor} from './API.js'
//funciones privadas para q no se reiguen sus variables con otras de otro archivo
(function(){
    const formulario = document.querySelector('#formulario'); //esta si esta disponible en todas las funciones q serán declaradas 
                                                                //dentro de la funcion privada pq no esta dentro de una funcion y es
                                                                //global aqui, osea se puede utilizar dentro de cualquier funcion 
                                                                //dentro de la funcion inicial privada
    document.addEventListener("DOMContentLoaded", () =>{
       
        formulario.addEventListener('submit', validarCliente)

    })
    function validarCliente(e){ 
        e.preventDefault();
        //muy importane: en el submit es donde voy a rescatar los campos.values pq si los dejo afuera cuando haga submit no los coge
        const nombre = document.querySelector("#nombre").value
        const email = document.querySelector("#email").value
        const telefono = document.querySelector("#telefono").value
        const empresa = document.querySelector("#empresa").value

        const cliente = {
            nombre, 
            email, 
            telefono, 
            empresa
        }
        //aqui no hace falta recorrerlo pq es un solo objeto, osea no es un array de objetos ni nada por el estilo, osea cada vez q se
        //le da submit pues el objeto coge valores diferentes
       const newvalor = Object.values(cliente).every(funcionCallback)
      //console.log(!newvalor) //ahora la logica aqui: si esto es false pues devuelveme true
        if (!newvalor){
            //console.log("Mosrando error")
            mostrarError("Se requieren todos los campos")
            return;
        }
        enviarDatosServidor(cliente)
    }
    function funcionCallback(input){
        return input !==''  //*logica: si es distinto a un caracter vacio me devuelve q true, osea sino lleno los campos pues como no
                            //*es distinto a un caracter vacio osea q es igual pues devuelve q false
    }
})();


