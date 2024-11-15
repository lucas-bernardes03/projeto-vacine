import { Routes } from '@angular/router';
import {ListarAgendasComponent} from './pages/listar-agendas/listar-agendas.component';
import {ListarVacinasComponent} from './pages/listar-vacinas/listar-vacinas.component';
import {ListarAlergiasComponent} from './pages/listar-alergias/listar-alergias.component';
import {ListarUsuariosComponent} from './pages/listar-usuarios/listar-usuarios.component';

export const routes: Routes = [
  {path: 'agendas', component: ListarAgendasComponent, title: 'Agendas'},
  {path: 'vacinas', component: ListarVacinasComponent, title: 'Vacinas'},
  {path: 'alergias', component: ListarAlergiasComponent, title: 'Alergias'},
  {path: 'usuarios', component: ListarUsuariosComponent, title: 'Usuários'},
];
