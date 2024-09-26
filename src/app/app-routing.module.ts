import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './views/dashboard/dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './auth.guard';
import { ItemsComponent } from './components/items/items.component';
import { IndicadoresComponent } from './components/indicadores/indicadores.component';

const routes: Routes = [
{path:``,pathMatch: 'full', redirectTo: '/login'},
  {path:'dashboard', component:DashboardComponent,  canActivate: [AuthGuard]},
  {path:'login', component:LoginComponent},
  {path: '**', redirectTo: '/login' },
  {path:'items', component:ItemsComponent},
  {path:'indicadores', component:IndicadoresComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
