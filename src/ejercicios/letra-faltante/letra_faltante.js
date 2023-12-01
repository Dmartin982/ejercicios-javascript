/**
 * Completa la función que recibe un string del abecedario y retorna la palabra "Completa" si no falta ninguna letra o retorna la letra faltante
 * Ej.
 * str="abc"  --> "Completa"
 * str="abce" --> "d"
 * str="cdeg" --> "f"
 */

// No cambies el nombre de la funcion ni los parametros
const letraFaltante = (str) => {
  var abecedario = "abcdefghijklmnopqrstuvwxyz";
  var miRegex = new RegExp(str);
  if (miRegex.test(abecedario)) { return "Completa" }
  else {
    var aComparar = abecedario.substring(abecedario.indexOf(str[0]), abecedario.indexOf(str[str.length - 1]) + 1);
    for (var elemento of aComparar) {
      if (!str.includes(elemento)) {
        return elemento;
      };
    }
  };
};


// 👇 No modifiques este codigo 🚫
module.exports = {
  letraFaltante,
};
