import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PessoaComponent } from './pessoa.component';
import { MaterialModule } from 'src/app/material.module';
import { PessoaRoutingModule } from './pessoa.routing.module';

@NgModule({
  declarations: [
    PessoaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    PessoaRoutingModule,
  ]
})
export class PessoaModule { }
