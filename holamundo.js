'use strict' //modo estricto para programar con buenas practicas

//imprime en pantalla
console.log('Hola mundo desde Node.js')
//hacemos una operacion basica
console.log(2*5)
//al utilizar una instruccion de js frontend marca error en el node.js
//console.log(window)
//imprime en consola todo lo relacionado con el modulo GLOBAL
console.log(globalThis)
//realizamos una funcion para imprimir cada segundo 'Hola Mundo'
setInterval(function(){
    console.log('Hola Mundo')
},1000)