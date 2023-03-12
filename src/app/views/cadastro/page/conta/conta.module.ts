import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContaComponent } from './conta.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContaRoutingModule } from './conta.routing.module';

@NgModule({
  declarations: [
    ContaComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ContaRoutingModule,
  ]
})
export class ContaModule { }
