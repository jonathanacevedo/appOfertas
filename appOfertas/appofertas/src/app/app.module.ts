import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { AgmCoreModule } from '@agm/core';
import { MatDialogModule } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from "@angular/material";
import { AngularFireModule } from 'angularfire2';
import { AngularFireStorageModule } from 'angularfire2/storage';


import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

import { AppComponent } from './app.component';
import { VistaComponent } from './vista/vista.component';
import { SinPermisoComponent } from './sin-permiso/sin-permiso.component';

import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//Servicios
import { ListarService } from './serviciosListar/listar.service';
import { RegistrarPersonaService } from './serviciosRegistro/registrar.service';
import { EliminarService } from './serviciosEliminar/eliminar.service';
import { EditarService } from './serviciosEditar/editar.service';
import { MatCardModule } from '@angular/material/card';

import { AuthServiceManual } from './authService/auth.service';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrarNegocioComponent } from './registrar-negocio/registrar-negocio.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';
import { HeaderComponent } from './header/header.component';
import { MapaComponent } from './mapa/mapa.component';
import { MisNegociosComponent } from './mis-negocios/mis-negocios.component';
import { EditarNegoComponent } from './editar-nego/editar-nego.component';
import { CrearOfertaComponent } from './crear-oferta/crear-oferta.component';
import { MisOfertasComponent } from './mis-ofertas/mis-ofertas.component';
import { EditarOfertaComponent } from './editar-oferta/editar-oferta.component';

const appRoutes: Routes = [
  { path: '', component: LoginComponent},
  { path: 'registrar', component: RegistrarPersonaComponent},
  { path: 'inicio', component: VistaComponent },
  { path: 'registrar-negocio', component: RegistrarNegocioComponent},
  { path: 'misnegocios', component: MisNegociosComponent},
  // { path: 'login', component: LoginComponent, outlet: 'noLogueado'},
  // { path: 'registrar', component: RegistrarPersonaComponent, outlet: 'noLogueado' },
  // { path: 'registrar', component: RegistrarPersonaComponent },
  // { path: 'registrar-negocio', component: RegistrarNegocioComponent },
  // { path: 'inicio', component: VistaComponent },
  // { path: 'inicio', component: HeaderComponent },
  // { path: 'mapa', component: MapaComponent },
  // { path: 'inicio', component: SinPermisoComponent, outlet: 'noLogueado' },
  // { path: 'registrar-negocio', component: RegistrarNegocioComponent },
  // { path: 'registrar-negocio', component: SinPermisoComponent, outlet: 'noLogueado' },
  { path: '**', component: PageNotFoundComponent }
  // { path: '**', component: PageNotFoundComponent, outlet: 'noLogueado' }
];

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("485629587448-lat3u85k1t0du15dlekcq6nmgu7k2jfb.apps.googleusercontent.com")
  }
]);

export function provideConfig() {
  return config;
}

@NgModule({
  declarations: [
    AppComponent,
    VistaComponent,
    LoginComponent,
    PageNotFoundComponent,
    SinPermisoComponent,
    RegistrarNegocioComponent,
    RegistrarPersonaComponent,
    HeaderComponent,
    MapaComponent,
    MisNegociosComponent,
    EditarNegoComponent,
    CrearOfertaComponent,
    MisOfertasComponent,
    EditarOfertaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyA-HXVa2jtkGfKtIJwisxgC46RaWqC1xuI'
    }),
    BrowserModule,
    AngularFireModule.initializeApp({
      apiKey: "AIzaSyA8b_QkrYGJ0TJY_ZoV5fe3N_dCzM_aYjQ",
      authDomain: "appofertas-cdb19.firebaseapp.com",
      databaseURL: "https://appofertas-cdb19.firebaseio.com",
      projectId: "appofertas-cdb19",
      storageBucket: "appofertas-cdb19.appspot.com",
      messagingSenderId: "195462949744"
    }),
    AngularFireStorageModule,
    FormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    SocialLoginModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatDialogModule
  ],
  entryComponents: [EditarNegoComponent, CrearOfertaComponent, EditarOfertaComponent],
  providers: [
    ListarService,
    RegistrarPersonaService,
    EliminarService,
    EditarService,
    AuthServiceManual,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
