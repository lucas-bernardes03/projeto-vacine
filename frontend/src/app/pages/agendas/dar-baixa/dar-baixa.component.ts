import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {MessageService} from 'primeng/api';
import {Button} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {PaginatorModule} from 'primeng/paginator';
import {AgendaService} from '../../../service/agenda.service';

@Component({
  selector: 'app-dar-baixa',
  standalone: true,
  imports: [
    Button,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    PaginatorModule,
    ReactiveFormsModule
  ],
  templateUrl: './dar-baixa.component.html',
  styleUrl: './dar-baixa.component.css'
})
export class DarBaixaComponent implements OnInit{
  form!: FormGroup

  situacoes = ["Cancelado", "Realizado"]

  constructor(public ref : DynamicDialogRef,
              public config : DynamicDialogConfig,
              private messageService: MessageService,
              private agendaServico: AgendaService) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl<Number | null>(this.config.data.id),
      dataSituacao: new FormControl<Date>(new Date()),
      situacao: new FormControl<String | null>(null),
      observacoes: new FormControl<String | null>(this.config.data.observacoes)
    })
  }

  validarForm(): boolean{
    if(!this.form.get('situacao')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Situação é obrigatório'})
      return false
    }

    return true
  }

  baixa(){
    if(!this.validarForm()) return

    this.agendaServico.darBaixa(this.form.value).subscribe({
      next: () => {
        this.ref.close(true)
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao dar baixa no agendamento'})
      }
    })
  }
}
