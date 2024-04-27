
//todo: toda la app en un arhivo
(function(){

  console.log("test mode")
  const errorr = document.querySelector('.error');
  const formulario = document.querySelector('#formulario');
  window.addEventListener("load", () =>{
  
  
  formulario.addEventListener("submit", validarCliente)
   })

   function validarCliente(e){
    e.preventDefault();
    
    //*otra forma de hacerlo es son el value: esto se haria mas asi en caso de q estos campos se utilizan ma abajo e el codigo y no 
    //*lo quiera con el value, entonces para no escribirlo otra vez 
    const nombre = document.querySelector('#nombre').value
    const email = document.querySelector('#email').value
    const telefono = document.querySelector('#telefono').value
    const empresa = document.querySelector('#empresa').value


    const Cliente = {
        nombre,
        email,
        telefono,
        empresa
       }
       //every: every va a resivir por prametro una funcion callback: callback es una funcion q se resive en el parametro de otra funcion
       //y esta va a devolver la funcion callbck, osea el every devuelve un su cuerpo la funcion q se le pase por parametro, lo q hara es 
       //q recorrera cada elemento del array para ver si todos cumplen con la condicion q devuelve la fucnion
       //every: comprueba cada elemento del array y mira haber si se cumple la condicion del return de la funcion callback
       //console.log(!Object.values(Cliente).every(input => input !==''))//*si se escribe algo en todos los campos osea se llena el array pues
                                                                    //*dirá q true
    
  const vacio = !Object.values(Cliente).every(input => input !=='');
  
  if (vacio) {
                                                                    
      mensajeError("Se requieren todos los campos");
      return;
  }
                                                             
//aqui se tendria q traer la funcion importada de la api
                                                             
  enviarDatosServidor(Cliente) //todo: Este cliente q se pasa aqui obviamente si llego el codigo aquí es q ya esta validado
      console.log("ok")  
}


   function mensajeError(mensaje) {

    //scripting
    limpiarHtml()

    const alerta = document.createElement('p');

    alerta.classList.add('text-center');

    alerta.innerHTML = `
    <strong>ERROR!!</strong>
    <span> ${mensaje}</span>
    `
    errorr.appendChild(alerta); //pongo el error y no el formulario pq si utiloz el limpiarHtml pues me borraria el formulario


    setTimeout(() =>{
     alerta.remove() //si se pone fiera de la funcion el remove no tendria acceso

    },2000)
    
   }
   function limpiarHtml(){

    while(errorr.firstChild){

      errorr.removeChild(errorr.firstChild);
    }
   }

})();

const url = 'http://localhost:4000/clientes' //esto es la url de la Api de json-server: osea la api publica local
//le podria pasar por parametro a esta funcion la url y el cliente
function enviarDatosServidor(cliente){
 
  //console.log(cliente)
  //como es una Api local tengo q programar rescatar del cliente al servidor los datos del cliente
  //ojo: como esto sera un post pues el then no se pone ya el then es para hacer peticiones Get al servidor no para mandar datos.
  //ojo: SI esto fuera una Api remota osea un servicion web pues el post no hay q ponerlo ya q no se le puede hacer un post a una api
  //remota ya q lo tiene, sino q solamente habria q hacerle un get q es una peticion a la base datos de esa api remota. 
   fetch(url, { //todo: aùntar a esta url para enviarle los datos del cliente  por post
    method: 'POST',
    //*enviar los clientes validados convertidos a strings por post a la url osea al servidor 
    body: JSON.stringify( cliente ), //coge al json de la url osea db.json y pasale los datos del cliente converitos a strings
    headers: {'Content-Type':'application/json'}

  })

  //todo: OJOOOOO: en esta llamada n guardo la funcion dento de ninguna varible ya q la funcion de mostrarResultadoHtml no devuelve nada
  
}
const btnMostrarCustomer = document.querySelector('.btnBoton')
const listado2 = document.querySelector('.listado')
btnMostrarCustomer.addEventListener('click', obtenerDatosServidor222)


  //todo: aqui mismo se podria llamar pero la idea es llmar a la funcion de mostrarDatos desde el js del index.html osea app.js
   async function obtenerDatosServidor222(e){
    e.preventDefault();
    // fetch(url)
    // .then(respuesta => respuesta.json())
    // .then(resultado => mostrarResultadoFinal(resultado))

    const respuesta = await fetch(url)
    const resultado = await respuesta.json()

    mostrarResultadoFinal(resultado) //todo: si este resultado se llamara en otro html fuera muy importante el await ya q 
                                      //todo: bloquearia la funcion hasta q se resuelva la promise
}
  
function mostrarResultadoFinal(resultado){

  resultado.forEach(customer => {   
    const {nombre, email, telefono, empresa, id} = customer
    const row = document.createElement('tr')
  
    row.innerHTML += `
  
    <td> ${nombre} </td>
    <td> ${email} </td>
    <td> ${telefono} </td>
    <td> ${empresa} </td>
    `
    listado2.appendChild(row)
  
  })
}












  //window.location.href = 'index.html'




