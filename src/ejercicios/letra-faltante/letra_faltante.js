/**
 * Completa la función que recibe un string del abecedario y retorna la palabra "Completa" si no falta ninguna letra o retorna la letra faltante
 * Ej.
 * str="abc"  --> "Completa"
 * str="abce" --> "d"
 * str="cdeg" --> "f"
 */

// No cambies el nombre de la funcion ni los parametros
const letraFaltante = (str) => {
  var newStr = "";
  var abecedario = "abcdefghijklmnopqrstuvwxyz";
  var miRegex = new RegExp(str);
  if (miRegex.test(abecedario)) { return "Completa" }
  else {
    var strArr = str.split("");
    var firstLetterstrArr = strArr[0];
    var lastLetterstrArr = strArr[strArr.length - 1];
    var indiceFirstletter = abecedario.indexOf(firstLetterstrArr);
    var indiceLastletter = abecedario.indexOf(lastLetterstrArr);
    var aComparar = abecedario.substring(indiceFirstletter, indiceLastletter + 1)
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
