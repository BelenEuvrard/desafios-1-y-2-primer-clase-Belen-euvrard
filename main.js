
// primer desafio complementario

let añoNacimiento = Number(prompt('Ingrese su año de nacimiento'))
let añoActual = Number(prompt('Ingrese el año actual'))
let edadActual = (añoActual - añoNacimiento)
let mensaje =  alert('Usted tiene o esta por cumplir' + ' ' + edadActual + ' ' + 'años' ) 

   


//primer desafio entregable

let nombre = 'Ingrese su nombre'
let apellido = 'Ingrese su apellido'


if (edadActual >=18){
    alert('Bienvenido')
    prompt(nombre)
    prompt(apellido)
    alert(`Sr/sra usted fue registrado exitosamente`)


} else {
    alert('No tiene edad suficiente para ingresar')
}

