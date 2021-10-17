import { Bicicleta } from "./bicicleta";
export class Montaña extends Bicicleta {
    private _suspension: string

    constructor(id:number, cuadro:string, manillar:string, cubierta:string, platos:number, piñones:number, precio:number, suspension:string) {
        super(id, cuadro, manillar, cubierta, platos, piñones, precio)
        this._suspension = suspension
    }

    get so() {
        return this._suspension
    }
    get PrecNuevo() {
        return this._precio
    }

    /*precio(): number {
        let precio: number
        precio = super.precio()
        if (this._suspension == "simple") {
            precio += 0.1 * precio
        } else {
            if (this._suspension == "doble") {
                precio += 0.2 * precio
            }
        }
        return precio
    }*/

    todo() {
        let resul: string
        resul = `${super.todo()}, Suspensión: ${this._suspension}`
        return resul
    }
}