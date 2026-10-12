export declare enum Prioridad {
    Alta = "Alta",
    Media = "Media",
    Baja = "Baja"
}
export interface ITarea {
    id: string;
    titulo: string;
    prioridad: Prioridad;
    completada: boolean;
    fecha: Date;
}
export declare class Tarea implements ITarea {
    id: string;
    titulo: string;
    prioridad: Prioridad;
    completada: boolean;
    fecha: Date;
    constructor(id: string, titulo: string, prioridad: Prioridad, completada?: boolean, fecha?: Date);
}
//# sourceMappingURL=Tarea.d.ts.map