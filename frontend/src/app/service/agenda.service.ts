import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Agenda} from '../interface/agenda';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  constructor(private http : HttpClient) { }

  getAgendas(): Observable<any>{
    return this.http.get(HOST_URL + '/agenda');
  }

  novaAgenda(agenda: Agenda): Observable<any>{
    return this.http.post(HOST_URL + '/agenda', agenda)
  }

  salvarAgenda(agenda: Agenda) : Observable<any>{
    return this.http.put(HOST_URL + '/agenda', agenda)
  }

  darBaixa(agenda: Agenda) : Observable<any>{
    return this.http.put(HOST_URL + '/agenda/baixa', agenda)
  }

  excluirAgenda(agenda : Agenda): Observable<any>{
    return this.http.delete(HOST_URL + '/agenda', {body: agenda})
  }
}

export const HOST_URL = 'http://localhost:8080'
