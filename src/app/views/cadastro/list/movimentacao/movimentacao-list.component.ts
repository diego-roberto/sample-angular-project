import { Component, OnInit } from '@angular/core';
import { Movimentacao } from 'src/app/shared/model/movimentacao.model';
import { MovimentacaoService } from 'src/app/shared/service/movimentacao.service';

@Component({
  selector: 'app-movimentacao-list',
  templateUrl: './movimentacao-list.component.html',
  styleUrls: ['./movimentacao-list.component.css']
})
export class MovimentacaoListComponent implements OnInit {

  movimentacaos: Movimentacao[] | undefined;

  constructor(private movimentacaoService: MovimentacaoService) { }

  ngOnInit() {
    this.getMovimentacoes();
  }

  getMovimentacoes() {
    this.movimentacaoService.getMovimentacaoList().subscribe((movimentacaos: Movimentacao[]) => {
      this.movimentacaos = movimentacaos;
    });
  }

}
