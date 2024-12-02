import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {
  constructor(private http : HttpClient) { }

  getAgendas(): Observable<any>{
    return this.http.get(HOST_URL + '/agenda');
  }
}

export const HOST_URL = 'http://localhost:8080'
