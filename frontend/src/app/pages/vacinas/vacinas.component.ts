import {Component, OnInit} from '@angular/core';
import {Button} from 'primeng/button';
import {DatePipe} from '@angular/common';
import {ConfirmationService, MessageService, PrimeTemplate} from 'primeng/api';
import {TableModule} from 'primeng/table';
import {VacinaService} from '../../service/vacina.service';
import {Periodicidade, Vacina} from '../../interface/vacina';
import {TooltipModule} from 'primeng/tooltip';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EditarVacinaComponent} from './editar-vacina/editar-vacina.component';

@Component({
  selector: 'app-vacinas',
  standalone: true,
  imports: [
    Button,
    DatePipe,
    PrimeTemplate,
    TableModule,
    TooltipModule
  ],
  templateUrl: './vacinas.component.html',
  styleUrl: './vacinas.component.css'
})
export class VacinasComponent implements OnInit{
  vacinas!: Vacina[];

  ref: DynamicDialogRef | undefined

  constructor(private vacinaService: VacinaService,
              private dialogService : DialogService,
              private messageService: MessageService,
              private confirmationService : ConfirmationService) {
  }

  ngOnInit() {
    this.listarVacinas()
  }

  adicionar(){
    this.ref = this.dialogService.open(EditarVacinaComponent, {
      header: 'Nova Vacina',
      width: '20vw',
      height: '60vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Nova vacina cadastrada com sucesso!'})
        this.listarVacinas()
      }
    })
  }

  editar(vacina: Vacina){
    this.ref = this.dialogService.open(EditarVacinaComponent, {
      data: vacina,
      header: 'Editar Vacina',
      width: '20vw',
      height: '60vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Vacina alterada com sucesso!'})
        this.listarVacinas()
      }
    })
  }

  excluir(vacina: Vacina, event : Event) {
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir o registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass: "p-button-text",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.vacinaService.excluirVacina(vacina).subscribe({
          next: () => {
            this.messageService.add({
              severity: 'success',
              summary: 'Sucesso',
              detail: 'Vacina excluída com sucesso!'
            })
            this.listarVacinas()
          },
          error: () => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao excluir vacina'})
          }
        })
      },
      reject: () => {
      }
    })
  }

  listarVacinas(){
    this.vacinaService.getVacinas().subscribe({
      next: result => {
        console.log('recs', result)
        this.vacinas = result
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao listar vacinas'})
      }
    })
  }

  protected readonly Periodicidade = Periodicidade;
}
