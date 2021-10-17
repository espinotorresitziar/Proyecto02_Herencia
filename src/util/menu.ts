import { leerTeclado } from '../util/entradaTeclado'

export let menu = async () => {
    let num: number
    console.log('\n')
    console.log('1.- Crear objeto')
    console.log('2.- Listar array')
    console.log('3.- Modificar')
    console.log('4.- Borrar')
    console.log('5.- Ver información objeto')
    console.log('0.- Salir')
    console.log('\n')
    num = parseInt( await leerTeclado('Elija una opción: ') )
    return num
}

export const menu2 = async () => {
    let num2: number
    console.log('\n')
    console.log('1.- Bicicleta')
    console.log('2.- Bicicleta de montaña')
    console.log('3.- Bicicleta de carretera')
    console.log('0.- Salir')
    num2 = parseInt(await leerTeclado('Opción: '))
    return num2
}