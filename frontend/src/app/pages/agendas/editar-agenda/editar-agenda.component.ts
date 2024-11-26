import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FloatLabelModule} from 'primeng/floatlabel';
import {DropdownModule} from 'primeng/dropdown';
import {Vacina, vacinas} from '../../../interface/vacina';
import {Usuario, usuarios} from '../../../interface/usuario';
import {VacinaService} from '../../../service/vacina.service';
import {UsuarioService} from '../../../service/usuario.service';

@Component({
  selector: 'app-editar-agenda',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    FloatLabelModule,
    DropdownModule
  ],
  templateUrl: './editar-agenda.component.html',
  styleUrl: './editar-agenda.component.css'
})
export class EditarAgendaComponent implements OnInit{
  private readonly _usuarioService: UsuarioService;
  private readonly _vacinaService: VacinaService;

  form!: FormGroup

  vacinas!: Vacina[]
  usuarios!: Usuario[]

  constructor(vacinaService: VacinaService,
              usuarioService: UsuarioService) {
    this._vacinaService = vacinaService;
    this._usuarioService = usuarioService;
  }

  ngOnInit() {
    this.usuarios = this._usuarioService.getUsuariosDropdown()
    this.vacinas = this._vacinaService.getVacinasDropdown()

    this.form = new FormGroup({
      data: new FormControl<Date | null>(null),
      vacina: new FormControl<Vacina | null>(null),
      usuario: new FormControl<Usuario | null>(null)
    })
  }
}
