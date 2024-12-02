import {Component, OnInit} from '@angular/core';
import {TableModule} from 'primeng/table';
import {AgendaService} from '../../service/agenda.service';
import {Agenda} from '../../interface/agenda';
import {DatePipe, NgClass, NgForOf, NgIf} from '@angular/common';
import {Button} from 'primeng/button';
import {TooltipModule} from 'primeng/tooltip';
import {DialogModule} from 'primeng/dialog';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EditarAgendaComponent} from './editar-agenda/editar-agenda.component';
import {ConfirmationService} from 'primeng/api';
import {ConfirmDialogModule} from 'primeng/confirmdialog';

@Component({
  selector: 'app-agendas',
  standalone: true,
  imports: [
    TableModule,
    NgForOf,
    DatePipe,
    Button,
    NgClass,
    NgIf,
    TooltipModule,
    DialogModule,
    ConfirmDialogModule,
  ],
  templateUrl: './agendas.component.html',
  styleUrl: './agendas.component.css',
})
export class AgendasComponent implements OnInit{
  agendas!: Agenda[];

  ref: DynamicDialogRef | undefined

  constructor(private agendaService: AgendaService,
              private dialogService : DialogService,
              private confirmationService : ConfirmationService) {

  }

  ngOnInit() {
    this.agendaService.getAgendas().subscribe({
      next: result => {
        this.agendas = result
      }
    })

  }

  adicionar(){
    this.ref = this.dialogService.open(EditarAgendaComponent, {
      header: 'Novo Agendamento',
      width: '20vw',
      height: '55vh'
    })
  }

  editar(agendamento: Agenda){
    this.ref = this.dialogService.open(EditarAgendaComponent, {
      data: agendamento,
      header: 'Editar Agendamento',
      width: '20vw',
      height: '55vh'
    })
  }

  excluir(agendamento: Agenda, event : Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir o registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass:"p-button-text",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        console.log('aceito')
      },
      reject: () => {
        console.log('aceito nao pai')
      }
    })
  }
}
