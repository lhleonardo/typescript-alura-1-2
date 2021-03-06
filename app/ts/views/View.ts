export abstract class View <T> {

    private _elemento: JQuery;
    private _escapar:boolean;

    constructor(seletor: string, escapar:boolean = true) {
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    update(valores: T) {
        let template = this.template(valores);
        if (this._escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this._elemento.html(template);
    }

    abstract template(model: T):string;

}