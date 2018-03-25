import { View } from "./View";
import { Negociacoes } from "../models/Negociacoes";

export class NegociacoesView extends View<Negociacoes> {

    template(model: Negociacoes):string {
        console.log(model.isEmpty);
        if (model.isEmpty) {
            return `<h2 class=\"text-center\">Nenhuma negociação foi cadastrada!</h2>`;
        } else {
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
                    ${model.array().map(valor => 
                        `<tr>
                            <td>${valor.data.getDate()}/${valor.data.getMonth()+1}/${valor.data.getFullYear()}</td>
                            <td>${valor.quantidade}</td>
                            <td>${valor.valor}</td>
                            <td>${valor.volume}</td>
                        </tr>
                        `
                    ).join('')}
                </tbody>
                
                <tfoot>
                </tfoot>
            </table>
            `;
        }
    }

}