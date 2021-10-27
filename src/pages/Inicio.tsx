import { IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import React, {useContext} from "react";
import a_context from "../data/actividades-contex";

const Inicio: React.FC =() => {

    const actividadesCtxt = useContext(a_context);

    return(
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" color="secondary">
                        <IonMenuButton/>
                    </IonButton>
                    <IonTitle>TAREAS DE HOY</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid> 
                    {actividadesCtxt.actividades.map(actividad =>(
                    <IonRow key={actividad.id}>
                        <IonCol>
                            <IonCol className="ion-text-center">
                                <IonCard>
                                    <img src ={actividad.imagen} alt="actividad"/>
                                    <IonCardHeader>
                                        <IonCardTitle>{actividad.hora}</IonCardTitle>
                                        <IonCardSubtitle>{actividad.titulo}</IonCardSubtitle>
                                    </IonCardHeader>
                                    <IonCardContent>
                                        <p>{actividad.descripcion}</p>
                                        <IonItem lines ="none">
                                            <IonButton fill='clear'></IonButton>
                                        </IonItem>
                                    </IonCardContent>
                                </IonCard>
                            </IonCol>
                        </IonCol>
                    </IonRow>
                    ))}
                </IonGrid> 
            </IonContent>
        </IonPage>
    );

};

export default Inicio;