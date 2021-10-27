import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreestudioComponent } from './componentes/preestudio/preestudio.component';
import { SobreContactoComponent } from './componentes/sobre-contacto/sobre-contacto.component';
import { SoliciteHipotecaComponent } from './componentes/solicite-hipoteca/solicite-hipoteca.component';
import { HipotecasComponent } from './hipotecas/hipotecas.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    component:HomeComponent,
    path:''
  },
  {
    component:HipotecasComponent,
    path:'hipotecas'
  },
  {
    path:'preestudio',
    component:PreestudioComponent
  },
  {
    path:'solicite',
    component:SoliciteHipotecaComponent
  },
  {
    path:'sobreNostros',
    component:SobreContactoComponent
  },
  {
    path:'contacto',
    component:SobreContactoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
