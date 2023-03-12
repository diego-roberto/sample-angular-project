import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PessoaService } from 'src/app/shared/service/pessoa.service';
import { MaskUtil } from 'src/app/shared/util/mask.util';
import { UtilValidators } from "src/app/shared/util/validators.util";

@Component({
  selector: 'app-pessoa',
  templateUrl:'./pessoa.component.html',
  styleUrls: ['./pessoa.component.css'],
  providers: [PessoaService]
})

  export class PessoaComponent implements OnInit {
    @Output() savedPessoaDetails: EventEmitter<Object> = new EventEmitter();

    nome: string | undefined; // remover undefined
    cpf: string | undefined; // remover undefined;
    endereco: string | undefined; // remover undefined;
    PessoaForm: FormGroup;

    cpfMask = MaskUtil.cpfMask;
    model: any; //remover

    constructor(
        private fb: FormBuilder,
        private router: Router,
    ) {

        this.PessoaForm = this.fb.group({
            name: new FormControl("", [
              Validators.required,
              UtilValidators.onlytext,
              Validators.minLength(3),
              Validators.maxLength(50)
            ]),
            cpf: new FormControl(
                "",
                [Validators.required, UtilValidators.cpf],
            ),
            endereco: null

        });
    }

    ngOnInit() {
        //aqui vai o service para buscar e popular a lista
    }

    savePessoa() {
        this.validateFormDetails(this.PessoaForm);
        
        this.savedPessoaDetails.emit({
            modelToSave: this.model,
            onSaved: (pessoa: any) => {
            this.PessoaForm.updateValueAndValidity();
            }
        });
    }

    validateFormDetails(form: FormGroup): string {
        // if (form.invalid) {
        //   const controls = form.controls;
        //   let msg: string = "";
    
        //   if ((controls.cpf.errors) !== null || (controls.cpf.errors) !== undefined) {
        //     msg = controls.cpf.errors.required
        //       ? "O Campo CPF não pode ser nulo!"
        //       : "O CPF digitado é inválido!";
        //   } else if ((controls.name.errors) !== null || (controls.cpf.errors) !== undefined) {
        //         msg = controls.name.errors.required
        //           ? "O Campo Nome não pode ser nulo!"
        //           : controls.name.errors.minlength
        //             ? "Nome deve ter no minimo 3 carácteres"
        //             : "Nome é inválido!";
        //   }
        //   return msg;
        // }
        return "";
    }

  }