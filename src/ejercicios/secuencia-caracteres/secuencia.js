/*Has una funcion que lea un string lleno de paréntesis, brackets, corchetes y determinar si está balanceado o no. Decimos que está balanceado cuando para cada paréntesis, bracket, corchete, existe su par que lo cierra.

ejemplo: ()[] esto devolveria  true,
pero si ([] -> falta cerrar un parentisis esto devolveria false.
([{}]) -> esto devolveria true.
*/

// No cambies el nombre de la funcion ni los parametros
function secuencia(cadena) {

  var parentesis = 0;
  var brackets = 0;
  var corchetes = 0;


  for (let x of cadena) {

    if (x === "(") { parentesis++ };
    if (x === ")" && parentesis !== 0) { parentesis-- };
    if (x === "{") { corchetes++ };
    if (x === "}" && corchetes !== 0) { corchetes-- };
    if (x === "[") { brackets++ };
    if (x === "]" && brackets !== 0) { brackets-- };
  }

  if (parentesis === 0 && corchetes === 0 && brackets === 0) { return true }
  else { return false };


}

// 👇 No modifiques este codigo 🚫
module.exports = {
  secuencia,
};
