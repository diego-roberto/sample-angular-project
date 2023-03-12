import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Movimentacao } from 'src/app/shared/model/movimentacao.model';
import { MovimentacaoService } from 'src/app/shared/service/movimentacao.service';

@Component({
  selector: 'app-movimentacao-form',
  templateUrl: './movimentacao-form.component.html',
  styleUrls: ['./movimentacao-form.component.css']
})
export class MovimentacaoFormComponent implements OnInit {

  movimentacao: Movimentacao = new Movimentacao;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private movimentacaoService: MovimentacaoService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.movimentacaoService.getMovimentacaoById(id).subscribe((movimentacao: Movimentacao) => {
          this.movimentacao = movimentacao;
        });
      } else {
        this.movimentacao = new Movimentacao();
      }
    });
  }

  save() {
    const request = this.movimentacao.id
      ? this.movimentacaoService.updateMovimentacao(this.movimentacao)
      : this.movimentacaoService.createMovimentacao(this.movimentacao);

    request.subscribe(() => {
      this.router.navigate(['/movimentacao']);
    });
  }

  delete() {
    this.movimentacaoService.deleteMovimentacao(this.movimentacao.id).subscribe(() => {
      this.router.navigate(['/movimentacao']);
    });
  }

}
