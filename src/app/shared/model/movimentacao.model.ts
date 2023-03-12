import { Conta } from "./conta.model";
import { Pessoa } from "./pessoa.model";

export class Movimentacao {
    id!: number;
    conta!: Conta;
    pessoa!: Pessoa;

    public constructor() { }

    public initializeWithJSON(json: any): Movimentacao {
        this.id = json.id;
        this.conta = json.conta;
        this.pessoa = json.pessoa;
        return this;
    }

    toJSON() {
        return {
            id: this.id,
            conta: this.conta,
            pessoa: this.pessoa
        }
    }
}