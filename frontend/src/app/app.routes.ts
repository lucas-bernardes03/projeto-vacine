import { Routes } from '@angular/router';
import {AgendasComponent} from './pages/agendas/agendas.component';
import {VacinasComponent} from './pages/vacinas/vacinas.component';
import {AlergiasComponent} from './pages/alergias/alergias.component';
import {UsuariosComponent} from './pages/usuarios/usuarios.component';
import {LoginComponent} from './pages/login/login.component';
import {ShellComponent} from './pages/shell/shell.component';
import {RegisterComponent} from './pages/register/register.component';
import {authGuard} from './auth.guard';

export const routes: Routes = [
  {path: '', component: ShellComponent, children: [
      {path: '', redirectTo: 'agendas', pathMatch:"full"},
      {path: 'agendas', component: AgendasComponent, title: 'Agendas', canActivate: [authGuard]},
      {path: 'vacinas', component: VacinasComponent, title: 'Vacinas', canActivate: [authGuard]},
      {path: 'alergias', component: AlergiasComponent, title: 'Alergias', canActivate: [authGuard]},
      {path: 'usuarios', component: UsuariosComponent, title: 'Usuários', canActivate: [authGuard]},
    ]},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: 'register', component: RegisterComponent, title: 'Registrar'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

export const menuRoutes: Routes = [
  {path: 'agendas', component: AgendasComponent, title: 'Agendas'},
  {path: 'vacinas', component: VacinasComponent, title: 'Vacinas'},
  {path: 'alergias', component: AlergiasComponent, title: 'Alergias'},
  {path: 'usuarios', component: UsuariosComponent, title: 'Usuários'},
]
