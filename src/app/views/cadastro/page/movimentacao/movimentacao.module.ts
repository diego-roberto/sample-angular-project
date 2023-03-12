import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovimentacaoComponent } from './movimentacao.component';
import { MaterialModule } from 'src/app/material.module';
import { MovimentacaoRoutingModule } from './movimentacao.routing.module';

@NgModule({
  declarations: [
    MovimentacaoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    MovimentacaoRoutingModule,
  ]
})
export class MovimentacaoModule { }
