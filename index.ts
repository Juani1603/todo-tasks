import { Status } from './enum/enumStatus';
class Tarjeta {
    private _id: number;
    private _nombre: string;
    private _descripcion: string;
    private _fechaInicio: Date;
    private _fechaFin: Date;
    private _status: Status;

    constructor(id: number, nombre: string, descripcion: string, fechaInicio: Date, fechaFin: Date, status : Status){
        this._id = id;
        this._nombre = nombre;
        this._descripcion = descripcion;
        this._fechaInicio = fechaInicio;
        this._fechaFin = fechaFin;
        this._status = status;
    }
}

class Sistema{
    public _listaTarjetas : Array<Tarjeta>;
    constructor(){
        this._listaTarjetas = new Array<Tarjeta>;
    }
}

const sistema = new Sistema();
let parrafoError = document.getElementById("#campoNombre")


function crearTarjeta(id: number, nombre: string, descripcion: string, fechaInicio: Date,       fechaFin: Date, status : Status){

    if (nombre == null || descripcion == null){
        return;
    }

    let tarjeta = new Tarjeta(id, nombre, descripcion, fechaInicio, fechaFin, status);
    sistema._listaTarjetas.push(tarjeta);
}