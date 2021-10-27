import { present } from "@ionic/core/dist/types/utils/overlays";
import { IonAvatar, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonThumbnail, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import React, {useContext} from "react";
import r_context from "../data/recordatorios-context";

const AddInicio: React.FC =() => {

    const recordatoriosCtxt = useContext(r_context);
    const [present] = useIonAlert();

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" color="secondary">
                        <IonMenuButton/>
                    </IonButton>
                    <IonTitle>RECORDATORIOS</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    {recordatoriosCtxt.recordatorios.map(recordatorio =>(
                    <IonRow key = {recordatorio.id}>
                        <IonCol>

                            <IonList>
                                <IonItem>
                                    <IonThumbnail slot="start">
                                        <img src = {recordatorio.imagen} alt="recordatorio"/>
                                    </IonThumbnail>
                                    <IonLabel>
                                        <h2>{recordatorio.fecha} - {recordatorio.hora}</h2>
                                        <p><b>{recordatorio.titulo}: </b>{recordatorio.descripcion}</p>
                                    </IonLabel>
                                </IonItem>
                            </IonList>                           
                        </IonCol>
                    </IonRow>
                    ))}
                    <IonButton onClick = {() => present('Seguimos en desarrollo', [{text: 'ok'}])} color='secondary' expand="full">
                        Agregar recordatorio
                    </IonButton>
                </IonGrid> 
            </IonContent>
        </IonPage>
    );

};

export default AddInicio;