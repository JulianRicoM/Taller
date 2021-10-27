import React, {useState} from "react";
import a_context, { Actividad, ActividadesContext, t_actividad } from "./actividades-contex";

const ActividadesContexP: React.FC = (h) => {

    const [actividades, setActividades] = useState<Actividad[]>(
        [
            {
                id:"001",
                titulo: "Colegio",
                descripcion: 'Ir a estudiar al colegio',
                tipo_actividad: 'tarea',
                hora: "7:00 A.M - 1:30 P.M",
                imagen: 'assets/imagenes/tareas.jpg',
                completado: false
            },

            {
                id:"002",
                titulo: "Dormir",
                descripcion: 'Recostarme y tomar una siesta',
                tipo_actividad: 'rutina',
                hora: "2:00 P.M - 3:00 P.M",
                imagen: 'assets/imagenes/rutina.jpg',
                completado: false
            },

            {
                id:"003",
                titulo: "Guitarra",
                descripcion: 'Ir a clase de guitarra',
                tipo_actividad: 'hobbie',
                hora: "3:00 P.M - 6:00 P.M",
                imagen: 'assets/imagenes/hobbie.jpg',
                completado: false
            }
        ]
    );

    const addInicio = (titulo: string, descripcion: string, tipo_actividad: t_actividad, hora: string) => {
        let imagen ='';
        switch(tipo_actividad){
            case 'hobbie':
                imagen = 'assets/imagenes/hobbie.jpg';
                break;

            case 'tarea':
                imagen = 'assets/imagenes/tareas.jpg';
                break;

            case 'rutina':
                imagen = 'assets/imagenes/rutina.jpg';
                break;
            default:
                imagen = 'assets/imagenes/fotos-perfil.jpg';
        };

        const actividad1: Actividad = {
            id: "001",
            titulo,
            descripcion,
            tipo_actividad,
            hora,
            imagen,
            completado: false
        };

        const actividad2: Actividad = {
            id: "002",
            titulo,
            descripcion,
            tipo_actividad,
            hora,
            imagen,
            completado: false
        };

        const actividad3: Actividad = {
            id: "003",
            titulo,
            descripcion,
            tipo_actividad,
            hora,
            imagen,
            completado: false
        };

        setActividades(currActividades => {
            return[...currActividades, actividad1, actividad2, actividad3];
        });
    };

    const a_completa = (actividadId: string) => {
        setActividades(currActividades =>{
            const updateActividades = [...currActividades];
            const selectedActividad = actividades.findIndex(act => act.id === actividadId);
            const updateActividad = {...updateActividades[selectedActividad], completado:true};
            updateActividades[selectedActividad] = updateActividad;
            return updateActividades;
        })
    };
    

    const actividadesContext: ActividadesContext = {
        actividades,
        addInicio,
        a_completa
    };

    return(
        <a_context.Provider value = {actividadesContext}>
            {h.children}
        </a_context.Provider>
    );
};

export default ActividadesContexP;