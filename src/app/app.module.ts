import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HipotecasComponent } from './hipotecas/hipotecas.component';
import { HeaderComponent } from './componentes/header/header.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { PreestudioComponent } from './componentes/preestudio/preestudio.component';
import { SoliciteHipotecaComponent } from './componentes/solicite-hipoteca/solicite-hipoteca.component';
import { SobreNosotrosComponent } from './componentes/sobre-nosotros/sobre-nosotros.component';
import { SobreContactoComponent } from './componentes/sobre-contacto/sobre-contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HipotecasComponent,
    HeaderComponent,
    FooterComponent,
    PreestudioComponent,
    SoliciteHipotecaComponent,
    SobreNosotrosComponent,
    SobreContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
