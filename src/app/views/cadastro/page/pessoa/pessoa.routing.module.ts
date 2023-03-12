import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { PessoaComponent } from './pessoa.component';
import { PessoaListComponent } from '../../list/pessoa/pessoa-list.component';
import { PessoaFormComponent } from '../../form/pessoa/pessoa-form.component';

const routes: Routes = [
  {
    path: '',
    component: PessoaComponent,
    children: [
      { path: '', component: PessoaListComponent },
      { path: 'form', component: PessoaFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PessoaRoutingModule { }
