import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import {VacinaService} from '../../../service/vacina.service';
import {MessageService} from 'primeng/api';
import {DynamicDialogConfig, DynamicDialogRef} from 'primeng/dynamicdialog';
import {Button} from 'primeng/button';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {Periodicidade} from '../../../interface/vacina';
import {InputTextModule} from 'primeng/inputtext';
import {InputNumberModule} from 'primeng/inputnumber';

@Component({
  selector: 'app-editar-vacina',
  standalone: true,
  imports: [
    Button,
    CalendarModule,
    DropdownModule,
    InputTextareaModule,
    ReactiveFormsModule,
    InputTextModule,
    InputNumberModule
  ],
  templateUrl: './editar-vacina.component.html',
  styleUrl: './editar-vacina.component.css'
})
export class EditarVacinaComponent implements OnInit{
  form!: FormGroup

  periodiciade = [
    {label: "Dia", value: 1},
    {label: "Semana", value: 2},
    {label: "Mês", value: 3},
    {label: "Ano", value: 4},
  ]

  constructor(private vacinaService: VacinaService,
              private messageService: MessageService,
              public ref : DynamicDialogRef,
              public config : DynamicDialogConfig) {
  }

  ngOnInit() {
    this.form = new FormGroup({
      id: new FormControl<Number | null>(null ),
      titulo: new FormControl<String | null>(null),
      descricao: new FormControl<String | null>(null),
      doses: new FormControl<Number | null>(null),
      periodicidade: new FormControl<Number | null>(null),
      intervalo: new FormControl<Number | null>(null)
    })

    if(this.config.data) this.popularForm()
  }

  popularForm(){
    this.form.get('id')?.patchValue(this.config.data.id)
    this.form.get('titulo')?.patchValue(this.config.data.titulo)
    this.form.get('descricao')?.patchValue(this.config.data.descricao)
    this.form.get('doses')?.patchValue(this.config.data.doses)
    this.form.get('periodicidade')?.patchValue(this.config.data.periodicidade)
    this.form.get('intervalo')?.patchValue(this.config.data.intervalo)
  }

  validarForm(): boolean{
    if(!this.form.get('titulo')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Título é obrigatório'})
      return false
    }

    if(!this.form.get('descricao')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Descrição é obrigatório'})
      return false
    }

    if(!this.form.get('doses')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Doses é obrigatório'})
      return false
    }

    if(!this.form.get('periodicidade')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Periodicidade é obrigatório'})
      return false
    }

    if(!this.form.get('intervalo')?.value){
      this.messageService.add({severity: 'warn', summary: 'Campo Obrigatório', detail: 'Intervalo é obrigatório'})
      return false
    }

    return true
  }

  cadastrarVacina(){
    if(!this.validarForm()) return

    if(this.form.value.id){
      this.vacinaService.novaVacina(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao inserir vacina'})
        }
      })
    }
    else {
      this.vacinaService.salvarVacina(this.form.value).subscribe({
        next: () => {
          this.ref.close(true)
        },
        error: () => {
          this.messageService.add({severity: 'error', summary: 'Erro', detail: 'Erro ao alterar vacina'})
        }
      })
    }
  }

  protected readonly Periodicidade = Periodicidade;
}
