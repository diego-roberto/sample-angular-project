import { Injectable } from "@angular/core";
import { Pessoa } from "src/app/shared/model/pessoa.model";
import { HttpClientService } from "./http-client.service";
import { map } from 'rxjs/operators';

@Injectable()
export class PessoaService {

    public pessoa: Pessoa = new Pessoa;
    private endpointPessoa = '/pessoa';
  
    constructor(private service: HttpClientService) { }
  
    getPessoaList() {
        return this.service.get(this.endpointPessoa).pipe(
          map((jsonResponse: { pessoa: any[]; }) => {
            return jsonResponse.pessoa.map((jsonPessoa: any) => {
              return new Pessoa().initializeWithJSON(jsonPessoa);
            });
          })
        );
    }

    getPessoaById(id: number) {
        return this.service.get(this.endpointPessoa + '/id/' + id)
          .pipe(map((response: Response) => {
            const jsonResponse = response.json();
            return new Pessoa().initializeWithJSON(jsonResponse);
          }));
      }
      
      createPessoa(pessoa: Pessoa) {
        return this.service.post(this.endpointPessoa, pessoa.toJSON()).pipe(
          map((jsonResponse: any) => {
            return new Pessoa().initializeWithJSON(jsonResponse);
          })
        );
      }
    
      updatePessoa(pessoa: Pessoa) {
        return this.service.put(this.endpointPessoa + `/${pessoa.id}`, pessoa.toJSON()).pipe(
          map((jsonResponse: any) => {
            return new Pessoa().initializeWithJSON(jsonResponse);
          })
        );
      }
    
      deletePessoa(id: number) {
        return this.service.delete(this.endpointPessoa + `/${id}`);
      }

}