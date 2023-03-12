import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Pessoa } from 'src/app/shared/model/pessoa.model';
import { PessoaService } from 'src/app/shared/service/pessoa.service';

@Component({
  selector: 'app-pessoa-form',
  templateUrl: './pessoa-form.component.html',
  styleUrls: ['./pessoa-form.component.css']
})
export class PessoaFormComponent implements OnInit {

  pessoa: Pessoa = new Pessoa;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private pessoaService: PessoaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.pessoaService.getPessoaById(id).subscribe((pessoa: Pessoa) => {
          this.pessoa = pessoa;
        });
      } else {
        this.pessoa = new Pessoa();
      }
    });
  }

  save() {
    const request = this.pessoa.id
      ? this.pessoaService.updatePessoa(this.pessoa)
      : this.pessoaService.createPessoa(this.pessoa);

    request.subscribe(() => {
      this.router.navigate(['/pessoa']);
    });
  }

  delete() {
    this.pessoaService.deletePessoa(this.pessoa.id).subscribe(() => {
      this.router.navigate(['/pessoa']);
    });
  }

}
