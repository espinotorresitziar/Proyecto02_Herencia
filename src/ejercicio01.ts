import { Bicicleta } from "./classes/bicicleta"
import { Montaña } from "./classes/montaña"
import { Carretera } from "./classes/carretera"
import { leerTeclado } from './util/entradaTeclado'
import { menu, menu2 } from './util/menu'

let bicicleta: Bicicleta
let montaña: Montaña
let carretera: Carretera
let bicicletas: Array<Bicicleta> = new Array<Bicicleta>()

bicicletas[0] = new Bicicleta(1, "ligero", "recto", "ancha", 3, 6, 200)
bicicletas[1] = new Montaña(2, "pesado", "recto", "ancha", 3, 8, 275, "doble")
bicicletas[2] = new Carretera(3, "ligero", "curvo", "fina", 1, 0, 325, "no")
bicicletas[3] = new Carretera(4, "ligero", "curvo", "ancha", 1, 3, 400, "si")

const main = async () => {
    let num: number   
    do {
        num = await menu()
        switch(num) {
            case 1:
                console.log('\n')
                let id:number, cuadro:string, manillar:string, cubierta:string, platos:number, piñones:number, precio:number
                let suspension:string
                let carbono:string
                let num2: number
                do {
                    num2 = await menu2()
                    switch(num2) {
                        case 1: //Crear Bicicleta
                            id = parseInt(await leerTeclado("Introduzca identificador de la bicicleta "))
                            cuadro = await leerTeclado("Tipo de cuadro (ligero o pesado) ")
                            manillar = await leerTeclado("Tipo de manillar (recto o curvo) ")
                            cubierta = await leerTeclado("Tipo de cubierta (fina o ancha) ")
                            platos = parseInt(await leerTeclado("Número de platos "))
                            piñones = parseInt(await leerTeclado("Número de piñones "))
                            precio = parseInt(await leerTeclado("Precio "))
                            bicicleta= new Bicicleta(id, cuadro, manillar, cubierta, platos, piñones, precio)
                            bicicletas.push(bicicleta)
                            break
                        case 2: //Crear Bicicleta de montaña
                            id = parseInt(await leerTeclado("Introduzca identificador de la bicicleta "))
                            cuadro = await leerTeclado("Tipo de cuadro (ligero o pesado) ")
                            manillar = await leerTeclado("Tipo de manillar (recto o curvo) ")
                            cubierta = await leerTeclado("Tipo de cubierta (fina o ancha) ")
                            platos = parseInt(await leerTeclado("Número de platos "))
                            piñones = parseInt(await leerTeclado("Número de piñones "))
                            precio = parseInt(await leerTeclado("Precio base "))
                            suspension = await leerTeclado("Introduzca la suspensión (simple o doble) ")
                            montaña = new Montaña(id, cuadro, manillar, cubierta, platos, piñones, precio, suspension)
                            bicicletas.push(montaña)
                            break
                        case 3: //Crear bicicleta de carretera
                            id = parseInt(await leerTeclado("Introduzca identificador de la bicicleta "))
                            cuadro = await leerTeclado("Tipo de cuadro (ligero o pesado) ")
                            manillar = await leerTeclado("Tipo de manillar (recto o curvo) ")
                            cubierta = await leerTeclado("Tipo de cubierta (fina o ancha) ")
                            platos = parseInt(await leerTeclado("Número de platos "))
                            piñones = parseInt(await leerTeclado("Número de piñones "))
                            precio = parseInt(await leerTeclado("Precio base "))
                            carbono = await leerTeclado("¿La bicicleta es de carbono? ")
                            carretera = new Carretera(id, cuadro, manillar, cubierta, platos, piñones, precio, carbono)
                            bicicletas.push(carretera)
                            break
                    }
                }while(num2 != 0)
            case 2:
                console.log('\n')
                console.log(bicicletas)
                break
            case 3: 
                console.log('\n')
                let p= parseInt(await leerTeclado('Introduzca el id de la bicicleta que desea modificar '))
                let cuadro1 = await leerTeclado("Tipo de cuadro (ligero o pesado) ")
                let manillar1 = await leerTeclado("Tipo de manillar (recto o curvo) ")
                let cubierta1 = await leerTeclado("Tipo de cubierta (fina o ancha) ")
                let platos1 = parseInt(await leerTeclado("Número de platos "))
                let piñones1 = parseInt(await leerTeclado("Número de piñones "))
                let precio1 = parseInt(await leerTeclado("Precio "))             
                let nuevo = new Bicicleta(p, cuadro1, manillar1, cubierta1, platos1, piñones1, precio1)
                
                let suspension1 = await leerTeclado("Tipo de suspensión (simple o doble) ")   
                let mnuevo = new Montaña(p, cuadro1, manillar1, cubierta1, platos1, piñones1, precio1, suspension1)

                let carbono1 = await leerTeclado("¿Es de carbono? ")
                let cnuevo = new Carretera(p, cuadro1, manillar1, cubierta1, platos1, piñones1, precio1, carbono1)

                let modifica = bicicletas.findIndex(bicicletas => bicicletas.id==p)
                bicicletas[modifica] = nuevo
                bicicletas[modifica] = mnuevo
                bicicletas[modifica] = cnuevo
                break
            case 4:
                console.log('\n')
                let borrar = parseInt(await leerTeclado("Introduzca el id de la bicicleta que desea borrar ")) 
                let borra = bicicletas.findIndex(bicicletas => bicicletas.id==borrar)
                let elimina = bicicletas.splice(borra, 1)
                break
            case 5:
                console.log('\n')
                let ver = parseInt(await leerTeclado("Introduzca el id de la bicicleta que quiere ver la información "))
                let dato = bicicletas.findIndex(bicicletas => bicicletas.id==ver)
                console.log(bicicletas[dato])
                break
            case 0: 
                console.log('\n')
                console.log("Adiós")
                break
            default: 
                console.log('\n')
                console.log("Opción incorrecta")
                break
        }
    } while (num != 0)
}

main()