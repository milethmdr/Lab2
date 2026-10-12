import { Tarea } from "../models/Tarea.js";
export class StorageService {
    static KEY = "tareas";
    static guardar(tareas) {
        localStorage.setItem(this.KEY, JSON.stringify(tareas));
    }
    static obtener() {
        const datos = localStorage.getItem(this.KEY);
        if (!datos) {
            return [];
        }
        return JSON.parse(datos);
    }
    static eliminarTodo() {
        localStorage.removeItem(this.KEY);
    }
}
//# sourceMappingURL=StorageService.js.map