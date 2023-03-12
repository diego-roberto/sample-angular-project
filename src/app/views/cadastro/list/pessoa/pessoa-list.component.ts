import { Component, OnInit } from '@angular/core';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from 'src/app/shared/service/pessoa.service';

@Component({
  selector: 'app-pessoa-list',
  templateUrl: './pessoa-list.component.html',
  styleUrls: ['./pessoa-list.component.css']
})
export class PessoaListComponent implements OnInit {

  pessoas: Pessoa[] | undefined;

  constructor(private pessoaService: PessoaService) { }

  ngOnInit() {
    this.getPessoas();
  }

  getPessoas() {
    this.pessoaService.getPessoaList().subscribe((pessoas: Pessoa[]) => {
      this.pessoas = pessoas;
    });
  }

}
