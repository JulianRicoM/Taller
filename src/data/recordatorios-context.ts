import React from "react";

export type t_recordatorio = 'hobbie' | 'tareas' | 'rutina'

export interface  Recordatorio{
    id: string,
    titulo: string,
    descripcion: string,
    t_recordatorio: t_recordatorio,
    fecha: string,
    hora: string,
    imagen: string,
    completado:boolean;
}

export interface RecordatorioContext{
    recordatorios: Recordatorio[];
    addRecordatorio: (titulo:string, descripcion:string, t_recordatorio: t_recordatorio, fecha:string,hora:string)=>void;
    r_completa:(recordatorioId:string) => void;
}

const r_context = React.createContext<RecordatorioContext>({
    recordatorios: [],
    addRecordatorio: () =>{},
    r_completa: () => {}
});

export default r_context;