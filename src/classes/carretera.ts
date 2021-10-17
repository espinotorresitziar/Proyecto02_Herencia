import { Bicicleta } from "./bicicleta";
export class Carretera extends Bicicleta {
    private _carbono: string

    constructor(id:number, cuadro:string, manillar:string, cubierta:string, platos:number, piñones:number, precio:number, carbono:string) {
        super(id, cuadro, manillar, cubierta, platos, piñones, precio)
        this._carbono = carbono
    }

    get carbono() {
        return this._carbono
    }
    get cambio() {
        return this._precio
    } 

    /*precio(): number {
        let precio: number
        precio = super.precio()
        if (this._carbono == "si") {
            precio += 0.25 * precio
        }
        return precio
    }*/

    todo() {
        let resultado: string
        resultado = `${super.todo()}, Carbono: ${this._carbono}`
        return resultado
    }
}