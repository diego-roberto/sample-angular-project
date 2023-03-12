import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MovimentacaoComponent } from './movimentacao.component';
import { MovimentacaoListComponent } from '../../list/movimentacao/movimentacao-list.component';
import { MovimentacaoFormComponent } from '../../form/movimentacao/movimentacao-form.component';

const routes: Routes = [
  {
    path: '',
    component: MovimentacaoComponent,
    children: [
      { path: '', component: MovimentacaoListComponent },
      { path: 'form', component: MovimentacaoFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovimentacaoRoutingModule { }
