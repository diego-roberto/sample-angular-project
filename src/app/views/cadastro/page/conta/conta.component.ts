import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilValidators } from 'src/app/shared/util/validators.util';

//inserir providers: [ContaService]
@Component({
  selector: 'app-conta',
  templateUrl:'./conta.component.html',
  styleUrls: ['./conta.component.css']
})

  export class ContaComponent implements OnInit {
        @Output() savedPessoaDetails: EventEmitter<Object> = new EventEmitter();

    pessoa: string| undefined; // remover undefined //criar model Pessoa
    conta: string| undefined; // remover undefined //criar model Conta
    ContaForm: FormGroup;
    model: any; //remover

    constructor(
        private fb: FormBuilder,
        private router: Router,
    ) {

        this.ContaForm = this.fb.group({
            pessoa: new FormControl("", []),
            conta: new FormControl(
                "",
                [Validators.required, UtilValidators.onlynumber],
            ),

        });
    }

    ngOnInit() {
        //aqui vai o service para buscar e popular a lista
    }

    saveConta() {
        this.validateFormDetails(this.ContaForm);
        
        this.savedPessoaDetails.emit({
            modelToSave: this.model,
            onSaved: (conta: any) => {
            this.ContaForm.updateValueAndValidity();
            }
        });
    }

    validateFormDetails(form: FormGroup): string {
        // if (form.invalid) {
        //   const controls = form.controls;
        //   let msg: string = "";
    
        //   if ((controls.conta.errors) !== null || (controls.conta.errors) !== undefined) {
        //     msg = controls.conta.errors.required
        //       ? "O Campo Conta não pode ser nulo!"
        //       : "Conta digitada é inválida!";
        //   } 
        //   return msg;
        // }
        return "";
    }
  }