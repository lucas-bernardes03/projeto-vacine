import {Component, OnInit} from '@angular/core';
import {Button} from "primeng/button";
import {ConfirmationService, MessageService, PrimeTemplate} from "primeng/api";
import {TableModule} from "primeng/table";
import {TooltipModule} from "primeng/tooltip";
import {AlergiaService} from '../../service/alergia.service';
import {Alergia} from '../../interface/alergia';
import {DialogService, DynamicDialogRef} from 'primeng/dynamicdialog';
import {EditarAlergiaComponent} from './editar-alergia/editar-alergia.component';

@Component({
  selector: 'app-alergias',
  standalone: true,
    imports: [
        Button,
        PrimeTemplate,
        TableModule,
        TooltipModule
    ],
  templateUrl: './alergias.component.html',
  styleUrl: './alergias.component.css'
})
export class AlergiasComponent implements OnInit{
  alergias!: Alergia[]

  ref: DynamicDialogRef | undefined

  constructor(private alergiaService: AlergiaService,
              private confirmationService: ConfirmationService,
              private messageService: MessageService,
              private dialogService : DialogService) {
  }

  ngOnInit() {
    this.listarAlergias()
  }

  adicionar(){
    this.ref = this.dialogService.open(EditarAlergiaComponent, {
      header: 'Nova Alergia',
      width: '20vw',
      height: '30vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Nova alergia cadastrada com sucesso!'})
        this.listarAlergias()
      }
    })
  }

  editar(alergia: Alergia){
    this.ref = this.dialogService.open(EditarAlergiaComponent, {
      data: alergia,
      header: 'Editar Alergia',
      width: '20vw',
      height: '30vh'
    })

    this.ref.onClose.subscribe(result => {
      if(result){
        this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Alergia alterada com sucesso!'})
        this.listarAlergias()
      }
    })
  }

  excluir(alergia: Alergia, event : Event){
    this.confirmationService.confirm({
      target: event.target as EventTarget,
      message: 'Tem certeza que deseja excluir o registro?',
      header: 'Confirmação',
      icon: 'pi pi-exclamation-triangle',
      rejectButtonStyleClass:"p-button-text",
      acceptLabel: 'Sim',
      rejectLabel: 'Não',
      accept: () => {
        this.alergiaService.excluirAlergia(alergia).subscribe({
          next: () => {
            this.messageService.add({severity: 'success', summary: 'Sucesso', detail: 'Alergia excluído com sucesso!'})
            this.listarAlergias()
          },
          error: () => {
            this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao excluir alergia'})
          }
        })
      },
      reject: () => {
      }
    })
  }

  listarAlergias(){
    this.alergiaService.getAlergias().subscribe({
      next: result => {
        this.alergias = result
      },
      error: () => {
        this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao listar alergias'})
      }
    })
  }
}
