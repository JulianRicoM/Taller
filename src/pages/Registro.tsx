import { IonButton, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonMenuButton, IonPage, IonRow, IonTitle, IonToolbar, useIonAlert } from "@ionic/react";
import React from "react";

const Registro: React.FC = () => {

    const [crear] = useIonAlert();

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonButton slot="start" color="secondary">
                        <IonMenuButton />
                    </IonButton>
                    <IonTitle>REGISTRO</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonList>
                                <IonItem>
                                    <IonLabel position="floating">Nombre:</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Apellido:</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Correo:</IonLabel>
                                    <IonInput></IonInput>
                                </IonItem>
                                <IonItem>
                                    <IonLabel position="floating">Contraseña:</IonLabel>
                                    <IonInput required></IonInput>
                                </IonItem>
                            </IonList>
                            <IonButton expand="full" color="secondary"
                                onClick={() => crear('Registro realizado con exito',[{text:'Aceptar'}])}>
                                    Registrarse
                                
                            </IonButton>


                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>

    );
};

export default Registro;