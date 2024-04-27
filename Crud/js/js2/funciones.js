//mostrar error
//nota: no lo puedo poner a privada por lo voy a exportar

const error = document.querySelector('.error');
export function mostrarError(mensaje){
    
    //asi:
    const alerta = document.querySelector('.bg-red-100')

    if (!alerta){

         //scripting
    const alerta = document.createElement('p')
    alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'py-3', 'rounded', 'max-w-lg',
        'mx-auto', 'mt-6', 'text-center');
    //para insertar mas etiqueta de foram dinamica:
   alerta.innerHTML = `
   <strong class="font-bold">Error!!</strong>
   <span class="block sm:inline">${mensaje}</span>
   `
   error.appendChild(alerta);

   setTimeout(() =>{
    alerta.remove()  //no puedo eliminar el error pq estaria eliminando la etiqueta del html y luego no la tendria 
   }, 2000)
    }

    //o asi :
//     limpiarHmtl()

//     //scripting
//     const alerta = document.createElement('p')
//     alerta.classList.add('bg-red-100', 'border-red-400', 'text-red-700', 'px-4', 'py-3', 'py-3', 'rounded', 'max-w-lg',
//         'mx-auto', 'mt-6', 'text-center');
//     //para insertar mas etiqueta de foram dinamica:
//    alerta.innerHTML = `
//    <strong class="font-bold">Error!!</strong>
//    <span class="block sm:inline">${mensaje}</span>
//    `
//    error.appendChild(alerta);


//    setTimeout(() =>{
//     alerta.remove()  //no puedo eliminar el error pq estaria eliminando la etiqueta del html y luego no la tendria 
//    }, 2000)
  
}

//esto: es lo mismo q decirle arriba un condicional q si alerta no existe pues q la cree
// function limpiarHmtl(){
//     while (error.firstChild){
//         error.removeChild(error.firstChild)
//     }

// }