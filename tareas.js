let fs = require('fs');

module.exports = moduloTareas = {
    leerJSON : () =>{
        let listaDeTareas = fs.readFileSync('./tareas.json', 'utf-8')
        return JSON.parse(listaDeTareas)
    },
    escribirJson : (titulo, estado) => {
        let nuevaTarea = {
            titulo : titulo,
            estado : estado,
        }
    let tareasAtenriores = module.leerJSON;

    tareasAtenriores.push(nuevaTarea)

    moduloTareas.guardarJSON(tareasAtenriores)

    },
    guardarJSON: (info) =>{
        let nuevoJSON = JSON.stringify(info);
        fs.writeFileSync('./tareas.json', nuevoJSON, 'utf-8')
    },
    deshacer : () => {
        let tareas = moduloTareas.leerJSON();
        tareas.pop();
        moduloTareas.guardarJSON(tareas)
    },
    filtrar : () =>{
        let tareas = moduloTareas.leerJSON();
        let tareaFiltrada = tareas.filter(tareas => {
            return tarea.estado.toLowerCase === estado;
        })
        return tareaFiltrada;
    }

}