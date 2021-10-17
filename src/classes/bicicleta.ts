export class Bicicleta {
    private _id: number
    private _cuadro: string
    private _manillar: string
    private _cubierta: string
    private _platos: number
    private _piñones: number
    protected _precio: number

    constructor (id:number, cuadro:string, manillar:string, cubierta:string, platos:number, piñones:number, precio:number) {
        this._id = id
        this._cuadro = cuadro
        this._manillar = manillar
        this._cubierta = cubierta
        this._platos = platos
        this._piñones = piñones
        this._precio = precio
    }

    get id() {
        return this._id
    }
    get cuadro() {
        return this._cuadro
    }
    get manillar() {
        return this._manillar
    }
    get cubierta() {
        return this._cubierta
    }
    get platos() {
        return this._platos
    }
    get piñones() {
        return this._piñones
    }
    get precio() {
        return this._precio
    }

    /*precio(): number {
        let precio: number
        precio = this._precioBase
        if (this._piñones >= 5) {
            precio += 0.1 * precio
        }
        return precio
    }*/

    todo() {
        return `ID: ${this._id}, Cuadro: ${this._cuadro}, Manillar: ${this._manillar}, Platos: ${this._platos}, Piñones: ${this._piñones}, Precio: ${this._precio}`
    }
}