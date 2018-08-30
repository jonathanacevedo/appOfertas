import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { SocialLoginModule, AuthServiceConfig } from "angularx-social-login";
import { GoogleLoginProvider, FacebookLoginProvider, LinkedInLoginProvider} from "angularx-social-login";

import { AppComponent } from './app.component';
import { VistaComponent } from './vista/vista.component';
import { SinPermisoComponent } from './sin-permiso/sin-permiso.component';


import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

//Servicios
import { ListarService } from './listar.service';
import { RegistrarPersonaService } from './registrar-persona.service';
//import { AuthService } from './auth.service';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RegistrarNegocioComponent } from './registrar-negocio/registrar-negocio.component';
import { RegistrarPersonaComponent } from './registrar-persona/registrar-persona.component';

const appRoutes: Routes = [
  { path: '', component: VistaComponent },
  { path: '', component: LoginComponent, outlet: 'noLogueado'},
  { path: 'inicio', component: VistaComponent },
  { path: 'inicio', component: SinPermisoComponent, outlet: 'noLogueado' },
  { path: 'registrar', component: RegistrarPersonaComponent, outlet: 'noLogueado' },
  { path: 'registrar', component: SinPermisoComponent },
  { path: 'registrar-negocio', component: RegistrarNegocioComponent },
  { path: 'registrar-negocio', component: SinPermisoComponent, outlet: 'noLogueado' },
  { path: '**', component: PageNotFoundComponent },
  { path: '**', component: PageNotFoundComponent, outlet: 'noLogueado' }
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
    RegistrarPersonaComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    BrowserModule,
    HttpClientModule,
    HttpModule,
    RouterModule,
    AppRoutingModule,
    SocialLoginModule
  ],
  providers: [
    ListarService,
    RegistrarPersonaService,
    {
      provide: AuthServiceConfig,
      useFactory: provideConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
