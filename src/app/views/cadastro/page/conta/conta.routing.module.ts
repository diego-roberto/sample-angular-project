import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './conta.component';
import { ContaFormComponent } from '../../form/conta/conta-form.component ';
import { ContaListComponent } from '../../list/conta/conta-list.component';

const routes: Routes = [
  {
    path: '',
    component: ContaComponent,
    children: [
      { path: '', component: ContaListComponent },
      { path: 'form', component: ContaFormComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContaRoutingModule { }
