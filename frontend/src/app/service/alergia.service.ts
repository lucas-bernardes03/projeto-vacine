import { Injectable } from '@angular/core';
import {Alergia, alergias} from '../interface/alergia';

@Injectable({
  providedIn: 'root'
})
export class AlergiaService {
  constructor() { }

  getAlergias(): Alergia[]{
    return alergias
  }
}
