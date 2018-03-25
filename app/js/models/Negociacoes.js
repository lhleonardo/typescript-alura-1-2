System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Negociacoes;
    return {
        setters: [],
        execute: function () {
            Negociacoes = class Negociacoes {
                constructor() {
                    this._dados = [];
                }
                adiciona(negociacao) {
                    this._dados.push(negociacao);
                }
                array() {
                    return [].concat(this._dados);
                }
                get isEmpty() {
                    return this._dados.length == 0 ? true : false;
                }
            };
            exports_1("Negociacoes", Negociacoes);
        }
    };
});
