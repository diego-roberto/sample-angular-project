import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conta } from 'src/app/shared/model/conta.model';
import { ContaService } from 'src/app/shared/service/conta.service';

@Component({
  selector: 'app-conta-form',
  templateUrl: './conta-form.component.html',
  styleUrls: ['./conta-form.component.css']
})
export class ContaFormComponent implements OnInit {

  conta: Conta = new Conta;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private contaService: ContaService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.contaService.getContaById(id).subscribe((conta: Conta) => {
          this.conta = conta;
        });
      } else {
        this.conta = new Conta();
      }
    });
  }

  save() {
    const request = this.conta.id
      ? this.contaService.updateConta(this.conta)
      : this.contaService.createConta(this.conta);

    request.subscribe(() => {
      this.router.navigate(['/conta']);
    });
  }

  delete() {
    this.contaService.deleteConta(this.conta.id).subscribe(() => {
      this.router.navigate(['/conta']);
    });
  }

}
