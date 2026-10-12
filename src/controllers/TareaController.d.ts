import { Tarea, Prioridad } from "../models/Tarea.js";
export declare class TareaController {
    private tareas;
    constructor();
    obtenerTareas(): Tarea[];
    agregarTarea(titulo: string, prioridad: Prioridad): void;
    completarTarea(id: string): void;
    eliminarTarea(id: string): void;
    ordenarPorFecha(): Tarea[];
    ordenarPorPrioridad(): Tarea[];
    filtrarPorPrioridad(prioridad: Prioridad): Tarea[];
    filtrarPorEstado(completada: boolean): Tarea[];
}
//# sourceMappingURL=TareaController.d.ts.map