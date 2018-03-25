import { View } from "./View";
import { Mensagem } from "../models/Mensagem";

export class MensagemView extends View<Mensagem> {
    
    template(model: Mensagem): string {
        return `
        <div class="alert alert-info alert-dismissible" role="alert">
            <button type="button" class="close" data-dismiss="alert" aria-label="Fechar">
                <span aria-hidden="true">&times;</span>
            </button>
            <strong>Sucesso!</strong> ${model.texto}
        </div>        
        `;
    }
}