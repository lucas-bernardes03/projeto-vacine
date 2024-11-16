import { Routes } from '@angular/router';
import {AgendasComponent} from './pages/agendas/agendas.component';
import {VacinasComponent} from './pages/vacinas/vacinas.component';
import {AlergiasComponent} from './pages/alergias/alergias.component';
import {UsuariosComponent} from './pages/usuarios/usuarios.component';
import {LoginComponent} from './pages/login/login.component';
import {ShellComponent} from './pages/shell/shell.component';

export const routes: Routes = [
  {path: '', component: ShellComponent, children: [
      {path: '', redirectTo: 'agendas', pathMatch:"full"},
      {path: 'agendas', component: AgendasComponent, title: 'Agendas'},
      {path: 'vacinas', component: VacinasComponent, title: 'Vacinas'},
      {path: 'alergias', component: AlergiasComponent, title: 'Alergias'},
      {path: 'usuarios', component: UsuariosComponent, title: 'Usuários'},
    ]},
  {path: 'login', component: LoginComponent, title: 'Login'},
  {path: '**', redirectTo: '/login', pathMatch: 'full'}
];

export const menuRoutes: Routes = [
  {path: 'agendas', component: AgendasComponent, title: 'Agendas'},
  {path: 'vacinas', component: VacinasComponent, title: 'Vacinas'},
  {path: 'alergias', component: AlergiasComponent, title: 'Alergias'},
  {path: 'usuarios', component: UsuariosComponent, title: 'Usuários'},
]
