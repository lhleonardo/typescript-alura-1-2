System.register([], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var Mensagem;
    return {
        setters: [],
        execute: function () {
            Mensagem = class Mensagem {
                constructor(texto) {
                    this.texto = texto;
                }
            };
            exports_1("Mensagem", Mensagem);
        }
    };
});
