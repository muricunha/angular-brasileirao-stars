import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartPageComponent } from './home/start-page/start-page.component';
import { AtualizationComponent } from './home/atualization/atualization.component';
import { SobreComponent } from './home/sobre/sobre.component';
import { CarrosselComponent } from './menu/carrossel/carrossel.component';

export const routes: Routes = [
  {path: 'startPage', component: StartPageComponent},
  {path: 'atualizacao', component: AtualizationComponent},
  {path: 'sobre', component: SobreComponent},
  {path: '', component: CarrosselComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
