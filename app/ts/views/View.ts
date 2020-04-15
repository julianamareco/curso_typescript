import{ logarTempoDeExecucao } from '../helpers/decorators/index';

//<T> tipo genérico
export abstract class View<T>{
    private _elemento: JQuery;
    private _escapar: boolean;

    // ? parametro opcional, eles tem que ser os últimos não deve ficar na frente dos obrigatórios
    constructor(seletor: string, escapar: boolean = false){
        this._elemento = $(seletor);
        this._escapar = escapar;
    }

    @logarTempoDeExecucao()
    update(model: T): void{

        let template = this.template(model);
        if(this._escapar)
            template = template.replace(/<script>[\s\S]*?<\/script>/g,'');
        this._elemento.html(template);

    }

    abstract template(model: T): string;
}