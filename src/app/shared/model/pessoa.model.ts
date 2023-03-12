export class Pessoa {
    id!: number;
    nome!: string;
    endereco!: string;

    public constructor() { }

    public initializeWithJSON(json: any): Pessoa {
        this.id = json.id;
        this.nome = json.name;
        this.endereco = json.endereco;
        return this;
    }

    toJSON() {
        return {
            id: this.id,
            name: this.nome,
            endereco: this.endereco
        }
    }
}