import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {DatePipe, NgIf} from '@angular/common';
import {PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {TooltipModule} from 'primeng/tooltip';
import {UsuarioService} from '../../service/usuario.service';
import {Usuario} from '../../interface/usuario';

@Component({
  selector: 'app-usuarios',
  standalone: true,
  imports: [
    Button,
    DatePipe,
    NgIf,
    PrimeTemplate,
    TableModule,
    TooltipModule
  ],
  templateUrl: './usuarios.component.html',
  styleUrl: './usuarios.component.css'
})
export class UsuariosComponent implements OnInit{
  private readonly _usuarioService: UsuarioService;
  usuarios!: Usuario[];

  constructor(usuarioService: UsuarioService) {
    this._usuarioService = usuarioService;
  }

  ngOnInit() {
    this.usuarios = this._usuarioService.getUsuarios()
  }
}
