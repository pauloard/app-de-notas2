let moduloTareas = require ('./tareas');
let process = require("process");
let comando = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

switch (comando){
    case "listar":
        let tarea = moduloTareas.leerJSON()
        if(tarea.length ===0){
            console.log("La lista de tarea esta vacia")
        }else{
            console.log("--------------------------")
            console.log("Esta es tu lista de tareas")
            console.log("--------------------------")
            for(let i = 0;i < tarea.length; i++){
                console.log("Titulo" + tarea[i].titulo + "- estado: " + tarea[i].estado)
            }
        }
        break;
    case "agregar":
        let titulo =process.argv[3];
        let estado = porcess.argv[4];
        moduloTareas.escribirJson(titulo, estado);
        break;
    case "deshacer":
        moduloTareas.deshacer()
        break;
    case "filtrar":
        let estado2 = process.argv[3];
        let tareaFiltrada = moduloTareas.filtrar(estado2);
        if(tareaFiltrada.length ===0){
            console.log("La lista de tarea esta vacia")
        }else{
            console.log("__________________________")
            console.log("Esta es tu lista de tareas")
            console.log("__________________________")
            for(let i = 0;i < tareaFiltrada.length; i++){
                console.log("Titulo" + tareaFiltrada[i].titulo + "- estado: " + tareaFiltrada[i].estado)
            }
        }
        break;
    case undefined:
        console.log("Atención - tienes que pasar una acción")
        break;
    default:
        console.log("No entiendo que hacer");
        break;
}