//*una vez terminada la validacion pues miro ya la Api de json Sever(api para simulacion de una base de datos) al entra en
//*esta api pues hara un metodo del http por defualt de Get (consulta al servidor osea a la base de datos)

const url = 'http://localhost:4000/clientes'; //este es donde carga el proyecto, osea la base de todos el proyec....

//tambienn asi:
//const enviarDatosServidor = async () =>

//todo:le puse async pq puede  este proceso puede demorar entonces no quiero q se ejcute nada hasta q tengo la respuesta
export async function enviarDatosServidor(customer){
//utilizo api nativa fecth q trabaja con promises prra enviar datos del cliente osea todos los campos del formluario al servidor

    //como no quiero una consulta a la base de datos osea un GET pues lo q hago es pasarle un Post ya q quiero pasarle estos datos
    //del cliente al servidor  
    try {
        //todo:hasta q no me obtengas la url pue no me hagas la insercion dde los datos del cliente  
       await fetch(url, {
            method: 'POST',
            //a continuacionel client ya validado se convierte a string yse manda a la url con el metodo post
            body: JSON.stringify( customer ),  //stringify conviete el objeto a un strings
            headers: {'Content-type':'application/json'} //para q entienda el tipo de contenido q se le esta pasando
        },
    )   
     //*para redireccionar al usuario al index
    window.location.href = 'index.html' //*si llega a entrar aqui pues es q no huvo error
    }catch (error) {

        console.log(error)     
    } 
}
//todo: Lo q hace el coduigo de ariba es insertarlo del cliente al servisdor a la base de datos a trves del metodo http por post


//todo: ---AHORA lo q haré es obtener los datos q fueron mandados al servidor, lo haré con un get ya q quiero obtener o listar los 
//todo: clientes y esto es con un metodo get osea para obtener datos del servidor

//todo: OJOOO: lugo q le envio los datos del cliente al servidor aqui cogo la url y con esos datos q fueron mandados al servidor
//todo: y aqui los pido en formato json
export async function obtenerDatosClientesDelServidor(){
    try {
        const resultado = await fetch(url)
        const cliente = await resultado.json()
        return cliente
    }catch (error) {

        return error
    }
} 



//todo: importantisimo DIFERENCIAS DEL TRATO DE LA API con la Api del clima: En la api del clima no habia q enviar datos al servidor
//todo: ya q esta api estaba en un servidor y lo q se hacia era consultar la base de datos de esta api. PERO AQUI ESTOY TRABANDO CON
//TODO: JSON SERVER OSEA CON MI PROPIA BASE DE DATOS Y TENGO Q RESCATAR DEL CLIENTE AL SERVIDOR CON POST PARA PODER LUEGO HACER UNA 
//TODO: `PETICION GET AL ESERVIDOR Y MOSTRAR LOS CLIENTES, OSEA EN LA DEL CLIMA LA API AUTOMATICAMENTE TENIA UN PARAMETRO EN EL 
//TODO: TEMPLATE STRING PARA PONERLO Y ESTO HACIA REFERENCIA A LO Q ESCRIBIA EL CLIENTE , OSEA HAY Q HACERLE LA CNSULTADA CON GET

//todo: lo de arriba resumido: osea q una api remoto como la api del clima o de las imagenes no se le puede mandar nada por post
//todo: ya q estas lo hacven automatico, pero una api local si hay q hacerlo


//todo: OJO: hay apis privadas como la de las imagenes q hay q autenticarse y te dan una clave Api Key osea para saber el id tuyo
//todo: e identificar cuantos recursos gastas para cobrarte, ojoo: etas api crean un token q tienen todos los datos del cliente.
//todo: por otro lado estan las api ublicas q cualquira puede usar sin limitaciones


