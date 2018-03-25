import { NegociacoesView, MensagemView } from "../views/index";
import { Negociacoes, Negociacao, Mensagem, NegociacaoParcial } from "../models/index";
import { DiasDaSemana , InspectAndLogTime, DOMInject, Throttle } from "../helpers/index";

export class NegociacaoController {

    @DOMInject("#data")
    private inputData: JQuery;

    @DOMInject("#quantidade")
    private inputQuantidade: JQuery;
    
    @DOMInject("#valor")
    private inputValor: JQuery;
    private negociacoes = new Negociacoes();
    private view = new NegociacoesView("#negociacoesView");
    private msg = new MensagemView("#mensagemView");

    constructor() {
        this.view.update(this.negociacoes);
    }

    @InspectAndLogTime()
    adiciona(event: Event):void {
        event.preventDefault();

        let data = new Date(this.inputData.val().replace(/-/g, ','));

        if (data.getDay() == DiasDaSemana.Sabado || data.getDay() == DiasDaSemana.Domingo) {
            this.msg.update(new Mensagem("A negociação deve ser feita em um dia util."));
            return;
        }

        this.negociacoes.adiciona(new Negociacao(
            data, 
            parseInt(this.inputQuantidade.val()),
            parseFloat(this.inputValor.val())
        ));

        console.log(this.negociacoes);        

        this.view.update(this.negociacoes);

        this.msg.update(new Mensagem("Negociação foi adicionada!"));
    }

    @Throttle(200)
    importa():void {
        function tudoOk(res:Response):Response {
            if (res.ok) {
                return res;
            } 
            throw new Error(res.statusText);
        }

        fetch("http://localhost:8080/dados")
            .then(tudoOk)
            .then(response => response.json())
            .then((dados:NegociacaoParcial[]) => {
                dados
                    .map(dado => new Negociacao(new Date(), dado.vezes, dado.montante))
                    .forEach(negociacao => this.negociacoes.adiciona(negociacao));
                this.view.update(this.negociacoes);
            })
            .catch(console.log);
    }
}