class Negociacao{

    //Utilização de _ : convensão que esses atributos não devem ser alterados fora dessa classe
    constructor(private _data: Date, private _quantidade: number, private _valor:number){
       
    }

    get data(){
        return this._data;
    }

    get quantidade(){
        return this._quantidade;
    }

    get valor(){
        return this._valor;
    }


    get volume(){
        return this._quantidade * this._valor;
    }

}