export enum Prioridad {
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

export class Tarea implements ITarea {

    constructor(
        public id: string,
        public titulo: string,
        public prioridad: Prioridad,
        public completada: boolean = false,
        public fecha: Date = new Date()
    ) {}
}