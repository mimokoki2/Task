import { Prof } from './../models/Professor.1';
import { Component, OnInit, TemplateRef } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-professores',
  templateUrl: './professores.component.html',
  styleUrls: ['./professores.component.css']
})
export class ProfessoresComponent implements OnInit {
  public modalRef: BsModalRef;
  public professorForm: FormGroup;
  titulo = "Professores";
  public profSelecionado: Prof;
  public textSimple: String;
  public professores = [
    {id: 1, nome : "Roberto",  disciplina: "Matemática"},
    {id: 2, nome : "Roberto2", disciplina: "Física"},
    {id: 3, nome : "Roberto3", disciplina: "Química"},
    {id: 4, nome : "Roberto4", disciplina: "Geografia"},
    {id: 5, nome : "Roberto5", disciplina: "Português"},
  ];

  
 
  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  constructor(private fb: FormBuilder, private modalService: BsModalService) { 
    this.criarForm();
  }
  
  ngOnInit(): void {
  }

 criarForm()
  {
    this.professorForm = this.fb.group({
      nome: ['', Validators.required],
      disciplina: ['', Validators.required], 
      
    });
  }
  professorSubmit() 
  {
    console.log(this.professorForm.value);
  }

  profSelect(prof: Prof)
  {
    this.profSelecionado = prof;
    this.professorForm.patchValue(prof)
  }
  voltar()
  {
    this.profSelecionado = null;
  }


}
