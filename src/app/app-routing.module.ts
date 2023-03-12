import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContaComponent } from './views/cadastro/page/conta/conta.component';
import { MovimentacaoComponent } from './views/cadastro/page/movimentacao/movimentacao.component';
import { PessoaComponent } from './views/cadastro/page/pessoa/pessoa.component';
import { PageModule } from './views/cadastro/page/page.module';

const routes: Routes = [
  { path: '', redirectTo: '/pessoa', pathMatch: 'full' },
  { path: 'pessoa', component: PessoaComponent },
  { path: 'conta', component: ContaComponent },
  { path: 'movimentacao', component: MovimentacaoComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes), PageModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
