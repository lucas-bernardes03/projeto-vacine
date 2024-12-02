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
import {AgendaService} from '../../../service/agenda.service';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {InputTextareaModule} from 'primeng/inputtextarea';

@Component({
  selector: 'app-editar-agenda',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    InputTextModule,
    CalendarModule,
    FloatLabelModule,
    DropdownModule,
    ToastModule,
    InputTextareaModule
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
              private agendaServico: AgendaService,
              private messageService: MessageService,
              public ref : DynamicDialogRef,
              public config : DynamicDialogConfig) {

  }

  ngOnInit() {
    this.usuarioService.getUsuarios().subscribe({
      next: result => this.usuarios = result
    })

    this.vacinaService.getVacinas().subscribe({
      next: result => this.vacinas = result
    })

    this.form = new FormGroup({
      id: new FormControl<Number | null>(null ),
      data: new FormControl<Date | null>(null),
      vacina: new FormControl<Vacina | null>(null),
      usuario: new FormControl<Usuario | null>(null),
      situacao: new FormControl<String | null>("Agendado"),
      observacoes: new FormControl<String | null>(null)
    })

    if(this.config.data) this.popularForm()
  }

  popularForm(){
    this.form.get('id')?.patchValue((this.config.data.id))
    let data = new Date(this.config.data.data)
    this.form.get('data')?.patchValue(data)
    this.form.get('vacina')?.patchValue(this.config.data.vacina)
    this.form.get('usuario')?.patchValue(this.config.data.usuario)
    this.form.get('situacao')?.patchValue(this.config.data.situacao)
    this.form.get('observacoes')?.patchValue(this.config.data.observacoes)
  }

  validarForm(): boolean{
    if(!this.form.get('usuario')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Paciente é obrigatório'})
      return false
    }

    if(!this.form.get('vacina')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Vacina é obrigatório'})
      return false
    }

    if(!this.form.get('data')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Data é obrigatório'})
      return false
    }

    return true
  }

  cadastrarAgendamento(){
    if(!this.validarForm()) return

    if(this.form.value.id){
      this.agendaServico.novaAgenda(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao inserir agendamento'})
        }
      })
    }
    else {
      this.agendaServico.salvarAgenda(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao alterar agendamento'})
        }
      })
    }
  }
}
