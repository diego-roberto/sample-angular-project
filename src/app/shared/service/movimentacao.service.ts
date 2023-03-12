import { Injectable } from "@angular/core";
import { HttpClientService } from "./http-client.service";
import { map } from 'rxjs/operators';
import { Movimentacao } from "../model/movimentacao.model";

@Injectable()
export class MovimentacaoService {

    public movimentacao: Movimentacao = new Movimentacao;
    private endpointMovimentacao = '/movimentacao';
  
    constructor(private service: HttpClientService) { }
  
    getMovimentacaoList() {
        return this.service.get(this.endpointMovimentacao).pipe(
          map((jsonResponse: { movimentacao: any[]; }) => {
            return jsonResponse.movimentacao.map((jsonMovimentacao: any) => {
              return new Movimentacao().initializeWithJSON(jsonMovimentacao);
            });
          })
        );
    }

    getMovimentacaoById(id: number) {
        return this.service.get(this.endpointMovimentacao + '/id/' + id)
          .pipe(map((response: Response) => {
            const jsonResponse = response.json();
            return new Movimentacao().initializeWithJSON(jsonResponse);
          }));
      }
      
      createMovimentacao(movimentacao: Movimentacao) {
        return this.service.post(this.endpointMovimentacao, movimentacao.toJSON()).pipe(
          map((jsonResponse: any) => {
            return new Movimentacao().initializeWithJSON(jsonResponse);
          })
        );
      }
    
      updateMovimentacao(movimentacao: Movimentacao) {
        return this.service.put(this.endpointMovimentacao + `/${movimentacao.id}`, movimentacao.toJSON()).pipe(
          map((jsonResponse: any) => {
            return new Movimentacao().initializeWithJSON(jsonResponse);
          })
        );
      }
    
      deleteMovimentacao(id: number) {
        return this.service.delete(this.endpointMovimentacao + `/${id}`);
      }

}