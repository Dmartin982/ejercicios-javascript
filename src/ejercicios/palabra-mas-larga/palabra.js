/* Retorna en un arreglo la palabra mas larga y la cantidad de caracteres de la siguiente oración. 
Ejemplo: ["Javascript", 10]*/
const str = "Me gustan los retos por eso resuelvo ejercicios en Javascript";

// No cambies el nombre de la funcion ni los parametros
const palabraMasLarga = (str) => {
  // tu codigo
  var length = 0;
  var arrayWords = [];
  var longestWord = "";
  arrayWords = str.split(" ");
  for (let x of arrayWords) {
    if (x.length > length) { length = x.length; longestWord = x }
  }
  return [longestWord, length];
}
// 👇 No modifiques este codigo 🚫
module.exports = {
  palabraMasLarga,
};
