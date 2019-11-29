import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent } from './pages/menu/menu.component';
import { CadastroClienteComponent } from './pages/cadastro-cliente/cadastro-cliente.component';
import { AboutComponent } from './pages/about/about.component';


const routes: Routes = [ 
  { path: 'menu', component: MenuComponent }, 
  { path: 'cadastroCliente', component: CadastroClienteComponent },
  { path: 'about', component: AboutComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
