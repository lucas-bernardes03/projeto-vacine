import { Injectable } from '@angular/core';
import {Usuario, usuarios} from '../interface/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  constructor() { }

  getUsuarios ():Usuario[]{
    return usuarios
}
}
