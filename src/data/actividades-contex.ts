import React from "react";

export type t_actividad = 'hobbie' | 'tarea' | "rutina" 

export interface Actividad{
    id: string;
    titulo: string;
    descripcion: string;
    tipo_actividad: t_actividad;
    hora: string
    imagen:string;
    completado: boolean;
}

export interface ActividadesContext {
    actividades: Actividad[];
    addInicio: (titulo: string, descripcion: string, tipo_actividad:t_actividad, hora:string) => void;
    a_completa: (actividadId: string) => void;
}

const a_context = React.createContext<ActividadesContext>({
    actividades: [],
    addInicio: () =>{},
    a_completa: () => {}
});

export default a_context;