System.register(["./View"], function (exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var View_1, NegociacoesView;
    return {
        setters: [
            function (View_1_1) {
                View_1 = View_1_1;
            }
        ],
        execute: function () {
            NegociacoesView = class NegociacoesView extends View_1.View {
                template(model) {
                    console.log(model.isEmpty);
                    if (model.isEmpty) {
                        return `<h2 class=\"text-center\">Nenhuma negociação foi cadastrada!</h2>`;
                    }
                    else {
                        return `
            <table class="table table-hover table-bordered">
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                        <th>VOLUME</th>
                    </tr>
                </thead>
                
                <tbody>
                    ${model.array().map(valor => `<tr>
                            <td>${valor.data.getDate()}/${valor.data.getMonth() + 1}/${valor.data.getFullYear()}</td>
                            <td>${valor.quantidade}</td>
                            <td>${valor.valor}</td>
                            <td>${valor.volume}</td>
                        </tr>
                        `).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
            `;
                    }
                }
            };
            exports_1("NegociacoesView", NegociacoesView);
        }
    };
});
