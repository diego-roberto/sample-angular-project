import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaComponent } from './pessoa/pessoa.component';
import { PessoaListComponent } from '../list/pessoa/pessoa-list.component';
import { PessoaFormComponent } from '../form/pessoa/pessoa-form.component';
import { ContaFormComponent } from '../form/conta/conta-form.component ';
import { ContaListComponent } from '../list/conta/conta-list.component';
import { MovimentacaoListComponent } from '../list/movimentacao/movimentacao-list.component';
import { MovimentacaoFormComponent } from '../form/movimentacao/movimentacao-form.component';

const routes: Routes = [
    { path: '', component: PessoaComponent },
    { path: 'pessoa', component: PessoaListComponent },
    { path: 'pessoa/:id', component: PessoaFormComponent },
    { path: 'conta', component: ContaListComponent },
    { path: 'conta/:id', component: ContaFormComponent },
    { path: 'movimentacao', component: MovimentacaoListComponent },
    { path: 'movimentacao/:id', component: MovimentacaoFormComponent },
    { path: '', redirectTo: '/pessoa', pathMatch: 'full' }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class PageRoutingModule { }
  