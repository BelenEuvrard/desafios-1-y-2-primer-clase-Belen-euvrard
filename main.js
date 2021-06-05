
// primer desafio complementario

let añoNacimiento = Number(prompt('Ingrese su año de nacimiento'))
let añoActual = Number(prompt('Ingrese el año actual'))
let edadActual = (añoActual - añoNacimiento)
let mensaje =  alert('Usted tiene o esta por cumplir' + ' ' + edadActual + ' ' + 'años' ) 

   


//primer desafio entregable



if (edadActual >=18){
    alert('Bienvenido')
    let nombre = prompt('Ingrese su nombre')
    let apellido = prompt('Ingrese su apellido')
    alert(`Sr/sra ${nombre +' '+ apellido} usted fue registrado exitosamente`)


} else {
    alert('No tiene edad suficiente para ingresar')
}

