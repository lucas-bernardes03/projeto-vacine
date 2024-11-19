import { Injectable } from '@angular/core';
import {Agenda, agendas} from '../interface/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  constructor() { }

  getAgendas(): Agenda[]{
    return agendas;
  }
}
