import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HOST_URL} from './agenda.service';

@Injectable({
  providedIn: 'root'
})
export class AlergiaService {
  constructor(private http : HttpClient) { }
  getAlergias(): Observable<any>{
    return this.http.get(HOST_URL + '/alergia');
  }
}
