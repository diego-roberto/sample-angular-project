import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { ContaModule } from './conta/conta.module';
import { MovimentacaoModule } from './movimentacao/movimentacao.module';
import { MaterialModule } from 'src/app/material.module';
import { PageRoutingModule } from './page-routing.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    PageRoutingModule,
    PessoaModule,
    ContaModule,
    MovimentacaoModule
  ]
})
export class PageModule { }
