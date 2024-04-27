//Mostrando las alertas desde otro archivo Js

//selector global para que esté disponible dentro de la función limpiarHtml
const error = document.querySelector(".error");

export function mostrarError(mensaje){
    limpiarHtml();
    const mensajeAlerta = document.createElement("p");
    mensajeAlerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'py-3', 'rounded', 'max-w-lg','mx-auto', 'mt-6', 'text-center');
    //insertar código dinámicamente en el HTML
    mensajeAlerta.innerHTML = `
    <strong>ERROR!!</strong>
    <span> ${mensaje}</span>
    ` 
    error.appendChild( mensajeAlerta );

    setTimeout( () =>{
        mensajeAlerta.remove();
    }, 2000);
};
//función para evitar duplicados
function limpiarHtml(){
    while( error.firstChild){
        error.removeChild(error.firstChild);
    };
};