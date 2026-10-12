export var Prioridad;
(function (Prioridad) {
    Prioridad["Alta"] = "Alta";
    Prioridad["Media"] = "Media";
    Prioridad["Baja"] = "Baja";
})(Prioridad || (Prioridad = {}));
export class Tarea {
    id;
    titulo;
    prioridad;
    completada;
    fecha;
    constructor(id, titulo, prioridad, completada = false, fecha = new Date()) {
        this.id = id;
        this.titulo = titulo;
        this.prioridad = prioridad;
        this.completada = completada;
        this.fecha = fecha;
    }
}
//# sourceMappingURL=Tarea.js.map