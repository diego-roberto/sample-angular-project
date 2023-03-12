import { Pessoa } from "./pessoa.model";

export class Conta {
    id!: number;
    numero!: number;
    pessoa!: Pessoa;

    public constructor() { }

    public initializeWithJSON(json: any): Conta {
        this.id = json.id;
        this.numero = json.numero;
        this.pessoa = json.pessoa;
        return this;
    }

    toJSON() {
        return {
            id: this.id,
            numero: this.numero,
            pessoa: this.pessoa
        }
    }
}