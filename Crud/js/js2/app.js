import { obtenerDatosClientesDelServidor } from './API.js'



//todo: esto se va a ejecutar primero q la funcion obtenerDatosCientesDelServidor obviamente si esta en el archivo indexHtm
(function(){


    const listado = document.querySelector('#listado-clientes');

    document.addEventListener('DOMContentLoaded', mostrarCustomer)
    //asyn await para q hasta q no se obtengan pues no se muetren los clientes
    async function mostrarCustomer(){
        const clientes =await obtenerDatosClientesDelServidor() //esta es la llamada de esta funcion
        //console.log(clientes)

        clientes.forEach(cliente => {
            const { nombre, email, telefono, empresa, id} = cliente

            const row = document.createElement('tr');
            row.innerHTML += `
            <td>${nombre} </td>
            <td>${telefono} </td>
            <td>${empresa} </td>
            `
            listado.appendChild(row)
        });
    }
})();