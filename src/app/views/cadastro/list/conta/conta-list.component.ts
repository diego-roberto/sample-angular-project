import { Component, OnInit } from '@angular/core';
import { Conta } from 'src/app/shared/model/conta.model';
import { ContaService } from 'src/app/shared/service/conta.service';

@Component({
  selector: 'app-conta-list',
  templateUrl: './conta-list.component.html',
  styleUrls: ['./conta-list.component.css']
})
export class ContaListComponent implements OnInit {

  contas: Conta[] | undefined;

  constructor(private contaService: ContaService) { }

  ngOnInit() {
    this.getContas();
  }

  getContas() {
    this.contaService.getContaList().subscribe((contas: Conta[]) => {
      this.contas = contas;
    });
  }

}
