// Aula 2 do dia 07/04/2026

//console.log("Hello World!")

//const {somar} = require ('./processador');

//const resultado = somar (6,8)

//const{formatarTexto} = require ('./processador')

//const{enviroment} = require ('./processador')

//console.log(resultado)

//console.log (formatarTexto("Faz o L"));
//console.log(enviroment.production);


// Aula 3 do dia 08/04/2026
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Quero ir pra casa')
})



app.get('/soma', (req, res) => {

   const num1 =10
   const num2 =20
    
  res.send(`a soma num1 mais num2 e ${num1 + num2}`);
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


