import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenu, IonMenuToggle, IonRouterOutlet, IonTitle, IonToolbar } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import Inicio from './pages/Inicio';
import AddInicio from './pages/AddInicio';
import { personCircleOutline, colorWandOutline, readerOutline } from 'ionicons/icons';
import RecordatorioContextP from './data/recordatorio-cnotext-p';
import ActividadesContexP from './data/actividades-context-p';
import Registro from './pages/Registro';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>

      <IonMenu side="start" contentId="inicioMenu">
        <IonHeader>
          <IonToolbar color="secondary">
            <IonTitle>Menu App</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>

          <IonMenuToggle>
              <IonItem routerLink="/Inicio">
                <IonIcon color="medium" slot="start" icon={readerOutline} />
                <IonLabel>Tareas diarias</IonLabel>
              </IonItem>
            </IonMenuToggle>

          <IonMenuToggle>
              <IonItem routerLink="/Add-inicio">
                <IonIcon color="medium" slot="start" icon={colorWandOutline} />
                <IonLabel>Recordatorios</IonLabel>
              </IonItem>
            </IonMenuToggle>

            <IonMenuToggle>
              <IonItem routerLink="/Registro">
                <IonIcon color="medium" slot="start" icon={personCircleOutline} />
                <IonLabel>Registrarse</IonLabel>
              </IonItem>
            </IonMenuToggle>

          </IonList>
        </IonContent>
      </IonMenu>

      <ActividadesContexP>
        <RecordatorioContextP>
          <IonRouterOutlet id="inicioMenu">
            <Route path="/Inicio" component={Inicio} exact />
            <Route path="/Add-inicio" component={AddInicio} exact />
            <Route path= "/Registro" component = {Registro} exact />
            <Redirect to="/Inicio" />
          </IonRouterOutlet>
        </RecordatorioContextP>
      </ActividadesContexP>
    </IonReactRouter>
  </IonApp>
);

export default App;
