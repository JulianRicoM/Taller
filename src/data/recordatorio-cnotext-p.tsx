import React, {useState} from "react";
import r_context, { Recordatorio, RecordatorioContext, t_recordatorio } from "./recordatorios-context";

const RecordatorioContextP: React.FC = (h) => {
    
    const [recordatorios, setRecordatorios] = useState<Recordatorio[]>(
        [
            {
                id:'001',
                titulo: "Colegio",
                descripcion: "Colegio de lunes a viernes",
                t_recordatorio:"rutina",
                fecha:'26 de octubre del 2021',
                hora:'7:00A.M',
                imagen: 'assets/imagenes/tareas.jpg',
                completado: false                

            },

            {
                id:'002',
                titulo: "Presentación",
                descripcion: "Ir a tocar guitarra en el coliseo",
                t_recordatorio:"hobbie",
                fecha:'26 de octubre del 2021',
                hora:'7:00A.M',
                imagen: 'assets/imagenes/hobbie.jpg',
                completado: false                

            },

            {
                id:'003',
                titulo: "Gym",
                descripcion: "Ir a realizar deporte",
                t_recordatorio:"rutina",
                fecha:'26 de octubre del 2021',
                hora:'7:00A.M',
                imagen: 'assets/imagenes/rutina.jpg',
                completado: false                

            }
            
        ]
    );

    const addRecordatorio = (titulo:string, descripcion:string, t_recordatorio:t_recordatorio, fecha:string, hora:string) => {
        let imagen = '';
        switch(t_recordatorio){
            case 'hobbie':
                imagen = 'assets/imagenes/fotos-perfil.jpg';
                break;

            case 'tareas':
                imagen = 'assets/imagenes/fotos-perfil.jpg';
                break;

            case 'rutina':
                imagen = 'assets/imagenes/fotos-perfil.jpg';
                break;
            default:
                imagen = 'assets/imagenes/fotos-perfil.jpg';
        };

        const recordatorio1: Recordatorio = {
            id: "001",
            titulo,
            descripcion,
            t_recordatorio,
            fecha,
            hora,
            imagen,
            completado: false
        };

        const recordatorio2: Recordatorio = {
            id: "002",
            titulo,
            descripcion,
            t_recordatorio,
            fecha,
            hora,
            imagen,
            completado: false
        };

        const recordatorio3: Recordatorio = {
            id: "003",
            titulo,
            descripcion,
            t_recordatorio,
            fecha,
            hora,
            imagen,
            completado: false
        };

        setRecordatorios(currRecordatorios => {
            return[...currRecordatorios, recordatorio1, recordatorio2, recordatorio3];
        });
    };

    const r_completa = (recordatorioId: string) => {
        setRecordatorios(currRecordatios =>{
            const updateRecordatorios = [...currRecordatios];
            const selectedRecordatorio = recordatorios.findIndex(rec =>rec.id === recordatorioId);
            const updateRecordatorio = {... updateRecordatorios[selectedRecordatorio], completado: true};
            updateRecordatorios[selectedRecordatorio] =updateRecordatorio;
            return updateRecordatorios;
        })
    };

    const recordatoriosContext: RecordatorioContext = {
        recordatorios,
        addRecordatorio,
        r_completa
    };

    return(
        <r_context.Provider value = {recordatoriosContext}>
            {h.children}
        </r_context.Provider>
    );
};

export default RecordatorioContextP;