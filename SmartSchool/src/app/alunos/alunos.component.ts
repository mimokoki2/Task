import { Component, OnInit, TemplateRef } from '@angular/core';
import {Al} from '../models/Aluno'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit {
  public modalRef: BsModalRef;
  public alunoForm: FormGroup;
  titulo = 'Alunos';
  public alunoSelecionado: Al;
  public textSimple: string;
  public alunos = [
    { id: 1, nome: "Teste1", sobrenome: 'a', telefone: 111111},
    { id: 2, nome: "Teste2", sobrenome: 'b', telefone: 222222},
    { id: 3, nome: "Teste3", sobrenome: 'c', telefone: 333333},
    { id: 4, nome: "Teste4", sobrenome: 'd', telefone: 444444},
    { id: 5, nome: "Teste5", sobrenome: 'e', telefone: 555555},
    { id: 6, nome: "Teste6", sobrenome: 'f', telefone: 666666},
    { id: 7, nome: "Teste7", sobrenome: 'd', telefone: 777777},
  ];


  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  constructor(private fb: FormBuilder,
              private modalService: BsModalService) {

    this.criarForm();
   }


  ngOnInit(): void {
  }

  criarForm()
  {
    this.alunoForm = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required], 
      telefone: ['', Validators.required]
    });
  }
  alunoSubmit() 
  {
    console.log(this.alunoForm.value);
  }

  alunoSelect(aluno: Al)
  {
   this.alunoSelecionado = aluno;
   this.alunoForm.patchValue(aluno);
  }
  voltar()
  {
    this.alunoSelecionado = null;
  }


}
