const url = 'http://localhost:3000/clientes';

export function mandarCredencialesAlServidor(cliente){
    fetch ( url , {  
        method:'POST',
        body: JSON.stringify( cliente ), //la data a enviar al servidor
        headers:{'Content-Type':'application/json'}
    })
    window.location.href = 'index.html';
};

export async function obtenerCredencialesDelServidorPeticion(){
    try {
    const respuesta = await fetch(url);
    const resultado = respuesta.json();
    return resultado;

    } catch (error) {
        return error;
    };
};

export async function eliminarCLiente({id}){  //aplicando destr...
    try {
        await fetch(`${url}/${id}`, {
            method: 'DELETE'
        })    
    } catch (error) {
        return error;
    };
};

export async function obtenerCLiente({id}){
    const respuesta = await fetch( `${url}/${id}`) 
    const resultado = respuesta.json();
    return resultado;
};

export async function actualizarCliente( cliente ){
      await fetch(`${url}/${cliente.id}`,{
        method: 'PUT',
        body: JSON.stringify( cliente ),
        headers: {'Content-Type':'application/json'}
    });
    window.location.href = "index.html";
};
