import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatGridListModule } from '@angular/material/grid-list';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AgmCoreModule, GoogleMapsAPIWrapper } from '@agm/core';
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
import { VerNegocioComponent } from './ver-negocio/ver-negocio.component';
import { SuperHeaderComponent } from './super-header/super-header.component';
import { SuperpersonasComponent } from './superpersonas/superpersonas.component';
import { SupernegociosComponent } from './supernegocios/supernegocios.component';
import { SuperofertasComponent } from './superofertas/superofertas.component';
import { VerfotoComponent } from './verfoto/verfoto.component';
import { FiltradoComponent } from './filtrado/filtrado.component';
import { FiltradoAdminComponent } from './filtrado-admin/filtrado-admin.component';
import { FiltradoSuperComponent } from './filtrado-super/filtrado-super.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';



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
    EditarOfertaComponent,
    VerNegocioComponent,
    SuperHeaderComponent,
    SuperpersonasComponent,
    SupernegociosComponent,
    SuperofertasComponent,
    VerfotoComponent,
    FiltradoComponent,
    FiltradoAdminComponent,
    FiltradoSuperComponent,
    EditarPerfilComponent
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
    MatDialogModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatFormFieldModule
    ],
  entryComponents: [FiltradoSuperComponent, EditarPerfilComponent, EditarNegoComponent, FiltradoAdminComponent, CrearOfertaComponent, VerfotoComponent, FiltradoComponent, EditarOfertaComponent, VerNegocioComponent],
  providers: [
    ListarService,
    RegistrarPersonaService,
    EliminarService,
    EditarService,
    GoogleMapsAPIWrapper,
    AuthServiceManual,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]

})
export class AppModule { }
