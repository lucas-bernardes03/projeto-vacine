import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {InputTextModule} from 'primeng/inputtext';
import {CalendarModule} from 'primeng/calendar';
import {FloatLabelModule} from 'primeng/floatlabel';
import {DropdownModule} from 'primeng/dropdown';
import {Vacina} from '../../../interface/vacina';
import {Usuario} from '../../../interface/usuario';
import {VacinaService} from '../../../service/vacina.service';
import {UsuarioService} from '../../../service/usuario.service';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';

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
  form!: FormGroup

  vacinas!: Vacina[]
  usuarios!: Usuario[]

  constructor(private vacinaService: VacinaService,
              private usuarioService: UsuarioService,
              public ref : DynamicDialogRef,
              public config : DynamicDialogConfig) {

    console.log(this.config.data)
  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe({
      next: result => this.usuarios = result
    })

    this.vacinaService.getVacinas().subscribe({
      next: result => this.vacinas = result
    })

    this.form = new FormGroup({
      id: new FormControl<Number | null>(null),
      data: new FormControl<Date | null>(null),
      vacina: new FormControl<Vacina | null>(null),
      usuario: new FormControl<Usuario | null>(null)
    })

    if(this.config.data) this.popularForm()
  }

  popularForm(){
    this.form.get('id')?.patchValue((this.config.data.id))
    let data = new Date(this.config.data.data)
    this.form.get('data')?.patchValue(data)
    this.form.get('vacina')?.patchValue(this.config.data.vacina)
    this.form.get('usuario')?.patchValue(this.config.data.usuario)
  }

  cadastrarAgendamento(){

    this.ref.close()
  }
}
