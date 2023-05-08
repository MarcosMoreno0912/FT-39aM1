"use strict";

function BinarioADecimal(num) {

  let suma = 0;

  for(var i = 0; i < num.length; i++){
   suma += +num[i] * 2** (num.length - 1 - i);
  }
  return suma;
}

function DecimalABinario(num) {
 
let binario = ''
let cociente = num;
 
 while(cociente > 0){
   let resto = cociente % 2;
   binario = resto + binario ;
   cociente = Math.floor(cociente / 2);
  }
    if( num === 0){
     binario = '0'
    }
  return binario; 

}

module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
