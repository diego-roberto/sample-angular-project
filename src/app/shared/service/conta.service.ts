import { Injectable } from "@angular/core";
import { Conta } from "src/app/shared/model/conta.model";
import { HttpClientService } from "./http-client.service";
import { map } from 'rxjs/operators';

@Injectable()
export class ContaService {

    public conta: Conta = new Conta;
    private endpointConta = '/conta';
  
    constructor(private service: HttpClientService) { }
  
    getContaList() {
        return this.service.get(this.endpointConta).pipe(
          map((jsonResponse: { conta: any[]; }) => {
            return jsonResponse.conta.map((jsonConta: any) => {
              return new Conta().initializeWithJSON(jsonConta);
            });
          })
        );
    }

    getContaById(id: number) {
        return this.service.get(this.endpointConta + '/id/' + id)
          .pipe(map((response: Response) => {
            const jsonResponse = response.json();
            return new Conta().initializeWithJSON(jsonResponse);
          }));
      }
      
      createConta(conta: Conta) {
        return this.service.post(this.endpointConta, conta.toJSON()).pipe(
          map((jsonResponse: any) => {
            return new Conta().initializeWithJSON(jsonResponse);
          })
        );
      }
    
      updateConta(conta: Conta) {
        return this.service.put(this.endpointConta + `/${conta.id}`, conta.toJSON()).pipe(
          map((jsonResponse: any) => {
            return new Conta().initializeWithJSON(jsonResponse);
          })
        );
      }
    
      deleteConta(id: number) {
        return this.service.delete(this.endpointConta + `/${id}`);
      }

}