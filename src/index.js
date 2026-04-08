console.log("Hello World!")

const {somar} = require ('./processador');

const resultado = somar (6,8)

const{formatarTexto} = require ('./processador')

const{enviroment} = require ('./processador')

//console.log(resultado)

console.log (formatarTexto("Faz o L"));
console.log(enviroment.production);