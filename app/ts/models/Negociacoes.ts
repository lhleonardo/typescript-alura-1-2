import { Negociacao } from "./Negociacao";

export class Negociacoes { 
    private _dados: Negociacao[] = [];

    adiciona(negociacao: Negociacao) {
        this._dados.push(negociacao);
    }

    array() : Negociacao[] {
        return ([] as Negociacao[]).concat(this._dados);
    }

    get isEmpty(): boolean {
        return this._dados.length == 0 ? true: false;
    }
}