System.register(["../views/index", "../models/index", "../helpers/index"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3, NegociacaoController;
    return {
        setters: [
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (index_2_1) {
                index_2 = index_2_1;
            },
            function (index_3_1) {
                index_3 = index_3_1;
            }
        ],
        execute: function () {
            NegociacaoController = class NegociacaoController {
                constructor() {
                    this.negociacoes = new index_2.Negociacoes();
                    this.view = new index_1.NegociacoesView("#negociacoesView");
                    this.msg = new index_1.MensagemView("#mensagemView");
                    this.view.update(this.negociacoes);
                }
                adiciona(event) {
                    event.preventDefault();
                    let data = new Date(this.inputData.val().replace(/-/g, ','));
                    if (data.getDay() == index_3.DiasDaSemana.Sabado || data.getDay() == index_3.DiasDaSemana.Domingo) {
                        this.msg.update(new index_2.Mensagem("A negociação deve ser feita em um dia util."));
                        return;
                    }
                    this.negociacoes.adiciona(new index_2.Negociacao(data, parseInt(this.inputQuantidade.val()), parseFloat(this.inputValor.val())));
                    console.log(this.negociacoes);
                    this.view.update(this.negociacoes);
                    this.msg.update(new index_2.Mensagem("Negociação foi adicionada!"));
                }
                importa() {
                    function tudoOk(res) {
                        if (res.ok) {
                            return res;
                        }
                        throw new Error(res.statusText);
                    }
                    fetch("http://localhost:8080/dados")
                        .then(tudoOk)
                        .then(response => response.json())
                        .then((dados) => {
                        dados
                            .map(dado => new index_2.Negociacao(new Date(), dado.vezes, dado.montante))
                            .forEach(negociacao => this.negociacoes.adiciona(negociacao));
                        this.view.update(this.negociacoes);
                    })
                        .catch(console.log);
                }
            };
            __decorate([
                index_3.DOMInject("#data")
            ], NegociacaoController.prototype, "inputData", void 0);
            __decorate([
                index_3.DOMInject("#quantidade")
            ], NegociacaoController.prototype, "inputQuantidade", void 0);
            __decorate([
                index_3.DOMInject("#valor")
            ], NegociacaoController.prototype, "inputValor", void 0);
            __decorate([
                index_3.InspectAndLogTime()
            ], NegociacaoController.prototype, "adiciona", null);
            __decorate([
                index_3.Throttle(200)
            ], NegociacaoController.prototype, "importa", null);
            exports_1("NegociacaoController", NegociacaoController);
        }
    };
});
